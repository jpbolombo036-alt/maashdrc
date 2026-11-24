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
| `/activites`    | Les six activités (consultation, accompagnement, échanges, soutien…)                   |
| `/contact`      | Adresse, téléphones, e-mails, horaires, couverture                                     |
| `/recrutement`  | Postes ouverts et formulaire de candidature (Web3Forms, CV par WhatsApp)              |

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
- **Application Android** : l'APK est servi depuis `public/apk/prosoc-prod-24.11.apk`
  (URL publique : `/apk/prosoc-prod-24.11.apk`, clé `maash.apkUrl` dans les catalogues ;
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
  en cas d'erreur : message traduit + renvoi WhatsApp. Entrées : footer (Navigation) + page
  Contact (« Nous recrutons »). Anti-spam : honeypot, sans faux succès ni délai minimal
  imposé aux candidats. Succès uniquement après confirmation de l'API ; délai maximal
  de réponse : 20 secondes. En cas de dépassement, vérifier auprès de MAASH avant
  de réessayer (une interruption ne garantit pas l'annulation côté destinataire).
  Les postes sont transmis avec un code stable et leur libellé traduit ; le consentement
  et son texte sont inclus. Les champs ont des limites de longueur côté interface.
  Ces contrôles locaux ne remplacent pas les protections du service destinataire.

## Tests de régression

Sur la page Recrutement, cliquer sur une carte de poste amène au formulaire avec
le poste présélectionné et le focus dans le champ Nom. Les autres saisies sont
conservées ; les cartes sont désactivées pendant un envoi. Le même parcours est
accessible au clavier avec Entrée ou Espace.

`npm test` utilise le runner natif Node.js (Node 18 ou supérieur), sans envoi réel.
Les tests isolent la logique des scripts Vue avec des dépendances simulées ; ils ne
remplacent pas une vérification du rendu et de la navigation dans un navigateur.

`npm run test:browser` démarre un serveur Vite local et utilise Chromium via
Playwright (déjà déclaré dans les dépendances). Installer le navigateur au besoin
avec `npx playwright install chromium`. Ce test vérifie les six cartes Activités
dans les quatre langues, ainsi que les modales standard/VIP : focus initial,
tabulation dans les deux sens, fermeture, retour au déclencheur, traduction
réactive et rétablissement du défilement après navigation. Les requêtes externes
sont bloquées pendant ce test.

Les textes des cartes Activités sont dans `ui.activites.cards` des catalogues.
Les nouvelles traductions, notamment en lingala, restent à faire relire par MAASH.
Les hôpitaux utilisent un dialogue HTML natif (`showModal`) : l'arrière-plan est
inerte pendant l'ouverture, et le focus est rendu à la carte à la fermeture.
Ce comportement requiert un navigateur prenant en charge `<dialog>` et `showModal`.
