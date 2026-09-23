import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export interface InitialPageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

/**
 * Minimalist, high-craft PageLoader:
 * - Fluid blurred white background with soft ambient meshes
 * - ONLY the official Nexus IT Services Logo (no placeholder images)
 * - Continuous smooth fade-in and fade-out pulse loop (no progress bar)
 * - Seamless blur-clearing aperture exit
 */
export function InitialPageLoader({
  isLoading,
  onComplete,
}: InitialPageLoaderProps) {
  useEffect(() => {
    if (!isLoading) return;

    // Graceful presentation timing for initial hydration
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 850);

    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="nexus-minimal-logo-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.98,
            filter: 'blur(10px)',
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white/80 backdrop-blur-2xl select-none px-6"
        >
          {/* Fluid Ambient Mesh Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft Fluid Blue Orb */}
            <motion.div 
              animate={{
                x: [-30, 30, -20, -30],
                y: [-25, 20, 30, -25],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/40 to-cyan-100/45 blur-[100px]"
            />

            {/* Soft Fluid Blue/Indigo Orb */}
            <motion.div 
              animate={{
                x: [25, -25, 15, 25],
                y: [30, -20, -15, 30],
                scale: [1.05, 0.95, 1.05, 1.05],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1/3 right-1/3 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-blue-200/35 to-indigo-100/40 blur-[110px]"
            />

            {/* Subtle Matrix Dot Lattice */}
            <div 
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)'
              }}
            />
          </div>

          {/* Centerpiece: ONLY the Logo with Continuous Fade In & Out Breathing Loop */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.96, 1.02, 0.96],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Nexus IT Services"
                className="w-48 sm:w-56 md:w-64 h-auto max-h-24 object-contain filter drop-shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Top Route Navigation Micro-Beam for instant route transitions
 */
export function RouteProgressBar() {
  const location = useLocation();
  const [progressWidth, setProgressWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;

      setVisible(true);
      setProgressWidth(0);

      const t1 = setTimeout(() => setProgressWidth(70), 30);
      const t2 = setTimeout(() => setProgressWidth(100), 180);
      const t3 = setTimeout(() => {
        setVisible(false);
        setProgressWidth(0);
      }, 400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none h-[2px] overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#0046AF] via-blue-500 to-sky-400 shadow-[0_0_8px_rgba(0,70,175,0.5)] relative"
        initial={{ width: '0%' }}
        animate={{ width: `${progressWidth}%` }}
        transition={{
          duration: progressWidth === 100 ? 0.18 : 0.22,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_6px_#ffffff] opacity-90" />
      </motion.div>
    </div>
  );
}

/**
 * Default Export
 */
export default function PageLoader({
  isLoading,
  onComplete,
}: InitialPageLoaderProps) {
  return (
    <>
      <RouteProgressBar />
      <InitialPageLoader 
        isLoading={isLoading} 
        onComplete={onComplete} 
      />
    </>
  );
}
