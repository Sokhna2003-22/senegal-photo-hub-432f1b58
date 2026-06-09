import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PhotographerCard } from "@/components/PhotographerCard";
import { Input } from "@/components/ui/input";
import { photographers, categories } from "@/lib/mock-data";
import { Search } from "lucide-react";

export const Route = createFileRoute("/photographers/")({
  head: () => ({
    meta: [
      { title: "Photographes — PhotoPlatform" },
      { name: "description", content: "Découvrez les photographes professionnels du Sénégal par ville et spécialité." },
    ],
  }),
  component: PhotographersPage,
});

function PhotographersPage() {
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState("Tout");
  const list = photographers.filter((p) => (spec === "Tout" || p.specialty === spec) && (p.name.toLowerCase().includes(q.toLowerCase()) || p.city.toLowerCase().includes(q.toLowerCase())));
  return (
    <Layout>
      <section className="bg-navy text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Nos photographes</h1>
          <p className="text-white/70 mt-2">Talentueux, vérifiés, et près de chez vous.</p>
          <div className="mt-6 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher par nom ou ville…" className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {["Tout", ...categories].map((c) => (
            <button key={c} onClick={() => setSpec(c)} className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${spec === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <PhotographerCard key={p.id} p={p} />)}
        </div>
      </section>
    </Layout>
  );
}