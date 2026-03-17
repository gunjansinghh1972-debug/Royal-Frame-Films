import { Instagram, Facebook, Youtube, Crown } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = ["Home", "About", "Services", "Portfolio", "Packages", "Testimonials"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10" style={{ background: "#030303", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      {/* Background gold glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse at center, #D4AF37, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Crown className="w-6 h-6" style={{ color: "#D4AF37" }} />
              <span className="font-serif text-xl font-bold text-foreground">
                Royal Frame<span style={{ color: "#D4AF37" }}>.</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-[1.9] max-w-sm mb-8">
              Capturing love stories, one frame at a time. Luxury wedding photography and cinematic filmmaking — turning your most cherished moments into timeless art.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "1px",
                    background: "rgba(212,175,55,0.04)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="label-cinematic text-foreground/60 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-[#D4AF37] transition-colors duration-200 font-sans flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px group-hover:w-6 transition-all duration-300" style={{ background: "#D4AF37" }} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div className="md:col-span-3">
            <h4 className="label-cinematic text-foreground/60 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li>+91 98765 43210</li>
              <li>hello@royalframeweddings.com</li>
              <li className="leading-relaxed">42 Film Street, Connaught Place,<br />New Delhi - 110001</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-muted-foreground font-sans tracking-wide">
            © {new Date().getFullYear()} Royal Frame Weddings. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            Capturing love stories, one frame at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
