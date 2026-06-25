import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { photographers, photos } from "@/lib/mock-data";
import { BadgeCheck, Camera, Image as ImageIcon, ShieldCheck, Trash2, Users } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Administration — PhotoPlatform" }] }),
  component: Admin,
});

function Admin() {
  const stats = [
    { icon: Users, label: "Photographes", value: photographers.length },
    { icon: ImageIcon, label: "Photos", value: photos.length },
    { icon: ShieldCheck, label: "Vérifiés", value: photographers.filter((p) => p.verified).length },
  ];
  return (
    <Layout>
      <section className="bg-navy text-white py-10 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Espace administrateur</h1>
          <p className="text-white/70 mt-1">Gestion globale de la plateforme</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3 mb-10">
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
        <div className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-bold flex items-center gap-2"><Camera className="h-4 w-4 text-primary" />Photographes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="px-6 py-3 font-semibold">Nom</th>
                  <th className="px-6 py-3 font-semibold">Ville</th>
                  <th className="px-6 py-3 font-semibold">Spécialité</th>
                  <th className="px-6 py-3 font-semibold">Statut</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {photographers.map((p) => (
                  <tr key={p.id} className="border-t border-border">
                    <td className="px-6 py-3 flex items-center gap-3">
                      <img src={p.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                      <span className="font-medium">{p.name}</span>
                    </td>
                    <td className="px-6 py-3">{p.city}</td>
                    <td className="px-6 py-3">{p.specialty}</td>
                    <td className="px-6 py-3">
                      {p.verified ? (
                        <span className="inline-flex items-center gap-1 text-xs text-primary"><BadgeCheck className="h-3 w-3" />Vérifié</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">En attente</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <Button size="sm" variant="ghost"><BadgeCheck className="h-4 w-4" /></Button>
                      <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}