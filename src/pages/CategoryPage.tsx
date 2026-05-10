import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const [sort, setSort] = useState("popularity");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const categoryProducts = useMemo(() => {
    let filtered = slug ? products.filter((p) => p.category === slug) : products;
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedLevel) {
      filtered = filtered.filter((p) => p.skillLevel === selectedLevel);
    }
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sort) {
      case "price-low": return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high": return [...filtered].sort((a, b) => b.price - a.price);
      case "rating": return [...filtered].sort((a, b) => b.rating - a.rating);
      case "newest": return [...filtered].reverse();
      default: return [...filtered].sort((a, b) => b.reviewCount - a.reviewCount);
    }
  }, [slug, sort, selectedBrands, selectedLevel, priceRange]);

  const availableBrands = [...new Set(products.filter((p) => !slug || p.category === slug).map((p) => p.brand))];

  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">
          {category?.emoji} {category?.name || "All Products"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">{categoryProducts.length} products found</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-6">
          <FilterContent
            availableBrands={availableBrands}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            category={category}
          />
        </aside>

        {/* Main */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-secondary border border-border rounded-md px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found</p>
              <p className="text-sm mt-2">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50 lg:hidden" onClick={() => setShowFilters(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-card border-r border-border z-50 lg:hidden overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-bold text-foreground">Filters</h3>
              <button onClick={() => setShowFilters(false)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>
            <FilterContent
              availableBrands={availableBrands}
              selectedBrands={selectedBrands}
              toggleBrand={toggleBrand}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
            />
          </div>
        </>
      )}
    </div>
  );
};

interface FilterContentProps {
  availableBrands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  category?: any;
}

const FilterContent = ({ availableBrands, selectedBrands, toggleBrand, selectedLevel, setSelectedLevel, category }: FilterContentProps) => (
  <div className="space-y-6">
    {/* Subcategories */}
    {category && (
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">Subcategories</h4>
        <div className="space-y-1">
          {category.subcategories.map((sub: any) => (
            <button key={sub.slug} className="block w-full text-left text-xs text-muted-foreground hover:text-primary py-1.5 transition-colors">
              {sub.name}
            </button>
          ))}
        </div>
      </div>
    )}

    {/* Brands */}
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-3">Brand</h4>
      <div className="space-y-1">
        {availableBrands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground py-1">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="rounded border-border text-primary focus:ring-primary h-3.5 w-3.5"
            />
            {brand}
          </label>
        ))}
      </div>
    </div>

    {/* Skill Level */}
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-3">Skill Level</h4>
      <div className="space-y-1">
        {["Beginner", "Intermediate", "Professional"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(selectedLevel === level ? "" : level)}
            className={`block w-full text-left text-xs py-1.5 transition-colors ${
              selectedLevel === level ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>

    {/* Rating */}
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-3">Rating</h4>
      {[4, 3, 2].map((r) => (
        <button key={r} className="block text-xs text-muted-foreground hover:text-foreground py-1">
          {r}★ & above
        </button>
      ))}
    </div>
  </div>
);

export default CategoryPage;
