import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/arlees-logo.png";

type NavLink = {
  label: string;
  path: string;
  external?: boolean;
  dropdown?: { label: string; path: string }[];
};

const mainLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Product Information", path: "/product-information" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Our Story", path: "/about" },
      { label: "Find Us", path: "/find-us" },
      { label: "FAQ", path: "/faq" },
      { label: "Blog", path: "/blog" },
    ],
  },
  { label: "Cleanses", path: "/cleanses" },
  { label: "Gift Cards", path: "/gift-cards" },
  { label: "Catering", path: "/catering" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="w-full px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Arlee's Raw Blends" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary inline-flex items-center gap-1 ${
                    ["/about", "/faq", "/blog", "/find-us"].includes(location.pathname)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-0 bg-card border rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                          location.pathname === sub.path ? "text-primary font-semibold" : "text-muted-foreground"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://order.toasttab.com/online/arlees-raw-blends-trenton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Order Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card px-6 pb-6 pt-4 space-y-2">
          {mainLinks.map((link) =>
            link.dropdown ? (
              <div key={link.path}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium ${
                    ["/about", "/faq", "/blog", "/find-us"].includes(location.pathname)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm ${
                          location.pathname === sub.path ? "text-primary font-semibold" : "text-muted-foreground"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://order.toasttab.com/online/arlees-raw-blends-trenton"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full mt-2 bg-primary text-primary-foreground">Order Now</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
