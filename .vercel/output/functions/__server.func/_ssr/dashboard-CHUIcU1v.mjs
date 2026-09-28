import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, f as getMyGalleries, h as getMyAlbums, a as getMyOrders, L as Layout, B as Button, A as AccessPhotosDialog } from "./Layout-BMLct-Ny.mjs";
import { I as Images, F as Folder, f as ShoppingCart, C as Camera, R as RefreshCw, S as ShoppingBag, d as Mail, U as User, g as List, b as Image } from "../_libs/lucide-react.mjs";
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
function Dashboard() {
  const [user, setUser] = reactExports.useState(null);
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      navigate({
        to: "/login"
      });
      return;
    }
    setUser(u);
    if (u.is_staff) {
      navigate({
        to: "/admin"
      });
      return;
    }
  }, [navigate]);
  if (!user) return null;
  return user.role === "photographer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PhotographerDashboard, { user }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ClientDashboard, { user });
}
function PhotographerDashboard({
  user
}) {
  const [galleries, setGalleries] = reactExports.useState([]);
  const [albums, setAlbums] = reactExports.useState([]);
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [countdown, setCountdown] = reactExports.useState(30);
  reactExports.useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          loadData();
          return 30;
        }
        return c - 1;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  async function loadData() {
    try {
      const [g, a, o] = await Promise.all([getMyGalleries(), getMyAlbums(), getMyOrders()]);
      setGalleries(Array.isArray(g) ? g : []);
      setAlbums(Array.isArray(a) ? a : []);
      setOrders(Array.isArray(o) ? o.filter((ord) => ord.status === "pending") : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  const stats = [{
    icon: Images,
    label: "Galeries clients",
    value: galleries.length
  }, {
    icon: Folder,
    label: "Albums portfolio",
    value: albums.length
  }, {
    icon: ShoppingCart,
    label: "Commandes en attente",
    value: orders.length
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2", style: {
      background: "var(--gradient-primary)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/40 py-8 border-t-4 border-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-8 w-8 text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold", children: [
            "Bonjour, ",
            user.first_name || user.username,
            " 👋"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold", children: "Photographe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "text-muted-foreground", onClick: loadData, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 mr-1" }),
            "Actualiser (",
            countdown,
            "s)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7 text-foreground mx-auto md:mx-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold mt-2", children: loading ? "..." : s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-6 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-primary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-4 w-4 mr-1" }),
        "Mes Galeries"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4 mr-1" }),
        "Mon Portfolio"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-emerald-600 text-emerald-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/orders", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 mr-1" }),
        "Mes Commandes"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/messages", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-1" }),
        "Messages"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { icon: Folder, title: "Dernières galeries clients", children: galleries.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: galleries.slice(0, 5).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery/$id", params: {
        id: g.id
      }, className: "font-medium text-sm hover:text-primary", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs bg-secondary px-2 py-0.5 rounded-full", children: [
        g.photo_count,
        " photos"
      ] })
    ] }, g.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground p-2", children: "Aucune galerie pour le moment." }) }) })
  ] });
}
function ClientDashboard({
  user
}) {
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    getMyOrders().then((data) => setOrders(Array.isArray(data) ? data : [])).catch(console.error).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2", style: {
      background: "var(--gradient-primary)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-8 border-t-4 border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-8 w-8 text-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold", children: [
          "Bonjour, ",
          user.first_name || user.username,
          " 👋"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold", children: "Client" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { icon: ShoppingBag, title: "Mes commandes", children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground p-2", children: "Chargement..." }) : orders.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: o.service_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full ${o.status === "pending" ? "bg-yellow-100 text-yellow-700" : o.status === "confirmed" ? "bg-blue-100 text-blue-700" : o.status === "completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: o.status === "pending" ? "En attente" : o.status === "confirmed" ? "Confirmée" : o.status === "completed" ? "Terminée" : "Annulée" })
        ] }, o.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground p-2", children: "Aucune commande pour le moment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/orders", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-4 w-4 mr-1" }),
          "Voir toutes mes réservations"
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { icon: Image, title: "Accéder à mes photos", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground p-2", children: "Vous avez reçu un code d'accès ? Consultez votre galerie privée." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccessPhotosDialog, { trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-primary text-primary hover:bg-primary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4 mr-1" }),
            "Saisir mon code"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/messages", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-1" }),
            "Mes messages"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function Panel({
  icon: Icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-navy-deep text-white px-4 py-3 flex items-center gap-2 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
      " ",
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-2", children })
  ] });
}
export {
  Dashboard as component
};
