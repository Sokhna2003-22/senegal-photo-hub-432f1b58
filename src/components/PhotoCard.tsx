import { Heart } from "lucide-react";
import type { Photo } from "@/lib/mock-data";
import { photographers } from "@/lib/mock-data";

export function PhotoCard({ photo }: { photo: Photo }) {
  const p = photographers.find((x) => x.id === photo.photographerId);
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={photo.image} alt={photo.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
        <h3 className="font-semibold">{photo.title}</h3>
        <p className="text-xs text-white/80">par {p?.name}</p>
        <div className="flex items-center gap-3 mt-2 text-xs">
          <span className="flex items-center gap-1"><Heart className="h-3 w-3 text-primary" />{photo.likes}</span>
          <span className="px-2 py-0.5 rounded-full bg-primary/90">{photo.category}</span>
          {photo.price && <span className="ml-auto font-semibold">{photo.price.toLocaleString()} FCFA</span>}
        </div>
      </div>
    </div>
  );
}