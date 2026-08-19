import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { loginUser } from "@/lib/api/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Connexion — PhotoPlatform" }] }),
  component: Login,
});

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await loginUser(username, password);
      if (user.role === "photographer") {
        navigate({ to: "/dashboard" });
      } else {
        navigate({ to: "/dashboard" });
      }
    } catch (err: any) {
      setError("Identifiants incorrects. Vérifiez votre nom d'utilisateur et mot de passe.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="min-h-[80vh] grid place-items-center px-4 py-12 relative">
        {/* Image d'arrière-plan */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80)" }}
        />
        <div className="absolute inset-0 bg-black/65" />

        {/* Formulaire */}
        <div className="relative z-10 w-full max-w-md bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">PhotoPlatform</span>
          </div>

          <h1 className="text-2xl font-bold text-center">Connexion</h1>
          <p className="text-sm text-muted-foreground text-center mt-1">
            Accédez à votre espace
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="votre_username"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword
                    ? <EyeOff className="h-4 w-4" />
                    : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
              disabled={loading}
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </Button>
          </form>

          <p className="text-sm text-center mt-6 text-muted-foreground">
            Pas de compte ?{" "}
            <Link to="/register" className="text-primary font-medium">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}