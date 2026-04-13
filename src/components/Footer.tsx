import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for joining the Arlee's community! Check your email for 10% off your first order.");
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold italic mb-3">Freshly Squeezed News</h3>
          <p className="text-secondary-foreground/70 text-sm mb-6">
            Join the <span className="font-brand">Arlee's</span> community and receive 10% off your first order. Get exclusive promos, wellness tips, and what's fresh.
          </p>
          <form onSubmit={handleNewsletter} className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-r-none bg-background text-foreground"
            />
            <Button type="submit" className="rounded-l-none bg-foreground text-background hover:bg-foreground/90 font-semibold">
              SIGN ME UP
            </Button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-brand text-2xl font-bold text-primary mb-3">Arlee's Raw Blends</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Fresh Daily. Great Taste. Real Benefits.<br />
              <em className="text-primary/80">Raw Food, Raw Soul.</em>
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
              <Link to="/product-information" className="block hover:text-primary transition-colors">Product Information</Link>
              <Link to="/cleanses" className="block hover:text-primary transition-colors">Cleanses</Link>
              <Link to="/gift-cards" className="block hover:text-primary transition-colors">Gift Cards</Link>
              <Link to="/faq" className="block hover:text-primary transition-colors">FAQ</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/catering" className="block hover:text-primary transition-colors">Catering</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Our Location</h4>
            <div className="text-sm text-secondary-foreground/70 space-y-1">
              <p>25 South Warren St.</p>
              <p>Trenton, NJ 08608</p>
              <p className="mt-2">
                <a href="tel:609-880-1101" className="hover:text-primary transition-colors">609-880-1101</a>
              </p>
              <div className="mt-2 text-xs">
                <p>Mon–Fri: 8:00 AM – 3:00 PM</p>
                <p>Saturday: 9:00 AM – 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              {/* Placeholder links — replace with actual URLs */}
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5V6.93a4.85 4.85 0 01-1-.24z" />
                </svg>
              </a>
            </div>
            <h4 className="font-heading text-lg font-semibold mb-3">Order Online</h4>
            <div className="text-sm text-secondary-foreground/70 space-y-1">
              <p>100% Organic · Vegan · Raw</p>
              <p className="text-xs">Delivery available via DoorDash</p>
              <a
                href="https://order.toasttab.com/online/arlees-raw-blends"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary font-semibold hover:underline"
              >
                Order Now →
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} <span className="font-brand">Arlee's Raw Blends</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
