import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun Sharma",
    location: "Delhi Wedding",
    quote: "Royal Frame Weddings captured our day beyond our expectations. Every moment was perfectly preserved. The cinematic film they created made us cry happy tears. Absolutely world-class!",
    initials: "PA",
  },
  {
    name: "Neha & Rahul Mehta",
    location: "Mumbai Wedding",
    quote: "From the pre-wedding shoot to the wedding day, the team was professional, creative, and so warm. The photos are stunning gallery-worthy art. We couldn't have asked for more!",
    initials: "NR",
  },
  {
    name: "Ananya & Karan Gupta",
    location: "Bangalore Wedding",
    quote: "The premium package was worth every rupee. 1000+ gorgeous photos, a 10-minute cinematic film, and the most beautiful photobook we've ever seen. Highly recommend to all couples!",
    initials: "AK",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#060606" }}>
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#D4AF37] label-cinematic mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
          >
            What Our <span className="text-gradient-gold italic">Clients Say</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-muted-foreground max-w-xl mx-auto text-base"
          >
            Read the experiences of couples who trusted us with their forever moments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative p-8 md:p-10 rounded-sm flex flex-col transition-all duration-500 hover:border-[#D4AF37]/25 hover:-translate-y-1"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Hover top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
              />

              {/* Large quote mark */}
              <Quote
                className="absolute top-6 right-6 w-10 h-10 transition-colors duration-300 group-hover:text-[#D4AF37]/15"
                style={{ color: "rgba(212,175,55,0.07)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4" style={{ fill: "#D4AF37", color: "#D4AF37" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/75 italic leading-[1.9] mb-8 text-sm md:text-base flex-1 relative z-10 font-sans">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-sans font-semibold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#D4AF37]">{t.name}</h4>
                  <p className="text-xs text-muted-foreground label-cinematic" style={{ fontSize: "0.6rem" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
