import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Folder, FolderPlus, Images, Trash2 } from "lucide-react";
import { getMyAlbums, deleteAlbum } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
});

function PortfolioPage() {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    loadAlbums();
  }, []);

  async function loadAlbums() {
    try {
      const data = await getMyAlbums();
      setAlbums(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handleDelete(id: number) {
    if (!confirm("Supprimer cet album et toutes ses photos ?")) return;
    try {
      await deleteAlbum(id);
      setAlbums(albums.filter(a => a.id !== id));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Folder className="h-7 w-7 text-primary" />Mon Portfolio
          </h1>
          <Button className="bg-primary text-primary-foreground"
                  onClick={() => navigate({ to: "/portfolio/create" })}>
            <FolderPlus className="h-4 w-4 mr-1" />Nouvel Album
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Chargement...</p>
        ) : albums.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border py-16 text-center">
            <Folder className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Aucun album pour l'instant.</p>
            <Button className="mt-4 bg-primary text-primary-foreground"
                    onClick={() => navigate({ to: "/portfolio/create" })}>
              Créer mon premier album
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((a: any) => (
              <div key={a.id}
                   className="rounded-xl bg-card shadow-[var(--shadow-card)] overflow-hidden">
                {a.cover_url ? (
                  <img src={a.cover_url} className="w-full h-44 object-cover" />
                ) : (
                  <div className="w-full h-44 bg-muted grid place-items-center">
                    <Images className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold">{a.title}</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {a.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      a.is_public
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {a.is_public ? "Public" : "Privé"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {a.photo_count} photo(s)
                  </p>
                </div>
                <div className="px-4 pb-4 flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-white"
                    onClick={() => handleDelete(a.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />Supprimer
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