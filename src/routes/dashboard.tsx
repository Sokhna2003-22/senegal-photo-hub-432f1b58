import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Camera, Eye, Heart, ImageIcon, Plus, Settings, Upload } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon espace — PhotoPlatform" }] }),
  component: Dashboard,
});

function Dashboard() {
  const stats = [
    { icon: Eye, label: "Vues", value: "0" },
    { icon: Heart, label: "Likes", value: "0" },
    { icon: Camera, label: "Photos", value: "0" },
  ];
  return (
    <Layout>
      <section className="bg-navy text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full grid place-items-center border-2 border-primary bg-navy-deep">
              <Camera className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-sm text-white/70">Bienvenue,</p>
              <h1 className="text-2xl font-bold">Mon espace</h1>
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
        <div className="mt-6 rounded-xl border-2 border-dashed border-border bg-card/50 py-20 text-center">
          <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto" />
          <p className="mt-3 text-muted-foreground">Aucune photo pour le moment</p>
          <Button className="mt-4 bg-primary hover:bg-primary-glow text-primary-foreground"><Upload className="h-4 w-4" />Uploader ma première photo</Button>
        </div>
      </section>
    </Layout>
  );
}