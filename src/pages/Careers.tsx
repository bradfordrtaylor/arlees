import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Careers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    availability: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", position: "", availability: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center">Now Hiring</h1>

        <div className="bg-muted rounded-xl p-8 md:p-10 mb-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="font-brand font-semibold text-foreground">Arlee's Raw Blends</span> is dedicated in providing healthy, flavorful cold-pressed juice blends and raw and vegan foods. Our products are 100% organic, non-GMO, non-dairy, raw and vegan. Our specialty foods items are made fresh daily. Arlee's products include juices, salads, high-energy snacks, and diet-friendly desserts for the person on the go.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Arlee's is looking for full and part-time employees who are positive, professional, detail-oriented, and customer-friendly to join our team. Our employees must be passionate and eager to learn about organic, raw foods, cold-pressed juices, and plant-based cuisine.
          </p>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">Apply Below!</h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="(555) 555-5555" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position Interested In</Label>
              <Input id="position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} placeholder="e.g. Team Member, Juice Bar" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Availability</Label>
            <Input id="availability" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} placeholder="e.g. Full-time, Part-time, Weekends" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell Us About Yourself</Label>
            <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Why do you want to join Arlee's? Share your experience and passion for healthy living..." />
          </div>

          <div className="text-center">
            <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10">
              Submit Application
            </Button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Careers;
