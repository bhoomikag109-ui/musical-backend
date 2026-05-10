import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">❤️ My Wishlist</h1>
      <p className="text-sm text-muted-foreground mb-8">{wishlistProducts.length} items saved</p>

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          <Heart className="h-16 w-16 mx-auto mb-4" />
          <p className="text-lg">Your wishlist is empty</p>
          <p className="text-sm mt-2">Browse and save items you love</p>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
