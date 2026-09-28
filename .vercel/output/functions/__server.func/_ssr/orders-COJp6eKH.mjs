import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, a as getMyOrders, L as Layout, B as Button, u as updateOrder } from "./Layout-BMLct-Ny.mjs";
import { S as ShoppingBag } from "../_libs/lucide-react.mjs";
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
const STATUS_CONFIG = {
  pending: {
    label: "En attente",
    class: "bg-yellow-100 text-yellow-700"
  },
  confirmed: {
    label: "Confirmée",
    class: "bg-blue-100 text-blue-700"
  },
  completed: {
    label: "Terminée",
    class: "bg-green-100 text-green-700"
  },
  cancelled: {
    label: "Annulée",
    class: "bg-red-100 text-red-700"
  }
};
function OrdersPage() {
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [updating, setUpdating] = reactExports.useState(null);
  const [priceInputs, setPriceInputs] = reactExports.useState({});
  const navigate = useNavigate();
  const user = getCurrentUser();
  reactExports.useEffect(() => {
    if (!user) {
      navigate({
        to: "/login"
      });
      return;
    }
    loadOrders();
  }, []);
  async function loadOrders() {
    try {
      const data = await getMyOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  async function handleStatusChange(orderId, newStatus) {
    setUpdating(orderId);
    try {
      const payload = {
        status: newStatus
      };
      if (priceInputs[orderId]) {
        payload.price = priceInputs[orderId];
      }
      const updated = await updateOrder(orderId, payload);
      setOrders(orders.map((o) => o.id === orderId ? {
        ...o,
        ...updated
      } : o));
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-7 w-7 text-primary" }),
      user?.role === "photographer" ? "Commandes reçues" : "Mes Réservations"
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Chargement..." }) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed border-border py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Aucune commande pour l'instant." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b flex flex-wrap justify-between items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: o.service_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-3 text-xs px-3 py-1 rounded-full font-medium ${STATUS_CONFIG[o.status]?.class}`, children: STATUS_CONFIG[o.status]?.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "#",
          o.id,
          " — ",
          new Date(o.created_at).toLocaleDateString("fr-FR")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 grid sm:grid-cols-2 gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          user?.role === "photographer" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "👤 ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              o.client?.first_name,
              " ",
              o.client?.last_name || o.client?.username
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "📸 ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
              o.photographer?.first_name,
              " ",
              o.photographer?.last_name || o.photographer?.username
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "📅 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.event_date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "📍 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.location })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          o.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "💰 ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-green-600", children: [
              o.price,
              " FCFA"
            ] })
          ] }),
          o.message && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground italic", children: [
            '"',
            o.message,
            '"'
          ] })
        ] })
      ] }),
      user?.role === "photographer" && o.status !== "completed" && o.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "Gérer cette commande :" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-muted-foreground block mb-1", children: "Prix (FCFA)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Ex: 150000", value: priceInputs[o.id] || o.price || "", onChange: (e) => setPriceInputs({
              ...priceInputs,
              [o.id]: e.target.value
            }), className: "rounded-md border border-input bg-background px-3 py-2 text-sm w-36" })
          ] }),
          o.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-blue-600 hover:bg-blue-700 text-white", disabled: updating === o.id, onClick: () => handleStatusChange(o.id, "confirmed"), children: updating === o.id ? "..." : "✅ Confirmer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-red-500 text-red-500 hover:bg-red-50", disabled: updating === o.id, onClick: () => handleStatusChange(o.id, "cancelled"), children: "❌ Annuler" })
          ] }),
          o.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-green-600 hover:bg-green-700 text-white", disabled: updating === o.id, onClick: () => handleStatusChange(o.id, "completed"), children: updating === o.id ? "..." : "🎉 Marquer comme terminée" })
        ] })
      ] }),
      user?.role === "client" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t bg-muted/20 text-sm text-muted-foreground", children: [
        o.status === "pending" && "⏳ En attente de confirmation du photographe.",
        o.status === "confirmed" && "✅ Votre réservation est confirmée !",
        o.status === "completed" && "🎉 Séance terminée. Merci !",
        o.status === "cancelled" && "❌ Cette réservation a été annulée."
      ] })
    ] }, o.id)) })
  ] }) });
}
export {
  OrdersPage as component
};
