import { useState, type ReactNode } from "react";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, Lock, Images, Download } from "lucide-react";
import { accessGallery } from "@/lib/api/client";

export function AccessPhotosDialog({ trigger }: { trigger: ReactNode }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) {
      setError("Veuillez renseigner ce champ");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await accessGallery(code.trim().toUpperCase());
      if (data?.id) {
        setGallery(data);
      } else {
        setError("Code incorrect ou galerie introuvable.");
      }
    } catch {
      setError("Code incorrect ou galerie introuvable.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setGallery(null);
    setCode("");
    setError("");
  }

  function handleDownload(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-navy text-white p-8 border border-primary/30">

        {!gallery ? (
          <>
            <DialogHeader className="items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/20 grid place-items-center ring-1 ring-primary/40">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <DialogTitle className="text-2xl font-bold text-white">
                Accéder à mes photos
              </DialogTitle>
              <p className="text-sm text-white/70">
                Entrez le code d'accès reçu de votre photographe
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="EX: AB12CD34"
                className="text-center tracking-[0.3em] font-mono h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
              {error && (
                <p className="text-sm text-primary text-center">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground text-base"
                disabled={loading}
              >
                <KeyRound className="h-4 w-4 mr-1" />
                {loading ? "Vérification..." : "Accéder à ma galerie"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <DialogHeader className="items-center text-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-primary/20 grid place-items-center ring-1 ring-primary/40">
                <Images className="h-7 w-7 text-primary" />
              </div>
              <DialogTitle className="text-2xl font-bold text-white">
                {gallery.title}
              </DialogTitle>
              <p className="text-sm text-white/70">
                {gallery.photo_count} photo(s) disponible(s)
              </p>
            </DialogHeader>

            <div className="mt-4 max-h-[400px] overflow-y-auto">
              {gallery.photos && gallery.photos.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.photos.map((photo: any) => (
                    <div key={photo.id} className="rounded-lg overflow-hidden bg-white/5">
                      <img
                        src={photo.image_url}
                        alt={photo.title || "Photo"}
                        className="w-full h-32 object-cover"
                      />
                      {photo.is_downloadable && (
                        <div className="p-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full text-xs bg-primary/20 hover:bg-primary text-primary hover:text-white"
                            onClick={() => handleDownload(photo.image_url)}
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Télécharger
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-white/50 py-8">
                  Aucune photo dans cette galerie pour l'instant.
                </p>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full mt-4 border-white/20 text-white hover:bg-white/10"
              onClick={handleReset}
            >
              Entrer un autre code
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}