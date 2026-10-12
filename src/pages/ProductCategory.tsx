import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard, { VesselIcon } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { categories, categoryHref, TOAST_ORDER_URL } from "@/data/menu";

const ProductCategory = () => {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/product-information" replace />;
  if (category.href) return <Navigate to={category.href} replace />;

  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <Layout>
      {/* Hero */}
      {category.heroArt ? (
        <section className="relative overflow-hidden bg-secondary">
          <div
            className="absolute inset-0 opacity-60"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(33 90% 50% / 0.35), transparent 45%), radial-gradient(circle at 85% 80%, hsl(33 90% 50% / 0.25), transparent 40%)" }}
          />
          <div className="relative z-10 mx-auto flex min-h-[300px] max-w-6xl flex-col items-center justify-center gap-6 px-6 py-12 md:flex-row md:justify-between md:gap-10">
            <div className="text-center md:text-left">
              <Link to="/product-information" className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/70 hover:text-secondary-foreground">
                Product Information
              </Link>
              <h1 className="mt-2 font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">{category.title}</h1>
              <p className="mt-2 max-w-md text-secondary-foreground/80">{category.tagline}</p>
            </div>
            <div className="flex items-end gap-2 md:gap-3">
              {category.heroArt.colors.map((c, i) => (
                <VesselIcon
                  key={c + i}
                  vessel={category.heroArt!.vessel}
                  color={c}
                  className={`drop-shadow-lg ${
                    category.heroArt!.vessel === "cup"
                      ? `w-auto ${i % 2 === 0 ? "h-24 md:h-32" : "h-20 md:h-28"}`
                      : `h-auto ${i % 2 === 0 ? "w-16 md:w-24" : "w-14 md:w-20"}`
                  } ${i > 4 ? "hidden sm:block" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
      <section className="relative flex h-[34vh] min-h-[260px] items-center justify-center overflow-hidden">
          <img src={category.image} alt={category.title} className="absolute inset-0 h-full w-full object-cover" width={1200} height={800} />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 px-6 text-center">
            <Link to="/product-information" className="text-xs font-semibold uppercase tracking-widest text-background/70 hover:text-background">
              Product Information
            </Link>
            <h1 className="mt-2 font-heading text-4xl font-bold text-background md:text-5xl">{category.title}</h1>
            <p className="mt-2 text-background/80">{category.tagline}</p>
          </div>
        </section>
      )}

      {category.sections ? (
        <>
          {/* Section jump bar */}
          {category.sections.length > 1 && (
          <div className="sticky top-16 z-30 border-b bg-card/95 backdrop-blur md:top-20">
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 md:px-6">
              {category.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
          )}

          <section className="section-padding mx-auto max-w-6xl">
            <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">{category.description}</p>

            <div className="space-y-16">
              {category.sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-40">
                  <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b pb-3">
                    <h2 className="font-heading text-2xl font-bold md:text-3xl">{s.title}</h2>
                    {s.blurb && <p className="text-sm text-muted-foreground">{s.blurb}</p>}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {s.products.map((p) => (
                      <ProductCard key={p.name} product={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="section-padding mx-auto max-w-3xl text-center">
          <p className="leading-relaxed text-muted-foreground">{category.description}</p>
        </section>
      )}

      {/* Order CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-12 text-center">
        <div className="rounded-xl bg-muted p-8 md:p-10">
          <h2 className="font-heading text-2xl font-bold">See prices and order</h2>
          <p className="mt-2 text-muted-foreground">
            Our full {category.title.toLowerCase()} menu with current prices is on our online ordering page. Pickup and delivery from Trenton.
          </p>
          <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
            <Button size="lg" className="bg-primary font-bold text-primary-foreground hover:bg-primary/90">
              Order Now
            </Button>
          </a>
        </div>
      </section>

      {/* Other categories */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">More from Arlee's</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to={categoryHref(c)}
              className="rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
