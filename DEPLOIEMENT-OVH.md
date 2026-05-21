# Guide de déploiement ScintiNet sur OVH VPS

## Prérequis

- Un **VPS OVH** (Value, Essential ou Comfort) sous Ubuntu 22.04
- Accès SSH au serveur
- Un nom de domaine pointant vers l'IP de votre VPS (ex: scintinet.com)

---

## Étape 1 — Connexion au VPS

```bash
ssh ubuntu@VOTRE-IP-OVH
```

---

## Étape 2 — Installation de Node.js et PM2

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Vérifier l'installation
node --version   # doit afficher v20.x.x
npm --version

# Installer PM2 (gestionnaire de processus)
sudo npm install -g pm2
```

---

## Étape 3 — Installer Nginx (reverse proxy)

```bash
sudo apt install -y nginx

# Activer au démarrage
sudo systemctl enable nginx
sudo systemctl start nginx
```

---

## Étape 4 — Transférer les fichiers sur le VPS

**Sur votre machine locale**, compilez d'abord le projet :

```bash
npm run build
```

Ensuite, transférez via SFTP (FileZilla, Cyberduck, ou ligne de commande) :

```
Dossiers et fichiers à transférer vers /home/ubuntu/scintinet/ :
├── dist/               ← le site compilé
├── package.json
├── package-lock.json
├── ecosystem.config.cjs
└── .env                ← votre fichier .env (copié depuis .env.example)
```

Ou via rsync en ligne de commande :
```bash
rsync -avz --exclude='node_modules' --exclude='.git' \
  dist/ package.json package-lock.json ecosystem.config.cjs \
  ubuntu@VOTRE-IP-OVH:/home/ubuntu/scintinet/
```

---

## Étape 5 — Configurer les variables d'environnement

Sur le VPS, dans le dossier `/home/ubuntu/scintinet/` :

```bash
# Copier le fichier exemple
cp .env.example .env

# Éditer avec vos vraies valeurs
nano .env
```

Remplissez :
- `SMTP_USER` et `SMTP_PASS` avec vos identifiants email
- `SESSION_SECRET` avec une chaîne aléatoire

---

## Étape 6 — Installer les dépendances et démarrer

```bash
cd /home/ubuntu/scintinet

# Installer uniquement les dépendances de production
npm install --omit=dev

# Démarrer avec PM2
pm2 start ecosystem.config.cjs

# Activer le démarrage automatique au reboot
pm2 startup
pm2 save
```

Vérifier que le site fonctionne :
```bash
pm2 status
pm2 logs scintinet
```

---

## Étape 7 — Configurer Nginx

```bash
sudo nano /etc/nginx/sites-available/scintinet
```

Collez cette configuration (remplacez `scintinet.com`) :

```nginx
server {
    listen 80;
    server_name scintinet.com www.scintinet.com;

    # Redirection vers l'application Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/scintinet /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Étape 8 — Activer le HTTPS (certificat SSL gratuit)

```bash
# Installer Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtenir le certificat (remplacez par votre domaine)
sudo certbot --nginx -d scintinet.com -d www.scintinet.com

# Le certificat se renouvelle automatiquement
```

---

## Étape 9 — Configurer le DNS chez OVH

Dans votre espace client OVH → Zone DNS de votre domaine :

| Type | Nom | Valeur |
|------|-----|--------|
| A    | @   | VOTRE-IP-OVH |
| A    | www | VOTRE-IP-OVH |

Attendre 1 à 24h pour la propagation DNS.

---

## Commandes utiles PM2

```bash
pm2 status          # État de l'application
pm2 logs scintinet  # Voir les logs en temps réel
pm2 restart scintinet  # Redémarrer après une mise à jour
pm2 stop scintinet     # Arrêter
```

## Mise à jour du site

```bash
# Sur votre machine locale
npm run build

# Transférer les nouveaux fichiers
rsync -avz dist/ ubuntu@VOTRE-IP-OVH:/home/ubuntu/scintinet/dist/

# Sur le VPS - redémarrer
pm2 restart scintinet
```

---

## Configuration email OVH Mail

Si vous utilisez une adresse email OVH (ex: contact@scintinet.com) :

Dans votre `.env`, utilisez ces paramètres SMTP OVH :
```
SMTP_USER=contact@scintinet.com
SMTP_PASS=votre-mot-de-passe-email
```

Et dans `server/routes.ts`, modifiez le transporteur :
```javascript
host: "ssl0.ovh.net",
port: 465,
secure: true,
```

---

## Support

En cas de problème, consultez les logs :
```bash
pm2 logs scintinet --lines 50
sudo journalctl -u nginx -n 50
```
