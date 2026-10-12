import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categories, categoryHref, TOAST_ORDER_URL } from "@/data/menu";

const ProductInformation = () => {
  return (
    <Layout>
      <section className="section-padding mx-auto max-w-6xl">
        <h1 className="mb-4 text-center font-heading text-4xl font-bold md:text-5xl">Product Information</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Everything we make is 100% organic, vegan, raw, gluten-free, and GMO-free. Made fresh daily. Choose a category to see what we offer.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={categoryHref(c)}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-2xl font-bold group-hover:text-primary">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-muted-foreground">Ready to try it for yourself?</p>
          <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary font-bold text-primary-foreground hover:bg-primary/90">
              Order Now
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInformation;
