import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Camera, ImageIcon, LogIn, Shield, Folder,
  CheckCircle, Star, Users, Lock, Download, MessageSquare
} from "lucide-react";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AccessPhotosDialog } from "@/components/AccessPhotosDialog";
import { getPhotographers, getPublicAlbums } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SunuVision — Photographes professionnels du Sénégal" },
      { name: "description", content: "Découvrez et réservez les meilleurs photographes professionnels sénégalais." },
    ],
  }),
  component: Index,
});

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80",
  "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1600&q=80",
];

function Index() {
  const [photographers, setPhotographers] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [heroIndex, setHeroIndex] = useState(0);
  const currentUser = getCurrentUser();

  useEffect(() => {
    async function loadData() {
      try {
        const [p, a] = await Promise.all([getPhotographers(), getPublicAlbums()]);
        setPhotographers(Array.isArray(p) ? p : []);
        setAlbums(Array.isArray(a) ? a : []);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    }
    loadData();

    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${img})`, opacity: i === heroIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === heroIndex ? "w-8 bg-primary" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 py-1.5 mb-4 md:mb-6">
            <Camera className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">
              La plateforme N°1 des photographes au Sénégal
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Capturez vos<br />
            <span className="text-primary">moments précieux</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-10 px-2">
            Trouvez le photographe parfait pour votre mariage, portrait, événement
            ou séance photo. Accédez à vos galeries privées en toute sécurité.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4">
            {currentUser ? (
              <Button asChild size="lg"
                      className="bg-primary hover:bg-primary-glow text-primary-foreground w-full sm:w-auto px-8">
                <Link to="/dashboard">
                  <Camera className="h-4 w-4 mr-2" />Mon Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg"
                        className="bg-primary hover:bg-primary-glow text-primary-foreground w-full sm:w-auto px-8">
                  <Link to="/register">
                    <Camera className="h-4 w-4 mr-2" />Commencer gratuitement
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline"
                        className="border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-8">
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" />Se connecter
                  </Link>
                </Button>
              </>
            )}
            <AccessPhotosDialog
              trigger={
                <Button size="lg" variant="outline"
                        className="border-primary/60 text-primary bg-primary/10 hover:bg-primary hover:text-white w-full sm:w-auto px-8">
                  <ImageIcon className="h-4 w-4 mr-2" />Accéder à mes photos
                </Button>
              }
            />
          </div>

          <div className="mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
            {[
              { n: `${photographers.length}+`, l: "Photographes" },
              { n: `${albums.length}+`, l: "Albums" },
              { n: "100%", l: "Sécurisé" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary">{s.n}</div>
                <div className="text-xs md:text-sm text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QUE FAIT LE SITE ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
              SunuVision connecte photographes professionnels et clients
              dans un espace sécurisé et intuitif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Camera,
                color: "bg-red-500/10 text-red-500",
                title: "Publiez votre portfolio",
                desc: "Créez votre mini-site personnel. Partagez vos meilleurs travaux en albums organisés par catégorie : mariage, portrait, mode, événements...",
                items: ["Albums illimités", "Profil personnalisé", "Visibilité publique"],
              },
              {
                icon: Lock,
                color: "bg-blue-500/10 text-blue-500",
                title: "Galeries privées clients",
                desc: "Après chaque séance, créez une galerie sécurisée pour votre client. Il reçoit un code unique pour accéder et télécharger ses photos.",
                items: ["Code d'accès unique", "Téléchargement sécurisé", "Expiration programmable"],
              },
              {
                icon: MessageSquare,
                color: "bg-green-500/10 text-green-500",
                title: "Réservez & Communiquez",
                desc: "Les clients peuvent réserver directement sur votre profil. Gérez vos commandes et échangez des messages en temps réel.",
                items: ["Réservation en ligne", "Messagerie intégrée", "Suivi des commandes"],
              },
            ].map((f) => (
              <div key={f.title}
                   className="rounded-2xl border bg-card p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 rounded-2xl ${f.color} grid place-items-center mb-5`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{f.desc}</p>
                <ul className="space-y-2">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Comment ça marche ?
            </h2>
            <p className="text-white/60 mt-3 text-sm md:text-base">Simple, rapide et sécurisé</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-2">
                <Camera className="h-5 w-5" />Pour les photographes
              </h3>
              <div className="space-y-5 md:space-y-6">
                {[
                  { n: "1", t: "Créez votre compte photographe", d: "Inscrivez-vous gratuitement et configurez votre profil en quelques minutes." },
                  { n: "2", t: "Publiez votre portfolio", d: "Ajoutez vos meilleurs albums pour attirer de nouveaux clients." },
                  { n: "3", t: "Recevez des réservations", d: "Les clients vous contactent directement depuis votre profil public." },
                  { n: "4", t: "Livrez les photos", d: "Créez une galerie privée avec code d'accès pour chaque client." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 grid place-items-center font-bold text-white text-sm">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">{s.t}</p>
                      <p className="text-white/60 text-xs md:text-sm mt-1">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-6 md:mb-8 flex items-center gap-2 mt-8 md:mt-0">
                <Users className="h-5 w-5" />Pour les clients
              </h3>
              <div className="space-y-5 md:space-y-6">
                {[
                  { n: "1", t: "Découvrez les photographes", d: "Parcourez les portfolios et trouvez le style qui correspond à votre projet." },
                  { n: "2", t: "Réservez en ligne", d: "Envoyez une demande de réservation avec la date, le lieu et vos besoins." },
                  { n: "3", t: "Recevez votre code", d: "Après la séance, recevez un code d'accès unique par email." },
                  { n: "4", t: "Téléchargez vos photos", d: "Accédez à votre galerie privée et téléchargez vos photos en haute qualité." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 grid place-items-center font-bold text-white text-sm">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">{s.t}</p>
                      <p className="text-white/60 text-xs md:text-sm mt-1">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS PHOTOGRAPHES ── */}
      {photographers.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8 md:mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Nos Photographes</h2>
                <p className="text-muted-foreground mt-1 text-sm">Des professionnels talentueux près de chez vous</p>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to="/photographers">Voir tous</Link>
              </Button>
            </div>

            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {photographers.slice(0, 6).map((p: any) => (
                <Link key={p.id} to="/photographers/$id"
                      params={{ id: p.username }}
                      className="group rounded-2xl bg-card border overflow-hidden hover:shadow-lg transition-all block">
                  <div className="h-28 md:h-32 bg-cover bg-center relative"
                       style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=60)` }}>
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="p-4 md:p-5 -mt-8 relative">
                    {p.avatar_url ? (
                      <img src={p.avatar_url}
                           className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-4 border-card mb-3"
                           alt={p.username} />
                    ) : (
                      <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 border-4 border-card grid place-items-center mb-3">
                        <Camera className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                      </div>
                    )}
                    <h3 className="font-bold text-base md:text-lg">
                      {p.first_name && p.last_name
                        ? `${p.first_name} ${p.last_name}`
                        : p.username}
                    </h3>
                    {p.photographer_profile?.city && (
                      <p className="text-xs md:text-sm text-muted-foreground">
                        📍 {p.photographer_profile.city}
                      </p>
                    )}
                    {p.photographer_profile?.bio && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 line-clamp-2">
                        {p.photographer_profile.bio}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">Vérifié</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DERNIERS ALBUMS ── */}
      {albums.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Derniers Photoshoots</h2>
              <p className="text-muted-foreground mt-2 text-sm">Découvrez les récentes réalisations de nos photographes</p>
            </div>
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
              {albums.slice(0, 8).map((album: any) => (
                <div key={album.id}
                     className="rounded-2xl overflow-hidden bg-card shadow hover:shadow-lg transition-all group">
                  {album.cover_url ? (
                    <img src={album.cover_url} alt={album.title}
                         className="w-full h-36 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-36 md:h-52 bg-muted grid place-items-center">
                      <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground" />
                    </div>
                  )}
                  <div className="p-3 md:p-4">
                    <p className="font-semibold truncate text-sm md:text-base">{album.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      📸 {album.photographer?.first_name} {album.photographer?.last_name}
                    </p>
                    <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {album.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AVANTAGES ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold">Pourquoi choisir SunuVision ?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Shield, title: "100% Sécurisé", desc: "Vos photos sont protégées par un accès par code unique", color: "text-green-500" },
              { icon: Download, title: "Téléchargement HD", desc: "Téléchargez vos photos en haute résolution sans compression", color: "text-blue-500" },
              { icon: Star, title: "Pros vérifiés", desc: "Tous nos photographes sont sélectionnés pour leur qualité", color: "text-yellow-500" },
              { icon: MessageSquare, title: "Support réactif", desc: "Communiquez directement avec votre photographe", color: "text-purple-500" },
            ].map((a) => (
              <div key={a.title} className="text-center p-4 md:p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow">
                <a.icon className={`h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 md:mb-4 ${a.color}`} />
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{a.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80)" }} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Prêt à immortaliser vos moments ?
          </h2>
          <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto">
            Rejoignez des centaines de photographes et clients qui font confiance à SunuVision.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4">
            <Button asChild size="lg"
                    className="bg-primary hover:bg-primary-glow text-white w-full sm:w-auto px-10">
              <Link to="/register">Créer mon compte gratuitement</Link>
            </Button>
            <Button asChild size="lg" variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto px-10">
              <Link to="/photographers">Voir les photographes</Link>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}