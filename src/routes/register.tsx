import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { registerUser } from "@/lib/api/auth";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Inscription — PhotoPlatform" }] }),
  validateSearch: (s: Record<string, unknown>) => ({
    role: s.role === "photographer" ? "photographer" as const : undefined,
  }),
  component: Register,
});

function Register() {
  const { role: forcedRole } = Route.useSearch();
  const [role, setRole] = useState<"client" | "photographer">(forcedRole ?? "client");
  const lockRole = forcedRole === "photographer";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== password2) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    try {
      await registerUser({
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        role,
        password,
        password2,
      });
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'inscription. Vérifiez vos informations.");
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
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80)" }}
        />
        <div className="absolute inset-0 bg-black/65" />

        {/* Formulaire */}
        <div className="relative z-10 w-full max-w-md bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SunuVision</span>
          </div>

          <h1 className="text-2xl font-bold text-center">
            {lockRole ? "Devenir photographe" : "Créer un compte"}
          </h1>

          {/* Sélecteur de rôle */}
          {!lockRole && (
            <div className="grid grid-cols-2 gap-2 mt-5 p-1 bg-muted rounded-lg">
              {(["client", "photographer"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2 rounded-md text-sm font-medium transition-colors ${
                    role === r
                      ? "bg-card shadow-sm text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {r === "client" ? "👤 Client" : "📸 Photographe"}
                </button>
              ))}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ex: amadou_photo"
                className="mt-1"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            {/* Téléphone */}
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+221 77 000 00 00"
                className="mt-1"
              />
            </div>

            {/* Ville — photographe seulement */}
            {role === "photographer" && (
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Dakar"
                  className="mt-1"
                />
              </div>
            )}

            {/* Mot de passe */}
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

            {/* Confirmer mot de passe */}
            <div>
              <Label htmlFor="password2">Confirmer le mot de passe</Label>
              <div className="relative mt-1">
                <Input
                  id="password2"
                  type={showPassword2 ? "text" : "password"}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="••••••••"
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword2
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
              {loading ? "Création en cours..." : "Créer mon compte"}
            </Button>
          </form>

          <p className="text-sm text-center mt-6 text-muted-foreground">
            Déjà inscrit ?{" "}
            <Link to="/login" className="text-primary font-medium">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}