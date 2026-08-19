import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Camera, Folder, Search } from "lucide-react";
import { getPhotographers } from "@/lib/api/client";

export const Route = createFileRoute("/photographers/")({
  head: () => ({
    meta: [
      { title: "Photographes — PhotoPlatform" },
      { name: "description", content: "Découvrez les photographes professionnels du Sénégal." },
    ],
  }),
  component: PhotographersPage,
});

function PhotographersPage() {
  const [q, setQ] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhotographers()
      .then((data) => setList(Array.isArray(data) ? data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = list.filter((p) => {
    const name = `${p.first_name} ${p.last_name} ${p.username}`.toLowerCase();
    const city = (p.photographer_profile?.city || "").toLowerCase();
    return name.includes(q.toLowerCase()) || city.includes(q.toLowerCase());
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-navy text-white py-14 border-b-4 border-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Nos photographes</h1>
          <p className="text-white/70 mt-2">Talentueux, vérifiés, et près de chez vous.</p>
          <div className="mt-6 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rechercher par nom ou ville…"
              className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
        </div>
      </section>

      {/* Liste */}
      <section className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center py-16 text-muted-foreground">
            Chargement...
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border bg-card/50 py-16 text-center">
            <p className="text-muted-foreground">Aucun photographe trouvé.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p: any) => {
              const fullName = p.first_name && p.last_name
                ? `${p.first_name} ${p.last_name}`
                : p.username;
              return (
                <Link
                  key={p.id}
                  to="/photographers/$id"
                  params={{ id: p.username }}
                  className="rounded-xl bg-card p-6 shadow-[var(--shadow-card)]
                             border-t-2 border-primary hover:shadow-lg
                             transition-shadow block"
                >
                  <div className="flex items-center gap-3">
                    {p.avatar_url ? (
                      <img src={p.avatar_url}
                           className="h-12 w-12 rounded-full object-cover border-2 border-primary"
                           alt={fullName} />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center">
                        <Camera className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold">{fullName}</h3>
                      {p.photographer_profile?.city && (
                        <p className="text-xs text-muted-foreground">
                          📍 {p.photographer_profile.city}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Folder className="h-4 w-4" />
                    {p.photographer_profile?.bio
                      ? p.photographer_profile.bio.slice(0, 50) + "..."
                      : "Aucune bio"}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
}