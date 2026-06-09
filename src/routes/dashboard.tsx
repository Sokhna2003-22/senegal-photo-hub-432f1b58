import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PhotoCard } from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { photos, photographers } from "@/lib/mock-data";
import { Camera, Eye, Heart, Plus, Settings, Upload } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon espace — PhotoPlatform" }] }),
  component: Dashboard,
});

function Dashboard() {
  const me = photographers[0];
  const myPhotos = photos.filter((p) => p.photographerId === me.id);
  const stats = [
    { icon: Eye, label: "Vues", value: "12 480" },
    { icon: Heart, label: "Likes", value: "1 245" },
    { icon: Camera, label: "Photos", value: myPhotos.length.toString() },
  ];
  return (
    <Layout>
      <section className="bg-navy text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={me.avatar} alt={me.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary" />
            <div>
              <p className="text-sm text-white/70">Bienvenue,</p>
              <h1 className="text-2xl font-bold">{me.name}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground"><Upload className="h-4 w-4" />Uploader</Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link to="/admin"><Settings className="h-4 w-4" />Admin</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-6 bg-card shadow-[var(--shadow-card)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Mes photos</h2>
          <Button className="bg-primary hover:bg-primary-glow text-primary-foreground"><Plus className="h-4 w-4" />Ajouter</Button>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {myPhotos.map((p) => <PhotoCard key={p.id} photo={p} />)}
        </div>
      </section>
    </Layout>
  );
}