import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock, ChevronLeft, ChevronRight, CheckCircle2, Phone, Mail, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { ScintiNetLogo } from "@/components/scintinet-logo";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const SERVICES = [
  "Entretien des immeubles résidentiels et espaces communs",
  "Nettoyage résidentiel pour maisons privées",
  "Service spécialisé pour les aînés",
  "Lavage de vitres après l'hiver",
  "Lavage de voiture à domicile",
];

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
];

const DAYS_FR = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function generateCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
}

function isDateAvailable(year: number, month: number, day: number) {
  const date = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dow = date.getDay();
  return date >= today && dow !== 0;
}

export default function RendezVousPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<{ year: number; month: number; day: number } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const calendarDays = generateCalendarDays(currentYear, currentMonth);

  function prevMonth() {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  }
  function nextMonth() {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  }

  function handleDateSelect(day: number) {
    if (!isDateAvailable(currentYear, currentMonth, day)) return;
    setSelectedDate({ year: currentYear, month: currentMonth, day });
    setSelectedTime(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setSubmitting(true);

    const dateStr = `${selectedDate.day} ${MONTHS_FR[selectedDate.month]} ${selectedDate.year}`;
    const emailBody = `Nouvelle prise de rendez-vous ScintiNet

Nom : ${form.name}
Email : ${form.email}
Téléphone : ${form.phone}
Service demandé : ${form.service || "Non précisé"}
Date : ${dateStr}
Heure : ${selectedTime}
Notes : ${form.notes || "Aucune"}`;

    const subject = `Rendez-vous ScintiNet – ${form.name} – ${dateStr} à ${selectedTime}`;
    const mailtoUrl = `mailto:tsillery@ymail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitting(false);
      setStep(3);
    }, 500);
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); setLocation("/"); }}>
            <ScintiNetLogo height={38} />
          </a>
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au site
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <Badge variant="outline" className="mb-3">Prise de rendez-vous</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-rdv-title">
            Réservez votre intervention
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choisissez une date et une heure qui vous conviennent. Un courriel de confirmation vous sera envoyé immédiatement.
          </p>
        </motion.div>

        {step === 3 ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center">
            <Card className="p-10" data-testid="card-confirmation">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9 text-brand-green" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Rendez-vous confirmé !</h2>
              <p className="text-muted-foreground mb-2">
                Votre rendez-vous le <strong>{selectedDate?.day} {selectedDate ? MONTHS_FR[selectedDate.month] : ""} {selectedDate?.year}</strong> à <strong>{selectedTime}</strong> a bien été enregistré.
              </p>
              <p className="text-muted-foreground mb-8 text-sm">
                Un courriel de confirmation a été envoyé à <strong>{form.email}</strong>. Notre équipe vous contactera pour confirmer les détails.
              </p>
              <Button onClick={() => setLocation("/")} className="w-full" data-testid="button-return-home">
                Retour au site
              </Button>
            </Card>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {step >= 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="p-6" data-testid="card-calendar">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">1</div>
                      <h2 className="font-semibold text-lg">Choisissez une date</h2>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <button onClick={prevMonth} className="w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center" data-testid="button-prev-month">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-semibold" data-testid="text-current-month">
                        {MONTHS_FR[currentMonth]} {currentYear}
                      </span>
                      <button onClick={nextMonth} className="w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center" data-testid="button-next-month">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {DAYS_FR.map(d => (
                        <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((day, idx) => {
                        if (!day) return <div key={`empty-${idx}`} />;
                        const available = isDateAvailable(currentYear, currentMonth, day);
                        const isSelected = selectedDate?.day === day && selectedDate?.month === currentMonth && selectedDate?.year === currentYear;
                        return (
                          <button
                            key={day}
                            onClick={() => handleDateSelect(day)}
                            disabled={!available}
                            data-testid={`button-day-${day}`}
                            className={`
                              h-9 w-full rounded-md text-sm font-medium transition-all
                              ${isSelected ? "bg-brand-blue text-white" : ""}
                              ${available && !isSelected ? "hover:bg-brand-blue/10 text-foreground" : ""}
                              ${!available ? "text-muted-foreground/40 cursor-not-allowed" : ""}
                            `}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              )}

              {selectedDate && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="p-6" data-testid="card-timeslots">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">2</div>
                      <h2 className="font-semibold text-lg">Choisissez une heure</h2>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => { setSelectedTime(slot); setStep(2); }}
                          data-testid={`button-slot-${slot}`}
                          className={`
                            py-2.5 px-3 rounded-md text-sm font-medium border transition-all
                            ${selectedTime === slot
                              ? "bg-brand-blue text-white border-brand-blue"
                              : "hover:border-brand-blue hover:text-brand-blue border-border"
                            }
                          `}
                        >
                          <Clock className="w-3.5 h-3.5 mx-auto mb-1" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {step === 2 && selectedDate && selectedTime && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <Card className="p-6" data-testid="card-rdv-form">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">3</div>
                      <h2 className="font-semibold text-lg">Vos informations</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Nom complet *</label>
                          <Input
                            placeholder="Votre nom"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            data-testid="input-rdv-name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Courriel *</label>
                          <Input
                            type="email"
                            placeholder="votre@email.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            data-testid="input-rdv-email"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Téléphone *</label>
                          <Input
                            placeholder="+1 (xxx) xxx-xxxx"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                            data-testid="input-rdv-phone"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Service souhaité</label>
                          <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                            <SelectTrigger data-testid="select-rdv-service">
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                            <SelectContent>
                              {SERVICES.map(s => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Notes complémentaires</label>
                        <Textarea
                          placeholder="Précisions sur votre besoin, adresse, etc."
                          rows={3}
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          data-testid="input-rdv-notes"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={submitting} data-testid="button-confirm-rdv">
                        {submitting ? "Envoi en cours..." : "Confirmer le rendez-vous"}
                        <CheckCircle2 className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              )}
            </div>

            <div className="space-y-4">
              <Card className="p-5" data-testid="card-rdv-summary">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-brand-blue" />
                  Récapitulatif
                </h3>
                {selectedDate ? (
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>
                        <strong>{selectedDate.day} {MONTHS_FR[selectedDate.month]} {selectedDate.year}</strong>
                      </span>
                    </div>
                    {selectedTime && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span><strong>{selectedTime}</strong></span>
                      </div>
                    )}
                    {form.service && (
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{form.service}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Aucune date sélectionnée</p>
                )}
              </Card>

              <Card className="p-5" data-testid="card-rdv-contact">
                <h3 className="font-semibold mb-4">Besoin d'aide ?</h3>
                <div className="space-y-3">
                  <a href="tel:+14189533284" className="flex items-center gap-2 text-sm text-brand-blue" data-testid="link-rdv-phone">
                    <Phone className="w-4 h-4" />
                    +1 (418) 953-3284
                  </a>
                  <a href="mailto:contact@scintinet.com" className="flex items-center gap-2 text-sm text-brand-blue" data-testid="link-rdv-email">
                    <Mail className="w-4 h-4" />
                    contact@scintinet.com
                  </a>
                </div>
              </Card>

              <Card className="p-5 bg-brand-blue/5 border-brand-blue/20" data-testid="card-rdv-info">
                <h3 className="font-semibold mb-3 text-sm">Informations</h3>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                    Confirmation par courriel immédiate
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                    Disponible du lundi au samedi
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                    Annulation gratuite 24h à l'avance
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
