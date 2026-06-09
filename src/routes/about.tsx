import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Camera, Heart, Shield, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — PhotoPlatform" },
      { name: "description", content: "PhotoPlatform connecte les photographes professionnels sénégalais à leurs clients." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Notre mission</h1>
          <p className="mt-4 text-white/80 text-lg">Valoriser le talent des photographes sénégalais et faciliter la rencontre avec ceux qui cherchent à immortaliser leurs moments précieux.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6">
        {[
          { icon: Camera, t: "Talent local", d: "Une vitrine dédiée aux photographes du Sénégal." },
          { icon: Users, t: "Communauté", d: "Une plateforme qui favorise l'échange entre pros et clients." },
          { icon: Shield, t: "Confiance", d: "Profils vérifiés et avis transparents." },
          { icon: Heart, t: "Passion", d: "Construit avec amour pour la photographie." },
        ].map((v) => (
          <div key={v.t} className="rounded-xl p-6 bg-card shadow-[var(--shadow-card)] text-center">
            <div className="mx-auto w-12 h-12 rounded-full grid place-items-center mb-4" style={{ background: "var(--gradient-primary)" }}>
              <v.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-bold">{v.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}