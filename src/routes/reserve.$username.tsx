import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPhotographer, createOrder } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/reserve/$username")({
  component: ReservePage,
});

function ReservePage() {
  const { username } = Route.useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [photographer, setPhotographer] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    service_type: "mariage",
    event_date: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    if (!user) { navigate({ to: "/login" }); return; }
    getPhotographer(username).then(setPhotographer).catch(console.error);
  }, [username]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder({ ...form, photographer_username: username });
      navigate({ to: "/orders" });
    } catch (err) {
      setError("Erreur lors de la réservation.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
          <div className="bg-navy-deep text-white px-6 py-4 font-semibold text-lg">
            📅 Réserver un photographe
          </div>
          <div className="p-6">
            {photographer && (
              <div className="flex items-center gap-3 mb-6 p-3 bg-muted rounded-xl">
                {photographer.avatar_url ? (
                  <img src={photographer.avatar_url}
                       className="h-14 w-14 rounded-full object-cover border-2 border-primary" />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-primary/10 grid place-items-center">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div>
                  <p className="font-bold">
                    {photographer.first_name} {photographer.last_name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {photographer.photographer_profile?.city}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Type de service</Label>
                <select name="service_type" value={form.service_type}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="mariage">Mariage</option>
                  <option value="portrait">Portrait</option>
                  <option value="evenement">Événement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <Label>Date de l'événement</Label>
                <Input name="event_date" type="date" value={form.event_date}
                       onChange={handleChange} className="mt-1" required />
              </div>
              <div>
                <Label>Lieu</Label>
                <Input name="location" value={form.location}
                       onChange={handleChange} placeholder="Ex: Dakar, Plateau"
                       className="mt-1" required />
              </div>
              <div>
                <Label>Message</Label>
                <textarea name="message" value={form.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet..."
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]" />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button type="submit"
                      className="w-full bg-primary text-primary-foreground"
                      disabled={loading}>
                {loading ? "Envoi..." : "Envoyer la réservation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}