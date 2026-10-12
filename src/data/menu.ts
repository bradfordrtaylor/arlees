// Product menu for the Product Information pages.
// Source: Toast online ordering menu (order.toasttab.com/online/arlees-raw-blends-trenton),
// cleanse page ingredients, and bottle labels. Prices intentionally omitted so the site
// never drifts from Toast; the Order button sends people to Toast for current pricing.

import productJuicesImg from "@/assets/product-juices.jpg";
import productDessertsImg from "@/assets/product-desserts.jpg";
import cleanseImg from "@/assets/cleanse-bottles-enhanced.jpg";
import foodSpreadImg from "@/assets/food-spread-vibrant.jpg";
import juiceColorfulImg from "@/assets/juice-colorful.jpg";
import saladImg from "@/assets/salad-vibrant.jpg";
import collardWrapImg from "@/assets/collard-wrap.jpg";

export type Product = {
  name: string;
  ingredients?: string;
  /** Bottle color for the card (hex). */
  color: string;
  size?: string;
  seasonal?: boolean;
  note?: string;
};

export type ProductSection = {
  id: string;
  title: string;
  blurb?: string;
  products: Product[];
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  /** If set, the dropdown and overview link here instead of /product-information/:slug */
  href?: string;
  sections?: ProductSection[];
};

const juices: ProductSection[] = [
  {
    id: "green-blends",
    title: "Green Blends",
    blurb: "Leafy greens and vegetables, cold pressed fresh daily.",
    products: [
      { name: "KT Blend", ingredients: "Kale, Turmeric, Ginger, Pineapple, Broccoli, Apple, Lemon", color: "#4f8a2b", size: "16 oz" },
      { name: "Kale Blend #2", ingredients: "Kale, Cucumber, Celery, Apple, Lemon, Ginger", color: "#3f7d2c", size: "16 oz" },
      { name: "Kale Blend #3", ingredients: "Kale, Cucumber, Parsley, Mint, Lemon, Lime, Ginger", color: "#2f6a24", size: "16 oz" },
      { name: "Super Green Blend", ingredients: "Kale, Chard, Collard Greens, Cucumber, Apple, Herbs", color: "#2e5d22", size: "16 oz" },
      { name: "Green Booster", ingredients: "Spinach, Kale, Chard, Cucumber, Lemon, Lime", color: "#3d7a33", size: "16 oz" },
      { name: "Celery Juice", ingredients: "Celery", color: "#a3bf62", size: "16 oz", note: "Special order" },
    ],
  },
  {
    id: "root-blends",
    title: "Root Blends",
    blurb: "Earthy, grounding blends built on beets and roots.",
    products: [
      { name: "Beet Blend", ingredients: "Beet, Apple, Carrot, Lemon, Ginger", color: "#9e1f3c", size: "16 oz" },
      { name: "Beet Refresher", ingredients: "Beet, Apple, Lemon", color: "#b5243f", size: "16 oz" },
    ],
  },
  {
    id: "fruit-blends",
    title: "Fruit Blends",
    blurb: "Bright, citrus-forward blends with a little heat in a few.",
    products: [
      { name: "Pineapple Blend", ingredients: "Pineapple, Apple, Lime, Mint", color: "#ebe18f", size: "16 oz" },
      { name: "Pineapple Blend #2", ingredients: "Pineapple, Apple, Ginger, Lemon", color: "#f0d860", size: "16 oz" },
      { name: "Lemon Blend", ingredients: "Lemon, Distilled Water, Cayenne, Dates", color: "#f2e27a", size: "16 oz" },
      { name: "Lime Blend", ingredients: "Lime, Distilled Water, Ginger, Dates", color: "#cfdc7a", size: "16 oz" },
      { name: "Black Label", ingredients: "Lemon, Distilled Water, Cayenne, Dates, Activated Charcoal", color: "#232323", size: "16 oz" },
      { name: "Double Spice", ingredients: "Apple, Ginger, Lemon, Cayenne", color: "#d9a43a", size: "16 oz" },
      { name: "Ginger Spice Blend", ingredients: "Apple, Ginger, Lemon, Cinnamon, Nutmeg", color: "#c98b2b", size: "16 oz" },
      { name: "Sorrel Blend", ingredients: "Hibiscus, Apple, Lemon, Spices", color: "#8f1b2e", size: "16 oz" },
      { name: "Citrus Blend", ingredients: "Grapefruit, Orange, Lemon, Cayenne", color: "#f0a030", size: "16 oz", seasonal: true },
      { name: "Watermelon Blend", ingredients: "Watermelon, Lime, Mint", color: "#e3485c", size: "16 oz", seasonal: true },
      { name: "Strawberry Lemonade", color: "#ef7486", size: "16 oz", seasonal: true },
      { name: "Pure Lemon Juice", ingredients: "Cold pressed lemon", color: "#f5e88f", size: "8 oz" },
      { name: "Pure Lime Juice", ingredients: "Cold pressed lime", color: "#d6e39a", size: "8 oz" },
    ],
  },
  {
    id: "nut-mylks",
    title: "Nut Mylks & Cold Brew",
    blurb: "Creamy, dairy-free blends made with sprouted almonds.",
    products: [
      { name: "Almond Blend", ingredients: "Sprouted Almonds, Distilled Water, Cinnamon, Vanilla, Dates", color: "#e6d8c4", size: "16 oz" },
      { name: "Avocado Blend", ingredients: "Almonds, Avocado, Kale, Spirulina", color: "#a9b86a", size: "16 oz" },
      { name: "Sea Moss Blend", ingredients: "Almond Mylk, Coconut Mylk, Sea Moss, Spirulina", color: "#b9c79a", size: "16 oz" },
      { name: "Soursop Blend", ingredients: "Soursop, Almonds, Dates, Coconut", color: "#efe8d8", size: "16 oz" },
      { name: "Raw Cacao Blend", color: "#6b4430", size: "16 oz", seasonal: true },
      { name: "Cafe Mocha Blend", ingredients: "Almonds, Cold Brew Coffee, Cacao, Dates", color: "#7a5236", size: "16 oz" },
      { name: "Cold Brew Latte", ingredients: "Almonds, Cold Brew Coffee, Dates", color: "#b48d66", size: "16 oz" },
      { name: "Cold Brew Coffee", ingredients: "Cold brewed coffee", color: "#3b2416", size: "16 oz" },
      { name: "Coconut Water", ingredients: "Coconut water", color: "#f1eee4" },
    ],
  },
  {
    id: "wellness-shots",
    title: "Wellness Shots",
    blurb: "Small, concentrated shots for an everyday boost.",
    products: [
      { name: "Immunity Booster", ingredients: "Turmeric, Lemon, Ginger, Cayenne", color: "#e3a020", size: "2 oz" },
      { name: "Ginger Shot", ingredients: "Ginger", color: "#e6c66a", size: "2 oz" },
      { name: "Elderberry Shot", ingredients: "Elderberry Syrup, Lemon", color: "#4a1a3a", size: "2 oz" },
      { name: "Fire Cider", color: "#c4632a", size: "2 oz" },
      { name: "Turmeric Shot", color: "#e5a51b", size: "2 oz", seasonal: true },
      { name: "Wheatgrass Shot", ingredients: "Wheatgrass", color: "#4e8a2e", size: "2 oz", seasonal: true },
    ],
  },
  {
    id: "herbal-refreshers",
    title: "Herbal Refreshers",
    blurb: "Caffeine-free cold brewed teas.",
    products: [
      { name: "Cold Brew Hibiscus Tea", ingredients: "Hibiscus, Lemon, Distilled Water", color: "#b0254a", size: "16 oz" },
      { name: "Cold Brew Rooibos", ingredients: "Rooibos", color: "#b5562a", size: "16 oz", seasonal: true },
    ],
  },
];

