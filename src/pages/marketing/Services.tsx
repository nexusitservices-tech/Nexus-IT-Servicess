import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Server, Code, Bot, Palette, Briefcase,
  ArrowRight, Shield, Check, MessageSquare, Calculator,
  Clock, ArrowUpRight
} from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';

interface ServiceItem {
  id: string;
  category: 'it-services' | 'software' | 'ai' | 'creative' | 'consulting';
  icon: React.ElementType;
  title: string;
  subtitle: string;
  startingAed: number;
  sla: string;
  image: string;
  items: string[];
  techStack: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "it-services",
    category: "it-services",
    icon: Server,
    title: "IT Services & Infrastructure",
    subtitle: "Reliable infrastructure and technical support for modern enterprises.",
    startingAed: 18000,
    sla: "15-min response · 99.99% uptime",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    items: [
      "Managed IT & helpdesk support",
      "Hardware troubleshooting & lifecycle management",
      "Enterprise networks & Wi-Fi 6",
      "Cloud migration (AWS UAE & Azure)",
      "Zero-trust cybersecurity & penetration testing",
      "24/7 monitoring & IT maintenance",
    ],
    techStack: ["AWS UAE", "Azure", "Cloudflare", "Fortinet", "Cisco Meraki"],
  },
  {
    id: "software",
    category: "software",
    icon: Code,
    title: "Software & Web Development",
    subtitle: "Digital products built around your business.",
    startingAed: 28000,
    sla: "Bi-weekly releases · 100% code ownership",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    items: [
      "Modern responsive websites",
      "High-converting e-commerce platforms",
      "Cloud-native web applications",
      "Custom software engineering",
      "CRM & ERP architectures",
      "Scalable business systems & API hubs",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Flutter"],
  },
  {
    id: "ai",
    category: "ai",
    icon: Bot,
    title: "AI & Automation",
    subtitle: "Smarter workflows. Less manual work.",
    startingAed: 22000,
    sla: "Bilingual NLP · Custom enterprise fine-tuning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    items: [
      "AI integration & model deployment",
      "End-to-end business automation",
      "Intelligent AI assistants",
      "Conversational chatbots (WhatsApp & web)",
      "Workflow automation & RPA",
      "Data analysis & business intelligence",
    ],
    techStack: ["Gemini", "LangChain", "OpenAI", "Python", "WhatsApp API", "FastAPI"],
  },
  {
    id: "creative",
    category: "creative",
    icon: Palette,
    title: "Multimedia & Creative",
    subtitle: "Creative media, visual communication & brand experiences.",
    startingAed: 12000,
    sla: "Full commercial IP rights handed over",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    items: [
      "Brand identity & corporate guidelines",
      "Graphic design & visual assets",
      "Executive & commercial photography",
      "4K video production & cinematography",
      "Social media content strategy",
      "Marketing materials & pitch decks",
    ],
    techStack: ["Figma", "After Effects", "Premiere Pro", "DaVinci Resolve", "Cinema 4D"],
  },
  {
    id: "consulting",
    category: "consulting",
    icon: Briefcase,
    title: "Business Technology Consulting",
    subtitle: "Strategic technology, digital transformation & business growth.",
    startingAed: 15000,
    sla: "Executive advisory in Dubai time zone (GST)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    items: [
      "Technology strategy & roadmaps",
      "Comprehensive digital transformation",
      "Workflow & process optimization",
      "Technology assessment & architecture audits",
      "Business systems integration",
      "Executive IT advisory & fractional CTO",
    ],
    techStack: ["TOGAF", "ISO 27001", "TDRA Framework", "Agile/Scrum", "ITIL"],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'it-services', label: 'IT Services' },
  { id: 'software', label: 'Software & Web' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'creative', label: 'Multimedia & Creative' },
  { id: 'consulting', label: 'Business Consulting' },
];

export default function Services() {
  const { formatPrice } = useCurrency();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
  }, [categoryParam]);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Hero Header */}
      <section className="relative pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0046AF] text-xs font-semibold mb-5">
            <span>Enterprise Solutions · Dubai HQ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            Five disciplines. One accountable partner.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
            From sovereign cloud infrastructure to bespoke AI automation and executive advisory —
            explore the scope of what we deliver across the UAE and GCC.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <Link to="/contact">
              <button className="bg-[#0046AF] hover:bg-[#00388C] text-white font-bold px-6 py-3 rounded-full text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/estimator">
              <button className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-5 py-3 rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer">
                <Calculator className="w-4 h-4 text-[#0046AF]" />
                <span>Cost Estimator</span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="mt-8 sm:mt-10 flex justify-start sm:justify-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 whitespace-nowrap shrink-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#0046AF] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-12">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-5 relative h-52 sm:h-64 lg:h-auto min-h-[200px] overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-[#0046AF]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-800 shadow-sm">
                        {service.sla}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.subtitle}
                    </p>

                    {/* Scope items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {service.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0046AF] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.techStack.map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom bar: price + actions */}
                    <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">Starting from</span>
                        <span className="text-lg font-bold text-slate-900">{formatPrice(service.startingAed)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link to={`/services/${service.id}`}>
                          <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                            <span>Learn More</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                        <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
                          <button className="px-4 py-2 rounded-xl bg-[#0046AF] hover:bg-[#00388C] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer">
                            <span>Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              Need a combined multi-discipline package?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Most clients bundle cloud infrastructure, custom software, and AI automation under one
              consolidated contract for maximum cost efficiency.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <button className="bg-[#0046AF] hover:bg-[#00388C] text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a
                href="https://wa.me/971526367221"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-full text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
