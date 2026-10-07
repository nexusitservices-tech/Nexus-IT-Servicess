import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Server, Code2, Bot, TrendingUp, Film, Compass } from 'lucide-react';

// ============================================================================
// NEXUS HERO SLIDER
// Auto-rotating hero carousel inspired by TechHive.ae's dark-overlay hero.
// Each slide highlights a different value proposition from the marketing strategy.
// ============================================================================

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 'one-partner',
    eyebrow: 'The Single-Vendor Advantage',
    title: 'One partner.',
    highlight: 'Every layer of your technology.',
    description:
      'Stop managing five separate vendors. Nexus consolidates IT infrastructure, software development, AI automation, and creative production under one team and one contract.',
    ctaText: 'Explore Our Services',
    ctaLink: '/services',
    secondaryCtaText: 'Book a Consultation',
    secondaryCtaLink: '/contact',
    icon: Server,
    accent: 'from-[#0046AF] to-blue-500',
  },
  {
    id: 'accountability',
    eyebrow: 'Built-In Accountability',
    title: 'Fixed milestones.',
    highlight: 'Bi-weekly demos. Zero surprises.',
    description:
      'Every engagement runs through a structured four-stage model — Discover, Strategize, Build, Launch — with defined deliverables and a 99.95% infrastructure SLA so you always know what is happening.',
    ctaText: 'See How We Work',
    ctaLink: '/how-we-work',
    secondaryCtaText: 'Get in Touch',
    secondaryCtaLink: '/contact',
    icon: Code2,
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'regional-expertise',
    eyebrow: 'UAE & GCC Regional Expertise',
    title: 'Built around how',
    highlight: 'businesses here actually operate.',
    description:
      'UAE-registered and GCC-focused — from free zone compliance to Arabic-language digital experiences. We understand Dubai, Abu Dhabi, Riyadh, and Doha because we work here every day.',
    ctaText: 'View Industries',
    ctaLink: '/industries',
    secondaryCtaText: 'Contact Us',
    secondaryCtaLink: '/contact',
    icon: Compass,
    accent: 'from-indigo-600 to-blue-500',
  },
  {
    id: 'future-ready',
    eyebrow: 'Future-Ready Technology',
    title: 'From cloud migration',
    highlight: 'to AI workflow automation.',
    description:
      'Nexus builds for where your business is going, not just where it is today. Cloud solutions, cybersecurity, custom AI integrations, and intelligent automation that scale with you.',
    ctaText: 'Explore AI & Automation',
    ctaLink: '/services/ai-automation',
    secondaryCtaText: 'Start a Conversation',
    secondaryCtaLink: '/contact',
    icon: Bot,
    accent: 'from-cyan-600 to-blue-500',
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function NexusHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const slide = SLIDES[current];
  const Icon = slide.icon;

  return (
    <section
      className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background: Dubai Skyline with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/herobackground.jpg"
          alt="Dubai skyline background"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07142F]/92 via-[#07142F]/80 to-[#0B2144]/85" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        {/* Ambient blue glow */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-blue-500/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${slide.accent} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                  {slide.eyebrow}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05] mb-5">
                {slide.title}{' '}
                <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
                  {slide.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#07142F] text-sm font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={slide.secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-white text-sm font-bold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                >
                  <span>{slide.secondaryCtaText}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows (Desktop) */}
      <div className="hidden lg:flex absolute right-8 bottom-8 z-20 items-center gap-3">
        <button
          onClick={goPrev}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-20 flex items-center gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="group relative cursor-pointer"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-10 bg-gradient-to-r from-blue-400 to-cyan-400'
                  : 'w-5 bg-white/25 hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="hidden lg:block absolute top-8 right-8 z-20 text-white/40 font-mono text-sm font-bold">
        <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
        <span> / {String(SLIDES.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
