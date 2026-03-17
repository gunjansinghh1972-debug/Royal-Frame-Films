import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully",
        description: "Thank you! We'll contact you within 24 hours.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-14 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Book Your <span className="text-gradient-gold">Date</span>
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and let's start planning your dream visual story.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John & Jane"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Event Date</label>
                <input
                  required
                  type="date"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground/80">Event Type</label>
                <select 
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                >
                  <option value="" disabled selected>Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other Event</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground/80">Message & Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your venue, themes, and what you're looking for..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-gold text-background font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Send Inquiry"
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
