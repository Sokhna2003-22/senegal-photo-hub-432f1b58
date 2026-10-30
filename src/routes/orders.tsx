import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag, UserCircle2, CalendarDays, MapPin,
  BadgeCheck, XCircle, Trophy, Clock, Banknote, Camera,
} from "lucide-react";
import { getMyOrders, updateOrder } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
});

const STATUS_CONFIG: Record<string, { label: string; class: string }> = {
  pending:   { label: "En attente",  class: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30" },
  confirmed: { label: "Confirmée",   class: "bg-blue-500/15 text-blue-400 border border-blue-500/30" },
  completed: { label: "Terminée",    class: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" },
  cancelled: { label: "Annulée",     class: "bg-red-500/15 text-red-400 border border-red-500/30" },
};

function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<number | null>(null);
  const [priceInputs, setPriceInputs] = useState<Record<number, string>>({});
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getMyOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handleStatusChange(orderId: number, newStatus: string) {
    setUpdating(orderId);
    try {
      const payload: any = { status: newStatus };
      if (priceInputs[orderId]) {
        payload.price = priceInputs[orderId];
      }
      const updated = await updateOrder(orderId, payload);
      setOrders(orders.map(o => o.id === orderId ? { ...o, ...updated } : o));
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
          <ShoppingBag className="h-7 w-7 text-primary" />
          {user?.role === "photographer" ? "Commandes reçues" : "Mes Réservations"}
        </h1>

        {loading ? (
          <p className="text-muted-foreground">Chargement...</p>
        ) : orders.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-border py-16 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Aucune commande pour l'instant.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((o: any) => (
              <div key={o.id}
                   className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden border border-border/50">
                {/* Header */}
                <div className="px-5 py-4 border-b border-border/50 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">{o.service_type}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${STATUS_CONFIG[o.status]?.class}`}>
                      {STATUS_CONFIG[o.status]?.label}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    #{o.id} — {new Date(o.created_at).toLocaleDateString("fr-FR")}
                  </span>
                </div>

                {/* Infos */}
                <div className="px-5 py-4 grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    {user?.role === "photographer" ? (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <UserCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium text-foreground">
                          {o.client?.first_name} {o.client?.last_name || o.client?.username}
                        </span>
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Camera className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium text-foreground">
                          {o.photographer?.first_name} {o.photographer?.last_name || o.photographer?.username}
                        </span>
                      </p>
                    )}
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{o.event_date}</span>
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{o.location}</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    {o.price && (
                      <p className="flex items-center gap-2">
                        <Banknote className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="font-bold text-emerald-500">{o.price} FCFA</span>
                      </p>
                    )}
                    {o.message && (
                      <p className="text-muted-foreground italic">"{o.message}"</p>
                    )}
                  </div>
                </div>

                {/* Actions photographe */}
                {user?.role === "photographer" && o.status !== "completed" && o.status !== "cancelled" && (
                  <div className="px-5 py-4 border-t border-border/50 bg-muted/20">
                    <p className="text-sm font-semibold mb-3 text-muted-foreground">Gérer cette commande :</p>
                    <div className="flex flex-wrap gap-3 items-end">
                      {/* Prix */}
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">
                          Prix (FCFA)
                        </label>
                        <input
                          type="number"
                          placeholder="Ex: 150000"
                          value={priceInputs[o.id] || o.price || ""}
                          onChange={(e) => setPriceInputs({
                            ...priceInputs, [o.id]: e.target.value
                          })}
                          className="rounded-md border border-input bg-background px-3 py-2 text-sm w-36"
                        />
                      </div>

                      {/* Boutons statut */}
                      {o.status === "pending" && (
                        <>
                          <Button
                            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-sm"
                            disabled={updating === o.id}
                            onClick={() => handleStatusChange(o.id, "confirmed")}
                          >
                            {updating === o.id ? (
                              <Clock className="h-4 w-4 mr-2 animate-spin" />
                            ) : (
                              <BadgeCheck className="h-4 w-4 mr-2" />
                            )}
                            Confirmer
                          </Button>
                          <Button
                            variant="outline"
                            className="border-red-500/60 text-red-400 hover:bg-red-500/10 hover:border-red-500"
                            disabled={updating === o.id}
                            onClick={() => handleStatusChange(o.id, "cancelled")}
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Annuler
                          </Button>
                        </>
                      )}
                      {o.status === "confirmed" && (
                        <Button
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-sm"
                          disabled={updating === o.id}
                          onClick={() => handleStatusChange(o.id, "completed")}
                        >
                          {updating === o.id ? (
                            <Clock className="h-4 w-4 mr-2 animate-spin" />
                          ) : (
                            <Trophy className="h-4 w-4 mr-2" />
                          )}
                          Marquer comme terminée
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {/* Message client */}
                {user?.role === "client" && (
                  <div className="px-5 py-3 border-t border-border/50 bg-muted/10">
                    {o.status === "pending" && (
                      <p className="text-sm text-yellow-400 flex items-center gap-2">
                        <Clock className="h-4 w-4" />En attente de confirmation du photographe.
                      </p>
                    )}
                    {o.status === "confirmed" && (
                      <p className="text-sm text-blue-400 flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4" />Votre réservation est confirmée !
                      </p>
                    )}
                    {o.status === "completed" && (
                      <p className="text-sm text-emerald-400 flex items-center gap-2">
                        <Trophy className="h-4 w-4" />Séance terminée. Merci !
                      </p>
                    )}
                    {o.status === "cancelled" && (
                      <p className="text-sm text-red-400 flex items-center gap-2">
                        <XCircle className="h-4 w-4" />Cette réservation a été annulée.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
