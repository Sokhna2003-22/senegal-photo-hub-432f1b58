import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { m as apiCall, L as Layout, B as Button, p as uploadPhotos } from "./Layout-BMLct-Ny.mjs";
import { c as Route } from "./router-Cbul_ae0.mjs";
import { A as ArrowLeft, s as Upload, I as Images } from "../_libs/lucide-react.mjs";
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
function GalleryDetail() {
  const {
    id
  } = Route.useParams();
  const navigate = useNavigate();
  const [gallery, setGallery] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [uploading, setUploading] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    apiCall(`/gallery/${id}/`).then(setGallery).catch(console.error).finally(() => setLoading(false));
  }, [id]);
  async function handleUpload(e) {
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
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20 text-center text-muted-foreground", children: "Chargement..." }) });
  if (!gallery) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20 text-center", children: "Galerie introuvable." }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => navigate({
          to: "/gallery/"
        }), className: "mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
          "Retour"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: gallery.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          "👤 ",
          gallery.client_name,
          " — ",
          gallery.client_email
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center bg-muted p-3 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Code d'accès" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono font-bold text-2xl text-primary tracking-widest", children: gallery.access_code })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl shadow-[var(--shadow-card)] p-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
        "Ajouter des photos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", multiple: true, accept: "image/*", className: "hidden", onChange: handleUpload }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-primary text-primary-foreground", onClick: () => fileRef.current?.click(), disabled: uploading, children: uploading ? "Upload en cours..." : "Sélectionner des photos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          gallery.photos?.length || 0,
          " photo(s) dans la galerie"
        ] })
      ] })
    ] }),
    gallery.photos?.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: gallery.photos.map((photo) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden bg-card shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo.image_url, className: "w-full h-40 object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: photo.is_downloadable ? "✅ Téléchargeable" : "🔒 Privée" }) })
    ] }, photo.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-12 w-12 mx-auto mb-3 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aucune photo ajoutée." })
    ] })
  ] }) });
}
export {
  GalleryDetail as component
};
