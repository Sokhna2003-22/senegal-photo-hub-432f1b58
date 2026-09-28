import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, i as getAdminStats, L as Layout } from "./Layout-BMLct-Ny.mjs";
import { h as Users, C as Camera, U as User, I as Images, F as Folder, S as ShoppingBag, i as MessageSquare, j as Shield, T as TrendingUp } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, P as PieChart, a as Pie, C as Cell, T as Tooltip, L as Legend, B as BarChart, b as CartesianGrid, X as XAxis, Y as YAxis, c as Bar } from "../_libs/recharts.mjs";
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
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const COLORS = ["#e94560", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];
function AdminDashboard() {
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const user = getCurrentUser();
  reactExports.useEffect(() => {
    if (!user) {
      navigate({
        to: "/login"
      });
      return;
    }
    if (!user.is_staff) {
      navigate({
        to: "/dashboard"
      });
      return;
    }
    getAdminStats().then((data) => {
      if (data.error) {
        setError(data.error);
        return;
      }
      setStats(data);
    }).catch(() => setError("Erreur de chargement")).finally(() => setLoading(false));
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20 text-center text-muted-foreground", children: "Chargement..." }) });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-20 text-center text-destructive", children: error }) });
  const statCards = [{
    icon: Users,
    label: "Total utilisateurs",
    value: stats?.total_users,
    color: "bg-blue-500/10 text-blue-500"
  }, {
    icon: Camera,
    label: "Photographes",
    value: stats?.total_photographers,
    color: "bg-primary/10 text-primary"
  }, {
    icon: User,
    label: "Clients",
    value: stats?.total_clients,
    color: "bg-green-500/10 text-green-500"
  }, {
    icon: Images,
    label: "Galeries clients",
    value: stats?.total_galleries,
    color: "bg-purple-500/10 text-purple-500"
  }, {
    icon: Folder,
    label: "Albums portfolio",
    value: stats?.total_albums,
    color: "bg-yellow-500/10 text-yellow-500"
  }, {
    icon: ShoppingBag,
    label: "Commandes",
    value: stats?.total_orders,
    color: "bg-orange-500/10 text-orange-500"
  }, {
    icon: MessageSquare,
    label: "Messages",
    value: stats?.total_messages,
    color: "bg-pink-500/10 text-pink-500"
  }];
  const userDistributionData = [{
    name: "Photographes",
    value: stats?.total_photographers || 0
  }, {
    name: "Clients",
    value: stats?.total_clients || 0
  }];
  const platformData = [{
    name: "Galeries",
    value: stats?.total_galleries || 0
  }, {
    name: "Albums",
    value: stats?.total_albums || 0
  }, {
    name: "Commandes",
    value: stats?.total_orders || 0
  }, {
    name: "Messages",
    value: stats?.total_messages || 0
  }];
  const ordersStatusData = [{
    name: "En attente",
    value: stats?.recent_orders?.filter((o) => o.status === "pending").length || 0
  }, {
    name: "Confirmée",
    value: stats?.recent_orders?.filter((o) => o.status === "confirmed").length || 0
  }, {
    name: "Terminée",
    value: stats?.recent_orders?.filter((o) => o.status === "completed").length || 0
  }, {
    name: "Annulée",
    value: stats?.recent_orders?.filter((o) => o.status === "cancelled").length || 0
  }];
  const activityData = [{
    name: "Utilisateurs",
    total: stats?.total_users || 0
  }, {
    name: "Galeries",
    total: stats?.total_galleries || 0
  }, {
    name: "Albums",
    total: stats?.total_albums || 0
  }, {
    name: "Commandes",
    total: stats?.total_orders || 0
  }, {
    name: "Messages",
    total: stats?.total_messages || 0
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Dashboard Administrateur" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Vue d'ensemble de la plateforme SunuVision" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: statCards.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl ${s.color} grid place-items-center mb-3`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: s.value ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
          "Répartition des utilisateurs"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: userDistributionData, cx: "50%", cy: "50%", innerRadius: 60, outerRadius: 100, paddingAngle: 5, dataKey: "value", children: userDistributionData.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "#1a1a2e",
            border: "none",
            borderRadius: "8px"
          }, labelStyle: {
            color: "#fff"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-primary" }),
          "Activité de la plateforme"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: activityData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#ffffff10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: {
            fill: "#888",
            fontSize: 12
          }, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fill: "#888",
            fontSize: 12
          }, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "#1a1a2e",
            border: "none",
            borderRadius: "8px"
          }, labelStyle: {
            color: "#fff"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "total", fill: "#e94560", radius: [6, 6, 0, 0] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-5 w-5 text-primary" }),
          "Contenu créé"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: platformData, layout: "vertical", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#ffffff10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", tick: {
            fill: "#888",
            fontSize: 12
          }, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { type: "category", dataKey: "name", tick: {
            fill: "#888",
            fontSize: 12
          }, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "#1a1a2e",
            border: "none",
            borderRadius: "8px"
          }, labelStyle: {
            color: "#fff"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [0, 6, 6, 0], children: platformData.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5 text-primary" }),
          "Statut des commandes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: ordersStatusData, cx: "50%", cy: "50%", outerRadius: 100, paddingAngle: 3, dataKey: "value", children: ordersStatusData.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "#1a1a2e",
            border: "none",
            borderRadius: "8px"
          }, labelStyle: {
            color: "#fff"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Derniers inscrits" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: stats?.recent_users?.length > 0 ? stats.recent_users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-sm", children: (u.first_name || u.username)?.[0]?.toUpperCase() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: u.first_name && u.last_name ? `${u.first_name} ${u.last_name}` : u.username }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: u.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full font-medium ${u.role === "photographer" ? "bg-primary/10 text-primary" : "bg-blue-500/10 text-blue-500"}`, children: u.role === "photographer" ? "📸 Photo" : "👤 Client" })
        ] }, u.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm p-2", children: "Aucun utilisateur." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Dernières commandes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: stats?.recent_orders?.length > 0 ? stats.recent_orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: o.service_type }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              o.client?.first_name,
              " → ",
              o.photographer?.first_name
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full font-medium ${o.status === "pending" ? "bg-yellow-100 text-yellow-700" : o.status === "confirmed" ? "bg-blue-100 text-blue-700" : o.status === "completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: o.status === "pending" ? "En attente" : o.status === "confirmed" ? "Confirmée" : o.status === "completed" ? "Terminée" : "Annulée" })
        ] }, o.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm p-2", children: "Aucune commande." }) })
      ] })
    ] })
  ] }) });
}
export {
  AdminDashboard as component
};
