import React, { useEffect, useRef } from 'react';
import { Trophy, Users, Tv, ChevronDown, Gamepad2, Sword, Target, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const mouseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return;
      const { clientX, clientY } = e;
      const rect = mouseRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouseRef.current.style.setProperty('--mouse-x', `${x}px`);
      mouseRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Trophy, value: '10K+', label: 'Tournaments' },
    { icon: Users, value: '1M+', label: 'Active Players' },
    { icon: Sword, value: '50K+', label: 'Daily Matches' },
    { icon: Target, value: '$500K', label: 'Prize Pool' },
  ];

  return (
    <div ref={mouseRef} className="relative min-h-screen overflow-hidden">
      {/* Gaming Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      />

      {/* Enhanced Dark Overlay with Animated Grid */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.05)_2px,transparent_2px)] bg-[length:40px_40px] [background-position:center] animate-grid-flow" />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Enhanced Mouse follow effect with color shift */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(800px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(139, 92, 246, 0.15), transparent 80%)',
      }} />

      {/* Floating Gaming Elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Gamepad2 className="w-full h-full text-purple-500" />
          </motion.div>
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8">
          {/* Enhanced Hero content */}
          <div className="text-center mb-16 relative">
            {/* Rotating Gamepad with enhanced effects */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 -top-20 w-40 h-40 opacity-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl animate-pulse" />
              <Gamepad2 className="w-full h-full text-white/50" />
            </motion.div>

            {/* Enhanced Title with RGB Animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 tracking-tight mb-8 animate-gradient-x"
            >
              LEVEL UP YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x [animation-delay:0.2s]">
                TOURNAMENT GAME
              </span>
            </motion.h1>

            {/* New Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Join the ultimate gaming community where legends are born and champions rise. 
              Compete in daily tournaments and climb the global rankings.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative flex items-center justify-center gap-2 text-white font-bold">
                  <Zap className="w-5 h-5" />
                  Start Tournament
                </span>
              </button>
              <button className="group px-8 py-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                <span className="flex items-center justify-center gap-2 text-white font-bold">
                  <Target className="w-5 h-5" />
                  Watch Live
                </span>
              </button>
            </motion.div>

            {/* New Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl group-hover:bg-purple-500/30 transition-colors" />
                  <div className="relative p-4 backdrop-blur-sm rounded-lg border border-purple-500/20">
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}