import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, L as Layout, B as Button, A as AccessPhotosDialog, d as getPhotographers, j as getPublicAlbums } from "./Layout-BMLct-Ny.mjs";
import { C as Camera, k as LogIn, b as Image, L as Lock, i as MessageSquare, l as CircleCheckBig, h as Users, m as Star, j as Shield, D as Download } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const HERO_IMAGES = ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80", "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80", "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80", "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1600&q=80"];
function Index() {
  const [photographers, setPhotographers] = reactExports.useState([]);
  const [albums, setAlbums] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [heroIndex, setHeroIndex] = reactExports.useState(0);
  const currentUser = getCurrentUser();
  reactExports.useEffect(() => {
    async function loadData() {
      try {
        const [p, a] = await Promise.all([getPhotographers(), getPublicAlbums()]);
        setPhotographers(Array.isArray(p) ? p : []);
        setAlbums(Array.isArray(a) ? a : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden", children: [
      HERO_IMAGES.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center transition-opacity duration-1000", style: {
        backgroundImage: `url(${img})`,
        opacity: i === heroIndex ? 1 : 0
      } }, img)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/65" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: HERO_IMAGES.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setHeroIndex(i), className: `h-2 rounded-full transition-all ${i === heroIndex ? "w-8 bg-primary" : "w-2 bg-white/40"}` }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white px-4 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-3 py-1.5 mb-4 md:mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3 w-3 md:h-4 md:w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs md:text-sm font-medium text-primary", children: "La plateforme N°1 des photographes au Sénégal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 md:mb-6", children: [
          "Capturez vos",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "moments précieux" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-10 px-2", children: "Trouvez le photographe parfait pour votre mariage, portrait, événement ou séance photo. Accédez à vos galeries privées en toute sécurité." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4", children: [
          currentUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary hover:bg-primary-glow text-primary-foreground w-full sm:w-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4 mr-2" }),
            "Mon Dashboard"
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary hover:bg-primary-glow text-primary-foreground w-full sm:w-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/register", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4 mr-2" }),
              "Commencer gratuitement"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/40 text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4 mr-2" }),
              "Se connecter"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccessPhotosDialog, { trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "outline", className: "border-primary/60 text-primary bg-primary/10 hover:bg-primary hover:text-white w-full sm:w-auto px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4 mr-2" }),
            "Accéder à mes photos"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto", children: [{
          n: `${photographers.length}+`,
          l: "Photographes"
        }, {
          n: `${albums.length}+`,
          l: "Albums"
        }, {
          n: "100%",
          l: "Sécurisé"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-4xl font-bold text-primary", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-white/60 mt-1", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-4xl font-bold", children: "Tout ce dont vous avez besoin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base", children: "SunuVision connecte photographes professionnels et clients dans un espace sécurisé et intuitif." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8", children: [{
        icon: Camera,
        color: "bg-red-500/10 text-red-500",
        title: "Publiez votre portfolio",
        desc: "Créez votre mini-site personnel. Partagez vos meilleurs travaux en albums organisés par catégorie : mariage, portrait, mode, événements...",
        items: ["Albums illimités", "Profil personnalisé", "Visibilité publique"]
      }, {
        icon: Lock,
        color: "bg-blue-500/10 text-blue-500",
        title: "Galeries privées clients",
        desc: "Après chaque séance, créez une galerie sécurisée pour votre client. Il reçoit un code unique pour accéder et télécharger ses photos.",
        items: ["Code d'accès unique", "Téléchargement sécurisé", "Expiration programmable"]
      }, {
        icon: MessageSquare,
        color: "bg-green-500/10 text-green-500",
        title: "Réservez & Communiquez",
        desc: "Les clients peuvent réserver directement sur votre profil. Gérez vos commandes et échangez des messages en temps réel.",
        items: ["Réservation en ligne", "Messagerie intégrée", "Suivi des commandes"]
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 md:p-8 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 rounded-2xl ${f.color} grid place-items-center mb-5`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-bold mb-3", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: f.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: f.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary flex-shrink-0" }),
          item
        ] }, item)) })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-4xl font-bold text-white", children: "Comment ça marche ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 mt-3 text-sm md:text-base", children: "Simple, rapide et sécurisé" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg md:text-xl font-bold text-primary mb-6 md:mb-8 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5" }),
            "Pour les photographes"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 md:space-y-6", children: [{
            n: "1",
            t: "Créez votre compte photographe",
            d: "Inscrivez-vous gratuitement et configurez votre profil en quelques minutes."
          }, {
            n: "2",
            t: "Publiez votre portfolio",
            d: "Ajoutez vos meilleurs albums pour attirer de nouveaux clients."
          }, {
            n: "3",
            t: "Recevez des réservations",
            d: "Les clients vous contactent directement depuis votre profil public."
          }, {
            n: "4",
            t: "Livrez les photos",
            d: "Créez une galerie privée avec code d'accès pour chaque client."
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary flex-shrink-0 grid place-items-center font-bold text-white text-sm", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm md:text-base", children: s.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs md:text-sm mt-1", children: s.d })
            ] })
          ] }, s.n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg md:text-xl font-bold text-blue-400 mb-6 md:mb-8 flex items-center gap-2 mt-8 md:mt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
            "Pour les clients"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 md:space-y-6", children: [{
            n: "1",
            t: "Découvrez les photographes",
            d: "Parcourez les portfolios et trouvez le style qui correspond à votre projet."
          }, {
            n: "2",
            t: "Réservez en ligne",
            d: "Envoyez une demande de réservation avec la date, le lieu et vos besoins."
          }, {
            n: "3",
            t: "Recevez votre code",
            d: "Après la séance, recevez un code d'accès unique par email."
          }, {
            n: "4",
            t: "Téléchargez vos photos",
            d: "Accédez à votre galerie privée et téléchargez vos photos en haute qualité."
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 grid place-items-center font-bold text-white text-sm", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm md:text-base", children: s.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs md:text-sm mt-1", children: s.d })
            ] })
          ] }, s.n)) })
        ] })
      ] })
    ] }) }),
    photographers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8 md:mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Nos Photographes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Des professionnels talentueux près de chez vous" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/photographers", children: "Voir tous" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: photographers.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/photographers/$id", params: {
        id: p.username
      }, className: "group rounded-2xl bg-card border overflow-hidden hover:shadow-lg transition-all block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 md:h-32 bg-cover bg-center relative", style: {
          backgroundImage: `url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=60)`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-5 -mt-8 relative", children: [
          p.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.avatar_url, className: "h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-4 border-card mb-3", alt: p.username }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/10 border-4 border-card grid place-items-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 md:h-7 md:w-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base md:text-lg", children: p.first_name && p.last_name ? `${p.first_name} ${p.last_name}` : p.username }),
          p.photographer_profile?.city && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground", children: [
            "📍 ",
            p.photographer_profile.city
          ] }),
          p.photographer_profile?.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground mt-2 line-clamp-2", children: p.photographer_profile.bio }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1 text-yellow-500", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "Vérifié" })
          ] })
        ] })
      ] }, p.id)) })
    ] }) }),
    albums.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 md:mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Derniers Photoshoots" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Découvrez les récentes réalisations de nos photographes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4", children: albums.slice(0, 8).map((album) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden bg-card shadow hover:shadow-lg transition-all group", children: [
        album.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: album.cover_url, alt: album.title, className: "w-full h-36 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-36 md:h-52 bg-muted grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-8 w-8 md:h-10 md:w-10 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 md:p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold truncate text-sm md:text-base", children: album.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            "📸 ",
            album.photographer?.first_name,
            " ",
            album.photographer?.last_name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full", children: album.category })
        ] })
      ] }, album.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10 md:mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Pourquoi choisir SunuVision ?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: [{
        icon: Shield,
        title: "100% Sécurisé",
        desc: "Vos photos sont protégées par un accès par code unique",
        color: "text-green-500"
      }, {
        icon: Download,
        title: "Téléchargement HD",
        desc: "Téléchargez vos photos en haute résolution sans compression",
        color: "text-blue-500"
      }, {
        icon: Star,
        title: "Pros vérifiés",
        desc: "Tous nos photographes sont sélectionnés pour leur qualité",
        color: "text-yellow-500"
      }, {
        icon: MessageSquare,
        title: "Support réactif",
        desc: "Communiquez directement avec votre photographe",
        color: "text-purple-500"
      }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4 md:p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: `h-8 w-8 md:h-10 md:w-10 mx-auto mb-3 md:mb-4 ${a.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-1 md:mb-2 text-sm md:text-base", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground", children: a.desc })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 md:py-20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-4 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-5xl font-bold mb-4", children: "Prêt à immortaliser vos moments ?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto", children: "Rejoignez des centaines de photographes et clients qui font confiance à SunuVision." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary hover:bg-primary-glow text-white w-full sm:w-auto px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Créer mon compte gratuitement" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/40 text-white hover:bg-white/10 w-full sm:w-auto px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/photographers", children: "Voir les photographes" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
