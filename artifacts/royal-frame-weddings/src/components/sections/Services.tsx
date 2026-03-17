import { motion } from "framer-motion";
import { Camera, Film, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Professional photography capturing every magical moment of your special day with artistic precision, authentic emotion, and timeless elegance.",
    number: "01",
  },
  {
    icon: Film,
    title: "Cinematic Videography",
    description: "Cinematic wedding films that tell your love story like a Hollywood production — complete with music, color grading, and deep emotion.",
    number: "02",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoot",
    description: "Romantic pre-wedding sessions at stunning locations crafted to capture your connection and create beautiful memories before the big day.",
    number: "03",
  },
  {
    icon: Sparkles,
    title: "Photo & Video Editing",
    description: "Expert post-production with cinematic color grading, fine retouching, and premium effects that transform raw captures into art.",
    number: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#050505" }}>
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }}
      />
      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)" }}
      />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#D4AF37] label-cinematic mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
          >
            Our <span className="text-gradient-gold">Services</span>
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
            className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
          >
            Comprehensive visual storytelling solutions crafted to preserve the essence of your unique celebration.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 md:p-10 rounded-sm border border-border/30 transition-all duration-500 hover:border-[#D4AF37]/35 overflow-hidden"
                style={{ background: "hsl(var(--card))" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}
                />

                {/* Service number */}
                <div className="absolute top-6 right-8 text-6xl font-serif text-foreground/[0.04] leading-none select-none pointer-events-none group-hover:text-foreground/[0.07] transition-colors duration-500">
                  {service.number}
                </div>

                {/* Icon */}
                <div
                  className="relative w-14 h-14 flex items-center justify-center mb-8 transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    border: "1px solid rgba(212,175,55,0.2)",
                    background: "rgba(212,175,55,0.07)",
                    borderRadius: "2px",
                  }}
                >
                  <Icon
                    className="w-6 h-6 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #B8922A 100%)",
                      borderRadius: "inherit",
                    }}
                  />
                  <Icon className="w-6 h-6 text-[#0a0a0a] absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-medium mb-4 group-hover:text-gradient-gold transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-[1.85]">
                  {service.description}
                </p>

                {/* Bottom gold line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
