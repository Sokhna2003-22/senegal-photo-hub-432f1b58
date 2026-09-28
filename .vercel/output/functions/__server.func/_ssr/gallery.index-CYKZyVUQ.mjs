import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, f as getMyGalleries, L as Layout, B as Button, m as apiCall } from "./Layout-BMLct-Ny.mjs";
import { I as Images, q as Plus, r as Settings, o as Trash2 } from "../_libs/lucide-react.mjs";
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
function GalleryPage() {
  const [galleries, setGalleries] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const navigate = useNavigate();
  const user = getCurrentUser();
  reactExports.useEffect(() => {
    if (!user) {
      navigate({
        to: "/login"
      });
      return;
    }
    loadGalleries();
  }, []);
  async function loadGalleries() {
    try {
      const data = await getMyGalleries();
      setGalleries(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  async function handleDelete(id) {
    if (!confirm("Supprimer cette galerie et toutes ses photos ?")) return;
    try {
      await apiCall(`/gallery/${id}/`, "DELETE");
      setGalleries(galleries.filter((g) => g.id !== id));
    } catch (e) {
      console.error(e);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-7 w-7 text-primary" }),
        "Mes Galeries Clients"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary hover:bg-primary-glow text-primary-foreground", onClick: () => navigate({
        to: "/gallery/create"
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
        "Nouvelle Galerie"
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Chargement..." }) : galleries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed border-border py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Aucune galerie pour l'instant." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-4 bg-primary text-primary-foreground", onClick: () => navigate({
        to: "/gallery/create"
      }), children: "Créer ma première galerie" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: galleries.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card shadow-[var(--shadow-card)] overflow-hidden", children: [
      g.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.cover_url, className: "w-full h-44 object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-44 bg-muted grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-10 w-10 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: g.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "👤 ",
          g.client_name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "📸 ",
          g.photo_count,
          " photo(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 p-2 bg-muted rounded-lg text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Code d'accès" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono font-bold text-xl text-primary tracking-widest", children: g.access_code })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "flex-1 bg-primary text-primary-foreground", onClick: () => navigate({
          to: "/gallery/$id",
          params: {
            id: g.id
          }
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4 mr-1" }),
          "Gérer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-destructive text-destructive hover:bg-destructive hover:text-white", onClick: () => handleDelete(g.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, g.id)) })
  ] }) });
}
export {
  GalleryPage as component
};
