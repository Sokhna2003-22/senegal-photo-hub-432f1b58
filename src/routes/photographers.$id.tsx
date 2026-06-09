import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PhotoCard } from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { photographers, photos } from "@/lib/mock-data";
import { BadgeCheck, Mail, MapPin, MessageSquare, Star } from "lucide-react";

export const Route = createFileRoute("/photographers/$id")({
  component: PhotographerDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Photographe introuvable</h1>
        <Button asChild className="mt-6"><Link to="/photographers">Retour à la liste</Link></Button>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
        <p className="text-muted-foreground mt-2">{error.message}</p>
      </div>
    </Layout>
  ),
  loader: ({ params }) => {
    const p = photographers.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return p;
  },
});

function PhotographerDetail() {
  const p = Route.useLoaderData();
  const works = photos.filter((x) => x.photographerId === p.id);
  return (
    <Layout>
      <div className="h-64 md:h-80 bg-cover bg-center relative" style={{ backgroundImage: `url(${p.cover})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>
      <div className="container mx-auto px-4 -mt-20 relative">
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] flex flex-col md:flex-row gap-6">
          <img src={p.avatar} alt={p.name} className="h-28 w-28 rounded-full object-cover border-4 border-card -mt-16" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold">{p.name}</h1>
              {p.verified && <BadgeCheck className="h-6 w-6 text-primary" />}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{p.city}</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" />{p.rating}</span>
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium text-xs">{p.specialty}</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl">{p.bio}</p>
          </div>
          <div className="flex md:flex-col gap-2">
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground"><Mail className="h-4 w-4" />Contacter</Button>
            <Button variant="outline"><MessageSquare className="h-4 w-4" />Message</Button>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        {works.length === 0 ? (
          <p className="text-muted-foreground">Aucune photo pour l'instant.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w) => <PhotoCard key={w.id} photo={w} />)}
          </div>
        )}
      </section>
    </Layout>
  );
}