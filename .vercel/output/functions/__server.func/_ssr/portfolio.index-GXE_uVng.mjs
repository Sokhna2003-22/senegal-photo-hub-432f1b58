import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, h as getMyAlbums, L as Layout, B as Button, k as deleteAlbum } from "./Layout-BMLct-Ny.mjs";
import { F as Folder, n as FolderPlus, I as Images, o as Trash2 } from "../_libs/lucide-react.mjs";
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
function PortfolioPage() {
  const [albums, setAlbums] = reactExports.useState([]);
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
    loadAlbums();
  }, []);
  async function loadAlbums() {
    try {
      const data = await getMyAlbums();
      setAlbums(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  async function handleDelete(id) {
    if (!confirm("Supprimer cet album et toutes ses photos ?")) return;
    try {
      await deleteAlbum(id);
      setAlbums(albums.filter((a) => a.id !== id));
    } catch (e) {
      console.error(e);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-7 w-7 text-primary" }),
        "Mon Portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground", onClick: () => navigate({
        to: "/portfolio/create"
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-4 w-4 mr-1" }),
        "Nouvel Album"
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Chargement..." }) : albums.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed border-border py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Aucun album pour l'instant." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-4 bg-primary text-primary-foreground", onClick: () => navigate({
        to: "/portfolio/create"
      }), children: "Créer mon premier album" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: albums.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-card shadow-[var(--shadow-card)] overflow-hidden", children: [
      a.cover_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.cover_url, className: "w-full h-44 object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-44 bg-muted grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-10 w-10 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-secondary px-2 py-1 rounded-full", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${a.is_public ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`, children: a.is_public ? "Public" : "Privé" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
          a.photo_count,
          " photo(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "flex-1 border-destructive text-destructive hover:bg-destructive hover:text-white", onClick: () => handleDelete(a.id), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-1" }),
        "Supprimer"
      ] }) })
    ] }, a.id)) })
  ] }) });
}
export {
  PortfolioPage as component
};
