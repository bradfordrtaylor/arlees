import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
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
              <Link to="/product-information" className="block hover:text-primary transition-colors">Product Information</Link>
              <Link to="/cleanses" className="block hover:text-primary transition-colors">Cleanses</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Blog</Link>
              <Link to="/find-us" className="block hover:text-primary transition-colors">Find Us</Link>
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
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Order Online</h4>
            <div className="text-sm text-secondary-foreground/70 space-y-1">
              <p>100% Organic · Vegan · Raw</p>
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
