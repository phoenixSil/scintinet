import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import RendezVousPage from "@/pages/rendez-vous";
import DevisPage from "@/pages/devis";
import PolitiqueConfidentialitePage from "@/pages/politique-confidentialite";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/rendez-vous" component={RendezVousPage} />
      <Route path="/devis" component={DevisPage} />
      <Route path="/politique-confidentialite" component={PolitiqueConfidentialitePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
