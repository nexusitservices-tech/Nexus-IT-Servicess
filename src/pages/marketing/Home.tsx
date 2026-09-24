import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Code, Bot, Palette, Briefcase, ArrowRight, 
  Quote, Layers, Search, Target, Rocket, Star,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter, TypewriterReveal } from '@/components/ui/Typewriter';
import { MorphBlock } from '@/components/ui/MorphBlock';

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
  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-[#F8FAFC]">
      
      {/* Hero Section with Morphy Background & Dynamic Typewriter */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="/herobackground.jpg" 
            alt="Dubai Skyline & Enterprise Network Background" 
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1671}
            height={941}
            className="w-full h-full object-cover object-center opacity-45 filter contrast-105 saturate-115"
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
              <MorphBlock direction="up" delay={0.2} className="max-w-2xl">
                <TypewriterReveal 
                  as="p"
                  delay={0.25}
                  text="At NEXUS IT Services FZ-LLC, we don't just create and connect the technology your business needs to grow — we also design the right tools to elevate your brand's visibility and recognition in the market."
                  className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed justify-center"
                />
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

      {/* Five Clear Service Pillars */}
      <section id="core-pillars-section" className="w-full py-12 sm:py-16 md:py-24 border-b border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <MorphBlock className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0046AF] text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0046AF]" />
                Five Clear Service Pillars
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Organized into five business divisions.<br />
                <span className="text-slate-500">One coherent Nexus ecosystem.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Instead of presenting a large collection of individual services immediately, Nexus organizes your operations into five specialized business divisions engineered to scale together seamlessly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link to="/services">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all shadow-sm group cursor-pointer">
                  <span>Explore full service matrix</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </MorphBlock>

          {/* Five Business Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              { 
                number: "01",
                divisionName: "IT Services",
                subtitle: "Reliable Infrastructure & Technical Support",
                icon: Server, 
                colorAccent: "text-[#0046AF]",
                badgeColor: "bg-blue-50 text-[#0046AF] border-blue-200/80",
                iconBg: "bg-blue-50 text-[#0046AF] group-hover:bg-[#0046AF] group-hover:text-white",
                image: "/it services.png",
                fallbackImage: "/it-services.png",
                link: "/solutions/it-services",
                cardId: "pillar-card-01-it-services",
                services: [
                  "Managed IT",
                  "Hardware & troubleshooting",
                  "Networks",
                  "Cloud",
                  "Cybersecurity",
                  "IT maintenance",
                ]
              },
              { 
                number: "02",
                divisionName: "Software & Web",
                subtitle: "Digital Products Built Around Your Business",
                icon: Code, 
                colorAccent: "text-sky-600",
                badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80",
                iconBg: "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
                image: "/software development.png",
                fallbackImage: "/software-development.png",
                link: "/solutions/software-development",
                cardId: "pillar-card-02-software-web",
                services: [
                  "Websites",
                  "E-commerce",
                  "Web applications",
                  "Custom software",
                  "CRM",
                  "Business systems",
                ]
              },
              { 
                number: "03",
                divisionName: "AI & Automation",
                subtitle: "Smarter Workflows. Less Manual Work.",
                icon: Bot, 
                colorAccent: "text-emerald-600",
                badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
                iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                image: "/ai automation.png",
                fallbackImage: "/ai-automation.png",
                link: "/solutions/ai-automation",
                cardId: "pillar-card-03-ai-automation",
                services: [
                  "AI integration",
                  "Business automation",
                  "AI assistants",
                  "Chatbots",
                  "Workflow automation",
                  "Data analysis",
                ]
              },
              { 
                number: "04",
                divisionName: "Multimedia & Creative",
                subtitle: "Creative Media, Visual Communication & Digital Brand Experiences",
                icon: Palette, 
                colorAccent: "text-amber-600",
                badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
                iconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
                image: "/creative production.png",
                fallbackImage: "/creative-production.png",
                link: "/solutions/creative-services",
                cardId: "pillar-card-04-multimedia-creative",
                services: [
                  "Branding",
                  "Graphic design",
                  "Photography",
                  "Video",
                  "Social media content",
                  "Marketing materials",
                ]
              },
              { 
                number: "05",
                divisionName: "Business Technology Consulting",
                subtitle: "Strategic Technology, Digital Transformation & Business Growth",
                icon: Briefcase, 
                colorAccent: "text-slate-800",
                badgeColor: "bg-slate-100 text-slate-800 border-slate-300/80",
                iconBg: "bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white",
                image: "/business consulting.png",
                fallbackImage: "/business-consulting.png",
                link: "/solutions/consulting",
                cardId: "pillar-card-05-consulting",
                services: [
                  "Technology strategy",
                  "Digital transformation",
                  "Process optimization",
                  "Technology assessment",
                  "Business systems",
                  "IT advisory",
                ]
              }
            ].map((pillar, i) => (
              <MorphBlock 
                key={pillar.number} 
                id={pillar.cardId}
                delay={i * 0.07} 
                enableHover
                className="relative overflow-hidden p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 hover:border-[#0046AF]/60 shadow-sm hover:shadow-xl hover:shadow-[#0046AF]/10 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Clear fluid background layer with subtle blur */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl">
                  <img
                    src={pillar.image}
                    alt={pillar.divisionName}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith(pillar.fallbackImage)) {
                        target.src = pillar.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-700 ease-out filter blur-[10px] opacity-15 group-hover:opacity-25"
                  />
                  <div className="absolute inset-0 bg-white/75 backdrop-blur-xs group-hover:bg-white/65 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0046AF]/5 via-transparent to-blue-400/5 pointer-events-none" />
                </div>

                {/* Card Top & Body */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Division Header: Number + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${pillar.badgeColor}`}>
                      {pillar.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs border border-slate-200/60 ${pillar.iconBg}`}>
                      <pillar.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Division Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0046AF] transition-colors leading-snug mb-1.5">
                    {pillar.number} — {pillar.divisionName}
                  </h3>

                  {/* Subtitle / Value Proposition */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed mb-4 min-h-[38px]">
                    {pillar.subtitle}
                  </p>

                  <div className="w-full h-px bg-slate-200/80 my-2" />

                  {/* Six Specific Division Services */}
                  <div className="my-2 flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Included Services
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 group-hover:text-slate-900 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0046AF] shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-5 pt-3 border-t border-slate-100/90 flex items-center justify-between text-xs font-bold text-[#0046AF] group-hover:text-blue-700">
                    <Link to={pillar.link} className="hover:underline flex items-center gap-1.5 w-full justify-between">
                      <span>Explore Division</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MorphBlock>
            ))}
          </div>

          {/* Unified Ecosystem Advantage Banner */}
          <MorphBlock delay={0.35} className="mt-8 sm:mt-12 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-[#002868] to-slate-900 text-white relative overflow-hidden shadow-xl border border-blue-900/50">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold mb-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>The Coherent Nexus Ecosystem</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Five Specialized Divisions. Zero Disconnected Vendors.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1.5 leading-relaxed">
                  Instead of dealing with five separate agencies pointing fingers, every Nexus division is bound by unified SLAs, synchronized project management, and single-invoice governance backed by our engineering hub in Dubai.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link to="/estimator">
                  <button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 cursor-pointer backdrop-blur-sm">
                    Interactive Scope Estimator
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5">
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </MorphBlock>
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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

    </div>
  );
}
