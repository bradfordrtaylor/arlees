import Layout from "@/components/Layout";
import cleanseImg from "@/assets/cleanse-bottles.jpg";
import rawFoodImg from "@/assets/raw-food.jpg";
import dessertsImg from "@/assets/desserts.jpg";

const categories = [
  {
    title: "Cold Pressed Juices",
    image: cleanseImg,
    description: "Made fresh daily from 100% organic fruits and vegetables using a hydraulic cold-press process. No heat, no oxidation — just pure, nutrient-dense juice packed with enzymes and vibrant flavor.",
    items: ["Kale Blends", "Beet Blend", "Pineapple Blend", "Lemon Blend", "Lime Blend", "Almond Blend"],
  },
  {
    title: "Raw Vegan Foods",
    image: rawFoodImg,
    description: "Vibrant salads, wraps, raw vegan pizza, nori rolls, and crunchy nutrient-packed snacks. Everything is made without gluten, GMOs, preservatives, or refined sugars.",
    items: ["Salads", "Wraps", "Raw Vegan Pizza", "Nori Rolls", "Snacks"],
  },
  {
    title: "Vegan Desserts",
    image: dessertsImg,
    description: "Pure, plant-based indulgence made with 100% organic, raw ingredients. Free from gluten, GMOs, and refined sugars.",
    items: ["Cashew Cheesecakes", "Chocolate Mousse Parfaits", "Brownies", "Almond Butter Cups"],
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
      </section>
    </Layout>
  );
};

export default ProductInformation;
