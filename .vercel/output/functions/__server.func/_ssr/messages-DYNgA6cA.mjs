import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { g as getCurrentUser, b as getInbox, d as getPhotographers, e as getConversation, L as Layout, B as Button, I as Input, s as sendMessage } from "./Layout-BMLct-Ny.mjs";
import { d as Mail, A as ArrowLeft, e as Send } from "../_libs/lucide-react.mjs";
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
function MessagesPage() {
  const [contacts, setContacts] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [content, setContent] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [sending, setSending] = reactExports.useState(false);
  const [sendError, setSendError] = reactExports.useState("");
  const messagesEndRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const user = getCurrentUser();
  reactExports.useEffect(() => {
    if (!user) {
      navigate({
        to: "/login"
      });
      return;
    }
    loadInbox();
  }, []);
  reactExports.useEffect(() => {
    if (!selected) return;
    loadConversation(selected.username);
    const interval = setInterval(() => loadConversation(selected.username), 3e3);
    return () => clearInterval(interval);
  }, [selected]);
  reactExports.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  async function loadInbox() {
    try {
      const data = await getInbox();
      if (Array.isArray(data) && data.length > 0) {
        setContacts(data);
      } else {
        const photographers = await getPhotographers();
        setContacts((Array.isArray(photographers) ? photographers : []).filter((photographer) => photographer.username !== user?.username).map((photographer) => ({
          ...photographer,
          user_id: photographer.id,
          full_name: [photographer.first_name, photographer.last_name].filter(Boolean).join(" ") || photographer.username,
          last_message: "Démarrer une conversation",
          unread: 0
        })));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  async function loadConversation(username) {
    try {
      const data = await getConversation(username);
      setMessages(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    }
  }
  async function handleSend(e) {
    e.preventDefault();
    const text = content.trim();
    if (!text || !selected || sending) return;
    setSending(true);
    setSendError("");
    try {
      const response = await sendMessage(selected.username, text);
      if (response?.error) {
        throw new Error(response.error);
      }
      setContent("");
      await loadConversation(selected.username);
      await loadInbox();
    } catch (error) {
      setSendError(error instanceof Error ? error.message : "Impossible d'envoyer le message.");
    } finally {
      setSending(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-7 w-7 text-primary" }),
      "Messagerie"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", style: {
      height: "calc(100vh - 220px)",
      minHeight: "500px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-card rounded-xl shadow-[var(--shadow-card)] overflow-y-auto flex flex-col ${selected ? "hidden md:flex" : "flex"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b font-semibold flex-shrink-0", children: contacts.some((contact) => contact.last_message === "Démarrer une conversation") ? "Photographes" : "Conversations" }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground p-4", children: "Chargement..." }) : contacts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid place-items-center p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-10 w-10 mx-auto mb-3 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Aucune conversation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1", children: "Aucun destinataire disponible" })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelected(c), className: `flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 border-b transition-colors ${selected?.user_id === c.user_id ? "bg-muted" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-sm", children: c.full_name?.[0]?.toUpperCase() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm truncate", children: c.full_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: c.last_message })
          ] }),
          c.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-white text-xs rounded-full h-5 w-5 grid place-items-center flex-shrink-0", children: c.unread })
        ] }, c.user_id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:col-span-2 bg-card rounded-xl shadow-[var(--shadow-card)] flex flex-col overflow-hidden ${selected ? "flex" : "hidden md:flex"}`, children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b flex items-center gap-3 flex-shrink-0 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSelected(null), className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 grid place-items-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-sm", children: selected.full_name?.[0]?.toUpperCase() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: selected.full_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "En ligne" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 flex flex-col gap-3", children: [
          messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid place-items-center text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-10 w-10 mx-auto mb-2 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Démarrez la conversation !" })
          ] }) }) : messages.map((msg) => {
            const isMine = msg.sender?.username === user?.username;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isMine ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[70%] px-4 py-2 rounded-2xl text-sm ${isMine ? "bg-primary text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: msg.content }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1 opacity-70 text-right", children: new Date(msg.created_at).toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] }) }, msg.id);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 border-t bg-card p-3", children: [
          sendError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "mb-2 text-sm text-destructive", children: sendError }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSend, className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: content, onChange: (e) => {
              setContent(e.target.value);
              if (sendError) setSendError("");
            }, placeholder: "Écrire un message...", "aria-label": `Écrire un message à ${selected.full_name}`, className: "flex-1", autoComplete: "off", disabled: sending }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-primary text-primary-foreground flex-shrink-0", disabled: !content.trim() || sending, "aria-label": "Envoyer le message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: `h-4 w-4 ${sending ? "animate-pulse" : ""}` }) })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 grid place-items-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-12 w-12 mx-auto mb-3 opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sélectionnez une conversation" })
      ] }) }) })
    ] })
  ] }) });
}
export {
  MessagesPage as component
};
