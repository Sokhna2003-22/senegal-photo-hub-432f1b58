import { Link } from "@tanstack/react-router";
import { Camera, Menu, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/gallery", label: "Galerie" },
  { to: "/photographers", label: "Photographes" },
  { to: "/about", label: "À propos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg tracking-tight">PhotoPlatform</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-white/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <Link to="/login"><User className="h-4 w-4" />Connexion</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary-glow text-primary-foreground">
            <Link to="/register">S'inscrire</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-white/10">
            <nav className="flex flex-col gap-4 mt-8">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-white/90 hover:text-primary text-lg font-medium">{l.label}</Link>
              ))}
              <hr className="border-white/10 my-2" />
              <Link to="/login" onClick={() => setOpen(false)} className="text-white/90 hover:text-primary">Connexion</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="text-primary font-semibold">S'inscrire</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}