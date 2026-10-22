# MAASH — Site institutionnel (Vue 3)

Site vitrine de la **MAASH — Mutuelle Autorisée d’Assistance Socio-Humanitaire**, créé à partir
des informations importantes du questionnaire de collecte (version préremplie du 8 octobre 2026).
Design vert et blanc, responsive, en français.

## Pages

| Route           | Contenu                                                                                |
| --------------- | -------------------------------------------------------------------------------------- |
| `/`             | Accueil : slogan, chiffres clés, aperçu des branches, présentation PROSOC              |
| `/presentation` | Raison d’être, missions (RII), vision, principes, zones d’intervention                 |
| `/gouvernance`  | Les 12 blocs organisationnels (AG, CA, CE, CG, SG, CCA, départements…)                 |
| `/services`     | Les 4 branches et les prestations A à J (Pensions, Communautaire, Santé, Spécialisée)  |
| `/prosoc`       | Programme PROSOC, application Prosoc, rôles utilisateurs, protection des données       |
| `/adhesion`     | Formules et tarifs (Solo à F6), documents, personnes à charge, modalités de paiement   |
| `/contact`      | Adresse, téléphones, e-mails, horaires, couverture                                     |

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production
npm run preview  # prévisualisation du build
```

## Structure

```
maash-site/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js
    ├── App.vue                 # layout (header + router-view + footer)
    ├── styles/main.css         # design system vert & blanc
    ├── i18n/
    │   ├── index.js             # configuration vue-i18n + langue en localStorage
    │   └── useContent.js        # slices de contenus réactives selon la langue
    ├── locales/                 # catalogues de traduction (contenus + interface)
    │   ├── fr.js                # source unique de vérité
    │   ├── ln.js                # lingala (traduction, à relire par MAASH)
    │   ├── en.js                # anglais (traduction machine, à relire par MAASH)
    │   └── es.js                # espagnol (traduction machine, à relire par MAASH)
    ├── router/index.js         # routes Vue Router + meta SEO par route
    ├── components/
    │   ├── AppHeader.vue       # navigation responsive sticky
    │   └── AppFooter.vue
    └── views/                  # une vue par page
```

## Notes

- **Source unique de vérité** : `src/locales/fr.js` (contenus institutionnels **et** textes
  d'interface). Toute mise à jour des informations se fait ici et se propage automatiquement
  partout. `en.js` et `es.js` en reprennent exactement la structure.
- **Langues (vue-i18n)** : français (défaut), **lingala**, anglais, espagnol — choix dans le
  bouton 🌐 du header, mémorisé en `localStorage` (aucun cookie, aucun rechargement, changement
  réactif instantané). Pour ajouter une langue : créer `src/locales/xx.js` (copier `fr.js` et
  traduire), l'enregistrer dans `src/i18n/index.js` (`messages` + `AVAILABLE_LOCALES`), dans
  `src/i18n/useContent.js` (`catalogs`) et dans `langOptions` de `AppHeader.vue`. L'ancien
  widget Google Translate (arrêté par Google le 1er octobre 2026) a été retiré.
  Les traductions lingala / anglais / espagnol sont d'apport : **à faire relire par MAASH**.
- Les informations marquées « à compléter » dans le questionnaire (e-mail officiel confirmé,
  liste des hôpitaux, tarifs VIP, cartographie, réseaux sociaux…) ne sont pas inventées :
  le site les signale comme telles.
- Le logo officiel MAASH (sceau « MAASH — Mutuelle Autorisée d'Assistance Socio-Humanitaire /
  PROSOC-RDC ») est utilisé tel quel : `maash-site/public/logo.jpg`, extrait de l'annexe 5 du
  questionnaire (source : page de garde du RII). Favicon inclus.
  Pour le remplacer par une version vectorielle (SVG), déposer le fichier et mettre à jour
  les références `/logo.jpg` dans `AppHeader.vue`, `AppFooter.vue` et `index.html`.
- Couleurs : palette verte `#064e3b → #10b981` sur fond blanc, définies en variables CSS
  dans `src/styles/main.css`.
- Le domaine prévu est `maashprosoc.cd` (réservation à confirmer par MAASH).
- **SEO** : titres et meta descriptions par route (`src/router/index.js`, mis à jour à chaque
  navigation), balises Open Graph / Twitter Card (`index.html`), `public/robots.txt` et
  `public/sitemap.xml`. Les URL du sitemap utilisent `https://maashprosoc.cd` : à ajuster si le
  domaine final diffère. Toute adresse inconnue affiche la page 404 personnalisée
  (`src/views/NotFoundView.vue`, en `noindex`).
- **Application Android** : l'APK est servi depuis `public/apk/prod-prosoc-20.10.apk`
  (URL publique : `/apk/prod-prosoc-20.10.apk`, clé `maash.apkUrl` dans les catalogues ;
  attribut `download`). Boutons : accueil (hero), page PROSOC, footer.
  Pour publier une nouvelle version : remplacer le fichier dans `public/apk/` (et le renvoyer
  sous le même nom si l'URL doit rester stable).
- **Hôpitaux (catégorie standard)** : la liste s'affiche dans une modale ouverte en cliquant sur
  la carte *Catégorie standard* (prestation H) de la branche Soins de santé — données dans
  `hopitaux.liste` des 4 catalogues (noms propres identiques en toutes langues, ajout = 1 ligne),
  avec lien « Itinéraire » Google Maps automatique et mention « d'autres établissements à venir ».
  Le document source mentionne un tarif « 10 $ pour les fonctionnaires de l'État » : **non affiché,
  en attente de confirmation MAASH**.
- **Formulaire de recrutement** (`/recrutement`) : envoi des candidatures par e-mail via
  **Web3Forms** (sans back-end). Le CV n'est **pas** téléversé dans le formulaire — le
  téléversement de fichiers est une option **payante** (Pro) chez Web3Forms : le candidat l'envoie
  **par WhatsApp** après soumission (bouton sur le formulaire + rappel dans la confirmation).
  Activation : créer un compte sur https://web3forms.com avec l'e-mail destinataire (ex.
  secretariatmaash@gmail.com), ajouter la clé d'accès dans `.env` (ignoré par git) :
  `VITE_WEB3FORMS_KEY=votre-cle-ici`, puis redémarrer `npm run dev` / redéployer. Sans clé ou
  en cas d'erreur : message détaillé + renvoi WhatsApp. Entrées : footer (Navigation) + page
  Contact (« Nous recrutons »). Anti-spam : honeypot + piège temporel (3 s).
