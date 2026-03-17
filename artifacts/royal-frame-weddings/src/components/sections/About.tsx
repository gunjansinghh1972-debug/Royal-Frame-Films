import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Weddings" },
  { value: "10+", label: "Years Exp." },
  { value: "50+", label: "Awards" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.025] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, #D4AF37, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#D4AF37] label-cinematic mb-5">Our Story</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-5 leading-tight">
              About <br />
              <span className="text-gradient-gold italic">Royal Frame</span>
            </h2>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-16 h-px mb-10 origin-left"
              style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
            />

            <p className="text-muted-foreground text-base md:text-lg leading-[1.85] mb-6">
              We are a team of passionate photographers and cinematographers dedicated to preserving your most cherished wedding moments. With over 10 years of experience and 500+ weddings captured across the globe, we blend artistry with storytelling.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.85] mb-12">
              Our approach is unobtrusive, allowing natural emotions to unfold while we artistically document the magic of your special day — every laugh, every tear, every glance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border/40">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <h4 className="text-3xl md:text-4xl font-serif text-gradient-gold mb-2">{s.value}</h4>
                  <p className="text-xs text-foreground/50 uppercase tracking-[0.18em] font-sans">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Composition */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="absolute top-0 right-0 w-[72%] h-[460px] overflow-hidden shadow-2xl shadow-black/60 group"
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85"
                alt="Wedding couple"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)"
                }}
              />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute bottom-0 left-0 w-[58%] h-[340px] overflow-hidden shadow-2xl shadow-black/60 group"
              style={{
                borderRadius: "2px",
                outline: "8px solid hsl(var(--background))",
                outlineOffset: "-1px"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85"
                alt="Wedding details"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.35) 0%, transparent 60%)"
                }}
              />
              {/* Gold shimmer bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
              />
            </motion.div>

            {/* Decorative corner brackets */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b border-r border-[#D4AF37]/30" />
            <div className="absolute -top-4 left-[26%] w-20 h-20 border-t border-l border-[#D4AF37]/30" />

            {/* Gold dot accent */}
            <div
              className="absolute top-1/2 left-[28%] w-3 h-3 rounded-full -translate-y-1/2"
              style={{ background: "#D4AF37", boxShadow: "0 0 12px 4px rgba(212,175,55,0.3)" }}
            />
          </div>

          {/* Mobile image */}
          <div className="md:hidden group relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85"
              alt="Wedding couple"
              className="w-full h-[400px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
