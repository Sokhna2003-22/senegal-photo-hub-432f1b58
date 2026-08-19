import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiCall } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/gallery/create")({
  component: GalleryCreate,
});

function GalleryCreate() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "", description: "", client_name: "", client_email: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiCall("/gallery/", "POST", form);
      if (data.id) {
        navigate({ to: "/gallery/$id", params: { id: data.id } });
      } else {
        setError("Erreur lors de la création.");
      }
    } catch (e) {
      setError("Erreur lors de la création.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
          <div className="bg-navy-deep text-white px-6 py-4 font-semibold text-lg">
            📁 Créer une galerie client
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <Label>Titre de la galerie</Label>
              <Input name="title" value={form.title}
                     onChange={handleChange} className="mt-1" required />
            </div>
            <div>
              <Label>Description</Label>
              <textarea name="description" value={form.description}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[80px]" />
            </div>
            <div>
              <Label>Nom du client</Label>
              <Input name="client_name" value={form.client_name}
                     onChange={handleChange} className="mt-1" required />
            </div>
            <div>
              <Label>Email du client</Label>
              <Input name="client_email" type="email" value={form.client_email}
                     onChange={handleChange} className="mt-1" required />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <div className="flex gap-3">
              <Button type="submit"
                      className="bg-primary text-primary-foreground flex-1"
                      disabled={loading}>
                {loading ? "Création..." : "Créer la galerie"}
              </Button>
              <Button type="button" variant="outline"
                      onClick={() => navigate({ to: "/gallery/" })}>
                Annuler
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}