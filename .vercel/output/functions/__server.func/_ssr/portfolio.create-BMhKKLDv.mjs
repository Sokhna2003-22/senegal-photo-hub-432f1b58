import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, L as Layout, I as Input, B as Button } from "./Layout-BMLct-Ny.mjs";
import { L as Label } from "./label-B1keBYjU.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-label.mjs";
function PortfolioCreate() {
  const navigate = useNavigate();
  getCurrentUser();
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const fileRef = reactExports.useRef(null);
  const coverRef = reactExports.useRef(null);
  const [form, setForm] = reactExports.useState({
    title: "",
    description: "",
    category: "mariage",
    is_public: true
  });
  function handleChange(e) {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({
      ...form,
      [e.target.name]: val
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("is_public", String(form.is_public));
      if (coverRef.current?.files?.[0]) {
        formData.append("cover_image", coverRef.current.files[0]);
      }
      if (fileRef.current?.files) {
        Array.from(fileRef.current.files).forEach((f) => formData.append("photos", f));
      }
      const response = await fetch("http://127.0.0.1:8000/api/portfolio/my/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
      const data = await response.json();
      if (data.id) {
        navigate({
          to: "/portfolio/"
        });
      } else {
        setError("Erreur lors de la création.");
      }
    } catch (e2) {
      setError("Erreur lors de la création.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy-deep text-white px-6 py-4 font-semibold text-lg", children: "📁 Créer un album portfolio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Titre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "title", value: form.title, onChange: handleChange, className: "mt-1", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", value: form.description, onChange: handleChange, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[80px]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Catégorie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "category", value: form.category, onChange: handleChange, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mariage", children: "Mariage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "portrait", children: "Portrait" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "evenement", children: "Événement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mode", children: "Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "nature", children: "Nature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "autre", children: "Autre" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Image de couverture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: coverRef, type: "file", accept: "image/*", className: "mt-1 w-full text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Photos de l'album" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", multiple: true, accept: "image/*", className: "mt-1 w-full text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", name: "is_public", id: "is_public", checked: form.is_public, onChange: handleChange }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "is_public", children: "Album public (visible sur votre profil)" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-primary text-primary-foreground flex-1", disabled: loading, children: loading ? "Création..." : "Créer l'album" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => navigate({
          to: "/portfolio/"
        }), children: "Annuler" })
      ] })
    ] })
  ] }) }) });
}
export {
  PortfolioCreate as component
};
