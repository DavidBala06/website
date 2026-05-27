"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Experience", path: "/experience" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">DB.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-foreground/80 relative ${
                pathname === item.path ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-border pl-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <Button asChild variant="outline" size="sm" className="ml-2">
            <a href="/api/cv" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-2 flex items-center justify-center rounded-md w-9 h-9 transition-colors hover:bg-accent text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
