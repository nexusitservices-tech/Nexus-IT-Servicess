import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, MapPin, Rocket, ArrowRight } from 'lucide-react';

// ============================================================================
// NEXUS MARKETING PILLARS
// Four supporting pillars from the marketing strategy:
// 1. Consolidation  2. Accountability  3. Regional Expertise  4. Future-Ready
// ============================================================================

const PILLARS = [
  {
    id: 'consolidation',
    icon: Layers,
    title: 'Consolidation',
    headline: 'Stop managing five vendors.',
    description:
      'Nexus replaces your IT contractor, software agency, AI specialist, and branding studio with one team and one contract. One point of contact, one invoice, one accountable partner.',
    accent: 'blue',
    stat: '1',
    statLabel: 'Team for everything',
  },
  {
    id: 'accountability',
    icon: ShieldCheck,
    title: 'Accountability',
    headline: 'You always know what is happening.',
    description:
      'Fixed milestones, bi-weekly sprint demos, and a 99.95% infrastructure SLA mean you always know what is being built, when it ships, and who is responsible.',
    accent: 'cyan',
    stat: '99.95%',
    statLabel: 'Infrastructure SLA',
  },
  {
    id: 'regional-expertise',
    icon: MapPin,
    title: 'Regional Expertise',
    headline: 'Built for how the GCC operates.',
    description:
      'UAE-registered, GCC-focused, and built around how businesses here actually operate — from free zone compliance to Arabic-language digital experiences.',
    accent: 'indigo',
    stat: '4',
    statLabel: 'GCC cities served',
  },
  {
    id: 'future-ready',
    icon: Rocket,
    title: 'Future-Ready',
    headline: 'Built for where you are going.',
    description:
      'From cloud migration to AI workflow automation, Nexus builds for where your business is going, not just where it is today. Scalable architecture by design.',
    accent: 'emerald',
    stat: '11+',
    statLabel: 'Certified integrations',
  },
];

const ACCENT_MAP: Record<string, { bg: string; text: string; border: string; glow: string; ring: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    glow: 'group-hover:bg-blue-500/10',
    ring: 'group-hover:ring-blue-500/20',
  },
  cyan: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-600',
    border: 'border-cyan-200',
    glow: 'group-hover:bg-cyan-500/10',
    ring: 'group-hover:ring-cyan-500/20',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    glow: 'group-hover:bg-indigo-500/10',
    ring: 'group-hover:ring-indigo-500/20',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    glow: 'group-hover:bg-emerald-500/10',
    ring: 'group-hover:ring-emerald-500/20',
  },
};

export default function NexusPillars() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0046AF] text-xs font-bold mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046AF] animate-pulse" />
            <span>Why Nexus</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4"
          >
            One partner. Every layer of your technology.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Four pillars that make Nexus the single-vendor technology partner for UAE and GCC businesses.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const a = ACCENT_MAP[pillar.accent];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className={`h-full rounded-2xl bg-white border border-slate-200/90 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col`}>
                  {/* Top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${pillar.accent === 'blue' ? 'from-blue-500 to-blue-400' : pillar.accent === 'cyan' ? 'from-cyan-500 to-cyan-400' : pillar.accent === 'indigo' ? 'from-indigo-500 to-indigo-400' : 'from-emerald-500 to-emerald-400'}`} />

                  <div className="p-6 lg:p-7 flex flex-col flex-1">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${a.bg} ${a.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${a.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>

                    {/* Headline */}
                    <p className={`text-sm font-semibold ${a.text} mb-3 leading-snug`}>
                      {pillar.headline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {pillar.description}
                    </p>

                    {/* Stat */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl font-black ${a.text}`}>
                          {pillar.stat}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {pillar.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/how-we-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all group"
          >
            <span>See Our 4-Stage Engagement Model</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
