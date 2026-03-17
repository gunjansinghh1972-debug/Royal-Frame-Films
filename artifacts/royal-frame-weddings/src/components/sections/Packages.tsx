import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    tagline: "Perfect for intimate ceremonies",
    price: "₹25,000",
    features: [
      "8 Hours Coverage",
      "300+ Edited Photos",
      "1 Photographer",
      "Online Gallery",
      "USB Delivery",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    tagline: "The most popular full-day choice",
    price: "₹45,000",
    features: [
      "12 Hours Coverage",
      "600+ Edited Photos",
      "2 Photographers",
      "3-Min Highlight Film",
      "Drone Shots",
      "Online Gallery + USB",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    tagline: "Luxury cinematic coverage",
    price: "₹85,000",
    features: [
      "Full Day Coverage",
      "1000+ Edited Photos",
      "3 Photographers",
      "10-Min Cinematic Film",
      "Drone Shots",
      "Pre-Wedding Shoot",
      "Premium Photobook",
      "Priority Editing",
    ],
    highlighted: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#070707" }}>
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
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
          >
            Our <span className="text-gradient-gold">Packages</span>
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
            Transparent pricing with premium deliverables — choose the experience that fits your story.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`relative flex flex-col rounded-sm overflow-hidden transition-all duration-500 ${
                pkg.highlighted
                  ? "lg:-translate-y-5 shadow-2xl"
                  : "hover:-translate-y-2 hover:shadow-xl"
              }`}
              style={{
                background: pkg.highlighted ? "hsl(var(--card))" : "hsl(var(--card))",
                border: pkg.highlighted
                  ? "1px solid rgba(212,175,55,0.55)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: pkg.highlighted
                  ? "0 0 60px rgba(212,175,55,0.12), 0 20px 60px rgba(0,0,0,0.4)"
                  : undefined,
              }}
            >
              {/* Gold top bar for highlighted */}
              {pkg.highlighted && (
                <div
                  className="h-[2px] w-full"
                  style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
                />
              )}

              {/* Most Popular badge */}
              {pkg.highlighted && (
                <div className="absolute top-4 right-4">
                  <span
                    className="label-cinematic px-3 py-1"
                    style={{
                      background: "linear-gradient(135deg, #F0D060 0%, #D4AF37 50%, #B8922A 100%)",
                      color: "#0a0a0a",
                      borderRadius: "1px",
                      fontSize: "0.6rem",
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col flex-1">
                {/* Plan name */}
                <div className="mb-8">
                  <p className="text-[#D4AF37] label-cinematic mb-2" style={{ fontSize: "0.65rem" }}>
                    {pkg.tagline}
                  </p>
                  <h3 className="text-3xl font-serif">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div
                  className="mb-8 pb-8"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-5xl md:text-6xl font-serif font-medium"
                    style={pkg.highlighted ? { background: "linear-gradient(135deg, #F0D060, #D4AF37, #B8922A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2 font-sans">/ event</span>
                </div>

                {/* Features */}
                <ul className="space-y-3.5 mb-10 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: pkg.highlighted ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.05)",
                          border: `1px solid ${pkg.highlighted ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.1)"}`,
                        }}
                      >
                        <Check className={`w-3 h-3 ${pkg.highlighted ? "text-[#D4AF37]" : "text-foreground/50"}`} />
                      </div>
                      <span className="text-foreground/75 text-sm font-sans leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {pkg.highlighted ? (
                  <a href="#contact" className="btn-gold block w-full py-4 text-center text-sm rounded-sm">
                    Book Now
                  </a>
                ) : (
                  <a href="#contact" className="btn-outline-gold block w-full py-4 text-center text-sm rounded-sm">
                    <span>Book Now</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
