import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as getPhotographers, L as Layout, I as Input } from "./Layout-BMLct-Ny.mjs";
import { p as Search, C as Camera, F as Folder } from "../_libs/lucide-react.mjs";
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
function PhotographersPage() {
  const [q, setQ] = reactExports.useState("");
  const [list, setList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    getPhotographers().then((data) => setList(Array.isArray(data) ? data : [])).catch(console.error).finally(() => setLoading(false));
  }, []);
  const filtered = list.filter((p) => {
    const name = `${p.first_name} ${p.last_name} ${p.username}`.toLowerCase();
    const city = (p.photographer_profile?.city || "").toLowerCase();
    return name.includes(q.toLowerCase()) || city.includes(q.toLowerCase());
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-white py-14 border-b-4 border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: "Nos photographes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mt-2", children: "Talentueux, vérifiés, et près de chez vous." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 max-w-md relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Rechercher par nom ou ville…", className: "pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-10", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-muted-foreground", children: "Chargement..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border-2 border-dashed border-border bg-card/50 py-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Aucun photographe trouvé." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((p) => {
      const fullName = p.first_name && p.last_name ? `${p.first_name} ${p.last_name}` : p.username;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/photographers/$id", params: {
        id: p.username
      }, className: "rounded-xl bg-card p-6 shadow-[var(--shadow-card)]\r\n                             border-t-2 border-primary hover:shadow-lg\r\n                             transition-shadow block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          p.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.avatar_url, className: "h-12 w-12 rounded-full object-cover border-2 border-primary", alt: fullName }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: fullName }),
            p.photographer_profile?.city && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "📍 ",
              p.photographer_profile.city
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4" }),
          p.photographer_profile?.bio ? p.photographer_profile.bio.slice(0, 50) + "..." : "Aucune bio"
        ] })
      ] }, p.id);
    }) }) })
  ] });
}
export {
  PhotographersPage as component
};