export const categories: Category[] = [
  {
    slug: "juices",
    title: "Juices",
    tagline: "Cold pressed juices, nut mylks, and wellness shots",
    description:
      "Made fresh daily from 100% organic fruits and vegetables using a hydraulic cold press. No heat and no oxidation, just nutrient-dense juice served in our signature square bottles.",
    image: productJuicesImg,
    sections: juices,
  },
  {
    slug: "cleanses",
    title: "Cleanses",
    tagline: "Relieve, Release, and Refine",
    description: "Six-bottle cold pressed juice cleanses for every experience level.",
    image: cleanseImg,
    href: "/cleanses",
  },
  {
    slug: "bowls",
    title: "Bowls",
    tagline: "Acai, chia, green, mango, and oatmeal bowls",
    description:
      "Blended fruit bowls and oatmeal bowls topped with fresh fruit, granola, seeds, and coconut. 100% organic, vegan, and gluten-free.",
    image: saladImg,
  },
  {
    slug: "smoothies",
    title: "Smoothies",
    tagline: "Blended to order",
    description: "Thick, fruit-forward smoothies made with organic fruit and our house nut mylks.",
    image: juiceColorfulImg,
  },
  {
    slug: "dips",
    title: "Dips",
    tagline: "Cashew cream cheeses, guacamole, pesto, and more",
    description:
      "House-made cashew cream cheeses, guacamole, pico de gallo, and red pepper pesto. Great with our raw crackers or as a spread.",
    image: foodSpreadImg,
  },
  {
    slug: "food",
    title: "Food",
    tagline: "Wraps, raw pizza, salads, and more",
    description:
      "Collard green wraps, raw vegan pizza, salads, burrito bowls, and nori rolls. All wraps are made with fresh collard greens, never bread or tortillas.",
    image: collardWrapImg,
  },
  {
    slug: "desserts",
    title: "Desserts",
    tagline: "Cashew cheesecakes, truffles, and mousse",
    description:
      "Raw vegan cheesecakes, chocolate mousse, truffles, almond butter cups, and key lime squares. Free from gluten, GMOs, and refined sugar.",
    image: productDessertsImg,
  },
];

export const categoryHref = (c: Category) => c.href ?? `/product-information/${c.slug}`;

export const TOAST_ORDER_URL = "https://order.toasttab.com/online/arlees-raw-blends-trenton";

