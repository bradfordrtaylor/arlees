import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Gift, CreditCard, RefreshCw } from "lucide-react";

const tiers = [
  { amount: "$100", discount: "5%", savings: "$5", color: "bg-primary/10 border-primary/30" },
  { amount: "$250", discount: "10%", savings: "$25", color: "bg-primary/20 border-primary/40" },
  { amount: "$500", discount: "20%", savings: "$100", color: "bg-primary/30 border-primary/50" },
];

const GiftCards = () => {
  return (
    <Layout>
      <section className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Prepay & Save</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Load up an <span className="font-brand font-semibold text-foreground">Arlee's Raw Blends</span> gift card and save on every order. Use it over and over — when your balance gets low, simply reload and keep saving.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          <div className="text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-1">Choose Your Amount</h3>
            <p className="text-muted-foreground text-sm">Pick a tier that works for you and get an instant discount.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-1">Use It Anytime</h3>
            <p className="text-muted-foreground text-sm">Order in-store or online. Your balance is always ready.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <RefreshCw className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold mb-1">Reload & Save Again</h3>
            <p className="text-muted-foreground text-sm">When your balance is low, reload the same card and keep the savings going.</p>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div key={tier.amount} className={`rounded-xl border-2 p-8 text-center ${tier.color}`}>
              <p className="text-muted-foreground text-sm font-medium mb-1">Prepay</p>
              <p className="font-heading text-4xl font-bold mb-2">{tier.amount}</p>
              <p className="text-primary font-bold text-xl mb-1">Save {tier.discount}</p>
              <p className="text-muted-foreground text-sm">You save {tier.savings}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Purchase a digital gift card online and send it instantly.</p>
          <a href="https://order.toasttab.com/egiftcards/arlees-raw-blends-trenton" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Buy a Gift Card
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default GiftCards;
