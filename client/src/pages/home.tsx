import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Heart,
  Users,
  CheckCircle2,
  Building2,
  Home,
  Car,
  GlassWater,
  HandHeart,
  Send,
  Award,
  Briefcase,
  CalendarDays,
  Leaf,
  ThumbsUp,
  Quote,
  Zap,
  PhoneCall,
  FileSignature,
  Wrench,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Percent,
  Sparkles,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { ScintiNetLogo } from "@/components/scintinet-logo";
import { WaveDivider, WaveDividerTop } from "@/components/wave-divider";

const heroImg = "/images/hero-cleaning.png";
const carouselPromoVendrediImg = "/images/carousel-promo-vendredi.png";
const carouselPrintempsPelouseImg = "/images/carousel-printemps-pelouse.png";
const carouselLavageVehiculeImg = "/images/carousel-lavage-vehicule.png";
const carouselGrandMenageImg = "/images/carousel-grand-menage.png";
const carouselReseauxSociauxImg = "/images/carousel-reseaux-sociaux.png";
const serviceBuildingImg = "/images/service-building.png";
const serviceHouseImg = "/images/service-house.png";
const serviceCarImg = "/images/service-car.png";
const serviceWindowsImg = "/images/service-windows.png";
const serviceSeniorsImg = "/images/service-seniors.png";
const seniorAideDomicileImg = "/images/senior-aide-domicile.png";
const seniorAccompagnementImg = "/images/senior-accompagnement.png";
const seniorAssistanceImg = "/images/senior-assistance.png";
const seniorSoutienQuotidienImg = "/images/senior-soutien-quotidien.png";
const seniorMaintienDomicileImg = "/images/senior-maintien-domicile.png";
const seniorAideDomestiqueImg = "/images/senior-aide-domestique.png";
const seniorPerteAutonomieImg = "/images/senior-perte-autonomie.png";
const project1Img = "/images/project-1.png";
const project2Img = "/images/project-2.png";
const project3Img = "/images/project-3.png";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583803468197";
const WHATSAPP_URL = "https://wa.me/14189533284";
const INSTAGRAM_URL = "#";
const YOUTUBE_URL = "#";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    {
      label: "Nos services",
      href: "#services",
      children: [
        { label: "Entretien des immeubles", href: "#service-immeubles" },
        { label: "Nettoyage résidentiel", href: "#service-maisons" },
        { label: "Lavage de vitres", href: "#service-vitres" },
        { label: "Lavage de voiture", href: "#service-voiture" },
      ],
    },
    {
      label: "Aînés & Soutien",
      href: "#aines-soutien",
      children: [
        { label: "Aide à domicile", href: "#aines-soutien" },
        { label: "Accompagnement des aînés", href: "#aines-soutien" },
        { label: "Assistance aux personnes âgées", href: "#aines-soutien" },
        { label: "Soutien quotidien", href: "#aines-soutien" },
        { label: "Maintien à domicile", href: "#aines-soutien" },
        { label: "Aide domestique", href: "#aines-soutien" },
        { label: "Perte d'autonomie", href: "#aines-soutien" },
      ],
    },
    {
      label: "Notre entreprise",
      href: "#apropos",
      children: [
        { label: "À propos de ScintiNet", href: "#apropos" },
        { label: "Pourquoi nous choisir", href: "#pourquoi" },
        { label: "Nos réalisations", href: "#realisations" },
      ],
    },
    {
      label: "Tarifs & FAQ",
      href: "#tarifs",
      children: [
        { label: "Nos tarifs", href: "#tarifs" },
        { label: "Questions fréquentes", href: "#faq" },
      ],
    },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2" data-testid="top-bar">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+14189533284" className="flex items-center gap-2 opacity-90" data-testid="link-phone-top">
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (418) 953-3284</span>
            </a>
            <a href="mailto:contact@scintinet.com" className="flex items-center gap-2 opacity-90" data-testid="link-email-top">
              <Mail className="w-3.5 h-3.5" />
              <span>contact@scintinet.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" data-testid="link-facebook"><SiFacebook className="w-4 h-4" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" data-testid="link-instagram"><SiInstagram className="w-4 h-4" /></a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" data-testid="link-youtube"><SiYoutube className="w-4 h-4" /></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100" data-testid="link-whatsapp"><SiWhatsapp className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-[9999] bg-background/95 backdrop-blur-md border-b" data-testid="navbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 h-16">
          <a href="#accueil" data-testid="link-logo">
            <ScintiNetLogo height={42} />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md flex items-center gap-1 transition-colors"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {item.children && (
                  <div className="absolute top-full left-0 pt-1 invisible pointer-events-none group-hover:visible group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-popover border rounded-md shadow-lg py-1 min-w-[260px]">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          data-testid={`link-service-${child.label.slice(0, 10)}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={() => setLocation("/rendez-vous")} data-testid="button-rdv-nav">
              <CalendarDays className="w-4 h-4 mr-2" />
              Rendez-vous
            </Button>
            <Button className="hidden sm:inline-flex" size="sm" onClick={() => setLocation("/devis")} data-testid="button-devis-nav">
              Devis gratuit
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t bg-background px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <button
                    type="button"
                    className="w-full px-3 py-2.5 text-sm font-medium rounded-md text-left"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g,'-')}`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium rounded-md"
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s/g,'-')}`}
                  >
                    {item.label}
                  </a>
                )}
                {item.children && openMenu === item.label && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="w-full mt-2" variant="outline" onClick={() => { setMobileOpen(false); setLocation("/rendez-vous"); }} data-testid="button-mobile-rdv">
              <CalendarDays className="w-4 h-4 mr-2" />
              Prendre un rendez-vous
            </Button>
            <Button className="w-full mt-2" onClick={() => { setMobileOpen(false); setLocation("/devis"); }} data-testid="button-mobile-devis">
              Devis gratuit
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}

function HeroSection() {
  const [, setLocation] = useLocation();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = [
    {
      id: "main",
      image: heroImg,
      gradient: "from-[#0097CE]/85 via-[#0097CE]/60 to-[#38D430]/30",
      badge: "Services professionnels au Québec",
      title: (<>Entretien et nettoyage{" "}<span className="text-brand-green">résidentiel</span> à Québec</>),
      description: "ScintiNet offre des services complets d'entretien résidentiel, nettoyage spécialisé et services de proximité, pour des espaces propres, sécuritaires et agréables au quotidien.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => setLocation("/rendez-vous")} data-testid="button-rdv-hero">
            <CalendarDays className="mr-2 w-4 h-4" />
            Prendre rendez-vous
          </Button>
          <Button size="lg" onClick={() => setLocation("/devis")} variant="secondary" data-testid="button-devis-hero">
            Demander un devis
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      ),
    },
    {
      id: "promo-vendredi",
      image: carouselPromoVendrediImg,
      gradient: "from-[#7c3aed]/80 via-[#0097CE]/60 to-[#38D430]/20",
      badge: "Offre exclusive · Chaque vendredi",
      badgeIcon: <Percent className="w-3 h-3 mr-1" />,
      title: (<>Commandez le vendredi,{" "}<span className="text-brand-lime">économisez 10&thinsp;%</span></>),
      description: "Profitez d'une réduction de 10 % sur toutes vos commandes passées le vendredi. Une façon simple et régulière de garder votre espace impeccable pour tout le week-end.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => setLocation("/devis")} data-testid="button-devis-vendredi">
            <Percent className="mr-2 w-4 h-4" />
            Profiter de l'offre
          </Button>
          <Button size="lg" variant="secondary" onClick={() => setLocation("/rendez-vous")} data-testid="button-rdv-vendredi">
            Réserver maintenant
          </Button>
        </div>
      ),
    },
    {
      id: "printemps",
      image: carouselPrintempsPelouseImg,
      gradient: "from-[#166534]/80 via-[#38D430]/50 to-[#0097CE]/20",
      badge: "Offre de printemps · Saison 2026",
      badgeIcon: <Leaf className="w-3 h-3 mr-1" />,
      title: (<>Votre extérieur mérite{" "}<span className="text-brand-lime">un nouveau départ</span></>),
      description: "Après l'hiver québécois, redonnez vie à votre pelouse et vos espaces extérieurs. ScintiNet prépare votre terrain pour que vous profitiez pleinement de chaque journée d'été.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => setLocation("/devis")} data-testid="button-devis-printemps">
            <Sparkles className="mr-2 w-4 h-4" />
            Obtenir mon devis printemps
          </Button>
        </div>
      ),
    },
    {
      id: "vehicule",
      image: carouselLavageVehiculeImg,
      gradient: "from-[#0097CE]/85 via-[#0097CE]/55 to-[#38D430]/25",
      badge: "Lavage de véhicule à domicile",
      badgeIcon: <Car className="w-3 h-3 mr-1" />,
      title: (<>Votre voiture,{" "}<span className="text-brand-green">comme au premier jour</span></>),
      description: "Nous nous déplaçons chez vous pour un lavage complet, soigné et respectueux de la carrosserie. Zéro effort de votre côté — résultat impeccable garanti.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => setLocation("/rendez-vous")} data-testid="button-rdv-vehicule">
            <CalendarDays className="mr-2 w-4 h-4" />
            Réserver un lavage
          </Button>
          <Button size="lg" variant="secondary" onClick={() => setLocation("/devis")} data-testid="button-devis-vehicule">
            Demander un tarif
          </Button>
        </div>
      ),
    },
    {
      id: "grand-menage",
      image: carouselGrandMenageImg,
      gradient: "from-[#0097CE]/85 via-[#38D430]/45 to-[#E2E735]/15",
      badge: "Grand ménage post-hiver",
      badgeIcon: <Home className="w-3 h-3 mr-1" />,
      title: (<>Fini l'hiver.{" "}<span className="text-brand-lime">Place à la fraîcheur.</span></>),
      description: "Votre maison a traversé l'hiver — elle mérite un grand nettoyage en profondeur. ScintiNet intervient rapidement pour redonner à chaque pièce sa brillance et sa légèreté du printemps.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => setLocation("/devis")} data-testid="button-devis-grand-menage">
            <Sparkles className="mr-2 w-4 h-4" />
            Grand ménage express
          </Button>
          <Button size="lg" variant="secondary" onClick={() => setLocation("/rendez-vous")} data-testid="button-rdv-grand-menage">
            Choisir ma date
          </Button>
        </div>
      ),
    },
    {
      id: "reseaux",
      image: carouselReseauxSociauxImg,
      gradient: "from-[#1d4ed8]/80 via-[#0097CE]/60 to-[#38D430]/20",
      badge: "Communauté ScintiNet",
      badgeIcon: <Facebook className="w-3 h-3 mr-1" />,
      title: (<>Rejoignez notre{" "}<span className="text-brand-green">communauté</span></>),
      description: "Suivez-nous sur Facebook pour ne manquer aucune offre, conseil ou nouveauté. Vous avez une question ? Laissez-nous un message directement sur le site — nous répondons rapidement.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-facebook-carousel">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <SiFacebook className="mr-2 w-4 h-4" />
              Suivre sur Facebook
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-contact-carousel">
            <a href="#contact">
              <MessageCircle className="mr-2 w-4 h-4" />
              Nous écrire
            </a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-aide-domicile",
      image: seniorAideDomicileImg,
      gradient: "from-[#0f4c81]/85 via-[#0097CE]/55 to-[#38D430]/20",
      badge: "Services aux aînés · À domicile",
      badgeIcon: <HandHeart className="w-3 h-3 mr-1" />,
      title: (<>Service d'aide{" "}<span className="text-brand-lime">à domicile</span></>),
      description: "Nous offrons un soutien personnalisé et bienveillant pour aider vos proches à maintenir leur autonomie et leur confort chez eux, en toute dignité.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-aide-domicile">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-aide-domicile">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-accompagnement",
      image: seniorAccompagnementImg,
      gradient: "from-[#166534]/80 via-[#0097CE]/50 to-[#38D430]/20",
      badge: "Services aux aînés · Accompagnement",
      badgeIcon: <Users className="w-3 h-3 mr-1" />,
      title: (<>Accompagnement{" "}<span className="text-brand-green">des aînés</span></>),
      description: "Sorties, rendez-vous médicaux, promenades — nous sommes là pour accompagner vos proches et briser l'isolement avec chaleur et respect.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-accompagnement">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-accompagnement">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-assistance",
      image: seniorAssistanceImg,
      gradient: "from-[#7c3aed]/75 via-[#0097CE]/50 to-[#38D430]/20",
      badge: "Services aux aînés · Assistance",
      badgeIcon: <Heart className="w-3 h-3 mr-1" />,
      title: (<>Assistance aux{" "}<span className="text-brand-lime">personnes âgées</span></>),
      description: "Une présence rassurante et professionnelle pour assister vos proches dans leurs besoins quotidiens, avec patience et bienveillance.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-assistance">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-assistance">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-soutien-quotidien",
      image: seniorSoutienQuotidienImg,
      gradient: "from-[#0097CE]/85 via-[#0097CE]/55 to-[#38D430]/25",
      badge: "Services aux aînés · Quotidien",
      badgeIcon: <Clock className="w-3 h-3 mr-1" />,
      title: (<>Soutien quotidien{" "}<span className="text-brand-green">à domicile</span></>),
      description: "Repas, hygiène, organisation de la journée — nous adaptons notre aide à la routine de chaque personne pour un quotidien serein et structuré.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-soutien">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-soutien">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-maintien-domicile",
      image: seniorMaintienDomicileImg,
      gradient: "from-[#0f4c81]/85 via-[#38D430]/40 to-[#E2E735]/15",
      badge: "Services aux aînés · Maintien",
      badgeIcon: <Home className="w-3 h-3 mr-1" />,
      title: (<>Services de maintien{" "}<span className="text-brand-lime">à domicile</span></>),
      description: "Permettre à vos proches de rester chez eux le plus longtemps possible, en toute sécurité et dans un environnement propre et adapté.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-maintien">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-maintien">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-aide-domestique",
      image: seniorAideDomestiqueImg,
      gradient: "from-[#166534]/80 via-[#0097CE]/45 to-[#38D430]/20",
      badge: "Services aux aînés · Aide domestique",
      badgeIcon: <Wrench className="w-3 h-3 mr-1" />,
      title: (<>Accompagnement et{" "}<span className="text-brand-green">aide domestique</span></>),
      description: "Ménage, lessive, cuisine légère — nos intervenants assurent les tâches du quotidien pour que votre proche vive dans un cadre de vie agréable et propre.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-domestique">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-domestique">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
    {
      id: "senior-perte-autonomie",
      image: seniorPerteAutonomieImg,
      gradient: "from-[#0f4c81]/85 via-[#0097CE]/60 to-[#38D430]/20",
      badge: "Services aux aînés · Perte d'autonomie",
      badgeIcon: <Shield className="w-3 h-3 mr-1" />,
      title: (<>Services aux aînés en{" "}<span className="text-brand-lime">perte d'autonomie</span></>),
      description: "Un accompagnement doux et professionnel pour les personnes à mobilité réduite, avec respect de leur rythme et de leur dignité à chaque instant.",
      ctas: (
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild data-testid="button-savoir-autonomie">
            <a href="#aines-soutien"><Sparkles className="mr-2 w-4 h-4" />En savoir plus</a>
          </Button>
          <Button size="lg" variant="secondary" asChild data-testid="button-appel-autonomie">
            <a href="tel:+14189533284"><PhoneCall className="mr-2 w-4 h-4" />Nous appeler</a>
          </Button>
        </div>
      ),
    },
  ];

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      id="accueil"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      data-testid="section-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — cross-fade */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient}`} />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Badge variant="secondary" className="mb-6 flex items-center w-fit" data-testid="badge-hero">
            {slide.badgeIcon ?? null}
            {slide.badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
            {slide.title}
          </h1>
          <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl" data-testid="text-hero-description">
            {slide.description}
          </p>
          {slide.ctas}
        </motion.div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        data-testid="button-carousel-prev"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all"
        data-testid="button-carousel-next"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" data-testid="carousel-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Aller à la diapositive ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            data-testid={`dot-carousel-${i}`}
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    { icon: Star, title: "Qualité du service", desc: "Un travail soigné et rigoureux à chaque intervention" },
    { icon: Clock, title: "Fiabilité & ponctualité", desc: "Toujours à l'heure, toujours fiables" },
    { icon: Shield, title: "Confiance & transparence", desc: "Relations honnêtes et communication ouverte" },
    { icon: Heart, title: "Bien-être des clients", desc: "Votre satisfaction est notre priorité absolue" },
    { icon: Users, title: "Proximité & écoute", desc: "Un service humain et personnalisé" },
  ];

  return (
    <section id="apropos" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4" data-testid="badge-about">A propos</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-about-title">
              Qui sommes-nous ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
              ScintiNet est une entreprise spécialisée dans l'entretien et le nettoyage
              résidentiel au Québec. Notre mission est de fournir des services de qualité
              supérieure qui contribuent au bien-être et au confort de nos clients, tout
              en assurant des espaces de vie propres, sains et accueillants.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nous nous positionnons entre les prestataires informels à bas coût et les
              grandes entreprises généralistes, offrant un service fiable, professionnel
              et personnalisé à un prix juste.
            </p>
            <Button asChild data-testid="button-tarifs-about">
              <a href="#tarifs">
                Voir nos tarifs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6" data-testid="text-values-title">Nos valeurs :</h3>
            <div className="space-y-4">
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className="flex items-start gap-4 p-4 rounded-md bg-background border transition-all"
                  data-testid={`card-value-${i}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center">
                    <val.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{val.title}</h4>
                    <p className="text-muted-foreground text-sm">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      id: "service-immeubles",
      icon: Building2,
      title: "Entretien des immeubles résidentiels et espaces communs",
      desc: "Nettoyage et entretien réguliers des espaces communs pour garantir propreté, sécurité et confort des résidents.",
      img: serviceBuildingImg,
    },
    {
      id: "service-maisons",
      icon: Home,
      title: "Nettoyage résidentiel pour maisons privées",
      desc: "Nettoyage complet des maisons privées, assurant propreté, confort et bien-être, selon des interventions ponctuelles ou régulières.",
      img: serviceHouseImg,
    },
    {
      id: "service-aines",
      icon: HandHeart,
      title: "Service spécialisé pour les aînés",
      desc: "Un accompagnement dédié pour les personnes âgées, avec des services adaptés à leurs besoins spécifiques.",
      img: serviceSeniorsImg,
    },
    {
      id: "service-vitres",
      icon: GlassWater,
      title: "Lavage de vitres après l'hiver",
      desc: "Nettoyage professionnel de vos vitres après la saison hivernale pour retrouver clarté et luminosité.",
      img: serviceWindowsImg,
    },
    {
      id: "service-voiture",
      icon: Car,
      title: "Lavage de voiture à domicile",
      desc: "Nettoyage intérieur et extérieur soigné, pratique pour particuliers et familles souhaitant entretenir leurs véhicules.",
      img: serviceCarImg,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 scroll-mt-24" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-services">Nos services</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-title">
            Des services adaptés à vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-services-description">
            ScintiNet propose des services d'entretien résidentiel complets : immeubles,
            maisons, aînés, vitres et véhicules, avec qualité, fiabilité et flexibilité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="scroll-mt-24"
            >
              <Card className="group h-full" data-testid={`card-service-${i}`}>
                <div className="aspect-[4/3] relative rounded-t-md">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-md" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-md bg-brand-blue flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2 leading-snug" data-testid={`text-service-title-${i}`}>{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" asChild data-testid={`button-service-rdv-${i}`}>
                      <a href="/rendez-vous">
                        <CalendarDays className="mr-1.5 w-3.5 h-3.5" />
                        Rendez-vous
                      </a>
                    </Button>
                    <Button size="sm" asChild data-testid={`button-service-devis-${i}`}>
                      <a href="/devis">Devis gratuit</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Award, value: "150+", label: "Projets réalisés" },
    { icon: Briefcase, value: "25+", label: "Agents d'entretien" },
    { icon: CalendarDays, value: "10+", label: "Années d'expérience" },
    { icon: Heart, value: "98%", label: "Clients satisfaits" },
  ];

  return (
    <section className="py-12 bg-brand-blue -mt-px" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
              data-testid={`stat-${i}`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl lg:text-4xl font-bold mb-1" data-testid={`text-stat-value-${i}`}>{stat.value}</div>
              <div className="text-sm opacity-80" data-testid={`text-stat-label-${i}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Pack Essentiel",
      price: "450 - 750",
      period: "/mois",
      desc: "Entretien régulier de base",
      features: [
        "1 à 2 visites par mois",
        "Nettoyage des espaces communs",
        "Entretien de base",
        "Rapport d'intervention",
      ],
      popular: false,
    },
    {
      name: "Pack Confort",
      price: "900 - 1 500",
      period: "/mois",
      desc: "Entretien approfondi et régulier",
      features: [
        "Visites hebdomadaires ou bi-mensuelles",
        "Nettoyage approfondi",
        "Services complémentaires inclus",
        "Rapport détaillé",
        "Support prioritaire",
      ],
      popular: true,
    },
    {
      name: "Pack Prestige",
      price: "1 800 - 3 000",
      period: "/mois",
      desc: "Service haut de gamme complet",
      features: [
        "Visites hebdomadaires ou bi-mensuelles",
        "Nettoyage premium complet",
        "Tous services complémentaires",
        "Gestionnaire dédié",
        "Support 24/7",
        "Rapport personnalisé",
      ],
      popular: false,
    },
  ];

  const extras = [
    {
      name: "Formule Sérénité Ponctuelle",
      price: "250 - 450",
      desc: "Interventions saisonnières ou ponctuelles",
    },
    {
      name: "Services Complémentaires",
      price: "40 - 350",
      desc: "Lavage de vitres, nettoyage de voiture, etc.",
    },
  ];

  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24" data-testid="section-pricing">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-pricing">Tarifs et Abonnement</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Des forfaits adaptés à chaque besoin
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-pricing-description">
            ScintiNet propose des forfaits Essentiel, Confort et Prestige, adaptés à
            vos besoins, incluant interventions ponctuelles ou régulières et services personnalisés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`relative h-full p-6 ${plan.popular ? "border-brand-blue border-2" : ""}`}
                data-testid={`card-plan-${i}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" data-testid="badge-popular">
                    Populaire
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2" data-testid={`text-plan-name-${i}`}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold" data-testid={`text-plan-price-${i}`}>${plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                    data-testid={`button-plan-${i}`}
                  >
                    <a href="/rendez-vous">
                      <CalendarDays className="mr-2 w-4 h-4" />
                      Prendre rendez-vous
                    </a>
                  </Button>
                  <Button className="w-full" variant="ghost" size="sm" asChild data-testid={`button-plan-devis-${i}`}>
                    <a href="/devis">Demander un devis</a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {extras.map((extra, i) => (
            <motion.div
              key={extra.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 flex flex-wrap items-center justify-between gap-4" data-testid={`card-extra-${i}`}>
                <div>
                  <h4 className="font-semibold mb-1" data-testid={`text-extra-name-${i}`}>{extra.name}</h4>
                  <p className="text-sm text-muted-foreground">{extra.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold" data-testid={`text-extra-price-${i}`}>${extra.price}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      img: project1Img,
      title: "Nettoyage complet - Appartement Plateau",
      category: "Résidentiel",
    },
    {
      img: project2Img,
      title: "Entretien immeuble - Complexe Sainte-Foy",
      category: "Immeuble",
    },
    {
      img: project3Img,
      title: "Grand ménage de printemps - Maison Laval",
      category: "Résidentiel",
    },
  ];

  return (
    <section id="realisations" className="py-20 lg:py-28 scroll-mt-24" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-projects">Réalisations</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-projects-title">
            Dernières réalisations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez quelques-uns de nos projets récents et la qualité de notre travail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group" data-testid={`card-project-${i}`}>
                <div className="aspect-[4/3] relative rounded-t-md">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-md transition-transform duration-500 group-hover:scale-105"
                    style={{ transformOrigin: "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-md" />
                  <Badge className="absolute top-3 left-3 bg-brand-blue/90 text-white" data-testid={`badge-project-cat-${i}`}>
                    {project.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold leading-snug" data-testid={`text-project-title-${i}`}>{project.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorsSection() {
  const sectors = [
    "Vieux-Québec / Cap-Blanc",
    "Saint-Jean-Baptiste",
    "Montcalm",
    "Saint-Roch",
    "Saint-Sauveur",
    "Limoilou",
    "Vanier",
    "Charlesbourg",
    "Orsainville",
    "Beauport",
    "Sainte-Foy",
    "Sillery",
    "Cap-Rouge",
    "L'Ancienne-Lorette",
    "Loretteville",
    "Val-Bélair",
    "Haute-Saint-Charles",
    "Saint-Émile",
    "Neufchâtel",
    "Duberger",
    "Les Saules",
    "Lebourgneuf",
    "Lac-Saint-Charles",
    "Wendake",
  ];

  return (
    <section id="secteurs" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24" data-testid="section-sectors">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-sectors">Zone de service</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-sectors-title">
            Secteurs desservis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nous intervenons dans tous les quartiers de la ville de Québec et les municipalités environnantes.
            Vous ne voyez pas votre secteur ? Contactez-nous — nous évaluerons ensemble la possibilité d'intervenir chez vous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-2xl border p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-brand-blue/5 transition-colors"
                data-testid={`sector-${i}`}
              >
                <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-medium">{sector}</span>
              </motion.div>
            ))}
          </div>

          <div className="border-t pt-6 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="font-semibold text-sm mb-1">Horaires d'intervention</p>
              <p className="text-xs text-muted-foreground">Lun – Ven : 8h00 – 18h00</p>
              <p className="text-xs text-muted-foreground">Samedi : 9h00 – 16h00</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-2">
                <Zap className="w-5 h-5 text-brand-green" />
              </div>
              <p className="font-semibold text-sm mb-1">Urgences mineures</p>
              <p className="text-xs text-muted-foreground">Disponible les fins de semaine</p>
              <p className="text-xs text-muted-foreground">Tél. ou WhatsApp uniquement</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="font-semibold text-sm mb-1">Service à domicile</p>
              <p className="text-xs text-muted-foreground">Nous nous déplaçons chez vous</p>
              <p className="text-xs text-muted-foreground">Région de Québec (QC)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-r from-brand-blue to-brand-blue-dark -mt-px" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Besoin d'un service de nettoyage professionnel ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contactez-nous dès maintenant pour obtenir un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild data-testid="button-cta-rdv">
              <a href="/rendez-vous">
                <CalendarDays className="mr-2 w-4 h-4" />
                Prendre rendez-vous
              </a>
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/10" asChild data-testid="button-cta-devis">
              <a href="/devis">
                Demander un devis
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const advantages = [
    {
      icon: Users,
      title: "Équipe locale québécoise",
      desc: "Nous connaissons les réalités et les besoins des résidents de Québec. Vous faites affaire avec des gens de votre communauté.",
    },
    {
      icon: Shield,
      title: "Personnel formé et assuré",
      desc: "Tous nos employés sont formés selon nos standards élevés et couverts par une assurance responsabilité civile complète.",
    },
    {
      icon: Leaf,
      title: "Produits écologiques",
      desc: "Nous utilisons exclusivement des produits certifiés écologiques, sécuritaires pour votre famille, vos enfants et vos animaux.",
    },
    {
      icon: Clock,
      title: "Ponctualité garantie",
      desc: "Nous respectons vos horaires à la lettre. En cas d'imprévu, vous êtes informé immédiatement et une solution vous est proposée.",
    },
    {
      icon: ThumbsUp,
      title: "Service 100% personnalisé",
      desc: "Chaque client bénéficie d'un plan d'entretien sur mesure, adapté à ses besoins spécifiques et à son budget.",
    },
    {
      icon: Award,
      title: "Satisfaction garantie",
      desc: "Si vous n'êtes pas entièrement satisfait du résultat, nous revenons corriger le travail sans frais supplémentaires.",
    },
  ];

  return (
    <section id="pourquoi" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24" data-testid="section-whyus">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-whyus">Nos avantages</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-whyus-title">
            Pourquoi choisir ScintiNet ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ce qui nous distingue, c'est notre engagement envers la qualité, la transparence et la satisfaction totale de nos clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`card-advantage-${i}`}
            >
              <Card className="p-6 h-full hover:shadow-md transition-shadow border-border/60">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: PhoneCall,
      number: "01",
      title: "Contactez-nous",
      desc: "Appelez-nous directement ou remplissez notre formulaire en ligne pour initier votre demande. Vous pouvez aussi nous écrire via WhatsApp pour une réponse rapide.",
      color: "bg-brand-blue",
    },
    {
      icon: Users,
      number: "02",
      title: "Appel de notre service client",
      desc: "Notre équipe vous contacte sous 24h pour discuter de vos besoins, évaluer l'ampleur du travail et vous proposer la solution la mieux adaptée à votre situation.",
      color: "bg-brand-green",
    },
    {
      icon: FileSignature,
      number: "03",
      title: "Signature du contrat",
      desc: "Nous vous faisons parvenir un devis clair et détaillé, sans surprise. Après votre validation, le contrat est signé et la date de l'intervention est confirmée.",
      color: "bg-brand-blue",
    },
    {
      icon: Wrench,
      number: "04",
      title: "Intervention sur le terrain",
      desc: "Notre équipe se présente à l'heure convenue avec tout le matériel nécessaire. Nous effectuons le travail avec soin et rigueur, puis vous remettons les lieux impeccables.",
      color: "bg-brand-green",
    },
  ];

  return (
    <section id="comment" className="py-20 lg:py-28 scroll-mt-24" data-testid="section-howitworks">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-howitworks">Processus</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-howitworks-title">
            Comment ça fonctionne ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un processus simple et transparent, conçu pour vous offrir une expérience sans stress du premier contact jusqu'à la fin de l'intervention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
              data-testid={`card-step-${i + 1}`}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-12px)] w-6 h-0.5 bg-border z-10" />
              )}
              <Card className="p-6 h-full text-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-black text-muted-foreground/20 mb-2">{step.number}</div>
                <h3 className="font-semibold text-base mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie-Claude T.",
      role: "Propriétaire – Québec",
      rating: 5,
      text: "Service impeccable ! L'équipe est arrivée à l'heure et le résultat dépassait largement mes attentes. Ma maison n'a jamais été aussi propre. Je recommande vivement ScintiNet !",
    },
    {
      name: "Jean-François B.",
      role: "Gestionnaire d'immeuble – Québec",
      rating: 5,
      text: "Nous faisons appel à ScintiNet pour l'entretien de notre immeuble depuis plusieurs mois. Professionnels, efficaces et toujours souriants. Excellent rapport qualité-prix.",
    },
    {
      name: "Sophie L.",
      role: "Fille d'une cliente aînée – Lévis",
      rating: 5,
      text: "Le service pour aînés est vraiment exceptionnel. L'équipe est douce, respectueuse et très attentionnée avec ma mère. Nous sommes rassurés et entièrement satisfaits.",
    },
    {
      name: "Marc A.",
      role: "Client résidentiel – Québec",
      rating: 5,
      text: "Vitres étincelantes et voiture comme neuve ! Je suis client fidèle de ScintiNet depuis le début. Rapide, soigné et professionnel. Je ne changerais pour rien au monde.",
    },
  ];

  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-muted/30 scroll-mt-24" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-testimonials">Témoignages</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. Voici quelques témoignages de personnes qui nous font confiance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`card-testimonial-${i}`}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-md transition-shadow">
                <Quote className="w-8 h-8 text-brand-blue/30 mb-3 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 italic">"{t.text}"</p>
                <div className="mt-auto">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-lime text-brand-lime" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${i}`}>{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [customQuestion, setCustomQuestion] = useState("");
  const [customName, setCustomName] = useState("");
  const [sent, setSent] = useState(false);

  function handleCustomQuestion(e: React.FormEvent) {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    const body = `Question posée via la FAQ ScintiNet\n\nNom : ${customName || "Non précisé"}\nQuestion : ${customQuestion}`;
    const subject = `Question FAQ ScintiNet – ${customName || "Visiteur"}`;
    const mailtoUrl = `mailto:tsillery@ymail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setCustomQuestion("");
    setCustomName("");
    setTimeout(() => setSent(false), 5000);
  }

  const faqs = [
    {
      q: "Est-ce que vous avez un horaire fixe ?",
      a: "Non, nous nous adaptons entièrement à votre emploi du temps. Nous intervenons du lundi au samedi, de 8h à 18h, selon vos disponibilités. Lors de votre premier contact, nous convenons ensemble d'un horaire qui vous convient.",
    },
    {
      q: "Est-ce que vous avez votre propre matériel ?",
      a: "Oui, nos équipes se déplacent avec tout le matériel professionnel et les produits nécessaires à chaque type d'intervention. Vous n'avez absolument rien à prévoir ou à fournir.",
    },
    {
      q: "Est-ce que vous êtes assurés ?",
      a: "Absolument. ScintiNet détient une assurance responsabilité civile complète qui couvre tous les dommages matériels ou incidents pouvant survenir lors de nos interventions chez vous.",
    },
    {
      q: "Est-ce que vos produits sont sécuritaires pour les enfants et les animaux ?",
      a: "Oui, nous utilisons exclusivement des produits certifiés écologiques, biodégradables et sans danger pour les enfants, les animaux de compagnie et les personnes sensibles ou allergiques.",
    },
    {
      q: "Puis-je annuler ou reporter un rendez-vous ?",
      a: "Oui, vous pouvez annuler ou reporter gratuitement jusqu'à 24h avant l'intervention. Au-delà de ce délai, des frais d'annulation peuvent s'appliquer selon les conditions de votre contrat.",
    },
    {
      q: "Comment se passe la facturation ?",
      a: "Nous vous remettons une facture détaillée après chaque intervention. Nous acceptons plusieurs modes de paiement : virement bancaire, chèque ou paiement en ligne. Aucune mauvaise surprise — tout est précisé dans le devis dès le départ.",
    },
    {
      q: "Offrez-vous des contrats d'entretien récurrents ?",
      a: "Oui ! Nous proposons des forfaits hebdomadaires, bimensuels et mensuels à tarif préférentiel. Un contrat d'entretien régulier vous garantit une priorité dans notre calendrier et des économies sur le long terme.",
    },
    {
      q: "Intervenez-vous pour les copropriétés et immeubles à logements ?",
      a: "Absolument. Nous offrons un service spécialisé pour les immeubles résidentiels, incluant l'entretien des espaces communs, des couloirs, des entrées et des stationnements.",
    },
    {
      q: "Quels sont vos horaires de disponibilité ?",
      a: "Nous sommes disponibles du lundi au vendredi de 8h à 18h, et le samedi de 9h à 16h. Pour les demandes urgentes, vous pouvez nous joindre directement par téléphone ou via WhatsApp en dehors des heures régulières.",
    },
    {
      q: "Quel matériel utilisez-vous ?",
      a: "Nous utilisons du matériel professionnel (aspirateurs industriels, équipements de lavage haute performance, outils spécialisés pour vitres et véhicules) ainsi que des produits de nettoyage certifiés écologiques. Tout le matériel est fourni par notre équipe — vous n'avez rien à prévoir.",
    },
    {
      q: "Y a-t-il des frais supplémentaires à prévoir ?",
      a: "Le devis que nous vous remettons est complet et sans surprise. Des frais additionnels peuvent s'appliquer uniquement en cas de dépassement important du périmètre convenu (ex: état très dégradé non signalé, superficie différente de celle indiquée). Tout écart vous sera communiqué avant de procéder.",
    },
    {
      q: "Quelle est la durée typique d'une intervention ?",
      a: "La durée varie selon le type et l'ampleur du service : un nettoyage résidentiel standard prend entre 2 et 4 heures, le lavage de vitres entre 1 et 3 heures, et l'entretien d'espaces communs entre 1 et 2 heures. La durée précise est estimée lors de l'établissement du devis.",
    },
    {
      q: "Êtes-vous disponibles pour des interventions d'urgence ?",
      a: "Nous acceptons les urgences mineures les fins de semaine (samedi et dimanche). Contactez-nous directement par téléphone au +1 (418) 953-3284 ou via WhatsApp pour évaluer la situation. Les urgences en semaine sont traitées selon disponibilité.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 scroll-mt-24" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-faq">FAQ</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-faq-title">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Vous avez des questions ? Nous avons les réponses. N'hésitez pas à nous contacter si vous n'avez pas trouvé ce que vous cherchez.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-testid={`faq-item-${i}`}
            >
              <Card className="overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-testid={`button-faq-${i}`}
                >
                  <span className="font-medium text-sm sm:text-base">{faq.q}</span>
                  <span className="flex-shrink-0">
                    {openIndex === i
                      ? <Minus className="w-4 h-4 text-brand-blue" />
                      : <Plus className="w-4 h-4 text-brand-blue" />
                    }
                  </span>
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                    data-testid={`faq-answer-${i}`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed border-t pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
          data-testid="card-custom-question"
        >
          <Card className="p-6 border-brand-blue/20 bg-brand-blue/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Vous ne trouvez pas votre réponse ?</h3>
                <p className="text-xs text-muted-foreground">Posez-nous votre question, nous vous répondrons rapidement.</p>
              </div>
            </div>

            {sent ? (
              <div className="flex items-center gap-2 mt-4 p-3 rounded-md bg-brand-green/10 text-brand-green text-sm font-medium" data-testid="faq-sent-confirm">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Votre question a été envoyée ! Nous vous répondrons bientôt.
              </div>
            ) : (
              <form onSubmit={handleCustomQuestion} className="mt-4 space-y-3" data-testid="form-custom-question">
                <Input
                  placeholder="Votre prénom (optionnel)"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  data-testid="input-faq-name"
                />
                <Textarea
                  placeholder="Décrivez votre question en détail *"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  required
                  rows={3}
                  data-testid="input-faq-question"
                />
                <Button type="submit" className="w-full sm:w-auto" data-testid="button-faq-submit">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma question
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Message reçu via le site ScintiNet

Nom : ${formData.name}
Téléphone : ${formData.phone}
Sujet : ${formData.subject || "Non précisé"}

Message :
${formData.message}`;

    const subject = `Message ScintiNet – ${formData.name}`;
    const mailtoUrl = `mailto:tsillery@ymail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 scroll-mt-24" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-contact">Contact</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter pour toute question ou demande de devis gratuit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6" data-testid="card-contact-info">
              <h3 className="font-semibold text-lg mb-6">Nos coordonnées</h3>
              <div className="space-y-5">
                <a href="tel:+14189533284" className="flex items-start gap-4" data-testid="link-phone-contact">
                  <div className="w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="font-medium">+1 (418) 953-3284</p>
                  </div>
                </a>
                <a href="mailto:contact@scintinet.com" className="flex items-start gap-4" data-testid="link-email-contact">
                  <div className="w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">contact@scintinet.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4" data-testid="text-address">
                  <div className="w-10 h-10 rounded-md bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adresse</p>
                    <p className="font-medium">12 Rue Boucher, App. 8</p>
                    <p className="text-sm text-muted-foreground">Québec (QC) · NEQ : 3382027319</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-3">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors" data-testid="link-social-fb">
                <SiFacebook className="w-4 h-4" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors" data-testid="link-social-ig">
                <SiInstagram className="w-4 h-4" />
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors" data-testid="link-social-yt">
                <SiYoutube className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-[#25D366]/15 flex items-center justify-center hover:bg-[#25D366]/25 transition-colors" data-testid="link-social-wa">
                <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-6" data-testid="card-contact-form">
              <h3 className="font-semibold text-lg mb-6">Demandez un devis gratuit</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Nom complet</label>
                    <Input
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Téléphone</label>
                    <Input
                      placeholder="+1 (xxx) xxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Sujet</label>
                    <Input
                      placeholder="Objet de votre demande"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      data-testid="input-subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Décrivez vos besoins..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto" data-testid="button-submit-contact">
                  <Send className="mr-2 w-4 h-4" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const services = [
    "Entretien des immeubles résidentiels",
    "Nettoyage résidentiel",
    "Service pour les aînés",
    "Lavage de vitres",
    "Lavage de voiture à domicile",
  ];

  const links = [
    { label: "À propos", href: "#apropos" },
    { label: "Tarifs et abonnement", href: "#tarifs" },
    { label: "Réalisations", href: "#realisations" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ];

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#accueil" className="mb-4 inline-block">
              <ScintiNetLogo height={36} dark />
            </a>
            <p className="text-sm opacity-70 leading-relaxed mt-3">
              ScintiNet offre des services complets d'entretien résidentiel au Québec,
              pour des espaces propres, sécuritaires et agréables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm opacity-70" data-testid={`link-footer-service-${s.slice(0, 8)}`}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm opacity-70" data-testid={`link-footer-${l.label.slice(0, 8)}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+14189533284" className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="w-4 h-4" />
                +1 (418) 953-3284
              </a>
              <a href="mailto:contact@scintinet.com" className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="w-4 h-4" />
                contact@scintinet.com
              </a>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4" />
                12 Rue Boucher, App. 8, Québec (QC)
              </div>
              <div className="text-xs opacity-50 pl-6">NEQ : 3382027319</div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100"><SiFacebook className="w-4 h-4" /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100"><SiInstagram className="w-4 h-4" /></a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100"><SiYoutube className="w-4 h-4" /></a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100"><SiWhatsapp className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm opacity-50">
          <p data-testid="text-copyright">© 2026 ScintiNet. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="/politique-confidentialite" className="hover:opacity-100 underline underline-offset-2">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SeniorsSection() {
  const services = [
    {
      id: "aide-domicile",
      img: seniorAideDomicileImg,
      icon: Home,
      title: "Service d'aide à domicile",
      desc: "Un soutien personnalisé pour que votre proche reste chez lui dans le confort et la sécurité, entouré d'une aide professionnelle et bienveillante.",
      color: "brand-blue",
    },
    {
      id: "accompagnement",
      img: seniorAccompagnementImg,
      icon: Users,
      title: "Accompagnement des aînés",
      desc: "Sorties, rendez-vous médicaux, promenades et activités sociales pour briser l'isolement et maintenir une vie épanouissante.",
      color: "brand-green",
    },
    {
      id: "assistance",
      img: seniorAssistanceImg,
      icon: Heart,
      title: "Assistance aux personnes âgées",
      desc: "Une présence rassurante et attentive pour assister vos proches dans leurs besoins quotidiens avec patience, douceur et respect.",
      color: "brand-blue",
    },
    {
      id: "soutien-quotidien",
      img: seniorSoutienQuotidienImg,
      icon: Clock,
      title: "Soutien quotidien à domicile",
      desc: "Repas, hygiène, organisation de la journée — nous adaptons notre aide à la routine de chaque personne pour un quotidien serein.",
      color: "brand-green",
    },
    {
      id: "maintien-domicile",
      img: seniorMaintienDomicileImg,
      icon: Shield,
      title: "Services de maintien à domicile",
      desc: "Permettre à vos proches de rester chez eux le plus longtemps possible dans un environnement sécuritaire, propre et adapté.",
      color: "brand-blue",
    },
    {
      id: "aide-domestique",
      img: seniorAideDomestiqueImg,
      icon: Wrench,
      title: "Accompagnement et aide domestique",
      desc: "Ménage léger, lessive, rangement et cuisine — nos intervenants assurent les tâches du quotidien pour un cadre de vie agréable.",
      color: "brand-green",
    },
    {
      id: "perte-autonomie",
      img: seniorPerteAutonomieImg,
      icon: HandHeart,
      title: "Services aux aînés en perte d'autonomie",
      desc: "Un accompagnement doux et professionnel pour les personnes à mobilité réduite, au rythme qui leur convient, avec toute la dignité qu'elles méritent.",
      color: "brand-blue",
    },
  ];

  return (
    <section id="aines-soutien" className="py-20 lg:py-28 bg-muted/20 scroll-mt-24" data-testid="section-seniors">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-brand-blue border-brand-blue/30" data-testid="badge-seniors">
            <HandHeart className="w-3.5 h-3.5 mr-2 text-brand-blue" />
            Services spécialisés
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-seniors-title">
            Aînés &amp; Soutien{" "}
            <span className="text-brand-blue">à domicile</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed" data-testid="text-seniors-desc">
            ScintiNet propose une gamme complète de services d'aide et d'accompagnement pour les personnes âgées et en perte d'autonomie. Parce que chaque aîné mérite respect, dignité et un soutien à la hauteur de ses besoins.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`card-senior-${s.id}`}
            >
              <Card className="overflow-hidden h-full group border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-9 h-9 rounded-md bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-base mb-2 leading-snug" data-testid={`text-senior-title-${s.id}`}>
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1" data-testid={`text-senior-desc-${s.id}`}>
                    {s.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-dark p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
          data-testid="cta-seniors"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Vous avez un proche qui a besoin d'aide ?
            </h3>
            <p className="text-white/80 max-w-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins. Nous élaborons ensemble un plan d'accompagnement personnalisé et sans engagement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button size="lg" variant="secondary" asChild data-testid="button-appel-seniors">
              <a href="tel:+14189533284">
                <PhoneCall className="mr-2 w-4 h-4" />
                Nous appeler
              </a>
            </Button>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90" asChild data-testid="button-devis-seniors">
              <a href="#contact">
                <MessageCircle className="mr-2 w-4 h-4" />
                Nous écrire
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SeniorsSection />
      <WhyUsSection />
      <WaveDivider color="#0097CE" />
      <StatsSection />
      <WaveDividerTop color="#0097CE" />
      <HowItWorksSection />
      <PricingSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <SectorsSection />
      <WaveDivider color="#0097CE" />
      <CTASection />
      <WaveDividerTop color="#0097CE" />
      <ContactSection />
      <Footer />
    </div>
  );
}
