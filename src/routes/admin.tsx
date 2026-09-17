import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Users, Camera, User, Images, Folder,
  ShoppingBag, MessageSquare, Shield
} from "lucide-react";
import { getAdminStats } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    if (!user.is_staff) { navigate({ to: "/dashboard" }); return; }
    getAdminStats()
      .then((data) => {
        if (data.error) { setError(data.error); return; }
        setStats(data);
      })
      .catch(() => setError("Erreur de chargement"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
        Chargement...
      </div>
    </Layout>
  );

  if (error) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center text-destructive">
        {error}
      </div>
    </Layout>
  );

  const statCards = [
    { icon: Users, label: "Total utilisateurs", value: stats?.total_users, color: "bg-blue-500/10 text-blue-500" },
    { icon: Camera, label: "Photographes", value: stats?.total_photographers, color: "bg-primary/10 text-primary" },
    { icon: User, label: "Clients", value: stats?.total_clients, color: "bg-green-500/10 text-green-500" },
    { icon: Images, label: "Galeries clients", value: stats?.total_galleries, color: "bg-purple-500/10 text-purple-500" },
    { icon: Folder, label: "Albums portfolio", value: stats?.total_albums, color: "bg-yellow-500/10 text-yellow-500" },
    { icon: ShoppingBag, label: "Commandes", value: stats?.total_orders, color: "bg-orange-500/10 text-orange-500" },
    { icon: MessageSquare, label: "Messages", value: stats?.total_messages, color: "bg-pink-500/10 text-pink-500" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Dashboard Administrateur</h1>
            <p className="text-muted-foreground text-sm">
              Vue d'ensemble de la plateforme SunuVision
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((s) => (
            <div key={s.label}
                 className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border">
              <div className={`w-12 h-12 rounded-xl ${s.color} grid place-items-center mb-3`}>
                <s.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold">{s.value ?? 0}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Derniers utilisateurs */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
            <div className="px-5 py-4 border-b flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Derniers inscrits</h2>
            </div>
            <div className="p-4 space-y-3">
              {stats?.recent_users?.length > 0 ? (
                stats.recent_users.map((u: any) => (
                  <div key={u.id}
                       className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 grid place-items-center">
                        <span className="text-primary font-bold text-sm">
                          {(u.first_name || u.username)?.[0]?.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {u.first_name && u.last_name
                            ? `${u.first_name} ${u.last_name}`
                            : u.username}
                        </p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      u.role === 'photographer'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {u.role === 'photographer' ? '📸 Photo' : '👤 Client'}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-sm p-2">Aucun utilisateur.</p>
              )}
            </div>
          </div>

          {/* Dernières commandes */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
            <div className="px-5 py-4 border-b flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Dernières commandes</h2>
            </div>
            <div className="p-4 space-y-3">
              {stats?.recent_orders?.length > 0 ? (
                stats.recent_orders.map((o: any) => (
                  <div key={o.id}
                       className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3">
                    <div>
                      <p className="font-medium text-sm">{o.service_type}</p>
                      <p className="text-xs text-muted-foreground">
                        {o.client?.first_name} → {o.photographer?.first_name}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      o.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      o.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                      o.status === 'completed' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {o.status === 'pending' ? 'En attente' :
                       o.status === 'confirmed' ? 'Confirmée' :
                       o.status === 'completed' ? 'Terminée' : 'Annulée'}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-sm p-2">Aucune commande.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}