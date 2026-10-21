/**
 * Catalogue FR — source unique de vérité : contenus institutionnels et
 * textes d'interface (ancien src/data/maashData.js, enrichi pour vue-i18n).
 * Contenus extraits du questionnaire de collecte MAASH (version préremplie
 * du 8 octobre 2026). Les champs « à compléter » restent signalés comme tels.
 */
export default {
  maash: {
    nom: 'MAASH',
    nomComplet: 'Mutuelle Autorisée d’Assistance Socio-Humanitaire',
    slogan: 'Protégés en toute dignité, à bas prix.',
    sloganLingala: 'Na mbongo muke, tobateli bomoto na biso.',
    devise: 'Mbongi – Salongo – Likelemba',
    creation: '15 juillet 2023',
    reconnaissance: 'Document de reconnaissance F92/56.275 — Ministère de la Justice',
    domaine: 'maashprosoc.cd',
    prosocAdhesionUrl: 'https://prosoc.maashrdc.com/adhesions/create',
    prosocLoginUrl: 'https://prosoc.maashrdc.com/login',
    apkUrl: '/apk/prod-prosoc-20.10.apk',
    email: 'contact@maashprosoc.cd',
    emailSecretariat: 'secretariat@maashprosoc.cd',
    telephone: '+243 973 798 811',
    telephoneHref: 'tel:+243973798811',
    whatsappHref: 'https://wa.me/243973798811',
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
  },

  presentation: {
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
  },

  gouvernance: {
    introduction:
      'La structure de MAASH est présentée en 12 blocs. Le Comité Exécutif comprend la Coordination Générale et les structures opérationnelles ; la CCA est un organe statutaire de contrôle, sans subordination fonctionnelle au CE. Le CA dispose de son propre secrétariat, distinct du Secrétariat Général.',
    blocs: [
      { nom: 'Assemblée Générale (AG)', role: 'Organe suprême de délibération des membres.' },
      { nom: 'Conseil d’Administration (CA)', role: 'Orientation stratégique ; dispose de son propre secrétariat.' },
      { nom: 'Comité Exécutif (CE)', role: 'Comprend la Coordination Générale et les structures opérationnelles.' },
      { nom: 'Coordination Générale (CG)', role: 'Direction opérationnelle du programme et de l’institution.' },
      { nom: 'Secrétariat Général', role: 'Coordination administrative et supports transverses.' },
      { nom: 'Commission de Contrôle et d’Audit (CCA)', role: 'Contrôle et audit, organe statutaire indépendant.' },
      { nom: 'Ressources Humaines et Socio-Humanitaire', role: 'Gestion des ressources humaines et action socio-humanitaire.' },
      { nom: 'Finances et Opérations', role: 'Gestion financière et opérationnelle.' },
      { nom: 'Numérique', role: 'Systèmes d’information et application Prosoc.' },
      { nom: 'Santé Publique', role: 'Couverture et prestations de santé.' },
      { nom: 'Assurances', role: 'Relations avec les partenaires assureurs.' },
      { nom: 'Communication et Relations Extérieures', role: 'Communication institutionnelle et partenariats.' },
    ],
  },

  branches: [
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
      resume: 'En collaboration avec ses partenaires pour améliorer les prestations et élargir la couverture. MAASH agit en coordination avec ses partenaires.',
      prestations: [
        { code: '•', nom: 'Prévoyance funérailles', detail: 'Prestation des partenaires, selon conventions.' },
        { code: '•', nom: 'Retraite complémentaire', detail: 'Prestation des partenaires, selon conventions.' },
        { code: '•', nom: 'Prévoyance éducation', detail: 'Prestation des partenaires, selon conventions.' },
        { code: '•', nom: 'Épargne projet', detail: 'Prestation des partenaires, selon conventions.' },
      ],
    },
  ],

  prosoc: {
    resume:
      'PROSOC est le programme de couverture sociale de MAASH. Il permet d’assurer une couverture sociale aux adhérents grâce à des prestations adaptées et à l’application Prosoc.',
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
      { nom: 'Caissier', detail: 'Gestion des encaissements, des dépôts et du rapprochement de caisse.' },
      { nom: 'Superviseur', detail: 'Gestion des chefs d’équipe et de leurs agents, affectation des affiliés avec traçabilité.' },
      { nom: 'Superviseur communal', detail: 'Supervision des opérations et des équipes au niveau communal, suivi des affiliés et remontée des rapports.' },
      { nom: 'Encodeur', detail: 'Compléments, contrôle et traçabilité des dossiers.' },
    ],
    regleDonnees:
      'Les agents de terrain ne collectent pas de données sanitaires ou cliniques ; ces données ne sont pas stockées dans Prosoc. Elles relèvent des services habilités MAASH et des prestataires sanitaires.',
  },

  cibles: {
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
  },

  hopitaux: {
    titre: 'Hôpitaux de référence — catégorie standard',
    voir: 'Voir la liste des hôpitaux',
    fermer: 'Fermer',
    repere: 'Repère',
    itineraire: 'Itinéraire',
    aVenir: 'D’autres établissements seront ajoutés prochainement.',
    liste: [
      { nom: 'HGR de Kintambo' },
      { nom: 'HGR de Kinkole (CNPP)', repere: 'Arrêt CNPP' },
      { nom: 'HGR de Makala ex Sanatorium', repere: 'Marché Sembao' },
      { nom: 'HGR de Matete (OMECO)', repere: 'Marché' },
      { nom: 'HGR de Kimbanseke (Pierre Foxom ex I.N.S.S.)', repere: 'Marché' },
      { nom: 'HGR de Ngiri-Ngiri (Kimbuta)', repere: 'Maison Commune / Direction Bayaka' },
      {
        nom: 'CSR de Kimbondo',
        repere: 'Av. Chef Kizonzu n° 283 — Entrée Maman colonel O. Lingwala',
        commune: 'Bandalungwa',
      },
      {
        nom: 'CSR de Roi Baudouin',
        repere: 'Av. Bolenge n° 08 — Kin Marché de la Liberté',
        commune: 'Masina',
      },
    ],
  },

  recrutement: {
    postes: [
      { code: 'agent-at', nom: 'Agent AT (agent de terrain)' },
      { code: 'chef-equipe', nom: 'Chef d’équipe' },
      { code: 'superviseur', nom: 'Superviseur' },
      { code: 'encodeur', nom: 'Encodeur' },
      { code: 'spontanee', nom: 'Candidature spontanée' },
    ],
  },

  ui: {
    meta: {
      accueil: {
        title: 'MAASH — Mutuelle Autorisée d’Assistance Socio-Humanitaire',
        description:
          'MAASH — Mutuelle Autorisée d’Assistance Socio-Humanitaire. Protégés en toute dignité, à bas prix. Programme PROSOC, Kinshasa, République démocratique du Congo.',
      },
      presentation: {
        title: 'Présentation — MAASH',
        description:
          'Raison d’être, missions, vision et principes de MAASH, mutuelle de protection sociale sans but lucratif à Kinshasa (RDC).',
      },
      gouvernance: {
        title: 'Gouvernance — MAASH',
        description:
          'Gouvernance MAASH : assemblée générale, conseil d’administration, comité exécutif et les 12 blocs organisationnels de la mutuelle.',
      },
      services: {
        title: 'Services et prestations — MAASH',
        description:
          'Les 4 branches de prestations MAASH (pensions, communautaire, santé, spécialisée) et les prestations A à J pour les affiliés.',
      },
      prosoc: {
        title: 'Programme PROSOC — MAASH',
        description:
          'PROSOC : programme de couverture sociale de MAASH, application Prosoc, rôles utilisateurs, Mobile Money et protection des données.',
      },
      adhesion: {
        title: 'Adhésion et tarifs — MAASH',
        description:
          'Formules MAASH de Solo (2 USD) à F6 (1.5 USD) par mois : documents requis, personnes à charge et paiement Mobile Money ou Visa.',
      },
      contact: {
        title: 'Contact — MAASH',
        description:
          'Contact MAASH : adresse du siège à Ngaliema (Kinshasa), téléphones, WhatsApp, e-mails et horaires d’ouverture.',
      },
      recrutement: {
        title: 'Recrutement — MAASH',
        description:
          'Postes ouverts chez MAASH : agent terrain, chef d’équipe, superviseur… candidatez en ligne et transmettez votre CV.',
      },
      introuvable: {
        title: 'Page introuvable — MAASH',
        description: 'La page demandée n’existe pas ou a été déplacée.',
      },
    },

    nav: {
      accueil: 'Accueil',
      presentation: 'Présentation',
      gouvernance: 'Gouvernance',
      services: 'Services',
      prosoc: 'PROSOC',
      adhesion: 'Adhésion',
      contact: 'Contact',
      join: 'Adhérer',
      login: 'Connexion',
      recrutement: 'Recrutement',
    },
    burger: { open: 'Ouvrir le menu' },
    theme: {
      toLight: 'Passer en mode clair',
      toDark: 'Passer en mode sombre',
      lightTitle: 'Mode clair',
      darkTitle: 'Mode sombre',
    },
    lang: { choose: 'Choisir la langue', title: 'Langue' },

    footer: {
      navigation: 'Navigation',
      contact: 'Contact',
      hours: 'Horaires',
      desc: '{name} — mutuelle de protection sociale sans but lucratif, exécutante du programme PROSOC.',
      rights: '© {year} MAASH — Tous droits réservés.',
      created: 'Créée le {date} • Kinshasa, RDC',
    },

    common: {
      joinMaash: 'Adhérer sur MAASH',
      contactUs: 'Nous contacter',
      discoverServices: 'Découvrir nos services',
      downloadApp: 'Télécharger l’application Prosoc',
      whatsapp: 'Contacter MAASH sur WhatsApp',
    },

    home: {
      badge: 'Bienvenue chez MAASH',
      infoTitle: 'Informations clés',
      infoCreationLabel: 'Création',
      infoRecognitionLabel: 'Reconnaissance',
      infoRecognition: 'F92/56.275 (Ministère de la Justice)',
      infoSeatLabel: 'Siège',
      infoSeat: 'Silikin Village, Ngaliema, Kinshasa — {pays}',
      infoMottoLabel: 'Devise',
      stats: [
        { valeur: '4', label: 'branches de prestations' },
        { valeur: '4', label: 'districts couverts à Kinshasa' },
        { valeur: '24', label: 'communes visées à Kinshasa' },
        { valeur: '1.5 USD', label: 'cotisation mensuelle par personnes par familles' },
      ],
      whoBadge: 'Qui sommes-nous',
      whoTitle: 'Une mutuelle de protection sociale pour tous',
      more: 'En savoir plus',
      vision: 'Notre vision',
      principles: 'Nos principes',
      servicesBadge: 'Nos services',
      servicesTitle: 'Quatre branches de protection',
      servicesSubtitle:
        'Des prestations accessibles, adaptées aux besoins des familles et du secteur informel.',
      prosocPoints: [
        'Adhésion et gestion administrative simplifiées',
        'Paiement Mobile Money et carte Visa',
        'Bon de jeton pour l’orientation vers les prestataires',
      ],
      discoverProgram: 'Découvrir le programme',
      memberBadge: 'Devenir membre',
      memberTitle: 'Rejoignez MAASH dès aujourd’hui',
      memberSubtitle: 'Adhésion à {fee} Formules des cotiations à partir de {fee} par personnes par familles.',
      viewPrices: 'Voir les tarifs',
    },

    presentation: {
      h1: 'Présentation institutionnelle',
      purpose: 'Raison d’être',
      vision: 'Vision',
      missionsBadge: 'Missions et finalités',
      missionsTitle: 'Ce que MAASH s’engage à faire',
      missionsSubtitle:
        'Missions et finalités extraites du Référentiel Institutionnel Intégré (RII).',
      principlesBadge: 'Principes',
      principlesTitle: 'Nos valeurs de fonctionnement',
      principlesSubtitle:
        'Principes relevés dans le socle de compétences du RII. Cette synthèse ne constitue pas une liste officielle de valeurs.',
      mottoLabel: 'Devise :',
      zonesBadge: 'Zones d’intervention',
      zonesTitle: 'Présents à Kinshasa',
      zonesSubtitle:
        'Domaines : protection sociale, activités socio-humanitaires et accompagnement des membres.',
      zoneCurrent: 'Couverture actuelle',
    },

    gouvernance: {
      h1: 'Gouvernance et organisation',
      badge: 'Structure institutionnelle',
      title: '12 blocs organisationnels',
      subtitle: 'Périmètre de publication détaillé sur le site : à confirmer par MAASH.',
    },

    services: {
      h1: 'Services de MAASH',
      hero: 'Quatre branches couvertes — Pensions, Communautaire, Soins de santé et Spécialisée — avec les prestations A à J et les couvertures proposées par les partenaires.',
      note: 'Les tarifs santé sont mensuels, par famille jusqu’à six personnes, et s’ajoutent aux cotisations mensuelles MAASH. Les prestations détaillées, tarifs VIP, plafonds et exclusions restent à fournir par MAASH.',
    },

    prosoc: {
      h1: 'Programme PROSOC',
      featuresBadge: 'Fonctionnalités',
      featuresTitle: 'Ce que fait l’application Prosoc',
      rolesBadge: 'Rôles utilisateurs',
      rolesTitle: 'Catégories d’utilisateurs',
      dataTitle: 'Protection des données',
      groupsTitle: 'Publics concernés',
      ctaTitle: 'Adhérez sur MAASH dès maintenant',
      ctaText:
        'Adhésion, paiement des cotisations et suivi de votre dossier en ligne, en toute simplicité.',
    },

    adhesion: {
      h1: 'Adhésion et tarifs',
      hero: 'Devenez membre de MAASH et bénéficiez des prestations du programme PROSOC.',
      badge: 'Cotisations mensuelles',
      title: 'Formules familiales',
      thPlan: 'Formule',
      thComposition: 'Composition',
      thMonthly: 'Cotisation mensuelle',
      noteHealth1: 'Soins de santé en supplément des cotisations : catégorie standard',
      noteHealth2: 'par famille, soins communautaires',
      noteHealth3: 'à partir de',
      noteHealth4: 'par famille, jusqu’à six personnes.',
      docsTitle: 'Documents requis',
      depsTitle: 'Personnes à charge',
      payTitle: 'Paiement',
      payList: [
        'Mobile Money — tous les opérateurs en RDC',
        'Carte Visa',
        'Reçu imprimé par la machine POS',
        'Message de confirmation pour le Mobile Money via Prosoc',
      ],
      howBadge: 'Modalités',
      howTitle: 'Comment adhérer',
      ctaTitle: 'Prêt à adhérer ?',
      ctaText: 'Adhérez sur MAASH en ligne ou contactez le secrétariat — {phone} (WhatsApp).',
    },

    contact: {
      h1: 'Contact',
      hero: 'Nous sommes à votre écoute pour toute information sur MAASH et le programme PROSOC.',
      addressTitle: 'Adresse du siège',
      phoneEmailTitle: 'Téléphone et e-mail',
      secretariat: 'Secrétariat :',
      emailLabel: 'E-mail :',
      secretariatEmail: 'Secrétariat (e-mail) :',
      whatsappBtn: 'Contacter par WhatsApp',
      hoursTitle: 'Horaires d’ouverture',
      coverageTitle: 'Implantation',
      coverageText:
        'Couverture actuelle : districts de Tshangu, Mont-Amba, Funa et Lukunga à Kinshasa. Déploiement prévu dans les 24 communes de Kinshasa.',
      domainNote:
        'Domaine officiel prévu : {domaine} — disponibilité et réservation à vérifier. Lien cartographique : à compléter.',
    },

    recrutement: {
      h1: 'Rejoindre MAASH',
      hero: 'Vous partagez nos valeurs ? Rejoignez MAASH et contribuez à la protection sociale des Congolais, sur le terrain comme au siège.',
      postesBadge: 'Postes ouverts',
      postesTitle: 'Rejoignez nos équipes',
      postesText:
        'Les postes ci-dessous correspondent aux rôles du programme PROSOC. Vous ne trouvez pas votre profil ? Candidatez spontanément.',
      formBadge: 'Candidature',
      formTitle: 'Formulaire de candidature',
      nom: 'Nom complet',
      tel: 'Téléphone (ex. +243…)',
      email: 'Adresse e-mail',
      poste: 'Poste visé',
      diplome: 'Niveau d’études',
      experience: 'Années d’expérience',
      expPlaceholder: 'Ex. : 3 ans',
      disponibilite: 'Disponibilité',
      message: 'Message (facultatif)',
      cvNote: 'Votre CV : envoyez-le au secrétariat par WhatsApp après l’envoi du formulaire (bouton ci-dessous).',
      consentLabel: 'J’accepte que mes données soient utilisées uniquement pour le recrutement MAASH.',
      notePrivacy:
        'Vos informations sont utilisées exclusivement pour le processus de recrutement MAASH et ne sont pas transmises à des tiers.',
      submit: 'Envoyer ma candidature',
      sending: 'Envoi en cours…',
      againBtn: 'Nouvelle candidature',
      errRequired: 'Veuillez remplir tous les champs obligatoires.',
      errEmail: 'Adresse e-mail invalide.',
      errTel: 'Numéro de téléphone invalide.',
      errConsent: 'Veuillez accepter l’utilisation de vos données.',
      errSend:
        'L’envoi a échoué. Réessayez ou envoyez votre CV directement par WhatsApp (bouton ci-dessous).',
      successTitle: 'Candidature envoyée !',
      successText:
        'Merci. Votre candidature a été transmise au secrétariat MAASH — envoyez maintenant votre CV par WhatsApp, puis nous vous recontacterons très bientôt.',
      whatsappCta: 'Envoyer par WhatsApp',
      recruitBadge: 'Recrutement',
      recruitTitle: 'Nous recrutons',
      recruitText:
        'Des opportunités chez MAASH : agents terrain, chefs d’équipe et plus. Consultez les postes ouverts et candidatez en ligne.',
      recruitCta: 'Voir les postes et candidatez',
    },

    notFound: {
      h1: 'Page introuvable',
      hero: 'La page que vous recherchez n’existe pas ou a été déplacée.',
      text: 'L’adresse est peut-être erronée ou la page a été retirée. Depuis l’accueil, vous retrouverez toutes les informations sur MAASH et le programme PROSOC.',
      homeBtn: 'Retour à l’accueil',
    },
  },
}
