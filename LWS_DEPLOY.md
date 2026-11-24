# LWS — Deployment Guide for MAASH
# ==================================
# Ce fichier explique comment déployer le site MAASH sur LWS.
#
# 📁 Fichiers à utiliser:
#   LWS_NGINX.conf     → Configuration Nginx (serveur web)
#   LWS_APACHE.conf    → Configuration Apache (serveur web)
#   LWS_HTACCESS       → .htaccess pour Apache (répertoire racine)
#   LWS_EXPRESS.js     → Serveur Node.js/Express
#
# 🚀 Étapes de déploiement :
#
# 1. Build de production
#    npm run build
#    → Génère le dossier dist/
#
# 2. Copier sur LWS
#    scp -r dist/ user@lws.tk:/var/www/maash-site/
#
# 3. Configurer le serveur web
#    • Nginx    → Utiliser LWS_NGINX.conf
#    • Apache   → Utiliser LWS_APACHE.conf ou LWS_HTACCESS
#    • Node.js  → Utiliser LWS_EXPRESS.js
#
# 4. Vérifier la configuration
#    • Nginx    : sudo nginx -t && sudo systemctl reload nginx
#    • Apache   : sudo apachectl configtest && sudo systemctl reload apache2
#    • Node.js  : node LWS_EXPRESS.js
#
# 🌐 URL d'accès
#    https://maashprosoc.cd/
#
# 📦 Fichiers inclus dans le build :
#    • index.html (+ 10 vues)
#    • 10 fichiers JS (chaque vue)
#    • 1 fichier CSS global
#    • 7 images hero
#    • APK publié : prosoc-prod-24.11.apk (seule version dans public/apk/)
#    • robots.txt, sitemap.xml, logo.jpg
#
# 📝 Notes :
#    • Le code APK pointe vers /apk/prosoc-prod-24.11.apk
#    • Apache : cache long uniquement pour les bundles JS/CSS avec empreinte.
#      HTML, images et APK à nom stable sont revalidés (Cache-Control: no-cache).
#    • Le serveur gère les URLs virtuelles (Vue Router)
#

# Exemple de variables d'environnement pour Node.js/Express :
# ------------------------------------
# PORT=3000
# NODE_ENV=production
#
# Exemple pour Nginx :
# ------------------------------------
# server_name maashprosoc.cd;
# root /var/www/maash-site;

## Configuration Apache corrigée

Choisir **une seule** des deux méthodes :

- **Hébergement mutualisé** : après `npm run build`, copier `LWS_HTACCESS`
  sous le nom `.htaccess` à la racine du dossier `dist`, puis transférer le
  **contenu** de `dist` (fichier caché inclus) dans la racine publique LWS.
  Le modèle situé à la racine du projet n'est pas copié automatiquement par Vite.
  L'hébergeur doit autoriser les directives utilisées (`FileInfo`, `Options`
  et, si `mod_expires` est chargé, `Indexes` pour `ExpiresActive`).
- **Serveur administré** : installer `LWS_APACHE.conf` comme VirtualHost et
  adapter `DocumentRoot` ainsi que le chemin du bloc `Directory` ensemble.
  Cette variante utilise `AllowOverride None` : aucun `.htaccess` n'est nécessaire.

Modules requis : `mod_rewrite` et `mod_headers`. Compression optionnelle via
`mod_deflate`. Les exemples écoutent sur le port 80 : conserver la configuration
HTTPS et les certificats gérés par l'hébergement ; ils ne sont pas configurés ici.

### Politique de cache Apache

| Ressource | Cache-Control attendu |
| --- | --- |
| HTML, y compris les routes SPA réécrites | `no-cache` |
| Images, APK à nom stable, robots, sitemap | `no-cache` |
| JS/CSS avec empreinte, par exemple `index-DiwrgTda.js` | `public, max-age=31536000, immutable` |

`no-cache` autorise le stockage mais impose une revalidation avant réutilisation.
Le cache long repose sur le nommage Vite par défaut : si ce nommage change,
adapter la règle `FilesMatch`. Les réponses 500, 502, 503 et 504 utilisent les
messages natifs Apache au lieu de servir l'application comme page d'erreur.

### Vérifications après installation

Sur un serveur administré, exécuter `apachectl configtest` avant rechargement.
Ce contrôle ne suffit pas à valider un `.htaccess` : sur un hébergement mutualisé,
effectuer aussi de vraies requêtes et consulter les journaux d'erreur LWS.

```sh
curl -I https://maashprosoc.cd/
curl -I https://maashprosoc.cd/presentation
curl -I https://maashprosoc.cd/logo.jpg
curl -I https://maashprosoc.cd/apk/prosoc-prod-24.11.apk
```

Vérifier le statut, `Cache-Control` et le type MIME de l'APK. Tester également
une URL JS/CSS réelle relevée dans le `dist/index.html` généré : elle seule doit
recevoir le cache immuable d'un an. Répéter ces contrôles après un redéploiement.

Les anciens en-têtes de cache déjà stockés chez les visiteurs ne peuvent pas
être révoqués par cette modification : si nécessaire, publier l'APK ou l'image
sous un nouveau nom et mettre à jour ses références. Purger aussi le cache CDN
si l'hébergement en utilise un.

Cette correction concerne Apache uniquement ; `LWS_NGINX.conf` n'est pas aligné
sur cette politique et nécessite une correction distincte si Nginx est utilisé.
