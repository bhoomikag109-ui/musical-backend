import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-card border-t border-border mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-gradient-primary mb-4">BEATS</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your global destination for musical instruments & gear. From beginner to professional.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Shop</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {["Guitars", "Keyboards", "Drums", "Studio Gear", "Accessories"].map((item) => (
              <li key={item}><Link to="/category/strings" className="hover:text-primary transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Support</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {["Contact Us", "Shipping", "Returns", "FAQ", "Track Order"].map((item) => (
              <li key={item}><Link to="/" className="hover:text-primary transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Newsletter</h4>
          <p className="text-xs text-muted-foreground mb-3">Get deals & new arrivals in your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-secondary border border-border rounded-l-md px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 rounded-r-md hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2026 BEATS. All rights reserved.
      </div>
    </div>
  </footer>
);
