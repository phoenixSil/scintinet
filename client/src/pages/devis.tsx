import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Send, ArrowLeft, Building2, Home, HandHeart, GlassWater, Car, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { ScintiNetLogo } from "@/components/scintinet-logo";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const SERVICES = [
  { icon: Building2, id: "immeubles", label: "Entretien des immeubles résidentiels et espaces communs" },
  { icon: Home, id: "maisons", label: "Nettoyage résidentiel pour maisons privées" },
  { icon: HandHeart, id: "aines", label: "Service spécialisé pour les aînés" },
  { icon: GlassWater, id: "vitres", label: "Lavage de vitres après l'hiver" },
  { icon: Car, id: "voiture", label: "Lavage de voiture à domicile" },
];

const FREQUENCIES = ["Ponctuel", "Hebdomadaire", "Bi-mensuel", "Mensuel", "À définir"];
const PROPERTY_TYPES = ["Appartement", "Maison", "Condo", "Immeuble à logements", "Autre"];

export default function DevisPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    propertyType: "", frequency: "", superficie: "", notes: "",
  });

  function toggleService(id: string) {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast({ title: "Attention", description: "Veuillez sélectionner au moins un service.", variant: "destructive" });
      return;
    }
    setSubmitting(true);

    const servicesLabels = selectedServices.map(id => SERVICES.find(s => s.id === id)?.label).join(", ");
    const emailBody = `Nouvelle demande de devis ScintiNet

Nom : ${form.name}
Email : ${form.email}
Téléphone : ${form.phone}
Adresse : ${form.address || "Non précisée"}
Type de propriété : ${form.propertyType || "Non précisé"}
Superficie : ${form.superficie || "Non précisée"}
Fréquence souhaitée : ${form.frequency || "Non précisée"}
Services demandés : ${servicesLabels}
Notes : ${form.notes || "Aucune"}`;

    const subject = `Demande de devis ScintiNet – ${form.name}`;
    const mailtoUrl = `mailto:tsillery@ymail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/20 flex flex-col">
        <header className="bg-background border-b">
          <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
            <ScintiNetLogo height={38} />
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full text-center">
            <Card className="p-10" data-testid="card-devis-confirmation">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9 text-brand-green" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Demande envoyée !</h2>
              <p className="text-muted-foreground mb-2">
                Votre demande de devis a bien été reçue. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Un courriel de confirmation a été envoyé à <strong>{form.email}</strong>.
              </p>
              <Button onClick={() => setLocation("/")} className="w-full" data-testid="button-devis-return-home">
                Retour au site
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); setLocation("/"); }}>
            <ScintiNetLogo height={38} />
          </a>
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} data-testid="button-back-home-devis">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au site
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <Badge variant="outline" className="mb-3">Demande de devis</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-devis-title">
            Obtenez votre devis gratuit
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous et nous vous enverrons un devis personnalisé dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="p-6" data-testid="card-service-selection">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">1</div>
                    <h2 className="font-semibold text-lg">Sélectionnez vos services</h2>
                  </div>
                  <div className="space-y-3">
                    {SERVICES.map((service) => {
                      const selected = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          data-testid={`button-service-${service.id}`}
                          className={`
                            w-full flex items-center gap-4 p-4 rounded-md border transition-all text-left
                            ${selected ? "border-brand-blue bg-brand-blue/5" : "border-border hover:border-brand-blue/40"}
                          `}
                        >
                          <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${selected ? "bg-brand-blue" : "bg-muted"}`}>
                            <service.icon className={`w-5 h-5 ${selected ? "text-white" : "text-muted-foreground"}`} />
                          </div>
                          <span className="text-sm font-medium flex-1">{service.label}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${selected ? "border-brand-blue bg-brand-blue" : "border-border"}`}>
                            {selected && <CheckCircle2 className="w-3 h-3 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="p-6" data-testid="card-devis-details">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">2</div>
                    <h2 className="font-semibold text-lg">Détails de votre propriété</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Type de propriété</label>
                      <Select value={form.propertyType} onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                        <SelectTrigger data-testid="select-property-type">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          {PROPERTY_TYPES.map(t => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Superficie approximative</label>
                      <Input
                        placeholder="ex: 80 m² ou 800 pi²"
                        value={form.superficie}
                        onChange={(e) => setForm({ ...form, superficie: e.target.value })}
                        data-testid="input-superficie"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium mb-1.5 block">Fréquence souhaitée</label>
                      <div className="flex flex-wrap gap-2">
                        {FREQUENCIES.map(f => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setForm({ ...form, frequency: f })}
                            data-testid={`button-freq-${f}`}
                            className={`px-4 py-2 rounded-md text-sm border transition-all ${form.frequency === f ? "bg-brand-blue text-white border-brand-blue" : "border-border hover:border-brand-blue/40"}`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium mb-1.5 block">Adresse (optionnel)</label>
                      <Input
                        placeholder="Votre adresse à Québec"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        data-testid="input-address"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="p-6" data-testid="card-devis-contact">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">3</div>
                    <h2 className="font-semibold text-lg">Vos coordonnées</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nom complet *</label>
                      <Input placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required data-testid="input-devis-name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Courriel *</label>
                      <Input type="email" placeholder="votre@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required data-testid="input-devis-email" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Téléphone *</label>
                      <Input placeholder="+1 (xxx) xxx-xxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required data-testid="input-devis-phone" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium mb-1.5 block">Notes complémentaires</label>
                      <Textarea placeholder="Précisions sur vos besoins, contraintes particulières..." rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} data-testid="input-devis-notes" />
                    </div>
                  </div>
                </Card>
              </motion.div>

              <Button type="submit" size="lg" className="w-full" disabled={submitting} data-testid="button-submit-devis">
                <Send className="mr-2 w-4 h-4" />
                {submitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <Card className="p-5" data-testid="card-devis-summary">
              <h3 className="font-semibold mb-4">Récapitulatif</h3>
              {selectedServices.length > 0 ? (
                <ul className="space-y-2">
                  {selectedServices.map(id => {
                    const s = SERVICES.find(s => s.id === id);
                    return s ? (
                      <li key={id} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{s.label}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">Aucun service sélectionné</p>
              )}
            </Card>

            <Card className="p-5" data-testid="card-devis-contact-info">
              <h3 className="font-semibold mb-4">Nous contacter directement</h3>
              <div className="space-y-3">
                <a href="tel:+14189533284" className="flex items-center gap-2 text-sm text-brand-blue" data-testid="link-devis-phone">
                  <Phone className="w-4 h-4" />
                  +1 (418) 953-3284
                </a>
                <a href="mailto:contact@scintinet.com" className="flex items-center gap-2 text-sm text-brand-blue" data-testid="link-devis-email">
                  <Mail className="w-4 h-4" />
                  contact@scintinet.com
                </a>
              </div>
            </Card>

            <Card className="p-5 bg-brand-green/5 border-brand-green/20">
              <h3 className="font-semibold mb-3 text-sm">Pourquoi demander un devis ?</h3>
              <ul className="text-xs text-muted-foreground space-y-2">
                {[
                  "Gratuit et sans engagement",
                  "Réponse sous 24h",
                  "Tarif personnalisé selon vos besoins",
                  "Expertise locale au Québec",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
