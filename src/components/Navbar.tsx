import { Link, useNavigate } from "@tanstack/react-router";
import { ImageIcon, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AccessPhotosDialog } from "@/components/AccessPhotosDialog";
import { getCurrentUser, clearSession } from "@/lib/api/auth";
import logoImg from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/photographers", label: "Photographes" },
  { to: "/about", label: "À propos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession();
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navy/95 backdrop-blur border-b border-primary/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src={logoImg} alt="SunuVision" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-bold text-lg tracking-tight text-primary">SunuVision</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-2">
          <AccessPhotosDialog
            trigger={
              <Button
                variant="outline"
                className="border-primary/60 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground"
              >
                <ImageIcon className="h-4 w-4 mr-1" />Accéder à mes photos
              </Button>
            }
          />

          {user ? (
            <>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                <Link to="/dashboard">
                  <User className="h-4 w-4 mr-1" />{user.first_name || user.username}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-1" />Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                <Link to="/login">
                  <User className="h-4 w-4 mr-1" />Connexion
                </Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold">
                <Link to="/register">S'inscrire</Link>
              </Button>
            </>
          )}
        </div>

        {/* Menu mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-primary/20">
            <div className="flex items-center gap-2 mb-8">
              <img src={logoImg} alt="SunuVision" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-bold text-primary text-lg">SunuVision</span>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-white/90 hover:text-primary text-lg font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <hr className="border-primary/20 my-2" />
              <AccessPhotosDialog
                trigger={
                  <button
                    onClick={() => setOpen(false)}
                    className="text-primary font-semibold text-left"
                  >
                    📸 Accéder à mes photos
                  </button>
                }
              />
              {user ? (
                <>
                  {user.is_staff && (
                    <Link to="/admin" onClick={() => setOpen(false)} className="text-primary font-semibold">
                      🛡️ Admin
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="text-white/90 hover:text-primary"
                  >
                    <User className="h-4 w-4 inline mr-1" />{user.first_name || user.username}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setOpen(false); }}
                    className="text-red-400 font-semibold text-left flex items-center gap-1"
                  >
                    <LogOut className="h-4 w-4" />Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="text-white/90 hover:text-primary"
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="text-primary font-semibold"
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
