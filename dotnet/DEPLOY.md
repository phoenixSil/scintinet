# Guide de déploiement ScintiNet — Azure Web App + GitHub Actions

## Architecture
- **Frontend/Backend** : ASP.NET Core 8 Razor Pages
- **Email** : Resend API (HttpClient natif — aucun NuGet externe)
- **CI/CD** : GitHub Actions → Azure Web App
- **Domaine** : www.scintinet.com

---

## 1. Prérequis Azure

### Créer l'Azure Web App
1. Portail Azure → **Créer une ressource** → **Web App**
2. Paramètres :
   - **Nom** : `scintinet-az-web-app-prod`
   - **Pile d'exécution** : `.NET 8 (LTS)`
   - **OS** : Linux (recommandé) ou Windows
   - **Plan** : Basic B1 (ou supérieur)
   - **Région** : Canada Central ou East US

### Configurer le domaine personnalisé
1. Azure Portal → votre Web App → **Domaines personnalisés**
2. Ajouter `www.scintinet.com`
3. Chez votre registraire DNS, ajouter :
   ```
   www  CNAME  scintinet-az-web-app-prod.azurewebsites.net
   ```
4. Activer **TLS/SSL gratuit** via Azure App Service Managed Certificate

---

## 2. Variables d'environnement Azure

Dans Azure Portal → votre Web App → **Configuration** → **Paramètres d'application** :

| Nom | Valeur |
|-----|--------|
| `Resend__ApiKey` | Votre clé API Resend (commence par `re_`) |
| `Resend__FromEmail` | `noreply@scintinet.com` |
| `Resend__AdminEmail` | `tsillery@ymail.com` |
| `ASPNETCORE_ENVIRONMENT` | `Production` |

> **Important** : Le double underscore `__` est la convention ASP.NET Core pour les clés hiérarchiques dans Azure App Settings.

---

## 3. Configurer Resend (email transactionnel)

### Compte et clé API (déjà fait)
- Compte Resend créé ✅
- Clé API `re_...` disponible ✅

### Vérifier le domaine expéditeur
Pour pouvoir envoyer depuis `noreply@scintinet.com` :

1. Resend → **Domains** → **Add Domain** → entrer `scintinet.com`
2. Resend vous donnera 3 enregistrements DNS à ajouter chez votre registraire :
   ```
   Type    Nom                          Valeur
   TXT     resend._domainkey.scintinet.com   v=DKIM1; ...
   TXT     @                            v=spf1 include:resend.com ~all
   MX      bounce.scintinet.com         feedback-smtp.us-east-1.amazonses.com
   ```
3. Cliquer **Verify** dans Resend — attendre quelques minutes

> Sans vérification de domaine, Resend enverra depuis `onboarding@resend.dev` (limité à votre adresse email de test)

---

## 4. Configurer le pipeline GitHub Actions

### A. Obtenir le Publish Profile Azure
1. Azure Portal → votre Web App `scintinet-az-web-app-prod`
2. **Vue d'ensemble** → **Télécharger le profil de publication**
3. Ouvrir le fichier `.PublishSettings` → copier tout le contenu XML

### B. Ajouter les secrets GitHub
Aller sur GitHub → repo `phoenixSil/scintinet` → **Settings** → **Secrets and variables** → **Actions**

| Nom du secret | Valeur |
|---------------|--------|
| `AZURE_WEBAPP_PUBLISH_PROFILE` | Contenu XML du profil de publication |
| `AZURE_RESOURCE_GROUP` | Nom de votre resource group Azure (ex: `scintinet-rg`) |
| `RESEND_API_KEY` | Votre clé Resend (commence par `re_`) |

### C. Déclenchement automatique
Le pipeline se déclenche automatiquement à chaque `git push` sur `main` dans le dossier `dotnet/`.

---

## 5. Flux CI/CD complet

```
git push → main (dossier dotnet/)
     │
     ▼
GitHub Actions
     │
     ├─ Job 1: Build & Test
     │   ├─ dotnet restore
     │   ├─ dotnet build -c Release
     │   ├─ dotnet test (non-bloquant)
     │   └─ dotnet publish → artifact
     │
     └─ Job 2: Deploy (si main uniquement)
         ├─ Download artifact
         ├─ azure/webapps-deploy → scintinet-az-web-app-prod
         └─ az webapp config appsettings set (Resend__ApiKey, etc.)
```

---

## 6. Secrets à ne JAMAIS committer

- `Resend__ApiKey` / `RESEND_API_KEY`
- Tout fichier `appsettings.Production.json` contenant des secrets

Ces valeurs doivent uniquement exister dans :
- **Azure App Configuration** (paramètres d'application)
- **GitHub Secrets** (pour le CI/CD)

---

## 7. Commandes utiles en local

```bash
# Lancer en développement
cd dotnet/src/ScintiNet.Web
dotnet run

# Build release
cd dotnet
dotnet build ScintiNet.sln -c Release

# Publier manuellement
dotnet publish src/ScintiNet.Web/ScintiNet.Web.csproj -c Release -o publish

# Créer le zip de déploiement manuel
cd publish && zip -r ../scintinet-azure.zip .
```

---

## 8. Checklist de mise en production

- [ ] Azure Web App `scintinet-az-web-app-prod` créée
- [ ] Domaine `www.scintinet.com` configuré + CNAME DNS
- [ ] SSL activé sur Azure
- [ ] Paramètres d'application Azure configurés (`Resend__ApiKey`, etc.)
- [ ] Domaine `scintinet.com` vérifié dans Resend
- [ ] Secret `AZURE_WEBAPP_PUBLISH_PROFILE` ajouté dans GitHub
- [ ] Secret `AZURE_RESOURCE_GROUP` ajouté dans GitHub
- [ ] Secret `RESEND_API_KEY` ajouté dans GitHub
- [ ] Premier `git push` → vérifier le pipeline dans l'onglet Actions de GitHub
- [ ] Tester le formulaire de contact en production
