// Product menu for the Product Information pages.
// Source: Toast online ordering menu (order.toasttab.com/online/arlees-raw-blends-trenton),
// cleanse page ingredients, and bottle labels. Prices intentionally omitted so the site
// never drifts from Toast; the Order button sends people to Toast for current pricing.

import productJuicesImg from "@/assets/product-juices.jpg";
import productDessertsImg from "@/assets/product-desserts.jpg";
import cleanseImg from "@/assets/cleanse-bottles-enhanced.jpg";
import foodSpreadImg from "@/assets/food-spread-vibrant.jpg";
import juiceColorfulImg from "@/assets/juice-colorful.jpg";

export type Product = {
  name: string;
  ingredients?: string;
  /** Bottle color for the card (hex). */
  color: string;
  size?: string;
  seasonal?: boolean;
  note?: string;
  /** Flavor list, for items sold in several flavors (shown above ingredients). */
  flavors?: string;
  /** Icon drawn on the card. Defaults to bottle. */
  vessel?: Vessel;
};

export type Vessel = "bottle" | "cup" | "bowl" | "tub" | "pizza" | "slice";

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
  /** Draw an illustrated row of icons instead of the photo hero. */
  heroArt?: { vessel: Vessel; colors: string[] };
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
      { name: "Super Green Blend", ingredients: "Kale, Swiss Chard, Collard, Cucumber, Granny Smith Apple, Lemon, Lime, Mint, Parsley, Ginger", color: "#2e5d22", size: "16 oz" },
      { name: "Green Booster", ingredients: "Spinach, Kale, Chard, Cucumber, Lemon, Lime", color: "#3d7a33", size: "16 oz" },
      { name: "Celery Juice", ingredients: "Celery", color: "#a3bf62", size: "16 oz", note: "Special order" },
    ],
  },
  {
    id: "root-blends",
    title: "Root Blends",
    blurb: "Earthy blends built on beets, carrots, turmeric, and ginger.",
    products: [
      { name: "Beet Blend", ingredients: "Beet, Apple, Carrot, Lemon, Ginger", color: "#9e1f3c", size: "16 oz" },
      { name: "Beet Blend #2", ingredients: "Beet, Cucumber, Lemon, Ginger", color: "#7d1a3a", size: "16 oz" },
      { name: "Beet Bliss", ingredients: "Beet, Apple, Lemon, Carrot, Ginger, Turmeric", color: "#b5243f", size: "16 oz" },
      { name: "Carrot Blend", ingredients: "Carrot, Celery, Apple, Lemon", color: "#ec7a1f", size: "16 oz" },
      { name: "Turmeric Blend #2", ingredients: "Turmeric, Lemon, Ginger, Cayenne, Distilled Water", color: "#f2c21b", size: "16 oz" },
      { name: "Pure Cold Pressed Ginger", ingredients: "Ginger", color: "#e9cf8f", size: "8 oz" },
      { name: "Pure Cold Pressed Turmeric", ingredients: "Turmeric", color: "#e89a1c", size: "8 oz" },
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
      { name: "Strawberry Lemonade", ingredients: "Strawberries, Apple, Lemon", color: "#ef7486", size: "16 oz", seasonal: true },
      { name: "Pure Lemon Juice", ingredients: "Lemon", color: "#f5e88f", size: "8 oz" },
      { name: "Pure Lime Juice", ingredients: "Lime", color: "#d6e39a", size: "8 oz" },
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
      { name: "Raw Cacao Blend", ingredients: "Sprouted Almonds, Raw Cacao, Dates, Cinnamon, Vanilla, Distilled Water", color: "#6b4430", size: "16 oz", seasonal: true },
      { name: "Cafe Mocha Blend", ingredients: "Almonds, Cold Brew Coffee, Cacao, Dates", color: "#7a5236", size: "16 oz" },
      { name: "Cold Brew Latte", ingredients: "Almonds, Cold Brew Coffee, Dates", color: "#b48d66", size: "16 oz" },
      { name: "Cold Brew Coffee", ingredients: "Cold Brew Coffee", color: "#3b2416", size: "16 oz" },
      { name: "Coconut Water", ingredients: "Coconut Water", color: "#f1eee4" },
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
      { name: "Fire Cider", ingredients: "Grapefruit, Orange, Lemon, Cayenne, Garlic, Apple Cider Vinegar", color: "#c4632a", size: "2 oz" },
      { name: "Turmeric Shot", ingredients: "Turmeric", color: "#e5a51b", size: "2 oz", seasonal: true },
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


const S = (name: string, color: string, extra: Partial<Product> = {}): Product => ({
  name,
  color,
  size: "16 oz",
  vessel: "cup",
  ...extra,
});

const smoothies: ProductSection[] = [
  {
    id: "fruit-smoothies",
    title: "Fruit & Tropical",
    blurb: "Bright, fruit-forward blends.",
    products: [
      S("Berry Coconut Glow", "#d4639a", { ingredients: "Pineapple, Mango, Mixed Berries, Banana" }),
      S("Coco Loco", "#f2d27a", { ingredients: "Mango, Dates, Banana" }),
      S("Immunity Boost", "#f0b81f", { ingredients: "Turmeric" }),
      S("Moringa Mango Glow", "#e9c43a", { ingredients: "Moringa, Mango" }),
      S("Soursop Tropical Breeze", "#f2cf4a", { ingredients: "Soursop" }),
      S("Blue Spirulina", "#3aa0d8", { ingredients: "Pineapple, Apple, Lime, Banana, Blue Spirulina" }),
      S("Tiffany & Co", "#4fb6dd", { ingredients: "Pineapple, Apple, Lime, Banana, Blue Spirulina" }),
      S("Tiffany Lemonade", "#5fd0d0", { ingredients: "Lemon, Apple, Blue Spirulina" }),
      S("Sweet Dream", "#c2306f", { note: "Super Protein", ingredients: "Mixed Berries, Pineapple" }),
    ],
  },
  {
    id: "green-smoothies",
    title: "Green",
    blurb: "Leafy greens blended smooth.",
    products: [
      S("Tropical Green", "#7fa63a", { ingredients: "Apple, Broccoli, Lemon, Pineapple, Turmeric, Ginger, Banana, Hemp Seeds" }),
      S("Greens With Envy", "#2f7a2f", { ingredients: "Kale, Banana, Green Spirulina, Hemp Seeds" }),
      S("Green Goddess", "#4f8a2b", { ingredients: "Kale, Swiss Chard" }),
      S("Double Spice Smoothie", "#6a9a35", { ingredients: "Apple, Lemon, Ginger" }),
      S("Avocado Smoothie", "#9cbf4a", { ingredients: "Avocado, Banana, Dates" }),
    ],
  },
  {
    id: "root-smoothies",
    title: "Beet & Carrot",
    blurb: "Root vegetables with fruit for natural sweetness.",
    products: [
      S("Burgundy Blush", "#8e1f3a", { ingredients: "Beet, Apple, Lemon, Carrot, Ginger, Turmeric, Banana" }),
      S("Crimson Cleanse", "#b0213f", { ingredients: "Beet" }),
      S("Sweet Carrot Smoothie", "#ee8a2a", { ingredients: "Carrot" }),
    ],
  },
  {
    id: "chocolate-protein",
    title: "Chocolate & Protein",
    blurb: "Rich, filling smoothies made with raw cacao.",
    products: [
      S("C.A.B.", "#7a5236", { ingredients: "Raw Cacao, Banana, Almond Mylk, Hemp Seeds" }),
      S("Body Builder", "#6b4430", { ingredients: "Raw Cacao" }),
      S("Boost Me Up", "#5e3b28", { note: "Protein", ingredients: "Cold Brew Coffee" }),
      S("Cacao Sea Moss", "#6e4a35", { ingredients: "Raw Cacao, Sea Moss, Almonds, Dates" }),
    ],
  },
  {
    id: "anniversary-250",
    title: "250th Anniversary",
    blurb: "Limited smoothies for America's 250th anniversary.",
    products: [
      S("Oliver Cromwell", "#9b1d35", { ingredients: "Beet, Apple, Lemon, Carrot, Ginger, Banana, Turmeric, Coconut" }),
      S("Prince Whipple", "#efe3c4", { ingredients: "Banana, Coconut Water, Sea Moss" }),
      S("Peter Salem", "#2f8fd6", { ingredients: "Pineapple, Apple, Lime, Mint, Coconut, Banana, Blue Spirulina" }),
      S("Soul of 1776", "#2f8fd6", { note: "Layered", ingredients: "Oliver Cromwell, Prince Whipple, and Peter Salem layered in one cup" }),
    ],
  },
  {
    id: "daily-custom",
    title: "Daily & Custom",
    products: [
      S("Smoothie of the Day", "#ED8D1F", { ingredients: "Rotating daily selection" }),
      S("Build Your Own", "#ED8D1F", { ingredients: "Almond or Coconut Mylk base, plus your choice of fruits and greens" }),
    ],
  },
];

const item = (vessel: Vessel) => (name: string, color: string, ingredients: string, extra: Partial<Product> = {}): Product => ({
  name,
  color,
  ingredients,
  vessel,
  ...extra,
});
const B = item("bowl");
const T = item("tub");
const D = item("slice");

const bowls: ProductSection[] = [
  {
    id: "bowls",
    title: "Bowls",
    blurb: "Blended fruit bowls and oatmeal bowls.",
    products: [
      B("Acai Bowl", "#5a1f45", "Acai, Coconut Mylk", { note: "Unsweetened" }),
      B("Chia Pudding Bowl", "#c98aa8", "Chia Seeds, Strawberries, Dates, Cinnamon, Vanilla"),
      B("Banana Bowl", "#e8c98a", "Banana, Almond Mylk, choice of superfoods"),
      B("Green Bowl", "#4f8a2b", "Kale, Banana, Pineapple, Coconut Mylk, topped with Granola, Fruit, Seeds"),
      B("Island Mango Bowl", "#f2b51f", "Mango", { note: "No added sugar" }),
      B("Oatmeal Bowl", "#e2d3b0", "Rolled Oats, Granola, Fruit, Seeds, Coconut"),
      B("Apple Pie Oatmeal Bowl", "#c99a5b", "Gluten-Free Rolled Oats, Apple, Lemon, Warm Spices"),
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    blurb: "Grab-and-go breakfast, made fresh.",
    products: [
      B("Mixed Fruit with Cashew Cream", "#f2a33a", "Assorted Fruit and Berries, Cashew Cream, Cacao Nibs, Coconut", { size: "16 oz" }),
      B("Strawberry Chia Pudding", "#d65a6e", "Chia Seeds, Strawberry, Pineapple, Mango, Mixed Berries", { seasonal: true }),
      B("Power Granola Cereal", "#c49a62", "Apricot, Sprouted Almonds, Dates, Vanilla, Coconut, Rolled Oats, Blueberry, Pumpkin Seeds, Pink Himalayan Salt", { seasonal: true }),
      B("Overnight Oats", "#e6d6b4", "Gluten-Free Oats, Mixed Fruit, Berries", { seasonal: true }),
    ],
  },
];

const dips: ProductSection[] = [
  {
    id: "dips",
    title: "Dips & Spreads",
    blurb: "House-made in small batches.",
    products: [
      T("Cashew Scallion Cream Cheese", "#efe9da", "Cashews, Scallions, Acidophilus (Probiotic), Pink Himalayan Salt"),
      T("Smoked Cashew Cream Cheese", "#c9874f", "Cashew, Wood Smoked Paprika, Acidophilus (Probiotic), Cayenne, Pink Himalayan Salt"),
      T("Red Pepper Pesto", "#d2552f", "Red Bell Peppers, Almonds, Cashews, Soaked Flax Seeds, Almond Pulp, Scallions, Acidophilus, Pink Himalayan Salt", { size: "5 oz" }),
      T("Guacamole", "#8fb84a", "Avocado, Lime, Onion, Cilantro, Spices", { size: "5 oz" }),
      T("Pico de Gallo", "#d8463a", "Tomato, Red Onion, Cilantro, Lime, Jalapeño, Sea Salt"),
    ],
  },
];

const rawFoods: ProductSection[] = [
  {
    id: "raw-foods",
    title: "Raw Foods",
    blurb: "Hearty raw vegan meals.",
    products: [
      B("Burrito Bowl", "#5b4a3a", "Wild Rice, Onions, Cilantro, Black Beans, Tomato, Green Onion, Cayenne, Cashew Sour Cream"),
      B("Red Bell Pepper Soup", "#d2452f", "Red Peppers, Sun-Dried Tomatoes, Cashews, Garlic", { seasonal: true }),
      B("Lettuce Wrap Taco Bowl", "#a9c86a", "Iceberg Lettuce, Walnut Taco \"Meat\"", { seasonal: true }),
    ],
  },
  {
    id: "raw-vegan-pizza",
    title: "Raw Vegan Pizza",
    blurb: "A sprouted kale and almond crust, never baked.",
    products: [
      item("pizza")(
        "Raw Vegan Pizza",
        "#c8452e",
        "Sun-Dried Tomato, Lemon Juice, Olive Oil, Balsamic Vinegar, Garlic, Dates, Oregano, Basil, Thyme, Red Pepper, Cashews, Mushrooms, Onion, Spinach. Crust: Kale, Sprouted Almonds, Cashews, Acidophilus, Sprouted Flax Seeds, Scallions, Thyme, Oregano, Rosemary, Pink Himalayan Salt",
      ),
    ],
  },
];

const desserts: ProductSection[] = [
  {
    id: "cheesecakes",
    title: "Cheesecakes",
    blurb: "Raw cashew cheesecakes on a date and almond crust.",
    products: [
      D("Cashew Cheesecake", "#f3e6cf", "Cashew, Almond, Dates, Coconut Oil, Lemon, Vanilla Bean, Pink Himalayan Salt, Agave", {
        flavors: "Vanilla, Strawberry, Blueberry, Raspberry, Blackberry, Mango, Key Lime",
        note: "Slices, squares & minis",
      }),
    ],
  },
  {
    id: "chocolate",
    title: "Chocolate",
    blurb: "Made with raw cacao.",
    products: [
      D("Raw Truffles", "#4a2c1f", "Walnuts, Raw Cacao, Dates, Coconut Oil"),
      D("Chocolate Mousse Parfait", "#6b4430", "Avocado, Raw Cacao, Dates, Cashews, Coconut Oil, Agave, Vanilla"),
      D("Chocolate Almond Butter Cup", "#5a3624", "Raw Cacao, Walnuts, Almonds, Raisins, Dates, Cinnamon"),
      D("Fudge Brownie Squares", "#4f2f20", "Raw Cacao, Walnuts, Almonds, Raisins, Dates, Cinnamon, Vanilla, Pink Himalayan Salt"),
      D("Flourless Chocolate Cake", "#3e2418", "Raw Cacao, Walnuts, Raisins, Dates, Cinnamon, Vanilla, Pink Himalayan Salt, Agave, Coconut Oil", { seasonal: true }),
      D("Chocolate Mousse Espresso Pie", "#5e3b28", "Chocolate Mousse, Espresso", { seasonal: true }),
    ],
  },
  {
    id: "more-desserts",
    title: "More Desserts",
    products: [
      D("Carrot Cake", "#e08a3a", "Carrots, Cashews, Walnuts, Dates, Raisins, Coconut", { seasonal: true }),
      D("Banana Pudding", "#f1dc94", "Banana", { seasonal: true }),
    ],
  },
];

export const categories: Category[] = [
  {
    slug: "juices",
    title: "Juices",
    tagline: "Cold pressed juices, nut mylks, and wellness shots",
    description:
      "Made fresh daily from 100% organic fruits and vegetables using a hydraulic cold press. Never heated or HPP processed, just nutrient-dense juice served in our signature square bottles.",
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
    slug: "smoothies",
    title: "Smoothies",
    tagline: "Fruit, green, and protein smoothies, blended to order",
    description: "16 oz smoothies made with 100% organic produce and our house nut mylks, blended fresh when you order.",
    image: juiceColorfulImg,
    heroArt: { vessel: "cup", colors: ["#d4639a", "#f2cf4a", "#3aa0d8", "#4f8a2b", "#8e1f3a", "#7a5236", "#ee8a2a"] },
    sections: smoothies,
  },
  {
    slug: "bowls",
    title: "Bowls & Breakfast",
    tagline: "Acai, chia, green, mango, and oatmeal bowls",
    description: "Blended fruit bowls, oatmeal bowls, and grab-and-go breakfast. 100% organic, vegan, gluten-free, and GMO-free.",
    image: foodSpreadImg,
    heroArt: { vessel: "bowl", colors: ["#5a1f45", "#f2b51f", "#4f8a2b", "#c98aa8", "#e8c98a"] },
    sections: bowls,
  },
  {
    slug: "raw-foods",
    title: "Raw Foods",
    tagline: "Raw vegan pizza, burrito bowls, and more",
    description: "Raw vegan meals made with 100% organic ingredients. Gluten-free, GMO-free, and never cooked.",
    image: foodSpreadImg,
    sections: rawFoods,
  },
  {
    slug: "dips",
    title: "Dips",
    tagline: "Cashew cream cheeses, guacamole, pesto, and pico",
    description: "House-made dips and spreads made with 100% organic ingredients.",
    image: foodSpreadImg,
    heroArt: { vessel: "tub", colors: ["#efe9da", "#c9874f", "#d2552f", "#8fb84a", "#d8463a"] },
    sections: dips,
  },
  {
    slug: "desserts",
    title: "Desserts",
    tagline: "Cashew cheesecakes, truffles, brownies, and mousse",
    description: "Raw vegan desserts made with 100% organic ingredients. Gluten-free, GMO-free, and no refined sugar.",
    image: productDessertsImg,
    sections: desserts,
  },
];

export const categoryHref = (c: Category) => c.href ?? `/product-information/${c.slug}`;

export const TOAST_ORDER_URL = "https://order.toasttab.com/online/arlees-raw-blends-trenton";

