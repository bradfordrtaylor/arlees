import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import productJuicesImg from "@/assets/product-juices.jpg";
import productRawfoodImg from "@/assets/product-rawfood.jpg";
import productDessertsImg from "@/assets/product-desserts.jpg";

const categories = [
  {
    title: "Cold Pressed Juices",
    image: productJuicesImg,
    description: "Made fresh daily from 100% organic fruits and vegetables using a hydraulic cold-press process. No heat, no oxidation — just pure, nutrient-dense juice packed with enzymes and vibrant flavor. Served in our signature 16 oz square bottles.",
    items: ["Kale Blends", "Beet Blend", "Pineapple Blend", "Lemon Blend", "Lime Blend", "Almond Blend"],
  },
  {
    title: "Raw Vegan Foods",
    image: productRawfoodImg,
    description: "Vibrant salads, collard green wraps, raw vegan pizza, nori rolls, and crunchy nutrient-packed snacks. All wraps are made exclusively with fresh collard greens — never bread or tortillas. Everything is made without gluten, GMOs, preservatives, or refined sugars.",
    items: ["Salads", "Collard Green Wraps", "Raw Vegan Pizza", "Nori Rolls", "Snacks"],
  },
  {
    title: "Vegan Desserts",
    image: productDessertsImg,
    description: "Pure, plant-based indulgence made with 100% organic, raw ingredients. Free from gluten, GMOs, and refined sugars.",
    items: ["Cashew Cheesecake Slices", "Chocolate Mousse with Brownie", "Key Lime Pie Squares", "Almond Butter Cups"],
  },
];

const ProductInformation = () => {
  return (
    <Layout>
      <section className="section-padding max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">Product Information</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Everything we make is 100% organic, vegan, raw, gluten-free, and GMO-free. Fresh daily, always delicious.
        </p>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div key={cat.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <img src={cat.image} alt={cat.title} className="rounded-lg shadow-lg md:[direction:ltr]" width={1200} height={800} loading="lazy" />
              <div className="md:[direction:ltr]">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{cat.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to try it for yourself?</p>
          <a href="https://order.toasttab.com/online/arlee-s-raw-blends-trenton-246-nassau-st" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Order Now
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInformation;
