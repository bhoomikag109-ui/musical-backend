import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, RotateCcw, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";
import { products, brands } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const trending = products.slice(0, 4);
  const bestSellers = products.filter((p) => p.badge === "Bestseller");
  const deals = products.filter((p) => ((p.originalPrice - p.price) / p.originalPrice) > 0.15);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={heroBanner} alt="BEATS Musical Instruments" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-xl space-y-6 animate-fade-in-up">
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              New Collection 2026
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Find Your <span className="text-gradient-primary">Sound</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore thousands of instruments from world-class brands. From your first chord to the main stage.
            </p>
            <div className="flex gap-3">
              <Link
                to="/category/strings"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/category/studio"
                className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Studio Gear
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-card/50">
        <div className="container py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, text: "Free Shipping 2,999+" },
              { icon: Shield, text: "Genuine Products" },
              { icon: RotateCcw, text: "Easy Returns" },
              { icon: Headphones, text: "Expert Support" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Shop by Category</h2>
            <p className="text-sm text-muted-foreground mt-1">Browse our complete range of instruments</p>
          </div>
          <Link to="/category/strings" className="text-sm text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Trending Now</h2>
            <p className="text-sm text-muted-foreground mt-1">Most popular picks this week</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="container py-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Studio Essentials <span className="text-gradient-primary">Sale</span>
            </h2>
            <p className="text-muted-foreground mb-6">Up to 40% off on audio interfaces, monitors, and microphones.</p>
            <Link
              to="/category/studio"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Shop Studio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(bestSellers.length > 0 ? bestSellers : products.slice(0, 4)).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="container py-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          🔥 Today's <span className="text-gradient-primary">Deals</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="container py-16">
        <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="px-6 py-3 bg-card border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card border-y border-border py-16">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">What Musicians Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Arjun M.", text: "Best guitar I've ever bought. The quality and price are unbeatable!", rating: 5 },
              { name: "Priya K.", text: "Delivered on time, great packaging. My Yamaha keyboard sounds amazing.", rating: 5 },
              { name: "Rahul S.", text: "BEATS has everything for my studio. Focusrite and AT mics at the best prices.", rating: 4 },
            ].map((t) => (
              <div key={t.name} className="p-6 bg-secondary rounded-xl border border-border">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-3">"{t.text}"</p>
                <p className="text-xs font-semibold text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
