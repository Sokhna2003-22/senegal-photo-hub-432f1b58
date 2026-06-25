import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AccessPhotosDialog } from "@/components/AccessPhotosDialog";
import {
  Bell, Camera, Folder, FolderPlus, Images, ImageIcon, List, Mail,
  Plus, RefreshCw, ShoppingBag, ShoppingCart, User as UserIcon,
} from "lucide-react";
import { getCurrentUser, type StoredUser } from "@/lib/local-store";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon espace — PhotoPlatform" }] }),
  component: Dashboard,
});

function Dashboard() {
  const [user, setUser] = useState<StoredUser | null>(null);
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

function PhotographerDashboard({ user }: { user: StoredUser }) {
  const stats = [
    { icon: Images, label: "Galeries clients", value: "0" },
    { icon: Folder, label: "Albums portfolio", value: "0" },
    { icon: ShoppingCart, label: "Commandes en attente", value: "0" },
  ];
  return (
    <Layout>
      <div className="h-2" style={{ background: "var(--gradient-primary)" }} />
      <section className="bg-muted/40 py-8 border-t-4 border-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Camera className="h-8 w-8 text-foreground" />
            <h1 className="text-3xl font-bold">Bonjour, {user.name} <span>👋</span></h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold">Photographe</span>
            <Button variant="ghost" size="sm" className="text-muted-foreground"><RefreshCw className="h-4 w-4" />Actualiser</Button>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <s.icon className="h-7 w-7 text-foreground mx-auto md:mx-0" />
              <div className="text-4xl font-bold mt-2">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep text-white py-4">
        <div className="container mx-auto px-4 flex items-center gap-2 font-semibold">
          ⚡ Actions rapides
        </div>
      </section>
      <section className="container mx-auto px-4 py-6 flex flex-wrap gap-3">
        <Button className="bg-primary hover:bg-primary-glow text-primary-foreground"><Plus className="h-4 w-4" />Nouvelle Galerie</Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary"><Images className="h-4 w-4" />Mes Galeries</Button>
        <Button variant="outline"><FolderPlus className="h-4 w-4" />Nouvel Album</Button>
        <Button variant="outline"><Folder className="h-4 w-4" />Mon Portfolio</Button>
        <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700"><ShoppingBag className="h-4 w-4" />Mes Commandes</Button>
        <Button variant="outline" className="text-muted-foreground"><Mail className="h-4 w-4" />Messages</Button>
      </section>

      <section className="container mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        <Panel icon={Folder} title="Dernières galeries clients">
          <div className="rounded-lg bg-card p-4 flex items-center justify-between">
            <span className="text-muted-foreground">Aucune galerie pour le moment.</span>
          </div>
        </Panel>
        <Panel icon={Bell} title="Commandes en attente">
          <p className="text-muted-foreground p-2">Aucune commande en attente.</p>
        </Panel>
      </section>
    </Layout>
  );
}

function ClientDashboard({ user }: { user: StoredUser }) {
  return (
    <Layout>
      <div className="h-2" style={{ background: "var(--gradient-primary)" }} />
      <section className="bg-muted/40 py-8 border-t-4 border-primary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <UserIcon className="h-8 w-8 text-foreground" />
            <h1 className="text-3xl font-bold">Bonjour, {user.name} <span>👋</span></h1>
          </div>
          <span className="px-4 py-1.5 rounded-md bg-blue-600 text-white text-sm font-semibold">Client</span>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <Panel icon={ShoppingBag} title="Mes commandes">
          <p className="text-muted-foreground p-2">Aucune commande pour le moment.</p>
        </Panel>
        <Panel icon={ImageIcon} title="Accéder à mes photos">
          <p className="text-muted-foreground p-2">Vous avez reçu un code d'accès ? Consultez votre galerie privée.</p>
          <div className="flex flex-wrap gap-2 p-2">
            <AccessPhotosDialog
              trigger={
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <ImageIcon className="h-4 w-4" />Saisir mon code
                </Button>
              }
            />
            <Button asChild variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-600">
              <Link to="/dashboard"><List className="h-4 w-4" />Voir mes réservations</Link>
            </Button>
            <Button variant="outline" className="text-muted-foreground"><Mail className="h-4 w-4" />Mes messages</Button>
          </div>
        </Panel>
      </section>
    </Layout>
  );
}

function Panel({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-card">
      <div className="bg-navy-deep text-white px-4 py-3 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="p-4 space-y-2">{children}</div>
    </div>
  );
}