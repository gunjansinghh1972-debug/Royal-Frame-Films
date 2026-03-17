import { motion } from "framer-motion";
import { Camera, Film, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Professional photography capturing every magical moment of your special day with artistic precision and emotion."
  },
  {
    icon: Film,
    title: "Cinematic Videography",
    description: "Cinematic wedding films that tell your love story like a Hollywood movie, complete with music and deep emotions."
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoot",
    description: "Romantic pre-wedding sessions at stunning locations to create beautiful memories before your big day."
  },
  {
    icon: Sparkles,
    title: "Photo & Video Editing",
    description: "Expert post-production editing with color grading, retouching, and cinematic effects for a premium finish."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive visual storytelling solutions tailored for your unique celebration.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 md:p-10 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                  <Icon className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
