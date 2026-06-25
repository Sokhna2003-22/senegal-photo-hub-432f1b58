import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Camera, ImageIcon, LogIn, Shield, Folder } from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AccessPhotosDialog } from "@/components/AccessPhotosDialog";
import { getPhotographers, type StoredUser } from "@/lib/local-store";

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
  const [photographers, setPhotographers] = useState<StoredUser[]>([]);
  useEffect(() => {
    setPhotographers(getPhotographers());
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Capturez vos <span className="text-primary">moments</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            La plateforme des photographes professionnels au Sénégal
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground">
              <Link to="/register"><Camera className="h-4 w-4" />Commencer gratuitement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white">
              <Link to="/login"><LogIn className="h-4 w-4" />Se connecter</Link>
            </Button>
            <AccessPhotosDialog
              trigger={
                <Button size="lg" variant="outline" className="border-primary/60 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground">
                  <ImageIcon className="h-4 w-4" />Accéder à mes photos
                </Button>
              }
            />
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { n: `${photographers.length}+`, l: "Photographes" },
              { n: "0+", l: "Albums" },
              { n: "100%", l: "Sécurisé" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Photographes */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Camera className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold">Nos Photographes</h2>
        </div>
        {photographers.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border bg-card/50 py-16 text-center">
            <p className="text-muted-foreground">Aucun photographe inscrit pour le moment.</p>
            <Button asChild className="mt-4 bg-primary hover:bg-primary-glow text-primary-foreground">
              <Link to="/register" search={{ role: "photographer" }}>Devenir photographe</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photographers.map((p) => (
              <div key={p.id} className="rounded-xl bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center">
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    {p.city && <p className="text-xs text-muted-foreground">{p.city}</p>}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Folder className="h-4 w-4" /> 0 album(s)
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sécurité */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Camera, title: "Pour photographes", text: "Gérez vos galeries, albums et clients depuis un espace dédié." },
            { icon: ImageIcon, title: "Pour clients", text: "Accédez à vos photos privées avec un simple code." },
            { icon: Shield, title: "100% Sécurisé", text: "Vos galeries restent privées et protégées." },
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
    </Layout>
  );
}
