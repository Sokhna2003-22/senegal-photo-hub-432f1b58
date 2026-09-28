import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Layout } from "./Layout-BMLct-Ny.mjs";
import { C as Camera, h as Users, j as Shield, H as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-white py-20 border-b-4 border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold", children: [
        "Notre ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "mission" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80 text-lg", children: "Valoriser le talent des photographes sénégalais et faciliter la rencontre avec ceux qui cherchent à immortaliser leurs moments précieux." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6", children: [{
      icon: Camera,
      t: "Talent local",
      d: "Une vitrine dédiée aux photographes du Sénégal."
    }, {
      icon: Users,
      t: "Communauté",
      d: "Une plateforme qui favorise l'échange entre pros et clients."
    }, {
      icon: Shield,
      t: "Confiance",
      d: "Profils vérifiés et avis transparents."
    }, {
      icon: Heart,
      t: "Passion",
      d: "Construit avec amour pour la photographie."
    }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-6 bg-card shadow-[var(--shadow-card)] text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-12 h-12 rounded-full grid place-items-center mb-4", style: {
        background: "var(--gradient-primary)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: v.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: v.d })
    ] }, v.t)) })
  ] });
}
export {
  About as component
};
