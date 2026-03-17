import { useState, useEffect } from "react";
import { Menu, X, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Packages", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(10,10,10,0.93)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px) saturate(1.4)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(212,175,55,0.1)" : "1px solid transparent",
        padding: isScrolled ? "16px 0" : "24px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <Crown
              className="w-7 h-7 transition-all duration-300 group-hover:rotate-6"
              style={{ color: "#D4AF37", filter: "drop-shadow(0 0 6px rgba(212,175,55,0.4))" }}
            />
            <span className="font-serif text-xl font-bold tracking-wider text-foreground">
              Royal Frame
              <span className="text-[#D4AF37]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs tracking-[0.1em] uppercase font-sans text-foreground/60 hover:text-[#D4AF37] transition-colors duration-300 group py-1"
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "#D4AF37" }}
                />
              </a>
            ))}
            <a href="#contact" className="btn-gold px-6 py-2.5 text-xs rounded-sm ml-2">
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden transition-colors duration-200 hover:text-[#D4AF37] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full md:hidden"
            style={{
              background: "rgba(8,8,8,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(212,175,55,0.15)",
              transformOrigin: "top",
            }}
          >
            <nav className="flex flex-col py-6 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans text-foreground/70 hover:text-[#D4AF37] py-3 transition-colors duration-200 tracking-[0.08em] uppercase border-b border-border/20"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold block w-full text-center py-3.5 text-sm rounded-sm"
                >
                  Book Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
