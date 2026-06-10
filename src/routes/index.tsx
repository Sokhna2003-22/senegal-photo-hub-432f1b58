import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Search, Sparkles, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PhotographerCard } from "@/components/PhotographerCard";
import { photographers, categories } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PhotoPlatform — Photographes professionnels du Sénégal" },
      { name: "description", content: "Découvrez et réservez les meilleurs photographes professionnels sénégalais. Mariage, portrait, mode, événementiel." },
      { property: "og:title", content: "PhotoPlatform — Photographes du Sénégal" },
      { property: "og:description", content: "La référence des photographes professionnels au Sénégal." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
              <Sparkles className="h-3 w-3" /> 100% Sénégalais
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Les meilleurs <span className="text-primary">photographes</span> du Sénégal
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Découvrez, suivez et réservez des talents locaux pour vos mariages, portraits, événements et plus encore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
                <Link to="/photographers">Trouver un photographe <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link to="/register">Devenir photographe</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "200+", l: "Photographes" },
                { n: "5k+", l: "Photos" },
                { n: "14", l: "Régions" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur grid place-items-center">
              <Camera className="h-32 w-32 text-primary/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Explorer par catégorie</h2>
            <p className="text-muted-foreground mt-2">Trouvez le style qui vous correspond</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link key={c} to="/photographers" className="px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors font-medium">
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Photographers */}
      <section className="bg-muted/40 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Photographes vedettes</h2>
              <p className="text-muted-foreground mt-2">Des talents reconnus, vérifiés et passionnés</p>
            </div>
            <Button asChild variant="ghost"><Link to="/photographers">Tous les photographes <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photographers.map((p) => <PhotographerCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center">Comment ça marche</h2>
        <p className="text-center text-muted-foreground mt-2 max-w-xl mx-auto">Trois étapes simples pour donner vie à vos projets photo.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Search, title: "Explorer", text: "Parcourez les portfolios des photographes par ville et spécialité." },
            { icon: Users, title: "Choisir", text: "Découvrez les profils vérifiés et leurs avis clients." },
            { icon: Camera, title: "Réserver", text: "Contactez directement et réservez votre séance en quelques clics." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl p-8 bg-card shadow-[var(--shadow-card)] text-center">
              <div className="mx-auto w-14 h-14 rounded-full grid place-items-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-10 md:p-16 text-center text-white" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="text-3xl md:text-4xl font-bold">Vous êtes photographe ?</h2>
          <p className="mt-3 max-w-xl mx-auto text-white/90">Rejoignez la communauté des professionnels sénégalais et faites grandir votre activité.</p>
          <Button asChild size="lg" className="mt-6 bg-white text-primary hover:bg-white/90">
            <Link to="/register">Créer mon compte</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
