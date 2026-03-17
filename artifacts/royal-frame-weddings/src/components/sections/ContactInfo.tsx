import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="py-16 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-serif text-xl mb-2">Call Us</h4>
            <p className="text-muted-foreground">+91 98765 43210</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-serif text-xl mb-2">Email Us</h4>
            <p className="text-muted-foreground">hello@royalframeweddings.com</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-serif text-xl mb-2">Visit Studio</h4>
            <p className="text-muted-foreground">42 Film Street, Connaught Place<br/>New Delhi - 110001</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
