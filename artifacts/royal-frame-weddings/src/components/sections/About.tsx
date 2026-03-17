import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              About <br />
              <span className="text-gradient-gold">Royal Frame Weddings</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are a team of passionate photographers and cinematographers dedicated to preserving your most cherished wedding moments. With over 10 years of experience and 500+ weddings captured across the globe, we blend artistry with storytelling to create timeless memories that will last forever.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our approach is unobtrusive, allowing natural emotions to unfold while we artistically document the magic of your special day.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">500+</h4>
                <p className="text-sm text-foreground/70 uppercase tracking-wider">Weddings</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">10+</h4>
                <p className="text-sm text-foreground/70 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">50+</h4>
                <p className="text-sm text-foreground/70 uppercase tracking-wider">Awards</p>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
          <div className="relative h-[600px] w-full hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-3/4 h-[450px] rounded-lg overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* beautiful wedding couple laughing portrait */}
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80"
                alt="Wedding couple"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-[60%] h-[350px] rounded-lg overflow-hidden border-8 border-background shadow-2xl"
            >
              {/* elegant wedding dress details */}
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
                alt="Wedding details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary opacity-50" />
            <div className="absolute -top-6 left-1/4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-50" />
          </div>
          
          {/* Mobile Image Fallback */}
          <div className="md:hidden mt-10">
            {/* beautiful wedding couple laughing portrait */}
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80"
              alt="Wedding couple"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
