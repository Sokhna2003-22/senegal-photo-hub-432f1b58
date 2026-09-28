import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, n as getPhotographer, L as Layout, I as Input, B as Button, o as createOrder } from "./Layout-BMLct-Ny.mjs";
import { L as Label } from "./label-B1keBYjU.mjs";
import { a as Route$4 } from "./router-Cbul_ae0.mjs";
import { C as Camera } from "../_libs/lucide-react.mjs";
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
function ReservePage() {
  const {
    username
  } = Route$4.useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [photographer, setPhotographer] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    service_type: "mariage",
    event_date: "",
    location: "",
    message: ""
  });
  reactExports.useEffect(() => {
    if (!user) {
      navigate({
        to: "/login"
      });
      return;
    }
    getPhotographer(username).then(setPhotographer).catch(console.error);
  }, [username]);
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder({
        ...form,
        photographer_username: username
      });
      navigate({
        to: "/orders"
      });
    } catch (err) {
      setError("Erreur lors de la réservation.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-navy-deep text-white px-6 py-4 font-semibold text-lg", children: "📅 Réserver un photographe" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      photographer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl", children: [
        photographer.avatar_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photographer.avatar_url, className: "h-14 w-14 rounded-full object-cover border-2 border-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
            photographer.first_name,
            " ",
            photographer.last_name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: photographer.photographer_profile?.city })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type de service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service_type", value: form.service_type, onChange: handleChange, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "mariage", children: "Mariage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "portrait", children: "Portrait" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "evenement", children: "Événement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "autre", children: "Autre" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date de l'événement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "event_date", type: "date", value: form.event_date, onChange: handleChange, className: "mt-1", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lieu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { name: "location", value: form.location, onChange: handleChange, placeholder: "Ex: Dakar, Plateau", className: "mt-1", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", value: form.message, onChange: handleChange, placeholder: "Décrivez votre projet...", className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]" })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-primary text-primary-foreground", disabled: loading, children: loading ? "Envoi..." : "Envoyer la réservation" })
      ] })
    ] })
  ] }) }) });
}
export {
  ReservePage as component
};
