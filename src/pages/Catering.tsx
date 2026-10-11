import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import cateringImg from "@/assets/catering.jpg";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwlvqwww";

const Catering = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", details: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Arlee's Catering Inquiry: ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          event_date: form.date,
          estimated_guests: form.guests,
          details: form.details,
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch about your catering request.");
        setForm({ name: "", email: "", phone: "", date: "", guests: "", details: "" });
      } else {
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

      <section className="section-padding max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6">Bring <span className="font-brand">Arlee's Raw Blends</span> to Your Next Event</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Whether it's a corporate event, birthday celebration, wellness retreat, or any special occasion, we offer full catering services with our signature cold pressed juices, raw vegan foods, salads, collard green wraps, and desserts.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            All catering options are 100% organic, vegan, raw, gluten-free, and GMO-free. We customize menus to fit your event.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
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

        {/* Inquiry Form */}
        <div className="bg-muted rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">Request a Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Input
                type="date"
                placeholder="Event Date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
            <Input
              placeholder="Estimated Number of Guests"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            />
            <Textarea
              placeholder="Tell us about your event and what you're looking for..."
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              rows={4}
            />
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Submit Catering Inquiry"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;
