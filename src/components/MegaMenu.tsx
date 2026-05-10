import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu = ({ onClose }: MegaMenuProps) => {
  return (
    <div
      className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-2xl z-50 animate-fade-in"
      onMouseLeave={onClose}
    >
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((cat) => (
            <div key={cat.slug}>
              <Link
                to={`/category/${cat.slug}`}
                onClick={onClose}
                className="flex items-center gap-2 text-sm font-semibold text-primary mb-3 hover:underline"
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </Link>
              <ul className="space-y-1.5">
                {cat.subcategories.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      to={`/category/${cat.slug}/${sub.slug}`}
                      onClick={onClose}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
