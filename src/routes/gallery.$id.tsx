import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Images, Trash2, Upload, ArrowLeft } from "lucide-react";
import { apiCall, uploadPhotos } from "@/lib/api/client";

export const Route = createFileRoute("/gallery/$id")({
  component: GalleryDetail,
});

function GalleryDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [gallery, setGallery] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    apiCall(`/gallery/${id}/`)
      .then(setGallery)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;
    setUploading(true);
    try {
      await uploadPhotos(Number(id), e.target.files);
      const updated = await apiCall(`/gallery/${id}/`);
      setGallery(updated);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  if (loading) return (
    <Layout><div className="container mx-auto px-4 py-20 text-center text-muted-foreground">Chargement...</div></Layout>
  );

  if (!gallery) return (
    <Layout><div className="container mx-auto px-4 py-20 text-center">Galerie introuvable.</div></Layout>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button variant="ghost" onClick={() => navigate({ to: "/gallery/" })}
                    className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-1" />Retour
            </Button>
            <h1 className="text-2xl font-bold">{gallery.title}</h1>
            <p className="text-muted-foreground text-sm">
              👤 {gallery.client_name} — {gallery.client_email}
            </p>
          </div>
          <div className="text-center bg-muted p-3 rounded-xl">
            <p className="text-xs text-muted-foreground">Code d'accès</p>
            <p className="font-mono font-bold text-2xl text-primary tracking-widest">
              {gallery.access_code}
            </p>
          </div>
        </div>

        {/* Upload */}
        <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-4 mb-6">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Upload className="h-4 w-4" />Ajouter des photos
          </h2>
          <div className="flex gap-3 items-center">
            <input ref={fileRef} type="file" multiple accept="image/*"
                   className="hidden" onChange={handleUpload} />
            <Button className="bg-primary text-primary-foreground"
                    onClick={() => fileRef.current?.click()}
                    disabled={uploading}>
              {uploading ? "Upload en cours..." : "Sélectionner des photos"}
            </Button>
            <span className="text-sm text-muted-foreground">
              {gallery.photos?.length || 0} photo(s) dans la galerie
            </span>
          </div>
        </div>

        {/* Photos */}
        {gallery.photos?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.photos.map((photo: any) => (
              <div key={photo.id} className="rounded-xl overflow-hidden bg-card shadow-sm">
                <img src={photo.image_url} className="w-full h-40 object-cover" />
                <div className="p-2 text-center">
                  <span className="text-xs text-muted-foreground">
                    {photo.is_downloadable ? "✅ Téléchargeable" : "🔒 Privée"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Images className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p>Aucune photo ajoutée.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}