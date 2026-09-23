import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { 
  getFirestore, 
  type Firestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp,
  getDocFromServer,
  limit
} from 'firebase/firestore';
import { getAuth, type Auth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json' with { type: 'json' };

// Fallback configuration merged with provisioned configuration
const config = {
  projectId: "project-c9e8e984-c6bf-462e-bb7",
  appId: "1:744695194341:web:1a4d7d17d5879842d8aa0c",
  apiKey: "AIzaSyBbCI9cRrxfIj0ifip3YaY4bq_SiBYhib4",
  authDomain: "project-c9e8e984-c6bf-462e-bb7.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-nexusitservices-33e2e0f0-0c61-4ca8-8228-bb654b1b16d8",
  storageBucket: "project-c9e8e984-c6bf-462e-bb7.firebasestorage.app",
  messagingSenderId: "744695194341",
  ...(firebaseConfig as Record<string, string>)
};

// Initialize Firebase App instance
export const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(config);

// Initialize Firestore targeting the provisioned database
export const db: Firestore = config.firestoreDatabaseId 
  ? getFirestore(app, config.firestoreDatabaseId)
  : getFirestore(app);

// Initialize Firebase Auth
export const auth: Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export interface InquiryRecord {
  id?: string;
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  requirements: string;
  status: 'new' | 'in_review' | 'contacted' | 'scheduled' | 'archived';
  createdAt: string;
  source?: string;
}

export interface ClientProjectRecord {
  id?: string;
  projectCode: string;
  clientName: string;
  clientEmail: string;
  title: string;
  serviceCategory: string;
  status: 'discovery' | 'architecture' | 'implementation' | 'launch' | 'support';
  progress: number;
  slaTier: string;
  targetDelivery: string;
  createdAt: string;
}

/**
 * Submit an inquiry to Firestore
 */
export async function submitInquiry(data: Omit<InquiryRecord, 'id' | 'status' | 'createdAt'> & Partial<Pick<InquiryRecord, 'status' | 'createdAt'>>): Promise<string> {
  const payload: Omit<InquiryRecord, 'id'> = {
    fullName: data.fullName,
    company: data.company || 'Enterprise Client',
    email: data.email,
    phone: data.phone || '',
    service: data.service,
    budget: data.budget || 'Custom Scope',
    requirements: data.requirements,
    status: data.status || 'new',
    createdAt: data.createdAt || new Date().toISOString(),
    source: data.source || 'Website Contact Form'
  };

  try {
    const docRef = await addDoc(collection(db, 'inquiries'), payload);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting inquiry to Firestore:', error);
    // Persist to local backup storage to prevent any loss of lead data
    try {
      const backup = JSON.parse(localStorage.getItem('nexus_backup_inquiries') || '[]');
      backup.push({ ...payload, id: `local_${Date.now()}` });
      localStorage.setItem('nexus_backup_inquiries', JSON.stringify(backup));
    } catch {
      // Ignore local storage error
    }
    throw error;
  }
}

/**
 * Listen to real-time inquiries
 */
export function subscribeToInquiries(
  callback: (inquiries: InquiryRecord[]) => void,
  onError?: (err: Error) => void
) {
  try {
    const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
    return onSnapshot(
      q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as InquiryRecord[];
        callback(items);
      },
      (error) => {
        console.warn('Firestore subscription fallback:', error);
        if (onError) onError(error);
        // Fallback to local storage
        try {
          const backup = JSON.parse(localStorage.getItem('nexus_backup_inquiries') || '[]');
          callback(backup);
        } catch {
          callback([]);
        }
      }
    );
  } catch (err) {
    if (onError && err instanceof Error) onError(err);
    return () => {};
  }
}

/**
 * Update an inquiry's status
 */
export async function updateInquiryStatus(id: string, status: InquiryRecord['status']): Promise<void> {
  try {
    const docRef = doc(db, 'inquiries', id);
    await updateDoc(docRef, { status });
  } catch (error) {
    console.error('Error updating inquiry status in Firestore:', error);
    // Update local storage if fallback
    try {
      const backup = JSON.parse(localStorage.getItem('nexus_backup_inquiries') || '[]');
      const updated = backup.map((item: InquiryRecord) => item.id === id ? { ...item, status } : item);
      localStorage.setItem('nexus_backup_inquiries', JSON.stringify(updated));
    } catch {
      // Ignore
    }
    throw error;
  }
}

/**
 * Seed initial sample projects for tracker / client portal
 */
export async function seedSampleProjectsIfEmpty(): Promise<void> {
  try {
    const snap = await getDocs(collection(db, 'projects'));
    if (!snap.empty) return;

    const sampleProjects: Omit<ClientProjectRecord, 'id'>[] = [
      {
        projectCode: 'NEX-DIFC-881',
        clientName: 'Al-Mansoor Asset Management',
        clientEmail: 'contact@almansoor.ae',
        title: 'Sovereign Cloud Migration to AWS me-central-1',
        serviceCategory: 'IT Services',
        status: 'launch',
        progress: 95,
        slaTier: 'Platinum (15-min SLA)',
        targetDelivery: 'Oct 2026',
        createdAt: new Date(Date.now() - 14 * 86400000).toISOString()
      },
      {
        projectCode: 'NEX-DSO-402',
        clientName: 'Gulf Logistics Cold-Chain',
        clientEmail: 'tech@gulflogistics.ae',
        title: 'Custom ERP & WhatsApp Customs Clearance AI Bot',
        serviceCategory: 'AI & Software',
        status: 'implementation',
        progress: 68,
        slaTier: 'Enterprise SLA',
        targetDelivery: 'Nov 2026',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
      },
      {
        projectCode: 'NEX-MARINA-119',
        clientName: 'Azure Yachts Charter Dubai',
        clientEmail: 'charters@azureyachts.com',
        title: '4K Commercial Adverts & 3D Interactive Yacht Configurator',
        serviceCategory: 'Creative Media',
        status: 'architecture',
        progress: 40,
        slaTier: 'Priority Studio SLA',
        targetDelivery: 'Dec 2026',
        createdAt: new Date(Date.now() - 3 * 86400000).toISOString()
      }
    ];

    for (const p of sampleProjects) {
      await addDoc(collection(db, 'projects'), p);
    }
  } catch (e) {
    console.warn('Seeding sample projects fallback:', e);
  }
}

/**
 * Validate Firestore connection
 */
export async function validateFirestoreConnection(): Promise<boolean> {
  try {
    await getDocs(query(collection(db, 'projects'), limit(1)));
    return true;
  } catch (error) {
    console.warn('Firestore connectivity check note:', error);
    return false;
  }
}
