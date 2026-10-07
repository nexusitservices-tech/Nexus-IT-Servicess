import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import NexusHeroSlider from '@/components/NexusHeroSlider';
import NexusPillars from '@/components/NexusPillars';
import NexusTargetMarket from '@/components/NexusTargetMarket';
import NexusConsultationCTA from '@/components/NexusConsultationCTA';
import NexusServicesSection from '@/components/NexusServicesSection';
import { MorphBlock } from '@/components/ui/MorphBlock';
import { TypewriterReveal } from '@/components/ui/Typewriter';

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

      {/* Hero Slider — Auto-rotating value proposition slides */}
      <NexusHeroSlider />

      {/* Technology Partners Strip */}
      <section className="w-full py-10 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-6">
            11+ Certified Partner Integrations
          </p>

          {/* Seamless Infinite Slider */}
          <div className="relative w-full overflow-hidden select-none">
            <div
              className="overflow-hidden w-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              <div className="animate-marquee-smooth flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
                {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                  <motion.div
                    key={`${partner.name}-${i}`}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="group flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-transparent hover:bg-slate-50 cursor-pointer shrink-0 min-w-[215px] sm:min-w-[245px] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-transparent flex items-center justify-center p-2 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={partner.url}
                        alt={`${partner.name} logo`}
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300"
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
          <div className="w-full pt-6 mt-2 border-t border-slate-100 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 sm:gap-x-10 text-xs font-semibold text-slate-500">
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
              <span>4-Stage Engagement Model</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Direct 24/7 Engineering Escalation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Pillars — Consolidation, Accountability, Regional Expertise, Future-Ready */}
      <NexusPillars />

      {/* Services Section — 6 Service Cards */}
      <NexusServicesSection />

      {/* 4-Stage Engagement Model Bento Grid */}
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
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                      Stage 01
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    Discover &amp; Understand
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
                    Audit &amp; Discovery
                  </span>
                  <span className="font-mono text-slate-400">Zero Obligation</span>
                </div>
              </div>
            </div>
          </MorphBlock>

          {/* Card 2: Strategize & Propose */}
          <MorphBlock delay={0.2} enableHover>
            <div className="h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#0046AF]/80 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group cursor-pointer">
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
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0046AF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                    Stage 02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#0046AF] transition-colors">
                  Strategize &amp; Propose
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  We analyze your requirements and develop a practical solution with clear scope, deliverables, timeline, technology and pricing.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5 text-[#0046AF] font-semibold">
                  Fixed SOW &amp; Milestones
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
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
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
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200/80">
                      Stage 04
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                    Launch and Ongoing Support
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

      {/* Target Market — ICP / Who We Serve */}
      <NexusTargetMarket />

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
                quote: "Finding a technology partner in Dubai that doesn't over-promise and under-deliver is rare. Nexus delivered our luxury real estate portal on time, with flawless Arabic RTL styling and automated CRM lead distributions.",
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

      {/* Consultation CTA — "Not sure which service you need?" */}
      <NexusConsultationCTA />

    </div>
  );
}
