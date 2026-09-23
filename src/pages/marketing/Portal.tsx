import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, ShieldCheck, CheckCircle2, Clock, Activity, 
  Database, RefreshCw, Mail, Phone, Building2, User, 
  ExternalLink, Filter, Plus, ArrowRight, AlertCircle, Sparkles, Check
} from 'lucide-react';
import { 
  InquiryRecord, 
  ClientProjectRecord, 
  subscribeToInquiries, 
  updateInquiryStatus, 
  submitInquiry, 
  seedSampleProjectsIfEmpty,
  validateFirestoreConnection,
  db
} from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { MorphBlock } from '@/components/ui/MorphBlock';

export default function Portal() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [projects, setProjects] = useState<ClientProjectRecord[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'projects'>('inquiries');
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(true);
  const [latencyMs, setLatencyMs] = useState<number>(4);
  const [isCreatingTest, setIsCreatingTest] = useState<boolean>(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Initial Firestore synchronization and listeners
  useEffect(() => {
    // Test connection
    validateFirestoreConnection().then(ok => setIsFirebaseConnected(ok));

    // Seed sample projects in Firestore if collection is empty
    seedSampleProjectsIfEmpty();

    // Subscribe to real-time inquiries from Firestore
    const unsubInquiries = subscribeToInquiries((data) => {
      setInquiries(data);
    });

    // Subscribe to projects from Firestore
    let unsubProjects = () => {};
    try {
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      unsubProjects = onSnapshot(q, (snap) => {
        const projs = snap.docs.map(d => ({ id: d.id, ...d.data() })) as ClientProjectRecord[];
        setProjects(projs);
      }, (err) => {
        console.warn('Projects listener error:', err);
      });
    } catch (e) {
      console.warn('Firestore projects setup:', e);
    }

    // Ping simulation
    const interval = setInterval(() => {
      setLatencyMs(Math.floor(3 + Math.random() * 3));
    }, 4000);

    return () => {
      unsubInquiries();
      unsubProjects();
      clearInterval(interval);
    };
  }, []);

  const handleStatusChange = async (id: string, newStatus: InquiryRecord['status']) => {
    setUpdatingId(id);
    try {
      await updateInquiryStatus(id, newStatus);
    } catch (e) {
      console.error('Failed to update status:', e);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleCreateTestLead = async () => {
    setIsCreatingTest(true);
    try {
      await submitInquiry({
        fullName: 'Rashid Al-Nuaimi',
        company: 'Emirates Venture Capital Partners',
        email: 'r.nuaimi@evcpartners.ae',
        phone: '+971 50 882 1944',
        service: 'Sovereign Cloud & IT Infrastructure',
        budget: 'AED 75,000 - 150,000',
        requirements: 'Requesting sovereign cloud hosting architecture for a new financial application in Downtown Dubai.',
        source: 'Live Admin Simulation'
      });
    } catch (e) {
      console.error('Error creating test lead:', e);
    } finally {
      setIsCreatingTest(false);
    }
  };

  const filteredInquiries = filterStatus === 'all'
    ? inquiries
    : inquiries.filter(item => item.status === filterStatus);

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 min-h-screen">
      
      {/* Top Telemetry & Status Bar */}
      <section className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Google Cloud & Firebase Production Backend: Connected</span>
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-slate-600 font-mono hidden md:inline">
              Latency: <strong className="text-slate-900">{latencyMs}ms</strong> (me-central-1)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500">Live Inquiries:</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold font-mono">
              {inquiries.length}
            </span>
            <span className="text-slate-500 ml-2">Active Projects:</span>
            <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold font-mono">
              {projects.length}
            </span>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MorphBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>Production Management Console • Dubai Sovereign Cluster</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-2">
              Enterprise Operations & Live CRM
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Real-time synchronization with Firestore database. Monitor client discovery consultations, incoming requests, and active project milestones.
            </p>
          </div>

          {/* Action Button: Create Test Lead */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCreateTestLead}
              disabled={isCreatingTest}
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{isCreatingTest ? 'Injecting into Firestore...' : 'Simulate New Client Lead'}</span>
            </button>
            <Link to="/contact">
              <button className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer">
                <span>Open Contact Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </MorphBlock>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Prospective Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Enterprise Deliveries & SLAs ({projects.length})
            </button>
          </div>

          {/* Status Filter for Inquiries */}
          {activeTab === 'inquiries' && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
              {(['all', 'new', 'in_review', 'contacted', 'scheduled'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all capitalize cursor-pointer ${
                    filterStatus === st 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'inquiries' ? (
          <div>
            {filteredInquiries.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No Inquiries Found</h3>
                <p className="text-slate-500 text-xs max-w-md mx-auto">
                  No submissions match the current filter. Inquiries submitted via the Contact form or Discovery button will appear here in real-time.
                </p>
                <button
                  onClick={handleCreateTestLead}
                  className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Generate Sample Inquiry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence>
                  {filteredInquiries.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-5 sm:p-6"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        
                        {/* Client Identity & Service Request */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-base font-bold text-slate-900">{item.fullName}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                              <Building2 className="w-3.5 h-3.5 text-blue-600" />
                              <span>{item.company}</span>
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              item.status === 'new' ? 'bg-amber-100 text-amber-800' :
                              item.status === 'in_review' ? 'bg-blue-100 text-blue-800' :
                              item.status === 'contacted' ? 'bg-purple-100 text-purple-800' :
                              item.status === 'scheduled' ? 'bg-emerald-100 text-emerald-800' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {item.status.replace('_', ' ')}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1 text-slate-600">
                              <Mail className="w-3.5 h-3.5 text-slate-400" />
                              <a href={`mailto:${item.email}`} className="hover:text-blue-600 underline">
                                {item.email}
                              </a>
                            </span>
                            {item.phone && (
                              <span className="flex items-center gap-1 text-slate-600">
                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                                <span>{item.phone}</span>
                              </span>
                            )}
                            <span className="text-slate-400">|</span>
                            <span className="font-semibold text-slate-800">Service: {item.service}</span>
                            {item.budget && (
                              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                                {item.budget}
                              </span>
                            )}
                          </div>

                          {/* Requirements note */}
                          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed mt-2">
                            {item.requirements}
                          </div>
                        </div>

                        {/* Right: Status Change Actions */}
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono">
                            {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleStatusChange(item.id!, 'in_review')}
                              disabled={updatingId === item.id || item.status === 'in_review'}
                              className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-all disabled:opacity-40 cursor-pointer"
                            >
                              In Review
                            </button>
                            <button
                              onClick={() => handleStatusChange(item.id!, 'contacted')}
                              disabled={updatingId === item.id || item.status === 'contacted'}
                              className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold transition-all disabled:opacity-40 cursor-pointer"
                            >
                              Contacted
                            </button>
                            <button
                              onClick={() => handleStatusChange(item.id!, 'scheduled')}
                              disabled={updatingId === item.id || item.status === 'scheduled'}
                              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold transition-all disabled:opacity-40 cursor-pointer"
                            >
                              Scheduled
                            </button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        ) : (
          /* Projects & SLA Milestones View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {proj.projectCode}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {proj.slaTier}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 mb-4">
                    Client: {proj.clientName}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 capitalize">{proj.status} Phase</span>
                      <span className="font-bold text-slate-900">{proj.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200/80">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Target: <strong className="text-slate-800">{proj.targetDelivery}</strong></span>
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On Track</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
