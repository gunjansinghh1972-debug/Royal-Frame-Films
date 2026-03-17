import { Instagram, Facebook, Youtube, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Royal Frame Weddings
            </h3>
            <p className="text-muted-foreground max-w-md">
              Capturing love stories, one frame at a time. We specialize in luxury wedding photography and cinematic filmmaking, turning your moments into timeless art.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Packages"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Royal Frame Weddings. All Rights Reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-primary" /> for true love.
          </p>
        </div>
      </div>
    </footer>
  );
}
