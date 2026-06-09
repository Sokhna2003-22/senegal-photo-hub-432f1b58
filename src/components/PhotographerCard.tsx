import { Link } from "@tanstack/react-router";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import type { Photographer } from "@/lib/mock-data";

export function PhotographerCard({ p }: { p: Photographer }) {
  return (
    <Link to="/photographers/$id" params={{ id: p.id }} className="block group">
      <div className="rounded-xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
        <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${p.cover})` }} />
        <div className="px-5 pb-5 -mt-10">
          <img src={p.avatar} alt={p.name} className="h-20 w-20 rounded-full border-4 border-card object-cover" />
          <div className="mt-3 flex items-center gap-1">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
            {p.verified && <BadgeCheck className="h-4 w-4 text-primary" />}
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.city}</span>
            <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-primary text-primary" />{p.rating}</span>
          </div>
          <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">{p.specialty}</span>
        </div>
      </div>
    </Link>
  );
}