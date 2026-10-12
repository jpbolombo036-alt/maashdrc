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
    ├── data/maashData.js       # source unique des contenus (questionnaire MAASH)
    ├── router/index.js         # routes Vue Router
    ├── components/
    │   ├── AppHeader.vue       # navigation responsive sticky
    │   └── AppFooter.vue
    └── views/                  # une vue par page
```

## Notes

- **Source unique de vérité** : `src/data/maashData.js`. Toute mise à jour des informations
  institutionnelles se fait ici et se propage automatiquement partout.
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
