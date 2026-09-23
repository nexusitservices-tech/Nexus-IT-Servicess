import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export interface InitialPageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
  minDuration?: number;
}

/**
 * Enterprise Luxury PageLoader for Nexus IT Services:
 * - Ultra-deep executive obsidian backdrop (#0B1528) with dynamic ambient radial light beams
 * - High-definition official brand logo with breathing luminescence
 * - Real-time micro-progress indicator with animated telemetry (Connecting -> Syncing -> Ready)
 * - Cinematic aperture blur and scale exit
 * - Full WCAG accessibility and prefers-reduced-motion compatibility
 */
export function InitialPageLoader({
  isLoading,
  onComplete,
  minDuration = 950,
}: InitialPageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('CONNECTING...');
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleFinish = useCallback(() => {
    setHasCompleted(true);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    setHasCompleted(false);
    setProgress(0);
    setStatusText('INITIALIZING...');

    const startTime = performance.now();
    let animationFrameId: number;

    const updateLoader = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const ratio = Math.min(elapsed / minDuration, 1);
      
      // Smooth cubic-out easing curve for natural, weighted acceleration
      const easedProgress = Math.round((1 - Math.pow(1 - ratio, 3)) * 100);
      setProgress(easedProgress);

      if (easedProgress < 30) {
        setStatusText('CONNECTING...');
      } else if (easedProgress < 70) {
        setStatusText('SYNCHRONIZING...');
      } else if (easedProgress < 95) {
        setStatusText('OPTIMIZING ASSETS...');
      } else {
        setStatusText('SYSTEM READY');
      }

      if (ratio < 1) {
        animationFrameId = requestAnimationFrame(updateLoader);
      } else {
        setProgress(100);
        setStatusText('SYSTEM READY');
        // Brief pause at 100% to let the user perceive completion before exit
        const exitTimer = setTimeout(() => {
          handleFinish();
        }, 120);
        return () => clearTimeout(exitTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateLoader);

    // Hard fallback safety timeout to ensure loader never hangs
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      handleFinish();
    }, minDuration + 400);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(safetyTimer);
    };
  }, [isLoading, minDuration, handleFinish]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && !hasCompleted && (
        <motion.div
          key="nexus-enterprise-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Nexus IT Services"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02,
            filter: 'blur(12px)',
            transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#0B1528] select-none px-6"
        >
          {/* Ambient Radial Illumination Mesh */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Primary Deep Blue Ambient Core */}
            <motion.div 
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0046AF]/40 via-blue-600/30 to-sky-400/20 blur-[130px]"
            />

            {/* Secondary Cyan/Indigo Subtle Drift */}
            <motion.div 
              animate={{
                x: [-30, 30, -30],
                y: [20, -20, 20],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 to-cyan-400/25 blur-[120px]"
            />

            {/* High-Tech Technical Grid Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, #000 30%, transparent 100%)'
              }}
            />
          </div>

          {/* Central Branded Stage */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-sm w-full">
            {/* Brand Logo with Ambient Pulse Aura */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Backlight Pulse Glow */}
              <motion.div 
                animate={{
                  scale: [0.95, 1.08, 0.95],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 -m-4 rounded-3xl bg-blue-500/20 blur-2xl"
              />

              {/* Logo Frame */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex items-center justify-center p-3 rounded-2xl bg-white/[0.03] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                <img
                  src="/logo.png"
                  alt="Nexus IT Services Logo"
                  className="w-44 sm:w-52 h-auto max-h-24 object-contain filter drop-shadow-[0_8px_20px_rgba(0,70,175,0.4)]"
                />
              </motion.div>
            </div>

            {/* Telemetry Status Bar */}
            <div className="w-48 sm:w-60 flex flex-col">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-mono text-slate-400 mb-2 select-none">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {statusText}
                </span>
                <span className="text-sky-300 font-bold">{progress}%</span>
              </div>

              {/* High-Precision Micro-Track */}
              <div className="w-full h-[2.5px] bg-slate-800/80 rounded-full overflow-hidden p-[0.5px] border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0046AF] via-sky-400 to-blue-200 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                >
                  {/* Leading Laser Head Light */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#38BDF8]" />
                </motion.div>
              </div>

              {/* Quiet Region / Security Subtext */}
              <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                <span>DXB · UAE</span>
                <span>ENTERPRISE CLOUD</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Top Route Navigation Micro-Beam for instant tactile feedback on page transitions
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

      const t1 = setTimeout(() => setProgressWidth(35), 20);
      const t2 = setTimeout(() => setProgressWidth(75), 100);
      const t3 = setTimeout(() => setProgressWidth(100), 200);
      const t4 = setTimeout(() => {
        setVisible(false);
        setProgressWidth(0);
      }, 420);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100000] pointer-events-none h-[2.5px] overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#0046AF] via-sky-400 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.7)] relative"
        initial={{ width: '0%' }}
        animate={{ width: `${progressWidth}%` }}
        transition={{
          duration: progressWidth === 100 ? 0.16 : 0.22,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_#ffffff] opacity-95" />
      </motion.div>
    </div>
  );
}

/**
 * Default Export: Initial Full-Screen Loader
 */
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
