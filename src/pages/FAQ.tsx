import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is everything sold at Arlee's organic?",
    a: "Yes! Everything we sell at Arlee's Raw Blends is 100% organic. We source all of our produce from trusted local organic suppliers to ensure the highest quality in every product.",
  },
  {
    q: "Are you vegan friendly?",
    a: "Absolutely. All of our juices, foods, and desserts are 100% vegan. We use no animal products or byproducts in anything we make.",
  },
  {
    q: "What is cold-pressed juice?",
    a: "Cold-pressed juice is made using a hydraulic press that gently extracts juice from fruits and vegetables without generating heat. This process preserves the maximum amount of vitamins, minerals, enzymes, and nutrients — giving you the freshest, most nutritious juice possible.",
  },
  {
    q: "Do you make the juice?",
    a: "Yes, we make all of our juices in-house, fresh daily. Every bottle is pressed, blended, and bottled right at our location in Trenton, NJ.",
  },
  {
    q: "Where do your ingredients come from?",
    a: "We are committed to using locally grown, 100% organic produce. We work with trusted local suppliers whose vision aligns with our commitment to quality, sustainability, and community health.",
  },
  {
    q: "Should I drink your juices if I am pregnant or immunocompromised?",
    a: "Our juices are raw and unpasteurized, which means they retain maximum nutrients but may not be suitable for everyone. If you are pregnant, nursing, or immunocompromised, we recommend consulting with your healthcare provider before consuming raw, unpasteurized juices.",
  },
  {
    q: "How many days can I keep your juices?",
    a: "Our cold-pressed juices are best enjoyed within 3–5 days of purchase when kept refrigerated. Because we don't use preservatives or pasteurization, freshness is key to getting the most nutrients and best flavor.",
  },
  {
    q: "How do I do a juice cleanse?",
    a: "We offer three cleanse levels — Relieve, Release, and Refine — each designed for different experience levels. You can also build your own cleanse from any of our juices in stock. Visit our Cleanses page for full details on each program.",
  },
  {
    q: "What goes into the price of the juice?",
    a: "Our juices are made with 100% organic produce, which costs significantly more than conventional ingredients. Combined with our cold-press process, daily production, and commitment to quality, every bottle represents real, nutrient-dense food — not watered-down concentrate.",
  },
  {
    q: "What kind of bottles do you use?",
    a: "We use 16 oz square, clear, recyclable PET juice bottles. They are food-grade, BPA-free, and FDA certified for beverages. These bottles are widely accepted in recycling programs, making them an eco-friendly choice.",
  },
  {
    q: "What should I do with my empty bottles?",
    a: "Our bottles are recyclable! Simply rinse them out and place them in your recycling bin. They are made from PET plastic, which is widely accepted in recycling programs.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes! We offer delivery through DoorDash, which integrates directly with our Toast ordering system. Simply place your order online and select delivery at checkout.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes! We offer prepaid gift cards with savings — $100 gets you 5% off, $250 gets you 10% off, and $500 gets you 20% off. Visit our Gift Cards page or ask in-store for details.",
  },
  {
    q: "Do you offer catering?",
    a: "Yes, we offer full catering services for corporate events, parties, wellness retreats, and more. Visit our Catering page to fill out an inquiry form and we'll get back to you with a custom quote.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="section-padding max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-center">FAQs</h1>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="font-heading text-left font-semibold text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
};

export default FAQ;
