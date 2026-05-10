import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { SearchBar } from "./SearchBar";
import { MegaMenu } from "./MegaMenu";

export const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="bg-primary/10 text-center py-1.5 text-xs text-primary font-medium tracking-wide">
        🎵 FREE SHIPPING on orders above ₹2,999 | Use code BEATS10 for 10% off
      </div>

      <div className="container flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-gradient-primary shrink-0">
          BEATS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <Menu className="h-4 w-4" />
            All Categories
            <ChevronDown className="h-3 w-3" />
          </button>
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="px-3 py-2 text-sm text-secondary-foreground hover:text-primary transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link to="/category/strings" className="px-3 py-2 text-sm text-primary font-semibold">
            Deals
          </Link>
        </nav>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 text-secondary-foreground hover:text-primary transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/wishlist" className="p-2 text-secondary-foreground hover:text-primary transition-colors">
            <Heart className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-secondary-foreground hover:text-primary transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Link to="/account" className="hidden sm:block p-2 text-secondary-foreground hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-foreground"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <SearchBar />
        </div>
      )}

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-secondary-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
