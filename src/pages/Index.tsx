import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-bottles-vibrant.jpg";
import foodSpreadImg from "@/assets/food-spread-vibrant.jpg";
import cleanseImg from "@/assets/cleanse-bottles-enhanced.jpg";
import cheesecakesImg from "@/assets/cheesecakes-enhanced.jpg";
import bottlesShelfImg from "@/assets/bottles-shelf-vibrant.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Arlee's Raw Blends cold pressed juice bottles" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Trenton, NJ</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-4">
            <span className="font-heading">Your Health </span>
            <span className="text-primary font-heading">Matters</span>
          </h1>
          <p className="text-background/80 text-lg md:text-xl mb-3">
            Nourish Your Body With <span className="font-brand">Arlee's Raw Blends</span>
          </p>
          <p className="text-primary/90 text-sm md:text-base font-medium mb-8">
            Always Fresh · Healthy · 100% Organic · Vegan · Raw · Gluten & GMO Free
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://order.toasttab.com/online/arlees-raw-blends-trenton" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8">
                Order Now
              </Button>
            </a>
            <Link to="/cleanses">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold border-0">
                Explore Cleanses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="section-padding max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Who Are We</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
          At <span className="font-brand font-semibold text-foreground">Arlee's Raw Blends</span>, we make all our juices and foods fresh daily using only 100% organic, vegan, and raw ingredients from trusted partners. Every sip and bite is not just delicious—it's packed with real health benefits you can feel.
        </p>
        <p className="text-primary font-heading text-xl italic">Raw Food, Raw Soul.</p>
      </section>

      {/* Cold Pressed Juices */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Organic Cold Pressed Juices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cold pressed juices are made fresh daily from 100% organic fruits and vegetables. We use a hydraulic press that gently squeezes every drop without heat or oxidation, preserving maximum nutrients, enzymes, and vibrant flavor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our proprietary blends are carefully crafted to taste amazing and support your well-being, so you get pure, worry-free goodness in every bottle.
            </p>
          </div>
          <img src={bottlesShelfImg} alt="Arlee's cold pressed juices on display" className="rounded-lg shadow-lg" width={1200} height={800} loading="lazy" />
        </div>
      </section>

      {/* Cleanses Preview */}
      <section className="section-padding max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={cleanseImg} alt="Arlee's cleanse juice bottles" className="rounded-lg shadow-lg order-2 md:order-1" width={1200} height={800} loading="lazy" />
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Cleanses</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Looking for a fun, tasty way to reset and recharge? Choose from gentle RELIEVE, balanced RELEASE, or the veggie-powered REFINE for a deeper detox. Each cleanse delivers real health benefits—more energy, better digestion, and a fresh start.
            </p>
            <Link to="/cleanses">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Learn More About Cleanses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Raw Foods */}
      <section className="section-padding bg-muted">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">100% Organic Raw Foods</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From vibrant salads and collard green wraps to raw vegan pizza and crunchy snacks, everything is made without gluten, GMOs, preservatives or refined sugars. Our wraps are made exclusively with fresh collard greens—never bread or tortillas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Enjoy pure, delicious flavors and real health benefits in every bite.
            </p>
          </div>
          <img src={foodSpreadImg} alt="Arlee's raw vegan food spread - pizza, wraps, salad, juices" className="rounded-lg shadow-lg" width={1200} height={800} loading="lazy" />
        </div>
      </section>

      {/* Desserts */}
      <section className="section-padding max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={cheesecakesImg} alt="Arlee's raw vegan cheesecakes and mini desserts" className="rounded-lg shadow-lg order-2 md:order-1" width={1200} height={800} loading="lazy" />
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Vegan Desserts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Made with 100% organic, raw ingredients and free from gluten, GMOs, and refined sugars. Enjoy creamy cashew cheesecake slices, rich chocolate mousse with brownie, tangy key lime pie squares, decadent almond butter cups, and more—guilt-free indulgence that tastes amazing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground section-padding text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Nourish Your Body?</h2>
        <p className="text-secondary-foreground/70 mb-4 max-w-xl mx-auto">
          Order fresh juices, raw foods, and vegan desserts online for pickup or delivery via DoorDash.
        </p>
        <a href="https://order.toasttab.com/online/arlees-raw-blends-trenton" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10">
            Order Now
          </Button>
        </a>
      </section>
    </Layout>
  );
};

export default Index;
