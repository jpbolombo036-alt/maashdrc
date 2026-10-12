/**
 * Contenus institutionnels MAASH — source unique de vérité.
 * Extraits du questionnaire de collecte (version préremplie du 8 octobre 2026).
 * Les champs marqués « à compléter » restent volontairement signalés comme tels.
 */
export const maash = {
  nom: 'MAASH',
  nomComplet: 'Mutuelle Autorisée d’Assistance Socio-Humanitaire',
  sloganFr: 'Protégés en toute dignité, à bas prix.',
  sloganLingala: 'Na mbongo muke, tobateli bomoto na biso.',
  devise: 'Mbongi – Salongo – Likelemba',
  creation: '15 juillet 2023',
  reconnaissance: 'Document de reconnaissance F92/56.275 — Ministère de la Justice',
  domaine: 'maashprosoc.cd',
  prosocAppUrl: 'https://testprosoc.maashrdc.com',
  email: 'contact@maashprosoc.cd',
  emailSecretariat: 'secretariat@maashprosoc.cd',
  telephone: '+243 976 158 691',
  telephoneHref: 'tel:+243976158691',
  whatsappHref: 'https://wa.me/243976158691',
  adresse: {
    ligne1: '372, avenue Colonel Mondjiba, quartier Bassoko',
    ligne2: 'Commune de Ngaliema, Kinshasa',
    ligne3: 'Silikin Village, concession Cotex',
    pays: 'République démocratique du Congo',
  },
  horaires: [
    { jour: 'Lundi – Vendredi', heure: '08h00 – 16h00' },
    { jour: 'Samedi', heure: '09h00 – 13h00' },
    { jour: 'Dimanche et jours fériés', heure: 'Fermé' },
  ],
  zones: {
    couverture: [
      'District de Tshangu',
      'District du Mont-Amba',
      'District du Funa',
      'District du Lukunga',
    ],
    extension:
      'Déploiement prévu dans les 24 communes de Kinshasa, avec des administrations communales de proximité.',
  },
}
export const presentation = {
  resume:
    'MAASH est la Mutuelle Autorisée d’Assistance Socio-Humanitaire, une mutuelle de protection sociale sans but lucratif. Elle exécute le programme PROSOC, soutenu par l’application Prosoc.',
  raisonCreation:
    'Atténuer les effets des chocs économiques et sociaux et étendre progressivement la protection sociale, notamment au secteur informel, par une protection de base pour les personnes sans couverture et une protection complémentaire pour celles déjà protégées.',
  missions: [
    'Étudier et proposer des solutions de couverture et de protection sociale.',
    'Vulgariser la culture de la protection sociale.',
    'Participer à l’organisation et à l’amélioration de mécanismes d’assistance socio-humanitaire et de couverture sociale.',
    'Contribuer à des actions sociales, sanitaires et de développement dans le respect de ses compétences et partenariats.',
  ],
  vision: 'Étendre la couverture de protection sociale aux personnes du secteur informel.',
  principes: [
    'Solidarité et valeurs mutualistes',
    'Respect et accueil sans discrimination',
    'Confidentialité',
    'Prévention des conflits d’intérêts',
    'Respect des habilitations',
    'Coopération et compte rendu des activités',
  ],
}


