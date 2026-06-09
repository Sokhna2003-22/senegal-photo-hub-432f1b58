import { Camera, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-20">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3 text-white">
            <Camera className="h-5 w-5 text-primary" />
            <span className="font-bold">PhotoPlatform</span>
          </div>
          <p className="text-sm">La plateforme des photographes professionnels sénégalais.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Explorer</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/gallery" className="hover:text-primary">Galerie</Link></li>
            <li><Link to="/photographers" className="hover:text-primary">Photographes</Link></li>
            <li><Link to="/about" className="hover:text-primary">À propos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Compte</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-primary">Connexion</Link></li>
            <li><Link to="/register" className="hover:text-primary">Inscription</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary">Mon espace</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Suivez-nous</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} PhotoPlatform — Sénégal. Tous droits réservés.
      </div>
    </footer>
  );
}