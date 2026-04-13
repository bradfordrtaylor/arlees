import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import cateringImg from "@/assets/catering.jpg";

const Catering = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={cateringImg} alt="Catering spread" className="absolute inset-0 w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background">Catering</h1>
          <p className="text-background/80 mt-2">Organic, Raw, Vegan for Every Event</p>
        </div>
      </section>

      <section className="section-padding max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-6">Bring <span className="font-brand">Arlee's Raw Blends</span> to Your Next Event</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
          Whether it's a corporate event, birthday celebration, wellness retreat, or any special occasion, Arlee's Raw Blends offers full catering services with our signature cold pressed juices, raw vegan foods, salads, wraps, and desserts.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          All of our catering options are 100% organic, vegan, raw, gluten-free, and GMO-free. We customize menus to fit your event size and dietary needs.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Juice Packages", desc: "Cold pressed juice selections for groups of any size." },
            { title: "Food Platters", desc: "Collard green wraps, salads, raw vegan pizza, nori rolls, and snacks." },
            { title: "Dessert Trays", desc: "Cashew cheesecake slices, chocolate mousse with brownie, key lime pie squares, and more." },
          ].map((item) => (
            <div key={item.title} className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mb-6">Contact us to discuss your event and get a custom quote.</p>
        <a href="https://order.toasttab.com/online/arlees-raw-blends" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            Get in Touch
          </Button>
        </a>
      </section>
    </Layout>
  );
};

export default Catering;
