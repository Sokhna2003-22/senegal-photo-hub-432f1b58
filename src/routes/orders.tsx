import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { getMyOrders, updateOrder } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/orders")({
  component: OrdersPage,
});

const STATUS_CONFIG: Record<string, { label: string; class: string }> = {
  pending:   { label: "En attente",  class: "bg-yellow-100 text-yellow-700" },
  confirmed: { label: "Confirmée",   class: "bg-blue-100 text-blue-700" },
  completed: { label: "Terminée",    class: "bg-green-100 text-green-700" },
  cancelled: { label: "Annulée",     class: "bg-red-100 text-red-700" },
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
                   className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 border-b flex flex-wrap justify-between items-center gap-3">
                  <div>
                    <span className="font-bold text-lg">{o.service_type}</span>
                    <span className={`ml-3 text-xs px-3 py-1 rounded-full font-medium ${STATUS_CONFIG[o.status]?.class}`}>
                      {STATUS_CONFIG[o.status]?.label}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    #{o.id} — {new Date(o.created_at).toLocaleDateString("fr-FR")}
                  </span>
                </div>

                {/* Infos */}
                <div className="px-5 py-4 grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="space-y-1">
                    {user?.role === "photographer" ? (
                      <p>👤 <span className="font-medium">
                        {o.client?.first_name} {o.client?.last_name || o.client?.username}
                      </span></p>
                    ) : (
                      <p>📸 <span className="font-medium">
                        {o.photographer?.first_name} {o.photographer?.last_name || o.photographer?.username}
                      </span></p>
                    )}
                    <p>📅 <span className="font-medium">{o.event_date}</span></p>
                    <p>📍 <span className="font-medium">{o.location}</span></p>
                  </div>
                  <div className="space-y-1">
                    {o.price && (
                      <p>💰 <span className="font-bold text-green-600">{o.price} FCFA</span></p>
                    )}
                    {o.message && (
                      <p className="text-muted-foreground italic">"{o.message}"</p>
                    )}
                  </div>
                </div>

                {/* Actions photographe */}
                {user?.role === "photographer" && o.status !== "completed" && o.status !== "cancelled" && (
                  <div className="px-5 py-4 border-t bg-muted/30">
                    <p className="text-sm font-semibold mb-3">Gérer cette commande :</p>
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
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={updating === o.id}
                            onClick={() => handleStatusChange(o.id, "confirmed")}
                          >
                            {updating === o.id ? "..." : "✅ Confirmer"}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-red-500 text-red-500 hover:bg-red-50"
                            disabled={updating === o.id}
                            onClick={() => handleStatusChange(o.id, "cancelled")}
                          >
                            ❌ Annuler
                          </Button>
                        </>
                      )}
                      {o.status === "confirmed" && (
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          disabled={updating === o.id}
                          onClick={() => handleStatusChange(o.id, "completed")}
                        >
                          {updating === o.id ? "..." : "🎉 Marquer comme terminée"}
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {/* Message client si annulée ou terminée */}
                {user?.role === "client" && (
                  <div className="px-5 py-3 border-t bg-muted/20 text-sm text-muted-foreground">
                    {o.status === "pending" && "⏳ En attente de confirmation du photographe."}
                    {o.status === "confirmed" && "✅ Votre réservation est confirmée !"}
                    {o.status === "completed" && "🎉 Séance terminée. Merci !"}
                    {o.status === "cancelled" && "❌ Cette réservation a été annulée."}
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