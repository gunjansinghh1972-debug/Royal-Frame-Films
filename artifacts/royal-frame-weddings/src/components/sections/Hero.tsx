import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic wedding couple cinematic */}
        <img
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80"
          alt="Cinematic wedding couple"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-black/40 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6">
            Wedding Photography & Cinematic Films
          </h2>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight text-shadow-lg"
        >
          Capturing Your <br className="hidden md:block" />
          <span className="text-gradient-gold italic">Forever Moments</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold tracking-wider uppercase text-sm transition-all duration-300 rounded-none"
          >
            Book Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
