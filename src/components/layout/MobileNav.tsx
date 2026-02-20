import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusSquare, Film, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, path: "/" },
  { icon: Search, path: "/explore" },
  { icon: PlusSquare, path: "/create" },
  { icon: Film, path: "/reels" },
  { icon: User, path: "/profile" },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel-strong border-t border-border/50 safe-area-bottom">
      <div className="flex items-center justify-around h-14">
        {navItems.map(({ icon: Icon, path }) => {
          const active = location.pathname === path;
          return (
            <Link key={path} to={path} className="relative p-2">
              <Icon
                size={24}
                className={`transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}
              />
              {active && (
                <motion.div
                  layoutId="mobile-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
