import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const images = [
  // abstract wedding hands
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  // couple in nature
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
  // elegant wedding dress walking
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
  // couple holding hands rings
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
  // artistic wedding veil
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
  // couple laughing
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
  // cinematic couple silhouette
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
  // elegant wedding details
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  // couple dancing
  "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Our <span className="text-gradient-gold">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A curated selection of our favorite wedding moments and cinematic frames.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.15 }}
              className="relative aspect-[4/5] overflow-hidden group rounded-xl bg-card"
            >
              <img
                src={src}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-background">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-white font-serif tracking-widest uppercase text-sm">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 border border-primary/50 text-foreground hover:bg-primary hover:text-background transition-colors rounded-full"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
