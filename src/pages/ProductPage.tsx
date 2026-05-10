import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Truck, Shield, ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to={`/category/${product.category}`} className="hover:text-primary capitalize">{product.category}</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-secondary rounded-xl overflow-hidden border border-border">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">{product.brand}</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
            <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
            <span className="bg-success/20 text-success text-xs font-bold px-2 py-1 rounded">{discount}% OFF</span>
          </div>

          {/* EMI */}
          <p className="text-xs text-muted-foreground">
            EMI from ₹{Math.round(product.price / 12).toLocaleString()}/month |{" "}
            <span className="text-primary cursor-pointer">View Plans</span>
          </p>

          {/* Badges */}
          <div className="flex items-center gap-3">
            {product.badge && (
              <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">{product.badge}</span>
            )}
            <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">{product.skillLevel}</span>
          </div>

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-border rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-primary"><Minus className="h-4 w-4" /></button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-primary"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); }}
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-3 border rounded-lg transition-colors ${
                isWishlisted(product.id) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-primary"
              }`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted(product.id) ? "fill-primary" : ""}`} />
            </button>
          </div>

          {/* Trust */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" /> Free delivery
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" /> 1 Year Warranty
            </div>
          </div>

          {/* Features */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
