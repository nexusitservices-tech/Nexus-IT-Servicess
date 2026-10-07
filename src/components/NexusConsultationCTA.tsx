import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';

// ============================================================================
// NEXUS CONSULTATION CTA
// Inspired by TechHive's "Not sure which service you need?" section.
// Drives free consultation / quote requests — a key conversion point.
// ============================================================================

export default function NexusConsultationCTA() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0046AF] via-blue-700 to-[#0B2144] overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 blur-[90px] rounded-full" />
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-bold mb-5">
              <Clock className="w-3.5 h-3.5" />
              <span>Free Consultation</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4 max-w-2xl mx-auto">
              Not sure which service you need?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Tell us your goal and we will recommend the right mix of services — with a clear scope,
              defined milestones, and a fixed AED quote within 24 hours. No obligation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0046AF] text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
              >
                <span>Get My Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/971526367221"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-white text-sm font-bold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>24-hour response guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Fixed-scope pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                <span>No obligation discovery workshop</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
