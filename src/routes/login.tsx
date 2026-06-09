import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Connexion — PhotoPlatform" }] }),
  component: Login,
});

function Login() {
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
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="vous@exemple.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
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