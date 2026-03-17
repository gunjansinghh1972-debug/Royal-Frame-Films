import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85", label: "Golden Vows" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85", label: "Natural Light" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=85", label: "Elegance" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=85", label: "Tender Moments" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=85", label: "Veil & Light" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85", label: "Pure Joy" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85", label: "Cinematic" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85", label: "Details" },
  { src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=85", label: "First Dance" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#D4AF37] label-cinematic mb-4"
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            The <span className="text-gradient-gold">Portfolio</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
          >
            A curated selection of our favorite wedding moments, each frame a story told in light and emotion.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.12 }}
              className="gallery-item relative aspect-[4/5] overflow-hidden rounded-lg bg-card group cursor-pointer"
              style={{ isolation: "isolate" }}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Permanent subtle gradient at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 35%, transparent 65%)"
                }}
              />

              {/* Hover overlay — cinematic gold tint + darken */}
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)"
                }}
              />

              {/* Gold shimmer line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
              />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <motion.div
                  className="w-12 h-12 rounded-full border border-[#D4AF37]/60 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  style={{ background: "rgba(212,175,55,0.15)", backdropFilter: "blur(4px)" }}
                >
                  <Eye className="w-5 h-5 text-[#D4AF37]" />
                </motion.div>
                <span
                  className="text-[#D4AF37] label-cinematic translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
                >
                  {item.label}
                </span>
              </div>

              {/* Permanent label at bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="text-white/70 text-xs font-sans tracking-widest uppercase opacity-0 group-hover:opacity-0 transition-opacity">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold inline-block px-10 py-4 text-sm rounded-none"
          >
            <span>View More on Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
