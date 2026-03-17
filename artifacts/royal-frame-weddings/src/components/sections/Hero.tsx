import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80"
          alt="Cinematic wedding couple"
          className="w-full h-full object-cover object-center scale-105"
          style={{ willChange: "transform" }}
        />
        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.85) 100%)"
        }} />
        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)"
        }} />
        {/* Subtle gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: "linear-gradient(to top, rgba(212,175,55,0.06) 0%, transparent 100%)"
        }} />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/40 z-10" />
      <div className="absolute top-28 right-8 w-16 h-16 border-t border-r border-[#D4AF37]/40 z-10" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-b border-l border-[#D4AF37]/40 z-10" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/40 z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0.22em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[#D4AF37] font-sans font-medium text-xs md:text-sm uppercase mb-8 tracking-[0.22em]"
        >
          Wedding Photography &amp; Cinematic Films
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-shadow-cinematic text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 leading-[1.1]"
        >
          Capturing Your
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-shadow-cinematic text-5xl md:text-7xl lg:text-8xl font-serif italic mb-12 leading-[1.1] text-gradient-gold"
        >
          Forever Moments
        </motion.h1>

        {/* Gold thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-24 h-px mx-auto mb-12"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="btn-outline-gold px-10 py-4 text-sm">
            <span>Book Now</span>
          </a>
          <a
            href="#portfolio"
            className="text-white/70 hover:text-white font-sans text-sm tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-2 group"
          >
            View Portfolio
            <span className="inline-block w-6 h-px bg-white/40 group-hover:w-10 group-hover:bg-white/70 transition-all duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#D4AF37]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
