import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScintiNetLogo } from "@/components/scintinet-logo";

export default function PolitiqueConfidentialitePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); setLocation("/"); }}>
            <ScintiNetLogo height={38} />
          </a>
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} data-testid="button-back-home-policy">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au site
          </Button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" data-testid="text-policy-title">Politique de confidentialité</h1>
              <p className="text-sm text-muted-foreground">Dernière mise à jour : mai 2026</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">1. Identification de l'entreprise</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>ScintiNet</strong> est une entreprise de services d'entretien et de nettoyage résidentiel opérant dans la région de Québec, Canada.<br />
                Adresse : 12 Rue Boucher, App. 8, Québec (QC)<br />
                Courriel : <a href="mailto:contact@scintinet.com" className="text-brand-blue">contact@scintinet.com</a><br />
                Téléphone : <a href="tel:+14189533284" className="text-brand-blue">+1 (418) 953-3284</a><br />
                NEQ : <strong>3382027319</strong>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">2. Renseignements collectés</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nous collectons uniquement les renseignements personnels nécessaires à la prestation de nos services :
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Nom et prénom</li>
                <li>Adresse courriel</li>
                <li>Numéro de téléphone</li>
                <li>Adresse du lieu d'intervention (si applicable)</li>
                <li>Informations sur votre propriété (superficie, type, etc.)</li>
                <li>Questions ou messages transmis via nos formulaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">3. Utilisation des renseignements</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Les renseignements collectés sont utilisés exclusivement pour :
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Répondre à vos demandes de devis ou de renseignements</li>
                <li>Planifier et confirmer vos rendez-vous d'intervention</li>
                <li>Vous envoyer des confirmations ou rappels par courriel ou téléphone</li>
                <li>Améliorer la qualité de nos services</li>
                <li>Respecter nos obligations légales et contractuelles</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Nous ne vendons, ne louons et ne partageons jamais vos renseignements personnels avec des tiers à des fins commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">4. Conservation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos renseignements sont conservés uniquement pendant la durée nécessaire à la prestation des services demandés,
                ou selon les obligations légales en vigueur au Québec (Loi 25 – Loi modernisant des dispositions législatives
                en matière de protection des renseignements personnels).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">5. Sécurité des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous prenons des mesures raisonnables pour protéger vos renseignements contre tout accès non autorisé,
                divulgation ou destruction. Les formulaires de notre site transmettent vos données via des liens sécurisés (mailto).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">6. Témoins (cookies)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des témoins (cookies) tiers dans le cadre du service de chat Tawk.to.
                Ces témoins permettent de gérer les conversations de soutien en ligne.
                Vous pouvez désactiver les témoins dans les paramètres de votre navigateur, ce qui peut limiter certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">7. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Conformément à la <strong>Loi 25</strong> du Québec, vous avez le droit de :
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Accéder aux renseignements personnels vous concernant</li>
                <li>Demander la rectification de renseignements inexacts</li>
                <li>Demander la suppression de vos données</li>
                <li>Retirer votre consentement en tout temps</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:contact@scintinet.com" className="text-brand-blue">contact@scintinet.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                ScintiNet se réserve le droit de modifier cette politique à tout moment.
                Les modifications entrent en vigueur dès leur publication sur ce site.
                Nous vous encourageons à consulter cette page régulièrement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 text-brand-blue">9. Nous joindre</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique ou vos renseignements personnels, contactez-nous :<br />
                <a href="mailto:contact@scintinet.com" className="text-brand-blue font-medium">contact@scintinet.com</a>
                {" "}·{" "}
                <a href="tel:+14189533284" className="text-brand-blue font-medium">+1 (418) 953-3284</a>
              </p>
            </section>

          </div>
        </motion.div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2026 ScintiNet — Tous droits réservés ·{" "}
        <a href="/politique-confidentialite" className="text-brand-blue hover:underline">Politique de confidentialité</a>
      </footer>
    </div>
  );
}
