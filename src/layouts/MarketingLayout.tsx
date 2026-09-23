import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Globe, Shield, MapPin, ArrowRight, ChevronDown, Lock, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { CurrencyProvider, useCurrency } from '@/context/CurrencyContext';
import PageLoader from '@/components/ui/PageLoader';
import { isPortalApproved } from '@/lib/portalAuth';

function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [portalUnlocked, setPortalUnlocked] = useState(isPortalApproved());
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleAuth = () => setPortalUnlocked(isPortalApproved());
    window.addEventListener('portal-auth-changed', handleAuth);
    return () => window.removeEventListener('portal-auth-changed', handleAuth);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Services', 
      path: '/services',
      subLinks: [
        { label: 'IT Services & Cloud', path: '/solutions/it-services' },
        { label: 'Software Development', path: '/solutions/software-development' },
        { label: 'Business Adverts & 3D', path: '/solutions/creative-services' },
        { label: 'AI Tools & Automation', path: '/solutions/ai-automation' },
        { label: 'Advisory & Fractional CTO', path: '/solutions/consulting' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Glassmorphic Elevated Header (MUI SaaS + Once UI Style) */}
      <header
        className={cn(
          "sticky top-0 w-full z-40 transition-all duration-300",
          scrolled 
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2.5" 
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <Link to="/" className="flex items-center group">
            <div 
              id="header-logo-container"
              className="flex items-center transition-opacity duration-300 group-hover:opacity-80"
            >
              <img 
                id="header-logo-img"
                src="/logo.png" 
                alt="Nexus IT Services Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </Link>
          
          {/* Once UI Segmented Navigation Control */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1.5 rounded-full bg-slate-100/50 border border-slate-200/50 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || (item.subLinks && item.subLinks.some(sub => location.pathname === sub.path));
              
              if (item.subLinks) {
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-1 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 relative",
                        isActive
                          ? "bg-white text-[#0046AF] shadow-sm border border-slate-200/80"
                          : "text-slate-600 hover:text-[#0046AF] hover:bg-white/80"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#0046AF] transition-colors" />
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white rounded-xl shadow-lg border border-slate-200/60 p-2 flex flex-col min-w-[220px]">
                        {item.subLinks.map(subItem => (
                          <Link 
                            key={subItem.path} 
                            to={subItem.path}
                            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-[#0046AF] hover:bg-blue-50 rounded-lg whitespace-nowrap transition-colors flex items-center justify-between group/sub"
                          >
                            {subItem.label}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#0046AF]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={item.path === '/' ? 'nav-link-home' : item.path === '/about' ? 'nav-link-about' : undefined}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 relative cursor-pointer select-none",
                    isActive
                      ? "bg-white text-[#0046AF] shadow-sm border border-slate-200/80"
                      : "text-slate-600 hover:text-[#0046AF] hover:bg-white/80 active:scale-95"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MUI SaaS Elevated Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to={portalUnlocked ? "/app" : "/portal"}>
              <button className="bg-gradient-to-r from-[#0046AF] to-blue-600 hover:from-[#00388C] hover:to-[#0046AF] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm hover:shadow-md hover:shadow-[#0046AF]/25 transition-all flex items-center gap-2 group cursor-pointer">
                {portalUnlocked ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-blue-200" />
                )}
                <span>{portalUnlocked ? "Client Portal" : "Client Portal (Locked)"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Mobile Right Controls: Portal Quick Button + Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to={portalUnlocked ? "/app" : "/portal"}>
              <button 
                className="px-2.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 hover:bg-blue-100 text-[#0046AF] border border-blue-200/80 flex items-center gap-1.5 transition-colors cursor-pointer"
                title={portalUnlocked ? "Client Portal (Active)" : "Client Portal (Locked)"}
              >
                {portalUnlocked ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-[#0046AF]" />
                )}
                <span className="text-[11px] font-bold">Portal</span>
              </button>
            </Link>

            <button 
              className="text-slate-700 hover:text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-over Mobile Navigation Drawer (Doesn't fill whole screen, with dedicated close button) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop: partial screen blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-over Drawer (320-340px width on right side) */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[84vw] max-w-[340px] bg-white shadow-2xl border-l border-slate-200/90 flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Header with Title and Close Button */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100 bg-white shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                    <img 
                      src="/logo.png" 
                      alt="Nexus IT Services Logo" 
                      className="w-7 h-7 object-contain" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-tight">Nexus IT Services</span>
                  </div>
                </div>

                {/* Explicit Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Navigation Items */}
              <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-1">
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>Home</span>
                  {location.pathname === '/' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/about' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>About Nexus</span>
                  {location.pathname === '/about' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* Services Collapsible Accordion */}
                <div className="rounded-xl overflow-hidden bg-slate-50/80 border border-slate-200/70 my-1">
                  <div className="flex items-center justify-between px-3.5 py-2">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xs font-bold transition-colors flex-1",
                        location.pathname === '/services' || location.pathname.startsWith('/solutions/')
                          ? "text-[#0046AF]"
                          : "text-slate-800 hover:text-[#0046AF]"
                      )}
                    >
                      Services Hub
                    </Link>
                    <button
                      type="button"
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="p-1 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
                      aria-label="Toggle services list"
                    >
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesExpanded ? "rotate-180" : "rotate-0")} />
                    </button>
                  </div>

                  {servicesExpanded && (
                    <div className="px-2.5 pb-2.5 pt-1 space-y-1 border-t border-slate-200/50">
                      <Link
                        to="/solutions/it-services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Cloud & Sovereign IT</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/solutions/software-development"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Software Development</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/solutions/creative-services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Business Adverts & 3D</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/solutions/ai-automation"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>AI Tools & Automation</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/solutions/consulting"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Advisory & Fractional CTO</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/contact' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>Contact</span>
                  {location.pathname === '/contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* Gated Client Portal Card */}
                <div className="pt-2">
                  <Link
                    to={portalUnlocked ? "/app" : "/portal"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block p-3 rounded-2xl border transition-all shadow-xs",
                      portalUnlocked 
                        ? "bg-emerald-50/70 border-emerald-200 hover:bg-emerald-50" 
                        : "bg-blue-50/70 border-blue-200/80 hover:bg-blue-50"
                    )}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        {portalUnlocked ? (
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Lock className="w-4 h-4 text-[#0046AF]" />
                        )}
                        <span className="text-xs font-bold text-slate-900">Client Portal</span>
                      </div>
                      <span className={cn(
                        "text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full",
                        portalUnlocked 
                          ? "bg-emerald-200 text-emerald-800" 
                          : "bg-amber-100 text-amber-800"
                      )}>
                        {portalUnlocked ? "Active" : "Locked"}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {portalUnlocked 
                        ? "Clearance active. Access enterprise portal & tickets." 
                        : "Direct access is locked. Fill signup form for admin approval."}
                    </p>
                    <div className="mt-1.5 text-[11px] font-bold text-[#0046AF] flex items-center gap-1">
                      <span>{portalUnlocked ? "Open Portal OS" : "Request Account Access"}</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Bottom Actions: Consultation, WhatsApp, Location */}
              <div className="p-3.5 border-t border-slate-100 bg-slate-50/80 space-y-2 shrink-0">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#0046AF] to-blue-600 hover:from-[#00388C] hover:to-[#0046AF] text-white font-bold text-xs shadow-md shadow-[#0046AF]/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]">
                    <span>Book Dubai Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>

                <a
                  href="https://wa.me/971526367221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: +971 52 636 7221</span>
                </a>

                <div className="pt-0.5 text-center">
                  <span className="text-[10px] text-slate-400 font-medium">
                    🇦🇪 Boulevard Plaza, Downtown Dubai
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function MarketingLayout() {
  const [isAppLoading, setIsAppLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Allow replaying the page loader at any time via a custom window event
  useEffect(() => {
    const handleReplay = () => setIsAppLoading(true);
    window.addEventListener('nexus-replay-loader', handleReplay);
    return () => window.removeEventListener('nexus-replay-loader', handleReplay);
  }, []);

  return (
    <CurrencyProvider>
      <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
        {/* Multimillion-Dollar Refined PageLoader & Dynamic Route Beam */}
        <PageLoader 
          isLoading={isAppLoading} 
          onComplete={() => setIsAppLoading(false)}
        />

        <HeaderNav />

        <main className="flex-1 flex flex-col relative z-10 w-full overflow-x-hidden">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="flex-1 flex flex-col w-full overflow-x-hidden"
          >
            <Outlet />
          </motion.div>
        </main>

        {/* Floating WhatsApp and Quick Callback Widget */}
        <WhatsAppWidget />

        {/* Corporate Dubai Footer */}
        <footer className="border-t border-slate-200 bg-white pt-12 sm:pt-16 pb-10 sm:pb-12 text-slate-600 relative overflow-hidden w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
              
              {/* Col 1: Brand & UAE HQ */}
              <div className="lg:col-span-2 space-y-4">
                <Link to="/" className="flex items-center gap-3">
                  <img 
                    id="footer-logo-img"
                    src="/logo.png" 
                    alt="Nexus IT Services Logo" 
                    className="h-10 w-10 object-contain" 
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 tracking-tight">Nexus IT Services</span>
                    <span className="text-[10px] font-mono font-bold bg-blue-50 text-[#0046AF] border border-blue-200 px-1.5 py-0.5 rounded-full">FZ-LLC</span>
                  </div>
                </Link>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                  Technology. Simplified. Delivered. One unified partner for enterprise IT infrastructure, custom software, AI automation, creative production, and strategic business consulting in Dubai and the GCC.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#0046AF] shrink-0 mt-0.5" />
                    <span>Level 14, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Blvd, Downtown Dubai / Dubai Internet City, UAE</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#0046AF] shrink-0" />
                    <span>+971 4 800 NEXUS / +971 52 636 7221</span>
                  </p>
                  <p className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                    <span>DED Commercial License: 1048291-DXB • TRN: 100482910000003</span>
                  </p>
                </div>
              </div>

              {/* Col 2: Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Core Capabilities</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">IT & Cloud Infrastructure</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Custom Software & CRM</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Mobile App Development</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">AI & Process Automation</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Creative & Video Production</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Digital Advisory & Strategy</Link></li>
                </ul>
              </div>

              {/* Col 3: UAE Industries */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">UAE Industries</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Real Estate & PropTech</a></li>
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Fintech & Banking</a></li>
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Luxury Retail & E-Commerce</a></li>
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Logistics & Supply Chain</a></li>
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Healthcare & Clinics</a></li>
                  <li><a href="/#estimator" className="hover:text-blue-600 transition-colors">Government & Smart City</a></li>
                </ul>
              </div>

              {/* Col 4: Enterprise Hub & Access */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Enterprise Hub</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors font-medium">About Nexus Tech</Link></li>
                  <li><Link to="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies & Impact</Link></li>
                  <li><Link to="/estimator" className="hover:text-blue-600 transition-colors">Project Cost Estimator</Link></li>
                  <li><Link to="/faq" className="hover:text-blue-600 transition-colors">Knowledge Base & FAQ</Link></li>
                  <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers in Dubai</Link></li>
                  <li>
                    <Link to="/portal" className="text-[#0046AF] font-semibold hover:underline flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Client Portal Access & Signup →</span>
                    </Link>
                  </li>
                  <li><a href="https://wa.me/971526367221" target="_blank" rel="noopener noreferrer" className="text-[#0046AF] font-semibold hover:underline">WhatsApp Direct Support</a></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0046AF]"></span>
                <span>© 2026 Nexus IT Services FZ-LLC (Dubai, UAE). All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                <span>TDRA & ISO 27001 Compliant</span>
                <Link to="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </CurrencyProvider>
  );
}