export const gouvernance = {
  introduction:
    'La structure de MAASH est présentée en 12 blocs. Le Conseil d’Éxecution comprend la Coordination Générale et les structures opérationnelles ; la CCA est un organe statutaire de contrôle, sans subordination fonctionnelle au CE. Le CA dispose de son propre secrétariat, distinct du Secrétariat Général.',
  blocs: [
    { nom: 'Assemblée Générale (AG)', role: 'Organe suprême de délibération des membres.' },
    { nom: 'Conseil d’Administration (CA)', role: 'Orientation stratégique ; dispose de son propre secrétariat.' },
    { nom: 'Conseil d’Éxecution (CE)', role: 'Comprend la Coordination Générale et les structures opérationnelles.' },
    { nom: 'Coordination Générale (CG)', role: 'Direction opérationnelle du programme et de l’institution.' },
    { nom: 'Secrétariat Général', role: 'Coordination administrative et supports transverses.' },
    { nom: 'Contrôle et Cour des Comptes (CCA)', role: 'Contrôle et audit, organe statutaire indépendant.' },
    { nom: 'Ressources Humaines et Socio-Humanitaire', role: 'Gestion des ressources humaines et action socio-humanitaire.' },
    { nom: 'Finances et Opérations', role: 'Gestion financière et opérationnelle.' },
    { nom: 'Numérique', role: 'Systèmes d’information et application Prosoc.' },
    { nom: 'Santé Publique', role: 'Couverture et prestations de santé.' },
    { nom: 'Assurances', role: 'Partenariats avec les assureurs partenaires.' },
    { nom: 'Communication et Relations Extérieures', role: 'Communication institutionnelle et partenariats.' },
  ],
}
export const branches = [
  {
    id: 'pensions',
    titre: 'Branche Pensions',
    icon: 'home',
    resume: 'Prestations gratuites couvertes par les cotisations.',
    prestations: [
      { code: 'A', nom: 'Allocations de vieillesse', detail: 'Allocations de vieillesse pour la retraite. Conditions d’âge, modalités et montants : à préciser.' },
      { code: 'B', nom: 'Allocations de décès', detail: 'Assistance funéraire, accessible dès l’approbation de l’adhésion.' },
    ],
  },
  {
    id: 'communautaire',
    titre: 'Branche Communautaire',
    icon: 'users',
    resume: 'Solidarité et accompagnement des membres au quotidien.',
    prestations: [
      { code: 'C', nom: 'Microcrédit', detail: 'Microcrédit mutuel sans intérêt, zéro frais d’intérêt. Période probatoire de deux mois. Crédit extra auprès des partenaires de MAASH.' },
      { code: 'D', nom: 'Cantine alimentaire', detail: 'Accès à des produits agro-pastoraux à bas prix, dès disponibilité.' },
      { code: 'E', nom: 'Assistance juridique', detail: 'Accompagnement gratuit pour les procédures judiciaires du membre, après approbation.' },
      { code: 'F', nom: 'Formations professionnelles', detail: 'Encadrement de la jeunesse pour l’apprentissage gratuit de différents métiers, dès disponibilité.' },
      { code: 'G', nom: 'Hébergement', detail: 'Prise en charge gratuite des personnes âgées et très vulnérables, dès disponibilité.' },
    ],
  },
  {
    id: 'sante',
    titre: 'Branche Soins de santé',
    icon: 'heart',
    resume: 'Trois types de soins, jusqu’à six personnes par famille. Tarifs mensuels par famille, en supplément des cotisations. Accès dès le mois suivant le paiement.',
    prestations: [
      { code: 'H', nom: 'Catégorie standard', detail: 'Hôpitaux de référence. 19 USD / mois / famille (jusqu’à 6 personnes).' },
      { code: 'I', nom: 'Soins de santé VIP', detail: 'Centres hospitaliers privés de haute qualité. Tarifs : à compléter.' },
      { code: 'J', nom: 'Soins de santé communautaires', detail: 'Centres de santé locaux. À partir de 10 USD / mois / famille (jusqu’à 6 personnes).' },
    ],
  },
  {
    id: 'specialisee',
    titre: 'Branche Spécialisée',
    icon: 'shield',
    resume: 'Organisée en partenariat avec des sociétés d’assurances pour améliorer les prestations et élargir la couverture. Les produits d’assurance relèvent des partenaires ; MAASH ne les présente pas comme ses propres produits.',
    prestations: [
      { code: '•', nom: 'Prévoyance funérailles', detail: 'Produit des assureurs partenaires, selon conventions.' },
      { code: '•', nom: 'Retraite complémentaire', detail: 'Produit des assureurs partenaires, selon conventions.' },
      { code: '•', nom: 'Prévoyance éducation', detail: 'Produit des assureurs partenaires, selon conventions.' },
      { code: '•', nom: 'Épargne projet', detail: 'Produit des assureurs partenaires, selon conventions.' },
    ],
  },
]
export const prosoc = {
  resume:
    'PROSOC est le programme de protection sociale exécuté au sein de MAASH. Prosoc est l’application de gestion utilisée pour son pilotage.',
  fonctionnalites: [
    'Enregistrement et gestion administrative des affiliés (adhésion par l’agent AT)',
    'Vérification d’éligibilité et mécanisme du bon de jeton',
    'Orientation vers le prestataire choisi',
    'Paiement via Mobile Money (tous les opérateurs en RDC) et par carte Visa',
    'Reçu imprimable après adhésion ou cotisation : référence, affilié, type d’opération, montant, date et agent',
    'Historique des cotisations consultable par l’affilié (montant, date, période, statut)',
    'Portefeuille (wallet) de l’agent avec demande de rechargement et suivi du statut',
    'Indicateurs de performance : targets journalier, hebdomadaire et mensuel',
  ],
  roles: [
    { nom: 'Agent AT (agent de terrain)', detail: 'Adhésion, cotisations, impression des reçus, wallet et indicateurs de performance.' },
    { nom: 'Affilié', detail: 'Consultation de ses cotisations, profil, personnes à charge et coordonnées de son agent AT.' },
    { nom: 'Chef d’équipe', detail: 'Résumé des collectes de ses agents : nombre, montant, par période (journalier, hebdomadaire, mensuel).' },
    { nom: 'Percepteur', detail: 'Collectes et encaissements, consultation hebdomadaire des montants collectés.' },
    { nom: 'Superviseur', detail: 'Gestion des chefs d’équipe et de leurs agents, affectation des affiliés avec traçabilité.' },
    { nom: 'Encodeur', detail: 'Compléments, contrôle et traçabilité des dossiers.' },
  ],
  regleDonnees:
    'Les agents de terrain ne collectent pas de données sanitaires ou cliniques ; ces données ne sont pas stockées dans Prosoc. Elles relèvent des services habilités MAASH et des prestataires sanitaires.',
}

