import { Link } from "react-router-dom";
import type { Category } from "@/data/categories";

export const CategoryCard = ({ category }: { category: Category }) => {
  const Icon = category.icon;
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground text-center group-hover:text-primary transition-colors">
        {category.name}
      </span>
    </Link>
  );
};
