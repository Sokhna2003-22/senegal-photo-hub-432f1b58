import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AccessPhotosDialog } from "@/components/AccessPhotosDialog";
import {
  Bell, Camera, Folder, FolderPlus, Images, ImageIcon, List, Mail,
  Plus, RefreshCw, ShoppingBag, ShoppingCart, User as UserIcon,
} from "lucide-react";
import { getCurrentUser } from "@/lib/api/auth";
import { getMyGalleries, getMyOrders, getMyAlbums } from "@/lib/api/client";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon espace — PhotoPlatform" }] }),
  component: Dashboard,
});

function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      navigate({ to: "/login" });
      return;
    }
    setUser(u);
  }, [navigate]);

  if (!user) return null;

  return user.role === "photographer" ? (
    <PhotographerDashboard user={user} />
  ) : (
    <ClientDashboard user={user} />
  );
}

function PhotographerDashboard({ user }: { user: any }) {
  const [galleries, setGalleries] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { loadData(); return 30; }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function loadData() {
    try {
      const [g, a, o] = await Promise.all([
        getMyGalleries(),
        getMyAlbums(),
        getMyOrders(),
      ]);
      setGalleries(Array.isArray(g) ? g : []);
      setAlbums(Array.isArray(a) ? a : []);
      setOrders(Array.isArray(o) ? o.filter((ord: any) => ord.status === "pending") : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const stats = [
    { icon: Images, label: "Galeries clients", value: galleries.length },
    { icon: Folder, label: "Albums portfolio", value: albums.length },
    { icon: ShoppingCart, label: "Commandes en attente", value: orders.length },
  ];

  return (
    <Layout>
      <div className="h-2" style={{ background: "var(--gradient-primary)" }} />

      {/* Header */}
      <section className="bg-muted/40 py-8 border-t-4 border-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Camera className="h-8 w-8 text-foreground" />
            <h1 className="text-3xl font-bold">
              Bonjour, {user.first_name || user.username} 👋
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold">
              Photographe
            </span>
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={loadData}>
              <RefreshCw className="h-4 w-4 mr-1" />
              Actualiser ({countdown}s)
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <s.icon className="h-7 w-7 text-foreground mx-auto md:mx-0" />
              <div className="text-4xl font-bold mt-2">
                {loading ? "..." : s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Actions rapides */}
      
      <section className="container mx-auto px-4 py-6 flex flex-wrap gap-3">
        <Button asChild variant="outline" className="border-primary text-primary">
          <Link to="/gallery/">
            <Images className="h-4 w-4 mr-1" />Mes Galeries
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/portfolio/">
            <Folder className="h-4 w-4 mr-1" />Mon Portfolio
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-emerald-600 text-emerald-700">
          <Link to="/orders">
            <ShoppingBag className="h-4 w-4 mr-1" />Mes Commandes
          </Link>
        </Button>
        <Button asChild variant="outline" className="text-muted-foreground">
          <Link to="/messages">
            <Mail className="h-4 w-4 mr-1" />Messages
          </Link>
        </Button>
      </section>

      {/* Galeries et Commandes */}
      <section className="container mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        <Panel icon={Folder} title="Dernières galeries clients">
          {galleries.length > 0 ? (
            <ul className="space-y-2">
              {galleries.slice(0, 5).map((g: any) => (
                <li key={g.id}
                    className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                  <Link to="/gallery/$id" params={{ id: g.id }}
                        className="font-medium text-sm hover:text-primary">
                    {g.title}
                  </Link>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                    {g.photo_count} photos
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground p-2">Aucune galerie pour le moment.</p>
          )}
        </Panel>

        
      </section>
    </Layout>
  );
}

function ClientDashboard({ user }: { user: any }) {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyOrders()
      .then((data) => setOrders(Array.isArray(data) ? data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <div className="h-2" style={{ background: "var(--gradient-primary)" }} />

      {/* Header */}
      <section className="bg-muted/40 py-8 border-t-4 border-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <UserIcon className="h-8 w-8 text-foreground" />
            <h1 className="text-3xl font-bold">
              Bonjour, {user.first_name || user.username} 👋
            </h1>
          </div>
          <span className="px-4 py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold">
            Client
          </span>
        </div>
      </section>

      {/* Contenu */}
      <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <Panel icon={ShoppingBag} title="Mes commandes">
          {loading ? (
            <p className="text-muted-foreground p-2">Chargement...</p>
          ) : orders.length > 0 ? (
            <ul className="space-y-2">
              {orders.map((o: any) => (
                <li key={o.id}
                    className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                  <span className="text-sm font-medium">{o.service_type}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    o.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                    o.status === "confirmed" ? "bg-blue-100 text-blue-700" :
                    o.status === "completed" ? "bg-green-100 text-green-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {o.status === "pending" ? "En attente" :
                     o.status === "confirmed" ? "Confirmée" :
                     o.status === "completed" ? "Terminée" : "Annulée"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground p-2">Aucune commande pour le moment.</p>
          )}
          <div className="mt-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/orders">
                <List className="h-4 w-4 mr-1" />Voir toutes mes réservations
              </Link>
            </Button>
          </div>
        </Panel>

        <Panel icon={ImageIcon} title="Accéder à mes photos">
          <p className="text-muted-foreground p-2">
            Vous avez reçu un code d'accès ? Consultez votre galerie privée.
          </p>
          <div className="flex flex-wrap gap-2 p-2">
            <AccessPhotosDialog
              trigger={
                <Button variant="outline"
                        className="border-primary text-primary hover:bg-primary/10">
                  <ImageIcon className="h-4 w-4 mr-1" />Saisir mon code
                </Button>
              }
            />
            <Button asChild variant="outline" className="text-muted-foreground">
              <Link to="/messages">
                <Mail className="h-4 w-4 mr-1" />Mes messages
              </Link>
            </Button>
          </div>
        </Panel>
      </section>
    </Layout>
  );
}

function Panel({
  icon: Icon, title, children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-card">
      <div className="bg-navy-deep text-white px-4 py-3 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="p-4 space-y-2">{children}</div>
    </div>
  );
}