export const cibles = {
  adherent: 'Adhérent : de 18 à 55 ans inclus.',
  personnesCharge: [
    'Enfants de 0 à 17 ans — aucune condition documentaire, identité complète à renseigner.',
    'Enfants de 18 à 25 ans inclus encore étudiants — sur justificatif scolaire.',
    'Conjoint dès 18 ans.',
    'Personnes de 56 ans et plus.',
  ],
  documents: [
    'Identité complète pour tous.',
    'Carte d’identité pour les adultes.',
    'Preuves ou documents scolaires pour les enfants de 18 à 25 ans encore étudiants.',
  ],
  formules: [
    { nom: 'Solo', composition: '1 personne', prix: '2 USD' },
    { nom: 'Couple', composition: 'Adhérent + 1 personne à charge', prix: '4 USD' },
    { nom: 'F3', composition: 'Adhérent + 2 personnes à charge', prix: '4,50 USD' },
    { nom: 'F4', composition: 'Adhérent + 3 personnes à charge', prix: '6 USD' },
    { nom: 'F5', composition: 'Adhérent + 4 personnes à charge', prix: '7,50 USD' },
    { nom: 'F6', composition: 'Adhérent + 5 personnes à charge', prix: '9 USD' },
  ],
  adherence: '1,50 USD pour l’adhérent à l’inscription, puis à chaque renouvellement annuel.',
  remarqueFormules: 'Les formules F3 à F6 correspondent à 1,50 USD par personne et par mois.',
  modalites: [
    'Adhésion sur MAASH : en ligne sur le site, auprès d’un agent de terrain ou via l’application Prosoc.',
    'Tout agent MAASH peut effectuer une adhésion ; le superviseur affecte ensuite le membre à un agent de terrain.',
    'Paiement via Prosoc, par Mobile Money (tous les opérateurs en RDC) et par carte Visa.',
  ],
}
