import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Layout, I as Input, B as Button, r as registerUser } from "./Layout-BMLct-Ny.mjs";
import { L as Label } from "./label-B1keBYjU.mjs";
import { R as Route$f } from "./router-Cbul_ae0.mjs";
import { C as Camera, E as EyeOff, a as Eye } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function Register() {
  const {
    role: forcedRole
  } = Route$f.useSearch();
  const [role, setRole] = reactExports.useState(forcedRole ?? "client");
  const lockRole = forcedRole === "photographer";
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [username, setUsername] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [city, setCity] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [password2, setPassword2] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [showPassword2, setShowPassword2] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (password !== password2) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    try {
      await registerUser({
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        role,
        password,
        password2
      });
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      setError(err.message || "Erreur lors de l'inscription. Vérifiez vos informations.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[80vh] grid place-items-center px-4 py-12 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/65" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-md bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "SunuVision" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center", children: lockRole ? "Devenir photographe" : "Créer un compte" }),
      !lockRole && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 mt-5 p-1 bg-muted rounded-lg", children: ["client", "photographer"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setRole(r), className: `py-2 rounded-md text-sm font-medium transition-colors ${role === r ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`, children: r === "client" ? "👤 Client" : "📸 Photographe" }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "firstName", children: "Prénom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "firstName", value: firstName, onChange: (e) => setFirstName(e.target.value), className: "mt-1", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lastName", children: "Nom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "lastName", value: lastName, onChange: (e) => setLastName(e.target.value), className: "mt-1", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "username", children: "Nom d'utilisateur" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "username", value: username, onChange: (e) => setUsername(e.target.value), placeholder: "ex: amadou_photo", className: "mt-1", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Téléphone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+221 77 000 00 00", className: "mt-1" })
        ] }),
        role === "photographer" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "Ville" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "city", value: city, onChange: (e) => setCity(e.target.value), placeholder: "Dakar", className: "mt-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Mot de passe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "pr-10", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password2", children: "Confirmer le mot de passe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password2", type: showPassword2 ? "text" : "password", value: password2, onChange: (e) => setPassword2(e.target.value), placeholder: "••••••••", className: "pr-10", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword2(!showPassword2), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: showPassword2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive bg-destructive/10 p-3 rounded-lg", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-primary hover:bg-primary-glow text-primary-foreground", disabled: loading, children: loading ? "Création en cours..." : "Créer mon compte" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-center mt-6 text-muted-foreground", children: [
        "Déjà inscrit ?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary font-medium", children: "Se connecter" })
      ] })
    ] })
  ] }) });
}
export {
  Register as component
};
