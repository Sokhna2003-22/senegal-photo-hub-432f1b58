import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCurrentUser } from "@/lib/api/auth";

export const Route = createFileRoute("/portfolio/create")({
  component: PortfolioCreate,
});

function PortfolioCreate() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    title: "", description: "", category: "mariage", is_public: true,
  });

  function handleChange(e: any) {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("is_public", String(form.is_public));

      if (coverRef.current?.files?.[0]) {
        formData.append("cover_image", coverRef.current.files[0]);
      }
      if (fileRef.current?.files) {
        Array.from(fileRef.current.files).forEach(f => formData.append("photos", f));
      }

      const response = await fetch("http://127.0.0.1:8000/api/portfolio/my/", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData,
      });
      const data = await response.json();
      if (data.id) {
        navigate({ to: "/portfolio/" });
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
            📁 Créer un album portfolio
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <Label>Titre</Label>
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
              <Label>Catégorie</Label>
              <select name="category" value={form.category} onChange={handleChange}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="mariage">Mariage</option>
                <option value="portrait">Portrait</option>
                <option value="evenement">Événement</option>
                <option value="mode">Mode</option>
                <option value="nature">Nature</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <Label>Image de couverture</Label>
              <input ref={coverRef} type="file" accept="image/*"
                     className="mt-1 w-full text-sm" />
            </div>
            <div>
              <Label>Photos de l'album</Label>
              <input ref={fileRef} type="file" multiple accept="image/*"
                     className="mt-1 w-full text-sm" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="is_public" id="is_public"
                     checked={form.is_public} onChange={handleChange} />
              <Label htmlFor="is_public">Album public (visible sur votre profil)</Label>
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <div className="flex gap-3">
              <Button type="submit" className="bg-primary text-primary-foreground flex-1"
                      disabled={loading}>
                {loading ? "Création..." : "Créer l'album"}
              </Button>
              <Button type="button" variant="outline"
                      onClick={() => navigate({ to: "/portfolio/" })}>
                Annuler
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}