import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, Lock } from "lucide-react";

export function AccessPhotosDialog({ trigger }: { trigger: ReactNode }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) {
      setError("Veuillez renseigner ce champ");
      return;
    }
    setError("");
    alert(`Code "${code}" — galerie introuvable pour le moment.`);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white text-foreground p-8">
        <DialogHeader className="items-center text-center space-y-3">
          <div className="h-16 w-16 rounded-full bg-primary/10 grid place-items-center">
            <Lock className="h-7 w-7 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">Accéder à mes photos</DialogTitle>
          <p className="text-sm text-muted-foreground">Entrez le code d'accès reçu de votre photographe</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="EX: AB12CD34"
            className="text-center tracking-[0.3em] font-mono h-12 text-base bg-white border-input text-foreground placeholder:text-muted-foreground/60"
          />
          {error && <p className="text-sm text-destructive text-center">{error}</p>}
          <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground text-base">
            <KeyRound className="h-4 w-4" /> Accéder à ma galerie
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}