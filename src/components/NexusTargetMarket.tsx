import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Building2, Users, TrendingUp, ArrowRight, ShoppingBag, Truck, Hotel, Briefcase, Home } from 'lucide-react';

// ============================================================================
// NEXUS TARGET MARKET
// Based on the Ideal Customer Profile (ICP) from the marketing strategy.
// Shows who Nexus serves: geography, industries, company size, trigger events.
// ============================================================================

const GEOGRAPHIES = ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha'];

const INDUSTRIES = [
  { name: 'Retail & E-Commerce', icon: ShoppingBag },
  { name: 'Logistics & Supply Chain', icon: Truck },
  { name: 'Hospitality & Tourism', icon: Hotel },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Real Estate & PropTech', icon: Home },
];

const TRIGGER_EVENTS = [
  'Scaling operations',
  'Rebranding',
  'ERP / Cloud migration',
  'New market entry',
];

const PAIN_POINTS = [
  { title: '4–6 separate vendors', description: 'Fragmented relationships with no single point of accountability.' },
  { title: 'Inconsistent delivery', description: 'Variable quality across contractors causing delays and rework.' },
  { title: 'Duplicated costs', description: 'Overlapping services and redundant tooling across vendors.' },
  { title: 'No single owner', description: 'When something breaks, nobody takes responsibility.' },
];

export default function NexusTargetMarket() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07142F_1px,transparent_1px),linear-gradient(to_bottom,#07142F_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold mb-4"
          >
            <Users className="w-3.5 h-3.5 text-[#0046AF]" />
            <span>Who We Serve</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4"
          >
            Built for mid-market GCC businesses ready to consolidate.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            We work with businesses managing 50–500 employees across the UAE and GCC who are scaling,
            rebranding, migrating systems, or entering new markets — and need one accountable partner
            instead of a patchwork of contractors.
          </motion.p>
        </div>

        {/* Main Grid: Geography + Industries + Pain Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Geography Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white border border-slate-200/90 p-6 lg:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0046AF]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Where We Operate</h3>
            </div>

            <div className="space-y-2.5">
              {GEOGRAPHIES.map((city, i) => (
                <div key={city} className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-sm font-semibold text-slate-800">{city}</span>
                  <span className="text-xs font-mono text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed">
                Headquartered in Dubai, serving the entire GCC region with on-site and remote delivery.
              </p>
            </div>
          </motion.div>

          {/* Industries Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white border border-slate-200/90 p-6 lg:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Industries We Serve</h3>
            </div>

            <div className="space-y-2">
              {INDUSTRIES.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.name} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{ind.name}</span>
                  </div>
                );
              })}
            </div>

            <Link
              to="/industries"
              className="mt-5 pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-[#0046AF] hover:gap-2.5 transition-all"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Trigger Events Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#07142F] text-white p-6 lg:p-8 shadow-lg overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">When to Engage</h3>
              </div>

              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Common trigger events where businesses benefit most from consolidating under one partner:
              </p>

              <div className="space-y-2.5">
                {TRIGGER_EVENTS.map((event, i) => (
                  <div key={event} className="flex items-center gap-3 py-2 px-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">{event}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-xs text-slate-400">
                  Budget signal: <span className="text-white font-semibold">AED 50K–500K</span> annual technology spend.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pain Points Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl bg-white border border-slate-200/90 p-6 lg:p-8 shadow-sm"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-5 text-center">
            The problem we solve
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAIN_POINTS.map((point, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="text-sm font-bold text-slate-900">{point.title}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
