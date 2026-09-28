import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, n as getPhotographer, L as Layout, B as Button } from "./Layout-BMLct-Ny.mjs";
import { b as Route$2 } from "./router-Cbul_ae0.mjs";
import { C as Camera, B as BadgeCheck, c as MapPin, d as Mail, i as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function PhotographerDetail() {
  const {
    id
  } = Route$2.useParams();
  const [photographer, setPhotographer] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const currentUser = getCurrentUser();
  reactExports.useEffect(() => {
    if (!id) return;
    getPhotographer(id).then((data) => {
      console.log("Photographer data:", data);
      if (data?.error || data?.detail) {
        setPhotographer(null);
      } else {
        setPhotographer(data);
      }
    }).catch((e) => {
      console.error("Error:", e);
      setPhotographer(null);
    }).finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-32 text-center text-muted-foreground", children: "Chargement..." }) });
  }
  if (!photographer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-32 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Photographe introuvable" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/photographers", children: "Retour à la liste" }) })
    ] }) });
  }
  const profile = photographer.photographer_profile;
  const albums = photographer.albums || [];
  const fullName = photographer.first_name && photographer.last_name ? `${photographer.first_name} ${photographer.last_name}` : photographer.username;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 md:h-64 relative", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 -mt-16 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)]\r\n                        flex flex-col md:flex-row gap-6", children: [
      photographer.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photographer.avatar_url, alt: fullName, className: "h-28 w-28 rounded-full object-cover border-4 border-primary -mt-16" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 rounded-full bg-primary/10 border-4 border-primary\r\n                            grid place-items-center -mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-10 w-10 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-bold", children: fullName }),
          profile?.is_verified && /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-6 w-6 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2", children: [
          profile?.city && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            profile.city
          ] }),
          profile?.instagram && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
            "@",
            profile.instagram
          ] })
        ] }),
        profile?.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl", children: profile.bio })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-2", children: currentUser ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary-glow text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/reserve/$username", params: {
          username: photographer.username
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-1" }),
          "Réserver"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/messages", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 mr-1" }),
          "Message"
        ] }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary-glow text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-1" }),
        "Se connecter pour réserver"
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Portfolio" }),
      albums.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Aucun album public pour l'instant." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: albums.map((album) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden bg-card\r\n                              shadow-[var(--shadow-card)]\r\n                              hover:shadow-[var(--shadow-elegant)] transition-all", children: [
        album.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: album.cover_url, alt: album.title, className: "w-full h-48 object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-48 bg-muted grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-10 w-10 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: album.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
            album.category,
            " — ",
            album.photo_count,
            " photo(s)"
          ] })
        ] })
      ] }, album.id)) })
    ] })
  ] });
}
export {
  PhotographerDetail as component
};
