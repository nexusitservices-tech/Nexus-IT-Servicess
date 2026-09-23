import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface InitialPageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  minDuration?: number;
}

/**
 * High-Performance Mobile-Optimized Blurry White Fluid PageLoader:
 * - Fluid pearlescent white backdrop with hardware-accelerated transforms
 * - Dynamic adaptive timing: ~380ms for mobile, ~680ms for desktop
 * - Tap-to-dismiss support for instant mobile responsiveness
 * - Clean borderless brand logo with smooth fade in and fade out
 */
export function InitialPageLoader({
  isLoading,
  onComplete,
  minDuration,
}: InitialPageLoaderProps) {
  const [hasCompleted, setHasCompleted] = useState(false);

  const isMobile = useMemo(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  }, []);

  const effectiveDuration = minDuration !== undefined ? minDuration : (isMobile ? 380 : 680);

  const handleFinish = useCallback(() => {
    setHasCompleted(true);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (!isLoading) {
      setHasCompleted(true);
      return;
    }

    setHasCompleted(false);

    const timer = setTimeout(() => {
      handleFinish();
    }, effectiveDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, effectiveDuration, handleFinish]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && !hasCompleted && (
        <motion.div
          key="nexus-fluid-white-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Nexus IT Services"
          onClick={handleFinish}
          onTouchStart={handleFinish}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: 'blur(8px)',
            transition: { duration: isMobile ? 0.25 : 0.38, ease: [0.16, 1, 0.3, 1] } 
          }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center select-none px-6 overflow-hidden cursor-pointer will-change-[opacity,filter]"
        >
          {/* Blurry White Fluid Canvas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Translucent Milky Glass */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl sm:backdrop-blur-2xl" />

            {/* Fluid Organic Blob 1: Gentle Blue/Cyan Pearlescent Flow */}
            <motion.div
              animate={{
                x: [-25, 25, -25],
                y: [-20, 20, -20],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-16 -left-16 w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-br from-white via-sky-100/60 to-blue-100/40 blur-2xl sm:blur-3xl opacity-80 will-change-transform"
            />

            {/* Fluid Organic Blob 2: Soft Indigo/Slate Pearlescent Flow */}
            <motion.div
              animate={{
                x: [25, -25, 25],
                y: [20, -20, 20],
                scale: [1.08, 0.96, 1.08],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-16 -right-16 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full bg-gradient-to-tl from-white via-indigo-50/70 to-slate-100/60 blur-2xl sm:blur-3xl opacity-80 will-change-transform"
            />

            {/* Fluid Center Radiant Liquid Core */}
            <motion.div
              animate={{
                scale: [0.96, 1.06, 0.96],
                opacity: [0.8, 0.95, 0.8],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-white/90 blur-xl sm:blur-2xl will-change-transform"
            />
          </div>

          {/* Clean Borderless Brand Logo with Fade In & Fade Out */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: isMobile ? 0.3 : 0.42, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.98,
              transition: { duration: isMobile ? 0.22 : 0.35, ease: 'easeInOut' } 
            }}
            className="relative z-10 flex items-center justify-center pointer-events-none will-change-[opacity,transform]"
          >
            <img
              src="/logo.png"
              alt="Nexus IT Services"
              width={288}
              height={112}
              className="w-44 sm:w-60 md:w-72 h-auto max-h-24 sm:max-h-28 object-contain drop-shadow-[0_10px_25px_rgba(0,70,175,0.08)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * RouteProgressBar kept as null stub for compatibility
 */
export function RouteProgressBar() {
  return null;
}

export default function PageLoader({
  isLoading,
  onComplete,
  minDuration,
}: InitialPageLoaderProps) {
  return (
    <InitialPageLoader 
      isLoading={isLoading} 
      onComplete={onComplete}
      minDuration={minDuration}
    />
  );
}
