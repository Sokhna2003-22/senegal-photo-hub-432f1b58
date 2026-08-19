import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Images, Plus, Trash2, Settings } from "lucide-react";
import { getMyGalleries, apiCall } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/gallery/")({
  component: GalleryPage,
});

function GalleryPage() {
  const [galleries, setGalleries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    loadGalleries();
  }, []);

  async function loadGalleries() {
    try {
      const data = await getMyGalleries();
      setGalleries(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handleDelete(id: number) {
    if (!confirm("Supprimer cette galerie et toutes ses photos ?")) return;
    try {
      await apiCall(`/gallery/${id}/`, "DELETE");
      setGalleries(galleries.filter(g => g.id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Images className="h-7 w-7 text-primary" />Mes Galeries Clients
          </h1>
          <Button
            className="bg-primary hover:bg-primary-glow text-primary-foreground"
            onClick={() => navigate({ to: "/gallery/create" })}
          >
            <Plus className="h-4 w-4 mr-1" />Nouvelle Galerie
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Chargement...</p>
        ) : galleries.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border py-16 text-center">
            <Images className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Aucune galerie pour l'instant.</p>
            <Button className="mt-4 bg-primary text-primary-foreground"
                    onClick={() => navigate({ to: "/gallery/create" })}>
              Créer ma première galerie
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleries.map((g: any) => (
              <div key={g.id}
                   className="rounded-xl bg-card shadow-[var(--shadow-card)] overflow-hidden">
                {g.cover_url ? (
                  <img src={g.cover_url} className="w-full h-44 object-cover" />
                ) : (
                  <div className="w-full h-44 bg-muted grid place-items-center">
                    <Images className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">👤 {g.client_name}</p>
                  <p className="text-sm text-muted-foreground">📸 {g.photo_count} photo(s)</p>
                  <div className="mt-3 p-2 bg-muted rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Code d'accès</p>
                    <p className="font-mono font-bold text-xl text-primary tracking-widest">
                      {g.access_code}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 flex gap-2">
                  <Button
                    className="flex-1 bg-primary text-primary-foreground"
                    onClick={() => navigate({ to: "/gallery/$id", params: { id: g.id } })}
                  >
                    <Settings className="h-4 w-4 mr-1" />Gérer
                  </Button>
                  <Button
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                    onClick={() => handleDelete(g.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}