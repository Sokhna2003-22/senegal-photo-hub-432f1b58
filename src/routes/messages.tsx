import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, ArrowLeft } from "lucide-react";
import { getInbox, getConversation, sendMessage } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/messages")({
  component: MessagesPage,
});

function MessagesPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    loadInbox();
  }, []);

  useEffect(() => {
    if (!selected) return;
    loadConversation(selected.username);
    const interval = setInterval(() => loadConversation(selected.username), 3000);
    return () => clearInterval(interval);
  }, [selected]);

  async function loadInbox() {
    try {
      const data = await getInbox();
      setContacts(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function loadConversation(username: string) {
    try {
      const data = await getConversation(username);
      setMessages(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim() || !selected) return;
    await sendMessage(selected.username, content);
    setContent("");
    loadConversation(selected.username);
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
          <Mail className="h-7 w-7 text-primary" />Messagerie
        </h1>

        <div className="grid md:grid-cols-3 gap-6 h-[600px]">
          {/* Liste contacts */}
          <div className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-y-auto">
            <div className="p-4 border-b font-semibold">Conversations</div>
            {loading ? (
              <p className="text-muted-foreground p-4">Chargement...</p>
            ) : contacts.length === 0 ? (
              <p className="text-muted-foreground p-4">Aucun message.</p>
            ) : (
              contacts.map((c: any) => (
                <div key={c.user_id}
                     onClick={() => setSelected(c)}
                     className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 border-b transition-colors ${selected?.user_id === c.user_id ? "bg-muted" : ""}`}>
                  <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {c.full_name?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{c.full_name}</p>
                    <p className="text-xs text-muted-foreground truncate">{c.last_message}</p>
                  </div>
                  {c.unread > 0 && (
                    <span className="bg-primary text-white text-xs rounded-full h-5 w-5 grid place-items-center flex-shrink-0">
                      {c.unread}
                    </span>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Conversation */}
          <div className="md:col-span-2 bg-card rounded-xl shadow-[var(--shadow-card)] flex flex-col">
            {selected ? (
              <>
                {/* Header */}
                <div className="p-4 border-b flex items-center gap-3">
                  <Button variant="ghost" size="sm"
                          onClick={() => setSelected(null)}
                          className="md:hidden">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div className="h-9 w-9 rounded-full bg-primary/10 grid place-items-center">
                    <span className="text-primary font-bold text-sm">
                      {selected.full_name?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <span className="font-semibold">{selected.full_name}</span>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                  {messages.map((msg: any) => {
                    const isMine = msg.sender?.username === user?.username;
                    return (
                      <div key={msg.id}
                           className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[65%] px-4 py-2 rounded-2xl text-sm ${
                          isMine
                            ? "bg-primary text-white rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }`}>
                          <p>{msg.content}</p>
                          <p className={`text-xs mt-1 opacity-70 text-right`}>
                            {new Date(msg.created_at).toLocaleTimeString("fr-FR", {
                              hour: "2-digit", minute: "2-digit"
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
                  <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Écrire un message..."
                    className="flex-1"
                    autoComplete="off"
                  />
                  <Button type="submit"
                          className="bg-primary text-primary-foreground"
                          disabled={!content.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex-1 grid place-items-center text-muted-foreground">
                <div className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Sélectionnez une conversation</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}