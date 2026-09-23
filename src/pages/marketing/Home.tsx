import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, Code, Bot, Palette, Briefcase, ArrowRight, 
  Shield, Zap, ChevronDown, Quote, 
  Layers, Search, Target, Rocket, Star,
  Sparkles, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UaeTrustBadges from '@/components/UaeTrustBadges';
import { Typewriter, TypewriterReveal } from '@/components/ui/Typewriter';
import { MorphBlock, MorphStagger } from '@/components/ui/MorphBlock';
import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonMetrics, 
  SkeletonHero, 
  SkeletonMorphWrapper 
} from '@/components/ui/skeleton';

const PARTNERS = [
  { name: 'AWS', url: '/partners/aws.svg', role: 'Cloud Infrastructure' },
  { name: 'Google', url: '/partners/google.svg', role: 'AI & Enterprise Suite' },
  { name: 'Cloudflare', url: '/partners/cloudflare.svg', role: 'Edge & Cybersecurity' },
  { name: 'GitHub', url: '/partners/github.svg', role: 'DevOps & Versioning' },
  { name: 'Shopify', url: '/partners/shopify.svg', role: 'E-Commerce Infrastructure' },
  { name: 'Grok AI', url: '/partners/grok.svg', role: 'Generative Intelligence' },
  { name: 'Meta', url: '/partners/meta.svg', role: 'Business & Ad APIs' },
  { name: 'WIX', url: '/partners/wix.svg', role: 'Web Architecture' },
  { name: 'Whois', url: '/partners/whois.svg', role: 'Domains & DNS' },
  { name: 'TravelPayouts', url: '/partners/travelpayouts.svg', role: 'Travel Tech APIs' },
  { name: 'CJ Affiliates', url: '/partners/cj.svg', role: 'Performance Media' },
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Where is Nexus IT Services based and can you meet at our Dubai office?", 
      a: "Yes, absolutely. Our headquarters is located in Dubai (Downtown / Dubai Internet City). We routinely conduct in-person technical discovery sessions, steering committee meetings, and executive reviews across Dubai, Abu Dhabi, and the wider UAE." 
    },
    { 
      q: "How does your fixed-milestone pricing work in UAE Dirhams (AED)?", 
      a: "We operate strictly with zero hidden fees. After a comprehensive discovery workshop, we provide a formal Scope of Work (SOW) with clear milestones (e.g., 30% Architecture & Design, 40% Functional Core, 30% Deployment & UAT) payable via UAE bank transfer or corporate card in AED or USD." 
    },
    { 
      q: "Do you comply with UAE data protection and TDRA regulations?", 
      a: "Yes. All software and cloud systems we deploy can be strictly hosted inside the UAE (e.g., AWS me-central-1 UAE or Microsoft Azure UAE North Dubai) to ensure full compliance with UAE Federal Decree-Law No. 45 on Personal Data Protection." 
    },
    { 
      q: "What is your typical turnaround timeline for enterprise deliverables?", 
      a: "Depending on scope, MVP web platforms and automated AI workflows are deployed within 2 to 4 weeks. Full enterprise ERP platforms and cloud migrations span 6 to 12 weeks with weekly sprint demonstrations." 
    },
    { 
      q: "Do you provide dedicated SLA support after project handover?", 
      a: "Yes. We offer Tier-1 UAE managed support contracts featuring 15-minute emergency response times, automated server health monitors, and dedicated local engineering managers in Dubai." 
    }
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-[#F8FAFC]">
      
      {/* Hero Section with Morphy Background & Dynamic Typewriter */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="/herobackground.jpeg" 
            alt="Dubai Skyline & Enterprise Network Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-105 saturate-110"
          />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#F8FAFC_90%)] opacity-75"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/15 blur-[130px] rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-[450px] h-[250px] bg-[#0046AF]/15 blur-[110px] rounded-full"></div>
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
              {/* Dynamic Typewriter Headline */}
              <MorphBlock direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6 sm:mb-8 flex flex-col items-center text-center">
                  <span>Technology.</span>
                  <span className="min-h-[2.3em] sm:min-h-[1.15em] flex items-center justify-center text-center">
                    <Typewriter 
                      words={[
                        'Digital Marketing', 
                        'Professional Adverts', 
                        'Software Development & Multimedia'
                      ]} 
                      typingSpeed={85}
                      deletingSpeed={45}
                      pauseTime={2000}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#0046AF] via-blue-600 to-indigo-600"
                    />
                  </span>
                  <span>Delivered.</span>
                </h1>
              </MorphBlock>
              
              {/* Typewriter Staggered Subtitle */}
              <MorphBlock direction="up" delay={0.2} className="max-w-2xl mb-8 sm:mb-10">
                <TypewriterReveal 
                  as="p"
                  delay={0.25}
                  text="At NEXUS IT Services FZ-LLC, we don't just create and connect the technology your business needs to grow — we also design the right tools to elevate your brand's visibility and recognition in the market."
                  className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed justify-center"
                />
              </MorphBlock>
              
              {/* Morphy Interactive CTAs */}
              <MorphBlock direction="up" delay={0.3} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link to="/services" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-full bg-gradient-to-r from-[#0046AF] to-blue-600 hover:from-[#00388C] hover:to-[#0046AF] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#0046AF]/25 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link to="/about" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>About Us</span>
                  </motion.button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-full bg-blue-50 hover:bg-blue-100 text-[#0046AF] border border-blue-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Contact Us</span>
                  </motion.button>
                </Link>
              </MorphBlock>
            </div>

          {/* Technology Partners Carousel Bar */}
          <MorphBlock 
            id="tech-partners-section"
            delay={0.35} 
            className="w-full max-w-full mt-12 sm:mt-16 md:mt-24 overflow-hidden rounded-none border-y border-x-0 border-slate-200/60 bg-transparent py-6 sm:py-10 md:py-12 px-2 sm:px-6 flex flex-col items-center justify-center gap-6 md:gap-8 relative"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="text-center px-4 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-2.5">
                Our Services Are Powered by Industry-Leading Technology Partners
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Direct cloud interconnections, premier partner SLA agreements, and audited architectures guaranteeing 99.95% uptime, regional data residency, and enterprise compliance across Dubai, Abu Dhabi, and the GCC.
              </p>
            </div>

            {/* Seamless Infinite Slider with Hardware Acceleration */}
            <div className="marquee-container relative w-full overflow-hidden py-2 select-none">
              <div 
                className="overflow-hidden w-full"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
                }}
              >
                <div className="animate-marquee-smooth flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 bg-transparent">
                  {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                    <motion.div 
                      key={`${partner.name}-${i}`} 
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="group flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-transparent hover:bg-slate-100/60 border border-slate-200/70 hover:border-blue-400/50 shadow-none cursor-pointer shrink-0 min-w-[215px] sm:min-w-[245px] transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-transparent flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={partner.url} 
                          alt={`${partner.name} logo`} 
                          className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter transition-transform duration-300" 
                          loading="lazy" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col text-left min-w-0 flex-1">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight truncate">
                          {partner.name}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors truncate">
                          {partner.role}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro-Metrics Strip */}
            <div className="w-full pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 sm:gap-x-10 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0046AF]"></span>
                <span>11+ Certified Partner Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>99.95% Infrastructure SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                <span>UAE Data Residency Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Direct 24/7 Engineering Escalation</span>
              </div>
            </div>
          </MorphBlock>

        </div>
      </section>

      {/* Five Core Pillars with Morphy Cards */}
      <section id="core-pillars-section" className="w-full py-12 sm:py-16 md:py-24 bg-[#090D16] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Corporate Ambient Mesh for Glass Reflections */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0046AF]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <MorphBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16">
            <div>
              <div className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-2">Our Core Pillars</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Five integrated capabilities.<br />
                <span className="text-slate-400">One accountable partner.</span>
              </h2>
            </div>
            <Link to="/services">
              <button className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group cursor-pointer">
                <span>View all capabilities & packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </MorphBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                icon: Server, 
                title: "IT Services & Cloud Infrastructure", 
                desc: "Enterprise networks, UAE data residency cloud migration (AWS/Azure), workstation fleet management, and 24/7 disaster recovery.",
                image: "/it services.png",
                fallbackImage: "/it-services.png",
                link: "/solutions/it-services",
                cardId: "pillar-card-it-services"
              },
              { 
                icon: Code, 
                title: "Software & Web Development", 
                desc: "Modern web platforms, custom ERP & CRM solutions, e-commerce stores, and high-performance mobile apps for iOS & Android.",
                image: "/software development.png",
                fallbackImage: "/software-development.png",
                link: "/solutions/software-development",
                cardId: "pillar-card-software-development"
              },
              { 
                icon: Bot, 
                title: "AI & Automation Solutions", 
                desc: "Bilingual Arabic/English intelligent chatbots, automated WhatsApp customer service, workflow automation, and custom LLM tuning.",
                image: "/ai automation.png",
                fallbackImage: "/ai-automation.png",
                link: "/solutions/ai-automation",
                cardId: "pillar-card-ai-automation"
              },
              { 
                icon: Palette, 
                title: "Multimedia & Creative Production", 
                desc: "Corporate brand identity, 4K executive video production, social media campaigns, and high-impact pitch presentations.",
                image: "/creative production.png",
                fallbackImage: "/creative-production.png",
                link: "/solutions/creative-services",
                cardId: "pillar-card-creative-production"
              },
              { 
                icon: Briefcase, 
                title: "Business Consulting & Strategy", 
                desc: "Strategic technology roadmaps, vendor consolidation audits, and TDRA/DIFC digital transformation advisory.",
                image: "/business consulting.png",
                fallbackImage: "/business-consulting.png",
                link: "/solutions/consulting",
                cardId: "pillar-card-business-consulting",
                wide: true 
              }
            ].map((cap, i) => (
              <MorphBlock 
                key={i} 
                id={cap.cardId}
                delay={i * 0.08} 
                enableHover
                className={`relative overflow-hidden p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] hover:shadow-[0_20px_40px_rgba(0,70,175,0.3)] transition-all duration-300 group cursor-pointer ${cap.wide ? 'lg:col-span-2' : ''}`}
              >
                {/* Clear fluid background layer with 10px blur */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl">
                  {/* Responsible image with 10px Gaussian blur */}
                  <img
                    src={cap.image}
                    alt={cap.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(cap.fallbackImage)) {
                        target.src = cap.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-700 ease-out filter blur-[10px] opacity-35 group-hover:opacity-50"
                  />
                  {/* Fluid frosted glassmorphic overlay with 10px backdrop-blur */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-lg group-hover:bg-white/15 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0046AF]/20 via-transparent to-blue-400/10 pointer-events-none" />
                </div>

                {/* Card content - elevated above fluid blurred backdrop */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-white/20 group-hover:bg-[#0046AF] group-hover:text-white group-hover:border-[#0046AF] transition-all duration-300 shadow-2xs">
                      <cap.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-200">
                      {cap.title}
                    </h3>
                    <p className={`text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal ${cap.wide ? 'max-w-xl' : ''}`}>
                      {cap.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                    <Link to={cap.link} className="hover:underline flex items-center gap-1.5 font-bold">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MorphBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Bento Grid with Morphy Physics */}
      <section className="w-full py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <MorphBlock className="mb-10 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <span>The Single-Vendor Advantage</span>
          </div>
          <TypewriterReveal 
            text="We remove the complexity of modern business technology."
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight"
          />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
            <strong className="text-slate-900">Nexus IT Services FZ-LLC</strong> is engineered for UAE organizations that want to scale rapidly without the friction of managing separate IT contractors, software agencies, AI specialists, and branding studios.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our team structure establishes a transparent process designed to understand your needs, deliver the right solution, and support positive business results.
          </p>
        </MorphBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: Discover & Understand */}
            <MorphBlock delay={0.1} enableHover className="md:col-span-2">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400/80 hover:shadow-xl transition-all relative overflow-hidden group flex flex-col md:flex-row cursor-pointer">
                <div className="p-5 sm:p-8 md:p-10 relative z-10 h-full flex flex-col justify-between flex-1">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                        <Search className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                        Stage 01
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                      Discover & Understand
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                      We begin by understanding your business, challenges, objectives, existing systems, and what success looks like — before recommending a solution.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold">
                      On-Site Dubai Discovery Workshop
                    </span>
                  </div>
                </div>
                
                <div className="w-full md:w-2/5 h-48 sm:h-60 md:h-auto min-h-[180px] sm:min-h-[220px] relative overflow-hidden bg-slate-100 border-t md:border-t-0 md:border-l border-slate-100">
                  <img 
                    src="/assets/blocks/block-discover.jpg" 
                    alt="Professional team collaborating in a modern tech office in Dubai" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white/90 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between text-[11px] font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-blue-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Audit & Discovery
                    </span>
                    <span className="font-mono text-slate-400">Zero Obligation</span>
                  </div>
                </div>
              </div>
            </MorphBlock>

            {/* Card 2: Strategize & Propose */}
            <MorphBlock delay={0.2} enableHover>
              <div className="h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#0046AF]/80 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                {/* Fine Matter Block Background Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img 
                    src="/assets/blocks/block-strategize.jpg" 
                    alt="Strategize and Propose Architecture" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-20 filter contrast-105 saturate-110 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/95" />
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#0046AF]/10 rounded-full blur-2xl group-hover:bg-[#0046AF]/20 transition-all" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-[#0046AF] group-hover:scale-110 group-hover:bg-[#0046AF] group-hover:text-white transition-all shadow-xs">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0046AF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                      Stage 02
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#0046AF] transition-colors">
                    Strategize & Propose
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    We analyze your requirements and develop a practical solution with clear scope, deliverables, timeline, technology and pricing.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1.5 text-[#0046AF] font-semibold">
                    Fixed SOW & Milestones
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>
            </MorphBlock>

            {/* Card 3: Build/Implement */}
            <MorphBlock delay={0.3} enableHover>
              <div className="h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400/80 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                {/* Fine Matter Block Background Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img 
                    src="/assets/blocks/block-build.jpg" 
                    alt="Build and Implement Technology" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-20 filter contrast-105 saturate-110 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/95" />
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 text-amber-600 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xs">
                      <Code className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80">
                      Stage 03
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-amber-700 transition-colors">
                    Build/Implement
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    Our team develops, configures, integrates or implements the solution while maintaining regular communication and process updates.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1.5 text-amber-700 font-semibold">
                    Bi-Weekly Sprint Demos
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </span>
                </div>
              </div>
            </MorphBlock>

            {/* Card 4: Launch & Support */}
            <MorphBlock delay={0.4} enableHover className="md:col-span-2">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400/80 hover:shadow-xl transition-all relative overflow-hidden group flex flex-col md:flex-row cursor-pointer">
                
                <div className="w-full md:w-3/5 p-5 sm:p-8 md:p-10 relative z-10 flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200/80">
                        Stage 04 & 05
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                      Launch and Support
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm mb-4">
                      We test, deploy, document and hand over the solution. Where required, we provide training and guidance so your team can operate confidently. From then our partnership continues beyond delivery by providing technical support, maintenance, optimization, automation and scalable solutions as your business evolves.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5 text-[#0046AF] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#0046AF] animate-pulse"></span>
                      24/7 SLA Monitoring
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-indigo-700 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      In-Person UAE Support
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-2/5 h-48 sm:h-60 md:h-auto min-h-[180px] sm:min-h-[220px] relative overflow-hidden bg-slate-100 border-t md:border-t-0 md:border-l border-slate-100">
                  <img 
                    src="/assets/blocks/block-launch.jpg" 
                    alt="Mission Launch and 24/7 Operations Control in Dubai" 
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white/90 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-between text-[11px] font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-indigo-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                      Live Dubai Cutover
                    </span>
                    <span className="font-mono text-slate-400">99.95% SLA</span>
                  </div>
                </div>

              </div>
            </MorphBlock>

          </div>
      </section>

      {/* Process Section with Morphy In-and-Out */}
      <section className="w-full py-12 sm:py-16 md:py-24 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <MorphBlock className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
              Our 5-Stage UAE Delivery Framework
            </div>
            <TypewriterReveal 
              text="A transparent journey from concept to deployment."
              className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight justify-center"
            />
          </MorphBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 relative">
            {[
              { step: '01', icon: Layers, title: "Discover & Audit", desc: "We meet at your Dubai office or online to assess your tech stack, bottlenecks, and KPIs." },
              { step: '02', icon: Briefcase, title: "Fixed Scope Proposal", desc: "You receive a clear SOW with fixed milestone pricing in AED, timeline, and exact deliverables." },
              { step: '03', icon: Code, title: "Agile Development", desc: "Bi-weekly sprint reviews, live staging demos, and collaborative feedback with your team." },
              { step: '04', icon: Shield, title: "Security & Launch", desc: "TDRA data checks, penetration testing, team training, and zero-downtime deployment." },
              { step: '05', icon: Zap, title: "Continuous Support", desc: "Dedicated UAE-based SLA support, server monitoring, and proactive feature enhancements." }
            ].map((st, i) => (
              <MorphBlock 
                key={i} 
                delay={i * 0.1} 
                enableHover
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-sm mb-4 border border-blue-100">
                  {st.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </MorphBlock>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Trust Badges */}
      <UaeTrustBadges />

      {/* UAE Client Testimonials */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <MorphBlock className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <TypewriterReveal 
              text="Trusted by UAE Market Leaders"
              className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight justify-center"
            />
            <p className="text-slate-600 text-xs sm:text-sm mt-3">Verified reviews from organizations based in Dubai and Abu Dhabi.</p>
          </MorphBlock>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                quote: "Nexus completely overhauled our logistics management portal in JAFZA and deployed an automated WhatsApp booking bot. Our operational coordination overhead dropped by 45% within 60 days.", 
                author: "Tariq Al-Hashemi", 
                role: "Managing Director, Globex Logistics Dubai",
                project: "Custom Logistics Platform & AI Dispatch"
              },
              { 
                quote: "Finding a technology partner in Dubai that doesn't over-promise and under-deliver is rare. Nexus delivered our luxury real estate portal on time, with flawless Arabic RTL styling and automated CRM lead distribution.", 
                author: "Leila Mirzah", 
                role: "VP Marketing, Prestige Horizon Properties",
                project: "PropTech Portal & WhatsApp CRM Automation"
              }
            ].map((test, i) => (
              <MorphBlock key={i} delay={i * 0.15} enableHover>
                <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-blue-200 mb-4" />
                    <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed mb-6 font-medium">
                      "{test.quote}"
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-xs">
                        {test.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900">{test.author}</div>
                        <div className="text-[11px] sm:text-xs text-slate-500">{test.role}</div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#0046AF] bg-blue-50 px-2 sm:px-2.5 py-1 rounded-full border border-blue-200">
                      Verified Client
                    </span>
                  </div>
                </div>
              </MorphBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Morphy Interactive FAQ Accordion */}
      <section className="w-full py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <MorphBlock className="text-center mb-10 sm:mb-16">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">Got Questions?</div>
            <TypewriterReveal 
              text="Frequently Asked Questions"
              className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight justify-center mb-3 sm:mb-4"
            />
            <p className="text-slate-500 text-xs sm:text-base">Everything you need to know about working with Nexus IT Services in Dubai.</p>
          </MorphBlock>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'bg-slate-50/80 border-blue-400/80 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    className="w-full py-4 sm:py-5 px-4 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base md:text-lg">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-slate-100/80">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
