import Layout from "@/components/Layout";

const blogPosts = [
  {
    title: "Beet the Odds: The Superfood Benefits of Beets & How Arlee's Blends Them Right",
    excerpt: "Discover the incredible health benefits of beets and how our cold pressed beet blends deliver maximum nutrients in every sip.",
    date: "2025",
  },
  {
    title: "The Nutrient-Rich Sea Vegetable You Need to Try: Arlee's Purple Sea Moss",
    excerpt: "Learn about the powerful benefits of purple sea moss and why it's become one of our most popular superfoods.",
    date: "2025",
  },
  {
    title: "5 Simple Steps to Incorporate Sustainable Habits into Your Home Lifestyle",
    excerpt: "Small changes in your daily routine can make a big difference for your health and the environment.",
    date: "2025",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-padding max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-center">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-card border rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <h2 className="font-heading text-xl md:text-2xl font-bold mt-1 mb-3">{post.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
