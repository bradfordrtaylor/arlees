import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <section className="section-padding max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-center">About</h1>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-primary">
            <span className="font-brand">Arlee's</span> Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-brand">Arlee's Raw Blends</span> is committed to be the best and most prominent provider of premium organic juice blends and raw and vegan foods. <span className="font-brand">Arlee's</span> sells only freshly made, healthy products of the highest quality. We reject the belief that healthy eating is synonymous with unpleasant taste. <span className="font-brand">Arlee's</span> insists that its proprietary juice blends and foods are not only good for you, but that they are also good tasting. <span className="font-brand">Arlee's</span> also rejects the premise that healthy and clean eating is a luxury that is limited to the affluent. We believe providing healthy food options to economically diverse communities is not only a good thing to do, but that it is also good business. <span className="font-brand">Arlee's</span> is environmentally conscious and endeavors to align with local suppliers whose vision is consistent with its own.
          </p>
        </div>

        {/* Drink More Juice */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Drink More Juice!</h2>
        </div>

        {/* Why Arlee's */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Why <span className="font-brand">Arlee's Raw Blends</span>?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Local", text: "We are committed to using locally grown produce that is 100% organic. That means delivering an authentic taste that is both crisp and refreshing. It's better for our economy, the environment, and our bodies." },
              { title: "Cold Pressed", text: "By cold pressing our juices, we extract the essential enzymes and micronutrients while preserving the flavor in every sip. We stir up the perfect blend, bottle it up, and have it ready for you to enjoy." },
              { title: "Eco-Friendly Bottles", text: "We use 16 oz square, clear, recyclable PET juice bottles. They're food-grade, BPA-free, FDA certified for beverages, and widely accepted in recycling programs." },
              { title: "Drink Real", text: "Our juices are cold pressed fresh daily from 100% local organic fruits and vegetables. We are proud to say... \"Our juice is just the juice!\"" },
            ].map((card) => (
              <div key={card.title} className="bg-card border rounded-lg p-5 shadow-sm flex flex-col">
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{card.text}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <span className="font-brand">Arlee's Raw Blends</span>™ are New Jersey's premier raw, cold pressed juices. Drinking raw juices is the easiest, fastest and most delicious way to take in essential enzymes and nutrients.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If it's true that you are what you eat, a lot of people might not recognize themselves. Too many products sold in markets, grocery stores and even shops promoting "organic" items feature processed preservatives to extend shelf life. These processes destroy the benefits of natural juice by depleting the concentration of vital enzymes and nutrients.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Drinking <span className="font-brand">Arlee's Raw Blends</span> is not only a tasty investment in your physical health — we like to think that <span className="font-brand">Arlee's</span> juices freshen the mind and soothe the soul.
          </p>
        </div>

        {/* Olympic Story */}
        <div className="bg-muted rounded-xl p-8 md:p-12 mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            How Olympic Athletes Incorporate <span className="font-brand">Arlee's</span> Into Their Diet
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We had the unique opportunity to experience the journey to the Rio Olympic Games in 2016 alongside the Crew team. For years leading up to the Olympics, co-founder Paula Taylor was a homestay for two rowers, who would regularly eat and drink up everything in sight (as you can imagine).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Eventually, <span className="font-brand">Arlee's Raw Blends</span> spread to the rest of the team, with some athletes even electing to work at <span className="font-brand">Arlee's</span> while they were stationed in the area! Grant James, Seth Weil, Henrik Rummel, and Michael Gennaro compete in the men's four at the 2013 World Rowing Championships.
          </p>
        </div>

        {/* FAQ Link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Have more questions?</p>
          <Link to="/faq">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Read Our FAQs
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
