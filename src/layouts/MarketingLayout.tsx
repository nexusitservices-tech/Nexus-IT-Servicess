import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Globe, Shield, MapPin, ArrowRight, ChevronDown, ChevronRight, Lock, ShieldCheck, Mail, Clock, ExternalLink, Building2 } from 'lucide-react';
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
    { 
      label: 'Services', 
      path: '/services',
      subLinks: [
        { label: 'IT Services', path: '/services/it-services' },
        { label: 'Software & Web', path: '/services/software-development' },
        { label: 'AI & Automation', path: '/services/ai-automation' },
        { label: 'Multimedia & Creative', path: '/services/creative-services' },
        { label: 'Business Technology Consulting', path: '/services/consulting' },
      ]
    },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'How We Work', path: '/how-we-work' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Main Glassmorphic Elevated Header (MUI SaaS + Once UI Style) */}
      <header
        className={cn(
          "sticky top-0 w-full z-40 transition-all duration-300",
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs py-2" 
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 relative">
          <Link to="/" className="flex items-center group shrink-0">
            <div 
              id="header-logo-container"
              className="flex items-center transition-opacity duration-300 group-hover:opacity-80"
            >
              <img 
                id="header-logo-img"
                src="/logo.png" 
                alt="Nexus IT Services Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
            </div>
          </Link>
          
          {/* Once UI Segmented Navigation Control */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-slate-100/70 border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || (item.subLinks && item.subLinks.some(sub => location.pathname === sub.path || location.pathname.startsWith(sub.path)));
              
              if (item.subLinks) {
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 relative whitespace-nowrap",
                        isActive
                          ? "bg-white text-[#0046AF] shadow-xs border border-slate-200/80"
                          : "text-slate-600 hover:text-[#0046AF] hover:bg-white/80"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#0046AF] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 flex flex-col min-w-[250px]">
                        <div className="px-3 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                          Services Sub Menu
                        </div>
                        {item.subLinks.map(subItem => (
                          <Link 
                            key={subItem.path} 
                            to={subItem.path}
                            className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0046AF] hover:bg-blue-50/70 rounded-xl whitespace-nowrap transition-colors flex items-center justify-between group/sub"
                          >
                            <span>{subItem.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#0046AF]" />
                          </Link>
                        ))}
                        <div className="mt-1 pt-1.5 border-t border-slate-100 px-1">
                          <Link 
                            to="/services" 
                            className="flex items-center justify-between px-3 py-1.5 text-[11px] font-bold text-[#0046AF] hover:bg-blue-50/50 rounded-lg transition-colors"
                          >
                            <span>All Services Hub</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 relative cursor-pointer select-none whitespace-nowrap",
                    isActive
                      ? "bg-white text-[#0046AF] shadow-xs border border-slate-200/80"
                      : "text-slate-600 hover:text-[#0046AF] hover:bg-white/80 active:scale-95"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MUI SaaS Elevated Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Link to={portalUnlocked ? "/app" : "/portal"}>
              <button className="bg-gradient-to-r from-[#0046AF] to-blue-600 hover:from-[#00388C] hover:to-[#0046AF] text-white px-4 xl:px-5 py-2 rounded-full text-xs font-bold shadow-xs hover:shadow-md hover:shadow-[#0046AF]/25 transition-all flex items-center gap-1.5 group cursor-pointer whitespace-nowrap">
                {portalUnlocked ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-blue-200" />
                )}
                <span>{portalUnlocked ? "Client Portal" : "Client Portal"}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                {/* 1. Home */}
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

                {/* 2. Services Collapsible Accordion */}
                <div className="rounded-xl overflow-hidden bg-slate-50/80 border border-slate-200/70 my-1">
                  <div className="flex items-center justify-between px-3.5 py-2">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xs font-bold transition-colors flex-1",
                        location.pathname === '/services' || location.pathname.startsWith('/services/')
                          ? "text-[#0046AF]"
                          : "text-slate-800 hover:text-[#0046AF]"
                      )}
                    >
                      Services
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
                        to="/services/it-services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>IT Services</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/services/software-development"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Software & Web</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/services/ai-automation"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>AI & Automation</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/services/creative-services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Multimedia & Creative</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                      <Link
                        to="/services/consulting"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-[#0046AF] hover:bg-white transition-colors"
                      >
                        <span>Business Technology Consulting</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* 3. Solutions */}
                <Link
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/solutions' || location.pathname.startsWith('/solutions/')
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>Solutions</span>
                  {location.pathname === '/solutions' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* 4. Industries */}
                <Link
                  to="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/industries' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>Industries</span>
                  {location.pathname === '/industries' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* 5. How We Work */}
                <Link
                  to="/how-we-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/how-we-work' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>How We Work</span>
                  {location.pathname === '/how-we-work' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* 6. About */}
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
                  <span>About</span>
                  {location.pathname === '/about' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* 7. Insights */}
                <Link
                  to="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors",
                    location.pathname === '/insights' 
                      ? "bg-blue-50 text-[#0046AF]" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>Insights</span>
                  {location.pathname === '/insights' && <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]" />}
                </Link>

                {/* 8. Contact */}
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
                    🇦🇪 Radiance ONE Business Center, Rigga Al Buteen, Dubai
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
  const [isAppLoading, setIsAppLoading] = useState(true);
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
        <footer className="border-t border-slate-200 bg-white text-slate-600 relative overflow-hidden w-full">
          {/* Top Quick-Connect Ribbon */}
          <div className="border-b border-slate-100 bg-slate-50/80 py-5 sm:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-[#0046AF] shrink-0">
                    <Building2 className="w-5 h-5 text-[#0046AF]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900">Nexus IT Services Headquarters</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        Rigga Al Buteen, Dubai
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Radiance ONE Business Center 9th floor, Dubai Creek Car parking, Rigga Al Buteen, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs w-full lg:w-auto">
                  <a
                    href="tel:+971526367221"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-blue-400 hover:text-[#0046AF] transition-colors shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0046AF]" />
                    <span>+971 52 6367221</span>
                  </a>

                  <a
                    href="mailto:info@nexus.ae.org"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold hover:border-blue-400 hover:text-[#0046AF] transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0046AF]" />
                    <span>info@nexus.ae.org</span>
                  </a>

                  <a
                    href="https://wa.me/971526367221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
            {/* Main Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
              
              {/* Col 1 & 2: Brand, Address & Verification (2 Cols) */}
              <div className="lg:col-span-2 space-y-4">
                <Link to="/" className="flex items-center gap-3">
                  <img 
                    id="footer-logo-img"
                    src="/logo.png" 
                    alt="Nexus IT Services Logo" 
                    className="h-10 w-10 object-contain" 
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Nexus IT Services</span>
                    <span className="text-[10px] font-mono font-bold bg-blue-50 text-[#0046AF] border border-blue-200 px-1.5 py-0.5 rounded-full">FZ-LLC</span>
                  </div>
                </Link>
                
                <p className="text-sm text-slate-500 leading-relaxed">
                  Technology. Simplified. Delivered. One unified partner for enterprise IT infrastructure, custom software engineering, AI workflow automation, 3D creative production, and strategic business consulting in Dubai and the GCC.
                </p>

                {/* Verified Physical Address Block */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0046AF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Registered Office Location:</strong>
                      <span className="text-slate-600 leading-relaxed">
                        Radiance ONE Business Center 9th floor, Dubai Creek Car parking, Rigga Al Buteen, Dubai, UAE
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1 border-t border-slate-200/60">
                    <Phone className="w-4 h-4 text-[#0046AF] shrink-0" />
                    <a href="tel:+971526367221" className="hover:text-[#0046AF] font-semibold text-slate-800 transition-colors">
                      +971 52 6367221
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0046AF] shrink-0" />
                    <a href="mailto:info@nexus.ae.org" className="hover:text-[#0046AF] font-semibold text-slate-800 transition-colors">
                      info@nexus.ae.org
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#0046AF] shrink-0" />
                    <span className="text-slate-500 text-[11px]">Mon – Fri: 9:00 AM – 6:00 PM GST • 24/7 Rapid Incident Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Col 3: Enterprise Solutions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]"></span>
                  <span>Solutions</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li><Link to="/solutions/it-infrastructure" className="hover:text-blue-600 transition-colors">IT &amp; Cloud Infrastructure</Link></li>
                  <li><Link to="/solutions/software-development" className="hover:text-blue-600 transition-colors">Custom Software &amp; ERP</Link></li>
                  <li><Link to="/solutions/ai-automation" className="hover:text-blue-600 transition-colors">AI &amp; Workflow Automation</Link></li>
                  <li><Link to="/solutions/creative-services" className="hover:text-blue-600 transition-colors font-medium text-slate-800">Creative Media &amp; 3D Adverts</Link></li>
                  <li><Link to="/solutions/advisory" className="hover:text-blue-600 transition-colors">Digital Advisory &amp; Strategy</Link></li>
                  <li className="pt-1">
                    <Link to="/solutions" className="text-[#0046AF] font-bold hover:underline inline-flex items-center gap-1">
                      <span>View All Solutions</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Core Services */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]"></span>
                  <span>Core Services</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Managed IT &amp; 24/7 Helpdesk</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Web &amp; Mobile Engineering</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">Fortinet Zero-Trust Security</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">AWS &amp; Azure Cloud Migration</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">CRM &amp; API Integration</Link></li>
                  <li><Link to="/services" className="hover:text-blue-600 transition-colors">4K Video &amp; CGI Commercials</Link></li>
                </ul>
              </div>

              {/* Col 5: UAE Industries */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]"></span>
                  <span>UAE Industries</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors font-medium text-slate-800">All 8 Industry Verticals →</Link></li>
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Real Estate &amp; PropTech</Link></li>
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Fintech &amp; DIFC/ADGM</Link></li>
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Omnichannel Retail</Link></li>
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Logistics &amp; Maritime</Link></li>
                  <li><Link to="/industries" className="hover:text-blue-600 transition-colors">Healthcare &amp; Clinics</Link></li>
                </ul>
              </div>

              {/* Col 6: Company & Enterprise Hub */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF]"></span>
                  <span>Company &amp; Hub</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors font-medium">About Nexus Tech</Link></li>
                  <li><Link to="/how-we-work" className="hover:text-blue-600 transition-colors font-medium text-slate-800">How We Work (5 Stages)</Link></li>
                  <li><Link to="/insights" className="hover:text-blue-600 transition-colors font-medium text-slate-800">Insights &amp; Whitepapers</Link></li>
                  <li><Link to="/case-studies" className="hover:text-blue-600 transition-colors">Case Studies &amp; Impact</Link></li>
                  <li><Link to="/estimator" className="hover:text-blue-600 transition-colors">Project Cost Estimator</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600 transition-colors font-semibold text-slate-800">Contact &amp; Book Discovery</Link></li>
                  <li>
                    <Link to="/whatsapp-gateway" className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 font-medium">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp API Gateway</span>
                    </Link>
                  </li>
                  <li className="pt-1.5">
                    <Link to="/portal" className="text-[#0046AF] font-bold hover:underline flex items-center gap-1.5 bg-blue-50/80 px-2.5 py-1.5 rounded-lg border border-blue-200/60">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Client Portal Access →</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar: Copyright, Compliance & Legal */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0046AF]"></span>
                <span>© 2026 Nexus IT Services FZ-LLC. All rights reserved. Registered in Dubai, United Arab Emirates.</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-500">
                <span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200">
                  TDRA &amp; ISO 27001 Security Standard
                </span>
                <Link to="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
                <a href="https://maps.google.com/?q=Nexus+IT+Services+Dubai" target="_blank" rel="noopener noreferrer" className="hover:text-[#0046AF] transition-colors flex items-center gap-1">
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </CurrencyProvider>
  );
}
