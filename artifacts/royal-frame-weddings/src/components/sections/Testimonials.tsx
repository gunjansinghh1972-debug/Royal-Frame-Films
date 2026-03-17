import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun Sharma",
    location: "Delhi Wedding",
    quote: "Royal Frame Weddings captured our day beyond our expectations. Every moment was perfectly preserved. The cinematic film they created made us cry happy tears. Absolutely world-class!"
  },
  {
    name: "Neha & Rahul Mehta",
    location: "Mumbai Wedding",
    quote: "From the pre-wedding shoot to the wedding day, the team was professional, creative, and so warm. The photos are stunning gallery-worthy art. We couldn't have asked for more!"
  },
  {
    name: "Ananya & Karan Gupta",
    location: "Bangalore Wedding",
    quote: "The premium package was worth every rupee. 1000+ gorgeous photos, a 10-minute cinematic film, and the most beautiful photobook we've ever seen. Highly recommend to all couples!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            What Our <span className="text-gradient-gold">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Read the experiences of couples who trusted us with their forever moments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border/30 hover:border-primary/30 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 italic leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>
              
              <div>
                <h4 className="font-serif text-lg text-primary">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
