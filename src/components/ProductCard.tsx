import type { Product, Vessel } from "@/data/menu";

// Perceived brightness check so light items (almond, coconut, vanilla) get an outline.
const isLight = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 200;
};
const edge = (c: string) => (isLight(c) ? "rgba(0,0,0,0.18)" : "none");

type IconProps = { color: string; className?: string };

const Bottle = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 40 72" className={className} aria-hidden="true">
    <rect x="11" y="2" width="18" height="9" rx="2" fill="#1c1c1c" />
    <rect x="13" y="11" width="14" height="5" fill={color} opacity="0.85" />
    <rect x="4" y="16" width="32" height="54" rx="6" fill={color} stroke={edge(color)} strokeWidth="1" />
    <rect x="9" y="30" width="22" height="22" rx="2" fill="rgba(255,255,255,0.22)" />
    <rect x="7" y="20" width="3" height="44" rx="1.5" fill="rgba(255,255,255,0.35)" />
  </svg>
);

const Cup = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 44 72" className={className} aria-hidden="true">
    <rect x="25" y="0" width="3" height="20" rx="1.5" fill="#1c1c1c" transform="rotate(12 26 10)" />
    <path d="M5 18 Q22 6 39 18 Z" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
    <rect x="3" y="17" width="38" height="4" rx="2" fill="rgba(0,0,0,0.18)" />
    <path d="M6 22 L38 22 L34 70 L10 70 Z" fill={color} stroke={edge(color)} strokeWidth="1" />
    <circle cx="22" cy="44" r="8" fill="#ED8D1F" stroke="#fff" strokeWidth="1.5" />
    <rect x="9" y="25" width="3" height="40" rx="1.5" fill="rgba(255,255,255,0.35)" transform="rotate(-4 10 45)" />
  </svg>
);

// Clear bowl, filled to the top, with fruit toppings.
const Bowl = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
    <path d="M3 18 Q32 62 61 18 Z" fill={color} stroke={edge(color)} strokeWidth="1" />
    <ellipse cx="32" cy="18" rx="29" ry="8" fill={color} />
    <ellipse cx="32" cy="17" rx="27" ry="6.5" fill="rgba(255,255,255,0.18)" />
    <circle cx="18" cy="16" r="3.2" fill="#d6304a" />
    <circle cx="25" cy="13" r="2.6" fill="#2f3f8f" />
    <circle cx="33" cy="17" r="3.2" fill="#f2b51f" />
    <circle cx="41" cy="13" r="2.6" fill="#d6304a" />
    <circle cx="47" cy="17" r="2.8" fill="#fbf6e9" />
    <path d="M10 26 Q32 52 54 26" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
  </svg>
);

// Deli container with a lid, for dips and spreads.
const Tub = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 52 48" className={className} aria-hidden="true">
    <rect x="2" y="8" width="48" height="7" rx="3" fill="rgba(0,0,0,0.12)" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    <path d="M5 15 L47 15 L43 46 L9 46 Z" fill={color} stroke={edge(color)} strokeWidth="1" />
    <rect x="14" y="24" width="24" height="12" rx="2" fill="rgba(255,255,255,0.75)" />
    <rect x="9" y="17" width="3" height="26" rx="1.5" fill="rgba(255,255,255,0.35)" />
  </svg>
);

// Round raw pizza on a kale crust.
const Pizza = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
    <circle cx="28" cy="28" r="26" fill="#6f8f3a" />
    <circle cx="28" cy="28" r="21" fill={color} />
    <circle cx="20" cy="20" r="3.5" fill="#7a5a3c" />
    <circle cx="35" cy="18" r="3" fill="#2f6a24" />
    <circle cx="38" cy="32" r="3.5" fill="#7a5a3c" />
    <circle cx="22" cy="36" r="3" fill="#2f6a24" />
    <circle cx="29" cy="27" r="2.5" fill="#f3efe2" />
  </svg>
);

// Side view of a cake slice: crust, filling, topping.
const Slice = ({ color, className }: IconProps) => (
  <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
    <path d="M4 34 L60 34 L60 42 L4 42 Z" fill="#9a6a3e" />
    <path d="M4 34 L60 12 L60 34 Z" fill={color} stroke={edge(color)} strokeWidth="1" />
    <path d="M4 34 L60 12" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
    <circle cx="48" cy="14" r="3.2" fill="#d6304a" />
    <circle cx="54" cy="11.5" r="2.6" fill="#2f3f8f" />
  </svg>
);

const ICONS: Record<Vessel, (p: IconProps) => JSX.Element> = {
  bottle: Bottle,
  cup: Cup,
  bowl: Bowl,
  tub: Tub,
  pizza: Pizza,
  slice: Slice,
};

const DEFAULT_SIZE: Record<Vessel, string> = {
  bottle: "h-16 w-auto",
  cup: "h-16 w-auto",
  bowl: "w-14 h-auto",
  tub: "w-12 h-auto",
  pizza: "w-12 h-auto",
  slice: "w-14 h-auto",
};

export const VesselIcon = ({ vessel = "bottle", color, className }: { vessel?: Vessel; color: string; className?: string }) => {
  const Icon = ICONS[vessel];
  return <Icon color={color} className={className ?? DEFAULT_SIZE[vessel]} />;
};

const ProductCard = ({ product }: { product: Product }) => {
  const vessel = product.vessel ?? "bottle";
  const isShot = vessel === "bottle" && product.size === "2 oz";
  return (
    <div
      className="relative flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundImage: `linear-gradient(135deg, ${product.color}1f, transparent 60%)` }}
    >
      <div className="flex w-14 shrink-0 justify-center pt-1">
        <VesselIcon vessel={vessel} color={product.color} className={isShot ? "h-12 w-auto" : undefined} />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-lg font-semibold leading-tight">{product.name}</h3>
          {product.seasonal && (
            <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-secondary">
              Seasonal
            </span>
          )}
          {product.note && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
              {product.note}
            </span>
          )}
        </div>
        {product.flavors && (
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
            <span className="font-semibold">Flavors:</span> {product.flavors}
          </p>
        )}
        {product.ingredients && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.ingredients}</p>
        )}
        {product.size && <p className="mt-2 text-xs font-medium text-muted-foreground/80">{product.size}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
