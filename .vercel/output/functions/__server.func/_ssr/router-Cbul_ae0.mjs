import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-BzE9c2-D.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "PhotoSphere Pro is a responsive web platform for Senegalese photographers to showcase portfolios and manage client galleries." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "PhotoSphere Pro is a responsive web platform for Senegalese photographers to showcase portfolios and manage client galleries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "PhotoSphere Pro is a responsive web platform for Senegalese photographers to showcase portfolios and manage client galleries." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/978d8a58-53ba-4a6c-8ba8-bbbbd1c36e29/id-preview-f98c229c--972dfdf6-281c-4ce4-87fa-55813b1e4864.lovable.app-1782395013272.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/978d8a58-53ba-4a6c-8ba8-bbbbd1c36e29/id-preview-f98c229c--972dfdf6-281c-4ce4-87fa-55813b1e4864.lovable.app-1782395013272.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$f = () => import("./register-Dl27QkXb.mjs");
const Route$f = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Inscription — PhotoPlatform"
    }]
  }),
  validateSearch: (s) => ({
    role: s.role === "photographer" ? "photographer" : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./orders-COJp6eKH.mjs");
const Route$e = createFileRoute("/orders")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./messages-DYNgA6cA.mjs");
const Route$d = createFileRoute("/messages")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./login-DoDautUX.mjs");
const Route$c = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Connexion — PhotoPlatform"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./dashboard-CHUIcU1v.mjs");
const Route$b = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Mon espace — PhotoPlatform"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./admin-CQ7JfiSE.mjs");
const Route$a = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./about-Dr5tqXd5.mjs");
const Route$9 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "À propos — PhotoPlatform"
    }, {
      name: "description",
      content: "PhotoPlatform connecte les photographes professionnels sénégalais à leurs clients."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-OCkI--7_.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SunuVision — Photographes professionnels du Sénégal"
    }, {
      name: "description",
      content: "Découvrez et réservez les meilleurs photographes professionnels sénégalais."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./portfolio.index-GXE_uVng.mjs");
const Route$7 = createFileRoute("/portfolio/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./photographers.index-COKyJZUP.mjs");
const Route$6 = createFileRoute("/photographers/")({
  head: () => ({
    meta: [{
      title: "Photographes — PhotoPlatform"
    }, {
      name: "description",
      content: "Découvrez les photographes professionnels du Sénégal."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./gallery.index-CYKZyVUQ.mjs");
const Route$5 = createFileRoute("/gallery/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./reserve._username-CcZmkDfK.mjs");
const Route$4 = createFileRoute("/reserve/$username")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio.create-BMhKKLDv.mjs");
const Route$3 = createFileRoute("/portfolio/create")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitNotFoundComponentImporter = () => import("./photographers._id-BVcJFr7z.mjs");
const $$splitComponentImporter$2 = () => import("./photographers._id-DO_mC8sl.mjs");
const Route$2 = createFileRoute("/photographers/$id")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$1 = () => import("./gallery.create-gAMuta_i.mjs");
const Route$1 = createFileRoute("/gallery/create")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./gallery._id-CMBF5JTR.mjs");
const Route = createFileRoute("/gallery/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RegisterRoute = Route$f.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$g
});
const OrdersRoute = Route$e.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => Route$g
});
const MessagesRoute = Route$d.update({
  id: "/messages",
  path: "/messages",
  getParentRoute: () => Route$g
});
const LoginRoute = Route$c.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$g
});
const DashboardRoute = Route$b.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$g
});
const AdminRoute = Route$a.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$g
});
const AboutRoute = Route$9.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const PortfolioIndexRoute = Route$7.update({
  id: "/portfolio/",
  path: "/portfolio/",
  getParentRoute: () => Route$g
});
const PhotographersIndexRoute = Route$6.update({
  id: "/photographers/",
  path: "/photographers/",
  getParentRoute: () => Route$g
});
const GalleryIndexRoute = Route$5.update({
  id: "/gallery/",
  path: "/gallery/",
  getParentRoute: () => Route$g
});
const ReserveUsernameRoute = Route$4.update({
  id: "/reserve/$username",
  path: "/reserve/$username",
  getParentRoute: () => Route$g
});
const PortfolioCreateRoute = Route$3.update({
  id: "/portfolio/create",
  path: "/portfolio/create",
  getParentRoute: () => Route$g
});
const PhotographersIdRoute = Route$2.update({
  id: "/photographers/$id",
  path: "/photographers/$id",
  getParentRoute: () => Route$g
});
const GalleryCreateRoute = Route$1.update({
  id: "/gallery/create",
  path: "/gallery/create",
  getParentRoute: () => Route$g
});
const GalleryIdRoute = Route.update({
  id: "/gallery/$id",
  path: "/gallery/$id",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  DashboardRoute,
  LoginRoute,
  MessagesRoute,
  OrdersRoute,
  RegisterRoute,
  GalleryIdRoute,
  GalleryCreateRoute,
  PhotographersIdRoute,
  PortfolioCreateRoute,
  ReserveUsernameRoute,
  GalleryIndexRoute,
  PhotographersIndexRoute,
  PortfolioIndexRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$f as R,
  Route$4 as a,
  Route$2 as b,
  Route as c,
  router as r
};
