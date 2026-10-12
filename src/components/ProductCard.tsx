import type { Product } from "@/data/menu";

// Perceived brightness check so light juices (almond, coconut, lemon) get an outline.
const isLight = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 200;
};

const Bottle = ({ color, small }: { color: string; small?: boolean }) => (
  <svg
    viewBox="0 0 40 72"
    className={small ? "h-12 w-auto" : "h-16 w-auto"}
    aria-hidden="true"
  >
    {/* cap */}
    <rect x="11" y="2" width="18" height="9" rx="2" fill="#1c1c1c" />
    {/* neck */}
    <rect x="13" y="11" width="14" height="5" fill={color} opacity="0.85" />
    {/* square body, like Arlee's glass bottles */}
    <rect
      x="4"
      y="16"
      width="32"
      height="54"
      rx="6"
      fill={color}
      stroke={isLight(color) ? "rgba(0,0,0,0.18)" : "none"}
      strokeWidth="1"
    />
    {/* label */}
    <rect x="9" y="30" width="22" height="22" rx="2" fill="rgba(255,255,255,0.22)" />
    {/* glass highlight */}
    <rect x="7" y="20" width="3" height="44" rx="1.5" fill="rgba(255,255,255,0.35)" />
  </svg>
);

export const Cup = ({ color, className = "h-16 w-auto" }: { color: string; className?: string }) => (
  <svg viewBox="0 0 44 72" className={className} aria-hidden="true">
    {/* straw */}
    <rect x="25" y="0" width="3" height="20" rx="1.5" fill="#1c1c1c" transform="rotate(12 26 10)" />
    {/* dome lid */}
    <path d="M5 18 Q22 6 39 18 Z" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
    <rect x="3" y="17" width="38" height="4" rx="2" fill="rgba(0,0,0,0.18)" />
    {/* tapered cup with smoothie */}
    <path
      d="M6 22 L38 22 L34 70 L10 70 Z"
      fill={color}
      stroke={isLight(color) ? "rgba(0,0,0,0.18)" : "none"}
      strokeWidth="1"
    />
    {/* Arlee's round sticker */}
    <circle cx="22" cy="44" r="8" fill="#ED8D1F" stroke="#fff" strokeWidth="1.5" />
    <rect x="9" y="25" width="3" height="40" rx="1.5" fill="rgba(255,255,255,0.35)" transform="rotate(-4 10 45)" />
  </svg>
);

const ProductCard = ({ product }: { product: Product }) => {
  const isShot = product.size === "2 oz";
  return (
    <div
      className="relative flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundImage: `linear-gradient(135deg, ${product.color}1f, transparent 60%)` }}
    >
      <div className="flex w-12 shrink-0 justify-center pt-1">
        {product.vessel === "cup" ? <Cup color={product.color} /> : <Bottle color={product.color} small={isShot} />}
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
        {product.ingredients && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.ingredients}</p>
        )}
        {product.description && (
          <p className={`text-sm leading-relaxed text-muted-foreground ${product.ingredients ? "mt-1" : "mt-1.5"}`}>
            {product.description}
          </p>
        )}
        {product.size && <p className="mt-2 text-xs font-medium text-muted-foreground/80">{product.size}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
