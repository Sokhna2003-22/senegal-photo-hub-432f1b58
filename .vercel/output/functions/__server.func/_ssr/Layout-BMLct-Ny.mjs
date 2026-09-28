import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { D as Dialog$1, a as DialogTrigger$1, b as DialogPortal$1, c as DialogContent$1, d as DialogClose, e as DialogTitle$1, f as DialogOverlay$1, g as DialogDescription$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { L as Lock, K as KeyRound, I as Images, D as Download, C as Camera, b as Image, U as User, M as Menu, c as MapPin, d as Mail, P as Phone, X } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Sheet = Dialog$1;
const SheetTrigger = DialogTrigger$1;
const SheetPortal = DialogPortal$1;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogOverlay$1.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent$1, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = DialogContent$1.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = DialogTitle$1.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = DialogDescription$1.displayName;
const Dialog = Dialog$1;
const DialogTrigger = DialogTrigger$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogClose, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogTitle$1,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogDescription$1.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const API_URL = "http://127.0.0.1:8000/api";
const getToken = () => localStorage.getItem("access_token");
const PUBLIC_ENDPOINTS = [
  "/auth/login/",
  "/auth/register/",
  "/auth/photographers/",
  "/portfolio/public/"
];
const apiCall = async (endpoint, method = "GET", data = null) => {
  const headers = {
    "Content-Type": "application/json"
  };
  const isPublic = PUBLIC_ENDPOINTS.some((e) => endpoint.startsWith(e));
  if (!isPublic) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  const config = { method, headers };
  if (data) config.body = JSON.stringify(data);
  const response = await fetch(`${API_URL}${endpoint}`, config);
  return response.json();
};
const login = (username, password) => apiCall("/auth/login/", "POST", { username, password });
const register = (data) => apiCall("/auth/register/", "POST", data);
const getAdminStats = () => apiCall("/auth/admin/stats/");
const getPhotographers = () => apiCall("/auth/photographers/");
const getPhotographer = (username) => apiCall(`/auth/photographers/${username}/`);
const getMyGalleries = () => apiCall("/gallery/");
const accessGallery = (code) => apiCall("/gallery/access/", "POST", { access_code: code });
const uploadPhotos = async (galleryId, files) => {
  const formData = new FormData();
  Array.from(files).forEach((f) => formData.append("images", f));
  const token = localStorage.getItem("access_token");
  const response = await fetch(`${API_URL}/gallery/${galleryId}/upload/`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` },
    body: formData
  });
  return response.json();
};
const getPublicAlbums = () => apiCall("/portfolio/public/");
const getMyAlbums = () => apiCall("/portfolio/my/");
const deleteAlbum = (pk) => apiCall(`/portfolio/my/${pk}/delete/`, "DELETE");
const createOrder = (data) => apiCall("/orders/", "POST", data);
const getMyOrders = () => apiCall("/orders/");
const updateOrder = (pk, data) => apiCall(`/orders/${pk}/`, "PATCH", data);
const getInbox = () => apiCall("/messaging/inbox/");
const getConversation = (username) => apiCall(`/messaging/conversation/${username}/`);
const sendMessage = (username, content) => apiCall(`/messaging/conversation/${username}/`, "POST", { content });
function AccessPhotosDialog({ trigger }) {
  const [code, setCode] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [gallery, setGallery] = reactExports.useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!code.trim()) {
      setError("Veuillez renseigner ce champ");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const data = await accessGallery(code.trim().toUpperCase());
      if (data?.id) {
        setGallery(data);
      } else {
        setError("Code incorrect ou galerie introuvable.");
      }
    } catch {
      setError("Code incorrect ou galerie introuvable.");
    } finally {
      setLoading(false);
    }
  }
  function handleReset() {
    setGallery(null);
    setCode("");
    setError("");
  }
  function handleDownload(url) {
    window.open(url, "_blank");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-2xl bg-navy text-white p-8 border border-primary/30", children: !gallery ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "items-center text-center space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-primary/20 grid place-items-center ring-1 ring-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-7 w-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold text-white", children: "Accéder à mes photos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: "Entrez le code d'accès reçu de votre photographe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: code,
            onChange: (e) => setCode(e.target.value.toUpperCase()),
            placeholder: "EX: AB12CD34",
            className: "text-center tracking-[0.3em] font-mono h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-white/40"
          }
        ),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary text-center", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            className: "w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground text-base",
            disabled: loading,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-4 w-4 mr-1" }),
              loading ? "Vérification..." : "Accéder à ma galerie"
            ]
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "items-center text-center space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-primary/20 grid place-items-center ring-1 ring-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Images, { className: "h-7 w-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold text-white", children: gallery.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/70", children: [
          gallery.photo_count,
          " photo(s) disponible(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 max-h-[400px] overflow-y-auto", children: gallery.photos && gallery.photos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: gallery.photos.map((photo) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg overflow-hidden bg-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: photo.image_url,
            alt: photo.title || "Photo",
            className: "w-full h-32 object-cover"
          }
        ),
        photo.is_downloadable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "w-full text-xs bg-primary/20 hover:bg-primary text-primary hover:text-white",
            onClick: () => handleDownload(photo.image_url),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3 mr-1" }),
              "Télécharger"
            ]
          }
        ) })
      ] }, photo.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-white/50 py-8", children: "Aucune photo dans cette galerie pour l'instant." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          className: "w-full mt-4 border-white/20 text-white hover:bg-white/10",
          onClick: handleReset,
          children: "Entrer un autre code"
        }
      )
    ] }) })
  ] });
}
const isBrowser = typeof window !== "undefined";
const loginUser = async (username, password) => {
  const data = await login(username, password);
  console.log("Login response:", data);
  if (data.access) {
    if (isBrowser) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data.user;
  }
  throw new Error(data.error || data.detail || "Erreur de connexion");
};
const registerUser = async (formData) => {
  const data = await register(formData);
  console.log("Register response:", data);
  if (data.access) {
    if (isBrowser) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    return data.user;
  }
  const errorMsg = Object.entries(data).map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`).join(" | ");
  throw new Error(errorMsg || "Erreur d'inscription");
};
const logoutUser = () => {
  if (isBrowser) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }
};
const getCurrentUser = () => {
  if (!isBrowser) return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
const links = [
  { to: "/", label: "Accueil" },
  { to: "/photographers", label: "Photographes" },
  { to: "/about", label: "À propos" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const user = getCurrentUser();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 w-full bg-navy/95 backdrop-blur border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg tracking-tight", children: "SunuVision" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        className: "text-sm font-medium text-white/80 hover:text-primary transition-colors",
        activeProps: { className: "text-primary" },
        activeOptions: { exact: l.to === "/" },
        children: l.label
      },
      l.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AccessPhotosDialog,
        {
          trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "border-primary/60 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4 mr-1" }),
                "Accéder à mes photos"
              ]
            }
          )
        }
      ),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 mr-1" }),
          user.first_name || user.username
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "border-white/20 text-white hover:bg-white/10",
            onClick: () => logoutUser(),
            children: "Déconnexion"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 mr-1" }),
          "Connexion"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary-glow text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "S'inscrire" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "right", className: "bg-navy border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-lg", children: "SunuVision" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "text-white/90 hover:text-primary text-lg font-medium",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-white/10 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AccessPhotosDialog,
            {
              trigger: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(false),
                  className: "text-primary font-semibold text-left",
                  children: "📸 Accéder à mes photos"
                }
              )
            }
          ),
          user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/dashboard",
                onClick: () => setOpen(false),
                className: "text-white/90 hover:text-primary",
                children: [
                  "👤 ",
                  user.first_name || user.username
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  logoutUser();
                  setOpen(false);
                },
                className: "text-red-400 font-semibold text-left",
                children: [
                  user.is_admin && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-primary font-semibold", children: "🛡️ Admin" }),
                  "Déconnexion"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/login",
                onClick: () => setOpen(false),
                className: "text-white/90 hover:text-primary",
                children: "Connexion"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/register",
                onClick: () => setOpen(false),
                className: "text-primary font-semibold",
                children: "S'inscrire"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-navy-deep text-white/80 mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: "SunuVision" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "La plateforme des photographes professionnels sénégalais." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dakar, Sénégal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@sunuvision.sn" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+221 77 000 00 00" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Explorer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Accueil" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/photographers", className: "hover:text-primary transition-colors", children: "Photographes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "À propos" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Mon compte" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hover:text-primary transition-colors", children: "Connexion" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "hover:text-primary transition-colors", children: "Inscription" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "hover:text-primary transition-colors", children: "Mon espace" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/orders", className: "hover:text-primary transition-colors", children: "Mes commandes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/messages", className: "hover:text-primary transition-colors", children: "Messagerie" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-semibold mb-4", children: "Suivez-nous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => window.open("https://instagram.com", "_blank"),
              className: "h-9 w-9 rounded-full bg-white/10 hover:bg-primary grid place-items-center transition-colors text-white",
              "aria-label": "Instagram",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => window.open("https://facebook.com", "_blank"),
              className: "h-9 w-9 rounded-full bg-white/10 hover:bg-primary grid place-items-center transition-colors text-white",
              "aria-label": "Facebook",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => window.open("https://twitter.com", "_blank"),
              className: "h-9 w-9 rounded-full bg-white/10 hover:bg-primary grid place-items-center transition-colors text-white",
              "aria-label": "Twitter X",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 py-4 text-center text-xs text-white/50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SunuVision — Sénégal. Tous droits réservés. Fait avec ❤️ au Sénégal"
    ] })
  ] });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AccessPhotosDialog as A,
  Button as B,
  Input as I,
  Layout as L,
  getMyOrders as a,
  getInbox as b,
  cn as c,
  getPhotographers as d,
  getConversation as e,
  getMyGalleries as f,
  getCurrentUser as g,
  getMyAlbums as h,
  getAdminStats as i,
  getPublicAlbums as j,
  deleteAlbum as k,
  loginUser as l,
  apiCall as m,
  getPhotographer as n,
  createOrder as o,
  uploadPhotos as p,
  registerUser as r,
  sendMessage as s,
  updateOrder as u
};
