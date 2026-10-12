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

const ProductCard = ({ product }: { product: Product }) => {
  const isShot = product.size === "2 oz";
  return (
    <div
      className="relative flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ backgroundImage: `linear-gradient(135deg, ${product.color}1f, transparent 60%)` }}
    >
      <div className="flex w-12 shrink-0 justify-center pt-1">
        <Bottle color={product.color} small={isShot} />
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
        {product.size && <p className="mt-2 text-xs font-medium text-muted-foreground/80">{product.size}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
