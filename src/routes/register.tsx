import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { useState } from "react";
import { saveUser, setCurrentUser } from "@/lib/local-store";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Inscription — PhotoPlatform" }] }),
  component: Register,
});

function Register() {
  const [role, setRole] = useState<"client" | "photographer">("client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      role,
      city: city.trim() || undefined,
    };
    saveUser(user);
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
          <h1 className="text-2xl font-bold text-center">Créer un compte</h1>
          <div className="grid grid-cols-2 gap-2 mt-5 p-1 bg-muted rounded-lg">
            {(["client", "photographer"] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)} className={`py-2 rounded-md text-sm font-medium transition-colors ${role === r ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}>
                {r === "client" ? "Client" : "Photographe"}
              </button>
            ))}
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" required />
            </div>
            {role === "photographer" && (
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Dakar" className="mt-1" />
              </div>
            )}
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" className="mt-1" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">Créer mon compte</Button>
          </form>
          <p className="text-sm text-center mt-6 text-muted-foreground">
            Déjà inscrit ? <Link to="/login" className="text-primary font-medium">Se connecter</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}