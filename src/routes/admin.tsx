import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import {
  Users, Camera, User, Images, Folder,
  ShoppingBag, MessageSquare, Shield, TrendingUp
} from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, PieChart,
  Pie, Cell, Legend
} from "recharts";
import { getAdminStats } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

const COLORS = ["#e94560", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

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

  // Données pour les graphiques
  const userDistributionData = [
    { name: "Photographes", value: stats?.total_photographers || 0 },
    { name: "Clients", value: stats?.total_clients || 0 },
  ];

  const platformData = [
    { name: "Galeries", value: stats?.total_galleries || 0 },
    { name: "Albums", value: stats?.total_albums || 0 },
    { name: "Commandes", value: stats?.total_orders || 0 },
    { name: "Messages", value: stats?.total_messages || 0 },
  ];

  const ordersStatusData = [
    { name: "En attente", value: stats?.recent_orders?.filter((o: any) => o.status === "pending").length || 0 },
    { name: "Confirmée", value: stats?.recent_orders?.filter((o: any) => o.status === "confirmed").length || 0 },
    { name: "Terminée", value: stats?.recent_orders?.filter((o: any) => o.status === "completed").length || 0 },
    { name: "Annulée", value: stats?.recent_orders?.filter((o: any) => o.status === "cancelled").length || 0 },
  ];

  const activityData = [
    { name: "Utilisateurs", total: stats?.total_users || 0 },
    { name: "Galeries", total: stats?.total_galleries || 0 },
    { name: "Albums", total: stats?.total_albums || 0 },
    { name: "Commandes", total: stats?.total_orders || 0 },
    { name: "Messages", total: stats?.total_messages || 0 },
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

        {/* KPIs */}
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

        {/* Graphiques ligne 1 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Répartition utilisateurs — Pie */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Répartition des utilisateurs
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={userDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userDistributionData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Activité plateforme — Bar */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Activité de la plateforme
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#888", fontSize: 12 }}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fill: "#888", fontSize: 12 }}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="total" fill="#e94560" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graphiques ligne 2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Contenu plateforme — Bar horizontal */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Folder className="h-5 w-5 text-primary" />
              Contenu créé
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={platformData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis type="number" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {platformData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Statut des commandes — Pie */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 border">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              Statut des commandes
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ordersStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {ordersStatusData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "none", borderRadius: "8px" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tableau derniers inscrits et commandes */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Derniers utilisateurs */}
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden border">
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
          <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden border">
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