import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { useState } from "react";
import { getUsers, setCurrentUser } from "@/lib/local-store";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Connexion — PhotoPlatform" }] }),
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = getUsers().find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user) {
      setError("Aucun compte trouvé. Inscrivez-vous d'abord.");
      return;
    }
    setCurrentUser(user);
    navigate({ to: "/dashboard" });
  }

  return (
    <Layout>
      <div className="min-h-[80vh] grid place-items-center px-4 py-12" style={{ background: "var(--gradient-hero)" }}>
        <div className="w-full max-w-md bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">PhotoPlatform</span>
          </div>
          <h1 className="text-2xl font-bold text-center">Connexion</h1>
          <p className="text-sm text-muted-foreground text-center mt-1">Accédez à votre espace</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.com" className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1" required />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">Se connecter</Button>
          </form>
          <p className="text-sm text-center mt-6 text-muted-foreground">
            Pas de compte ? <Link to="/register" className="text-primary font-medium">S'inscrire</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}