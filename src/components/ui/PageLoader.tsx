import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface InitialPageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  minDuration?: number;
}

/**
 * Blurry White Fluid PageLoader:
 * - Frosted, milky white fluid liquid backdrop with organic floating blobs
 * - Heavy multi-layer glass blur (backdrop-blur-2xl)
 * - Pure borderless brand logo with smooth fade in and fade out
 * - No loading bars, borders, or telemetry
 */
export function InitialPageLoader({
  isLoading,
  onComplete,
  minDuration = 850,
}: InitialPageLoaderProps) {
  const [hasCompleted, setHasCompleted] = useState(false);

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
    }, minDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, minDuration, handleFinish]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && !hasCompleted && (
        <motion.div
          key="nexus-fluid-white-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Nexus IT Services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            filter: 'blur(12px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center select-none px-6 overflow-hidden"
        >
          {/* Blurry White Fluid Canvas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Translucent Milky Glass */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-2xl" />

            {/* Fluid Organic Blob 1: Gentle Blue/Cyan Pearlescent Flow */}
            <motion.div
              animate={{
                x: [-35, 35, -35],
                y: [-25, 25, -25],
                scale: [1, 1.12, 1],
                borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 50% 60% 40% 60%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-gradient-to-br from-white via-sky-100/60 to-blue-100/40 blur-3xl opacity-80"
            />

            {/* Fluid Organic Blob 2: Soft Indigo/Slate Pearlescent Flow */}
            <motion.div
              animate={{
                x: [35, -35, 35],
                y: [25, -25, 25],
                scale: [1.1, 0.95, 1.1],
                borderRadius: ['50% 50% 40% 60% / 60% 40% 60% 40%', '40% 60% 60% 40% / 40% 60% 50% 50%', '50% 50% 40% 60% / 60% 40% 60% 40%'],
              }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-20 -right-20 w-[520px] h-[520px] bg-gradient-to-tl from-white via-indigo-50/70 to-slate-100/60 blur-3xl opacity-80"
            />

            {/* Fluid Center Radiant Liquid Core */}
            <motion.div
              animate={{
                scale: [0.95, 1.08, 0.95],
                opacity: [0.75, 0.95, 0.75],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-white/90 blur-2xl"
            />
          </div>

          {/* Clean Borderless Brand Logo with Fade In & Fade Out */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.98,
              transition: { duration: 0.4, ease: 'easeInOut' } 
            }}
            className="relative z-10 flex items-center justify-center pointer-events-none"
          >
            <img
              src="/logo.png"
              alt="Nexus IT Services"
              className="w-48 sm:w-60 md:w-72 h-auto max-h-28 object-contain drop-shadow-[0_10px_25px_rgba(0,70,175,0.08)]"
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
