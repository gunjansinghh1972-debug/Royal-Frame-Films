import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const inputClass = `
  w-full bg-transparent px-0 py-3 text-sm text-foreground
  border-0 border-b border-border/50
  focus:outline-none focus:border-[#D4AF37]
  placeholder:text-muted-foreground/50
  transition-colors duration-300
  font-sans
`;

const labelClass = "block text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans mb-1";

const eventTypeLabels: Record<string, string> = {
  wedding: "Wedding",
  "pre-wedding": "Pre-Wedding Shoot",
  anniversary: "Anniversary",
  other: "Other Event",
};

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const eventLabel = eventTypeLabels[form.eventType] || form.eventType;

    const text = [
      `Hello Royal Frame Weddings! 👋`,
      ``,
      `I'd like to inquire about your services. Here are my details:`,
      ``,
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `📧 Email: ${form.email}`,
      `📅 Event Date: ${form.date}`,
      `🎉 Event Type: ${eventLabel}`,
      ``,
      `💬 Message:`,
      form.message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(url, "_blank", "noopener,noreferrer");
      setForm({ name: "", phone: "", email: "", date: "", eventType: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] label-cinematic mb-4"
          >
            Let's Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
          >
            Book Your <span className="text-gradient-gold">Date</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground text-base"
          >
            Fill out the form below and connect with us instantly on WhatsApp.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
          style={{
            background: "hsl(var(--card))",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "2px",
            padding: "3rem",
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#D4AF37]/40" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[#D4AF37]/40" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-[#D4AF37]/40" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#D4AF37]/40" />

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John & Jane Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Event Date</label>
                <input
                  required
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Event Type</label>
                <select
                  required
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer appearance-none`}
                  style={{ background: "transparent" }}
                >
                  <option value="" disabled>Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="pre-wedding">Pre-Wedding Shoot</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other Event</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Message &amp; Details</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your venue, themes, and what you envision..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold px-16 py-4 text-sm flex items-center gap-3 disabled:opacity-60 rounded-sm"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#0a0a0a]/40 border-t-[#0a0a0a] rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send via WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
