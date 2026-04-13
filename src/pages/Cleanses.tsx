import Layout from "@/components/Layout";
import cleanseImg from "@/assets/cleanse-bottles.jpg";
import { Button } from "@/components/ui/button";

const blends = {
  relieve: {
    title: "Relieve",
    description: "For the person with little to no cleansing experience. Designed to be easy on your system so you can come back stronger!",
    juices: [
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger" },
      { name: "Pineapple Blend", ingredients: "Pineapple, Apple, Lime, Mint" },
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger" },
      { name: "Lemon Blend", ingredients: "Lemon, Distilled Water, Cayenne, Dates" },
      { name: "Beet Blend", ingredients: "Beet, Apple, Carrot, Lemon, Ginger" },
      { name: "Almond Blend", ingredients: "Sprouted Almonds, Distilled Water, Cinnamon, Vanilla, Dates" },
    ],
  },
  release: {
    title: "Release",
    description: "For the individual who eats whole foods and works out regularly. A deeper cleanse for those not quite ready for Refine.",
    juices: [
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger" },
      { name: "Pineapple Blend", ingredients: "Pineapple, Apple, Lime, Mint" },
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger" },
      { name: "Lemon Blend", ingredients: "Lemon, Distilled Water, Cayenne, Dates" },
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger" },
      { name: "Almond Blend", ingredients: "Sprouted Almonds, Distilled Water, Cinnamon, Vanilla, Dates" },
    ],
  },
  refine: {
    title: "Refine",
    description: "The most vegetable-based cleanse. For those who love detox and want the most optimal results. Not for the lighthearted!",
    juices: [
      { name: "Kale Blend #3", ingredients: "Kale, Cucumber, Parsley, Mint, Lemon, Ginger" },
      { name: "Kale Blend #3", ingredients: "Kale, Cucumber, Parsley, Mint, Lemon, Ginger" },
      { name: "Kale Blend #3", ingredients: "Kale, Cucumber, Parsley, Mint, Lemon, Ginger" },
      { name: "Lime Blend", ingredients: "Lime, Distilled Water, Ginger, Dates" },
      { name: "Kale Blend #3", ingredients: "Kale, Cucumber, Parsley, Mint, Lemon, Ginger" },
      { name: "Almond Blend", ingredients: "Sprouted Almonds, Distilled Water, Cinnamon, Vanilla, Dates" },
    ],
  },
};

const Cleanses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img src={cleanseImg} alt="Cleanse juices" className="absolute inset-0 w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background">Our Cleanses</h1>
          <p className="text-background/80 mt-2">100% Organic · Reset & Recharge</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto section-padding space-y-16">
        {Object.values(blends).map((cleanse) => (
          <div key={cleanse.title}>
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">{cleanse.title}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">{cleanse.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cleanse.juices.map((juice, i) => (
                <div key={i} className="bg-card rounded-lg p-5 border shadow-sm">
                  <h3 className="font-heading text-lg font-semibold mb-1">{juice.name}</h3>
                  <p className="text-muted-foreground text-sm">{juice.ingredients}</p>
                </div>
              ))}
            </div>
            <p className="text-primary font-semibold text-sm mt-4">100% ORGANIC</p>
          </div>
        ))}

        {/* Build Your Own */}
        <div className="bg-muted rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Build Your Own Cleanse</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Want to customize your cleanse? Build your own from any of the <span className="font-brand font-semibold text-foreground">Arlee's Raw Blends</span> juices currently in stock. Mix and match your favorite blends to create a cleanse that's perfect for you.
          </p>
          <a href="https://order.toasttab.com/online/arlees-raw-blends" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Order Your Custom Cleanse
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Cleanses;
