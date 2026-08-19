import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Camera, Mail, MapPin, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { getPhotographer } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/photographers/$id")({
  component: PhotographerDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold">Photographe introuvable</h1>
        <Button asChild className="mt-6">
          <Link to="/photographers">Retour à la liste</Link>
        </Button>
      </div>
    </Layout>
  ),
});

function PhotographerDetail() {
  const { id } = Route.useParams();
  const [photographer, setPhotographer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!id) return;
    getPhotographer(id)
      .then((data) => {
        console.log("Photographer data:", data);
        if (data?.error || data?.detail) {
          setPhotographer(null);
        } else {
          setPhotographer(data);
        }
      })
      .catch((e) => {
        console.error("Error:", e);
        setPhotographer(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center text-muted-foreground">
          Chargement...
        </div>
      </Layout>
    );
  }

  if (!photographer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold">Photographe introuvable</h1>
          <Button asChild className="mt-6">
            <Link to="/photographers">Retour à la liste</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const profile = photographer.photographer_profile;
  const albums = photographer.albums || [];
  const fullName = photographer.first_name && photographer.last_name
    ? `${photographer.first_name} ${photographer.last_name}`
    : photographer.username;

  return (
    <Layout>
      {/* Cover */}
      <div className="h-48 md:h-64 relative"
           style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>

      {/* Profil */}
      <div className="container mx-auto px-4 -mt-16 relative">
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)]
                        flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          {photographer.avatar_url ? (
            <img src={photographer.avatar_url} alt={fullName}
                 className="h-28 w-28 rounded-full object-cover border-4 border-primary -mt-16" />
          ) : (
            <div className="h-28 w-28 rounded-full bg-primary/10 border-4 border-primary
                            grid place-items-center -mt-16">
              <Camera className="h-10 w-10 text-primary" />
            </div>
          )}

          {/* Infos */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold">{fullName}</h1>
              {profile?.is_verified && (
                <BadgeCheck className="h-6 w-6 text-primary" />
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
              {profile?.city && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />{profile.city}
                </span>
              )}
              {profile?.instagram && (
                <span className="text-primary">@{profile.instagram}</span>
              )}
            </div>
            {profile?.bio && (
              <p className="mt-4 text-muted-foreground max-w-2xl">{profile.bio}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex md:flex-col gap-2">
            {currentUser ? (
              <>
                <Button asChild
                        className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  <Link to="/reserve/$username" params={{ username: photographer.username }}>
                    <Mail className="h-4 w-4 mr-1" />Réserver
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/messages">
                    <MessageSquare className="h-4 w-4 mr-1" />Message
                  </Link>
                </Button>
              </>
            ) : (
              <Button asChild
                      className="bg-primary hover:bg-primary-glow text-primary-foreground">
                <Link to="/login">
                  <Mail className="h-4 w-4 mr-1" />Se connecter pour réserver
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Albums */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        {albums.length === 0 ? (
          <p className="text-muted-foreground">Aucun album public pour l'instant.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album: any) => (
              <div key={album.id}
                   className="rounded-xl overflow-hidden bg-card
                              shadow-[var(--shadow-card)]
                              hover:shadow-[var(--shadow-elegant)] transition-all">
                {album.cover_url ? (
                  <img src={album.cover_url} alt={album.title}
                       className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-muted grid place-items-center">
                    <Camera className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold">{album.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {album.category} — {album.photo_count} photo(s)
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}