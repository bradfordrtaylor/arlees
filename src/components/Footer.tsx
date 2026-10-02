import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold italic mb-3">Freshly Squeezed News</h3>
          <p className="text-secondary-foreground/70 text-sm mb-6">
            Join the <span className="font-brand">Arlee's</span> community and receive 10% off your first order. Get exclusive promos, wellness tips, and what's fresh.
          </p>
          <a
            href="https://www.toasttab.com/arlees-raw-blends-trenton/marketing-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8">
              SIGN ME UP
            </Button>
          </a>
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
              <Link to="/find-us" className="block hover:text-primary transition-colors">Find Us</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/catering" className="block hover:text-primary transition-colors">Catering</Link>
              <Link to="/careers" className="block hover:text-primary transition-colors">Now Hiring</Link>
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
                <p>Monday: Closed</p>
                <p>Tuesday–Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.instagram.com/arleesrawblends/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/arleesrawblends/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/arleesrawblends" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="mailto:Sales@arleesrawblends.com" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <h4 className="font-heading text-lg font-semibold mb-3">Order Online</h4>
            <div className="text-sm text-secondary-foreground/70 space-y-1">
              <p>100% Organic · Vegan · Raw</p>
              <p className="text-xs">Delivery available via DoorDash</p>
              <a
                href="https://order.toasttab.com/online/arlees-raw-blends-trenton"
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
