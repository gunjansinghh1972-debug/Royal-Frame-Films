import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹25,000",
    description: "Perfect for intimate and small ceremonies.",
    features: [
      "8 Hours Coverage",
      "300+ Edited Photos",
      "1 Photographer",
      "Online Gallery",
      "USB Delivery"
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹45,000",
    description: "The most popular choice for full weddings.",
    features: [
      "12 Hours Coverage",
      "600+ Edited Photos",
      "2 Photographers",
      "3-Min Highlight Film",
      "Drone Shots",
      "Online Gallery + USB"
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹85,000",
    description: "Luxury cinematic coverage of your entire event.",
    features: [
      "Full Day Coverage",
      "1000+ Edited Photos",
      "3 Photographers",
      "10-Min Cinematic Film",
      "Drone Shots",
      "Pre-Wedding Shoot",
      "Premium Photobook",
      "Priority Editing"
    ],
    highlighted: false,
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Our <span className="text-gradient-gold">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Transparent pricing with premium deliverables for your special day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                pkg.highlighted 
                  ? "bg-card border-2 border-primary shadow-2xl shadow-primary/10 lg:-translate-y-4" 
                  : "bg-background border border-border/50 hover:border-primary/30"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-gold text-background font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-border/50">
                <span className="text-5xl font-serif font-medium text-foreground">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${pkg.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block w-full py-4 text-center rounded-xl font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-gradient-gold text-background hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-background"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
