/**
 * English catalogue — MAASH institutional content and UI strings.
 * The official name and the Lingala slogan are kept as in the original.
 * Machine translation drafted for review by MAASH.
 */
export default {
  maash: {
    nom: 'MAASH',
    nomComplet: 'Mutuelle Autorisée d’Assistance Socio-Humanitaire', // official name (FR)
    slogan: 'Protected with full dignity, at low cost.',
    sloganLingala: 'Na mbongo muke, tobateli bomoto na biso.',
    devise: 'Mbongi – Salongo – Likelemba',
    creation: '15 July 2023',
    reconnaissance: 'Recognition document F92/56.275 — Ministry of Justice',
    domaine: 'maashprosoc.cd',
    prosocAdhesionUrl: 'https://prosoc.maashrdc.com/adhesions/create',
    prosocLoginUrl: 'https://prosoc.maashrdc.com/login',
    apkUrl: 'https://github.com/jpbolombo036-alt/maashdrc/releases/download/v20.10/prod-prosoc-20.10.apk',
    email: 'secretariatmaash@gmail.com',
    emailSecretariat: 'secretariatmaash@gmail.com',
    telephone: '+243 973 798 811',
    telephoneHref: 'tel:+243973798811',
    whatsappHref: 'https://wa.me/243973798811',
    adresse: {
      ligne1: '372, avenue Colonel Mondjiba, Bassoko quarter',
      ligne2: 'Ngaliema Municipality, Kinshasa',
      ligne3: 'Silikin Village, Cotex compound',
      pays: 'Democratic Republic of the Congo',
    },
    horaires: [
      { jour: 'Monday – Friday', heure: '08:00 – 16:00' },
      { jour: 'Saturday', heure: '09:00 – 13:00' },
      { jour: 'Sunday and public holidays', heure: 'Closed' },
    ],
    zones: {
      couverture: [
        'Tshangu District',
        'Mont-Amba District',
        'Funa District',
        'Lukunga District',
      ],
      extension:
        'Rollout planned across the 24 communes of Kinshasa, with local municipal offices nearby.',
    },
  },

  presentation: {
    resume:
      'MAASH is the Authorized Mutual for Socio-Humanitarian Assistance, a non-profit social protection mutual. It runs the PROSOC programme, supported by the Prosoc application.',
    raisonCreation:
      'To soften the impact of economic and social shocks and progressively extend social protection, especially in the informal sector, through basic protection for people without coverage and complementary protection for those already covered.',
    missions: [
      'Study and propose social coverage and protection solutions.',
      'Raise awareness of social protection culture.',
      'Help organise and improve socio-humanitarian assistance and social coverage mechanisms.',
      'Contribute to social, health and development actions within its remit and partnerships.',
    ],
    vision: 'Extend social protection coverage to people in the informal sector.',
    principes: [
      'Solidarity and mutualist values',
      'Respect and welcome without discrimination',
      'Confidentiality',
      'Prevention of conflicts of interest',
      'Respect for authorisations',
      'Cooperation and reporting of activities',
    ],
  },

  gouvernance: {
    introduction:
      'MAASH’s structure is presented in 12 blocks. The Executive Committee includes the General Coordination and the operational structures; the CCA is a statutory control body, with no functional subordination to the EC. The Board has its own secretariat, separate from the General Secretariat.',
    blocs: [
      { nom: 'General Assembly (GA)', role: 'Supreme deliberative body of the members.' },
      { nom: 'Board of Directors (BOD)', role: 'Strategic guidance; has its own secretariat.' },
      { nom: 'Executive Committee (EC)', role: 'Includes the General Coordination and the operational structures.' },
      { nom: 'General Coordination (GC)', role: 'Operational direction of the programme and the institution.' },
      { nom: 'General Secretariat', role: 'Administrative coordination and cross-cutting support.' },
      { nom: 'Control and Audit Commission (CCA)', role: 'Control and audit, independent statutory body.' },
      { nom: 'Human Resources and Socio-Humanitarian', role: 'Human resources management and socio-humanitarian action.' },
      { nom: 'Finance and Operations', role: 'Financial and operational management.' },
      { nom: 'Digital', role: 'Information systems and Prosoc application.' },
      { nom: 'Public Health', role: 'Health coverage and benefits.' },
      { nom: 'Insurance', role: 'Relations with insurer partners.' },
      { nom: 'Communication and External Relations', role: 'Institutional communication and partnerships.' },
    ],
  },

  branches: [
    {
      id: 'pensions',
      titre: 'Pensions Branch',
      icon: 'home',
      resume: 'Free benefits covered by contributions.',
      prestations: [
        { code: 'A', nom: 'Old-age allowances', detail: 'Old-age allowances for retirement. Age conditions, modalities and amounts: to be specified.' },
        { code: 'B', nom: 'Death allowances', detail: 'Funeral assistance, available as soon as membership is approved.' },
      ],
    },
    {
      id: 'communautaire',
      titre: 'Community Branch',
      icon: 'users',
      resume: 'Solidarity and day-to-day support for members.',
      prestations: [
        { code: 'C', nom: 'Microcredit', detail: 'Interest-free mutual microcredit, zero interest fees. Two-month probation period. Extra credit through MAASH partners.' },
        { code: 'D', nom: 'Food canteen', detail: 'Access to agro-pastoral products at low prices, as soon as available.' },
        { code: 'E', nom: 'Legal assistance', detail: 'Free support for the member’s legal proceedings, after approval.' },
        { code: 'F', nom: 'Vocational training', detail: 'Mentoring young people in free apprenticeships for various trades, as soon as available.' },
        { code: 'G', nom: 'Accommodation', detail: 'Free housing for elderly and highly vulnerable people, as soon as available.' },
      ],
    },
    {
      id: 'sante',
      titre: 'Health Care Branch',
      icon: 'heart',
      resume: 'Three types of care, up to six people per family. Monthly family rates, in addition to contributions. Access from the month following payment.',
      prestations: [
        { code: 'H', nom: 'Standard category', detail: 'Reference hospitals. 20 USD / month / family (up to 6 people).' },
        { code: 'I', nom: 'VIP health care', detail: 'High-quality private hospitals. Rates: to be completed.' },
        { code: 'J', nom: 'Community health care', detail: 'Local health centres. From 10 USD / month / family (up to 6 people).' },
      ],
    },
    {
      id: 'specialisee',
      titre: 'Specialized Branch',
      icon: 'shield',
      resume: 'In collaboration with its partners to improve benefits and widen coverage. MAASH works in coordination with its partners.',
      prestations: [
        { code: '•', nom: 'Funeral cover', detail: 'Partner benefit, according to agreements.' },
        { code: '•', nom: 'Complementary pension', detail: 'Partner benefit, according to agreements.' },
        { code: '•', nom: 'Education cover', detail: 'Partner benefit, according to agreements.' },
        { code: '•', nom: 'Project savings', detail: 'Partner benefit, according to agreements.' },
      ],
    },
  ],

  prosoc: {
    resume:
      'PROSOC is MAASH’s social coverage programme. It provides members with social coverage through tailored benefits and the Prosoc application.',
    fonctionnalites: [
      'Registration and administrative management of members (enrolment by the AT agent)',
      'Eligibility check and token voucher mechanism',
      'Referral to the chosen provider',
      'Payment via Mobile Money (all operators in the DRC) and by Visa card',
      'Printable receipt after enrolment or contribution: reference, member, operation type, amount, date and agent',
      'Contribution history viewable by the member (amount, date, period, status)',
      'Agent wallet with top-up request and status tracking',
      'Performance indicators: daily, weekly and monthly targets',
    ],
    roles: [
      { nom: 'AT agent (field agent)', detail: 'Enrolment, contributions, receipt printing, wallet and performance indicators.' },
      { nom: 'Member', detail: 'View own contributions, profile, dependants and contact details of their AT agent.' },
      { nom: 'Team leader', detail: 'Summary of their agents’ collections: count, amount, by period (daily, weekly, monthly).' },
      { nom: 'Collector', detail: 'Collections and cash-in, weekly view of collected amounts.' },
      { nom: 'Cashier', detail: 'Management of cash receipts, deposits and cash reconciliation.' },
      { nom: 'Supervisor', detail: 'Management of team leaders and their agents, assignment of members with full traceability.' },
      { nom: 'Municipal supervisor', detail: 'Supervision of operations and teams at municipal level, member follow-up and reporting.' },
      { nom: 'Encoder', detail: 'Complements, control and traceability of records.' },
    ],
    regleDonnees:
      'Field agents do not collect health or clinical data; such data is not stored in Prosoc. It falls to authorised MAASH services and health providers.',
  },

  cibles: {
    adherent: 'Member: from 18 to 55 years inclusive.',
    personnesCharge: [
      'Children aged 0 to 17 — no documentary condition, full identity to be provided.',
      'Children aged 18 to 25 inclusive still studying — on proof of enrolment.',
      'Spouse from age 18.',
      'People aged 56 and over.',
    ],
    documents: [
      'Full identity for everyone.',
      'Identity card for adults.',
      'School proofs or documents for children aged 18 to 25 still studying.',
    ],
    formules: [
      { nom: 'Solo', composition: '1 person', prix: '2 USD' },
      { nom: 'Couple', composition: 'Member + 1 dependant', prix: '4 USD' },
      { nom: 'F3', composition: 'Member + 2 dependants', prix: '4.50 USD' },
      { nom: 'F4', composition: 'Member + 3 dependants', prix: '6 USD' },
      { nom: 'F5', composition: 'Member + 4 dependants', prix: '7.50 USD' },
      { nom: 'F6', composition: 'Member + 5 dependants', prix: '9 USD' },
    ],
    adherence: '1.50 USD for the member at registration, then at each annual renewal.',
    remarqueFormules: 'The F3 to F6 plans correspond to 1.50 USD per person per month.',
    modalites: [
      'Join MAASH: online on the site, with a field agent or through the Prosoc application.',
      'Any MAASH agent can carry out an enrolment; the supervisor then assigns the member to a field agent.',
      'Payment via Prosoc, by Mobile Money (all operators in the DRC) and by Visa card.',
    ],
  },

  hopitaux: {
    titre: 'Reference hospitals — standard category',
    voir: 'See the hospital list',
    fermer: 'Close',
    repere: 'Landmark',
    tarif: 'Rate',
    itineraire: 'Directions',
    aVenir: 'More facilities will be added soon.',
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
    vip: {
      titre: 'Partner private hospitals — VIP health care',
      liste: [
        { nom: 'Monkole', tarif: '70 $, 80 $, 95 $; 190 $ — global plan', repere: 'Mont-Ngafula: Ngafani Avenue no. 4808' },
        { nom: 'Mongala', tarif: '135 $; 190 $ — global plan', repere: 'Gombe: Mongala Avenue, CCTV / Canal Kin landmark' },
        { nom: 'Ngaliema Center', tarif: '145 $', repere: 'Kintambo, near the store' },
        { nom: 'Clinique Ngaliema', tarif: '175 $', repere: 'Ngaliema' },
        { nom: 'D.H.K — De Smet Hospital of Kinsuka', tarif: '145 $', repere: 'Ngaliema: Avenue de l’École no. 2; Gombe: Boulevard du 30 Juin no. 374' },
        { nom: 'Centre de Santé de Référence de Kimbondo', tarif: '20 $', repere: 'Bandalungwa: Chef Kinzonzi Avenue no. 283' },
        { nom: 'Centre Hospitalier Shekina', tarif: '20 $, 30 $, 40 $, 70 $', repere: 'Barumbu: Cadastre Avenue no. 4014, Ndolo' },
        { nom: 'Promedis', tarif: '40 $, 70 $', repere: 'Limete, Matete, Ngaliema, Mont-Ngafula and N’Sele/Kinkole' },
        { nom: 'Saint Vincent de Paul', tarif: '30 $', repere: 'N’Sele: Ilaka Avenue no. 7, Bibwa' },
        { nom: 'HJ Hospitals', repere: 'Address to be confirmed' },
        { nom: 'Saint Joseph', tarif: '65 $ single; 70 $ family', repere: 'Limete: 15th Street, Residential district' },
        { nom: 'Centre Hospitalier Nganda', repere: 'Kintambo: Haute Tension Avenue no. 3816' },
        { nom: 'Centre Hospitalier Roi Baudouin Ier', tarif: '20 $', repere: 'Masina: Bolenge Avenue no. 28' },
        { nom: 'Clinique Diamant', repere: 'Gombe: Boulevard du 30 Juin no. 3642' },
        { nom: 'Clinique IK (CIK)', tarif: '70 $, 145 $', repere: 'Ngaliema: Kwango Avenue no. 3, Joli-Parc' },
        { nom: 'Open Clinic', tarif: '40 $, 70 $', repere: 'Gombe: Oranger and 24 Novembre Avenues, opposite UBA' },
        { nom: 'Centre Hospitalier Médecin de Nuit', repere: 'Gombe: Province Avenue no. 4744' },
        { nom: 'Centre Hospitalier Boyambi — Salvation Army', repere: 'Barumbu: Kasaï Avenue no. 12' },
        { nom: 'Clinique Oasis de Vie', tarif: '30 $; 45 $, 70 $, 125 $', repere: 'Barumbu: Kabambare Avenue no. 6050' },
        { nom: 'Centre Hospitalier Bolingani', tarif: '30 $; 40 $', repere: 'Ngaliema: Songe Avenue no. 1, Musey Binza Ozone' },
        { nom: 'Polyclinique de Kinshasa', repere: 'Gombe: Flamboyant Avenue no. 34' },
        { nom: 'IK Medical Center', tarif: '30 $', repere: 'Ngaliema: Done Béatrice Avenue no. 22' },
      ],
    },
  },

  recrutement: {
    postes: [
      { code: 'agent-at', nom: 'AT agent (field agent)' },
      { code: 'chef-equipe', nom: 'Team leader' },
      { code: 'superviseur', nom: 'Supervisor' },
      { code: 'encodeur', nom: 'Encoder' },
      { code: 'spontanee', nom: 'Spontaneous application' },
    ],
  },

  ui: {
    meta: {
      accueil: {
        title: 'MAASH — Authorized Mutual for Socio-Humanitarian Assistance',
        description:
          'MAASH — Authorized Mutual for Socio-Humanitarian Assistance. Protected with full dignity, at low cost. PROSOC programme, Kinshasa, Democratic Republic of the Congo.',
      },
      presentation: {
        title: 'About — MAASH',
        description:
          'Purpose, missions, vision and principles of MAASH, a non-profit social protection mutual in Kinshasa (DRC).',
      },
      gouvernance: {
        title: 'Governance — MAASH',
        description:
          'MAASH governance: general assembly, board, executive committee and the 12 organizational units of the mutual.',
      },
      services: {
        title: 'Services and benefits — MAASH',
        description:
          'The 4 MAASH benefit branches (pensions, community, health, specialized) and benefits A to J for members.',
      },
      prosoc: {
        title: 'PROSOC programme — MAASH',
        description:
          'PROSOC: MAASH social coverage programme, Prosoc application, user roles, Mobile Money and data protection.',
      },
      activites: {
        title: 'Activities — MAASH',
        description: 'Discover MAASH activities: consultation, support, community engagement and socio-humanitarian assistance.',
      },
      adhesion: {
        title: 'Membership and pricing — MAASH',
        description:
          'MAASH plans from Solo (2 USD) to F6 (9 USD) per month: required documents, dependants and Mobile Money or Visa payment.',
      },
      contact: {
        title: 'Contact — MAASH',
        description:
          'Contact MAASH: head office address in Ngaliema (Kinshasa), phones, WhatsApp, emails and opening hours.',
      },
      recrutement: {
        title: 'Careers — MAASH',
        description:
          'Open positions at MAASH: field agent, team leader, supervisor… apply online and send your CV.',
      },
      introuvable: {
        title: 'Page not found — MAASH',
        description: 'The requested page does not exist or has been moved.',
      },
    },

    nav: {
      accueil: 'Home',
      presentation: 'About',
      gouvernance: 'Governance',
      services: 'Services',
      prosoc: 'PROSOC',
      adhesion: 'Membership',
      activites: 'Activities',
      contact: 'Contact',
      join: 'Join',
      login: 'Log in',
      recrutement: 'Careers',
    },
    burger: { open: 'Open menu' },
    theme: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      lightTitle: 'Light mode',
      darkTitle: 'Dark mode',
    },
    lang: { choose: 'Choose a language', title: 'Language' },

    footer: {
      navigation: 'Navigation',
      contact: 'Contact',
      hours: 'Opening hours',
      desc: '{name} — a non-profit social protection mutual, implementing the PROSOC programme.',
      rights: '© {year} MAASH — All rights reserved.',
      created: 'Founded on {date} • Kinshasa, DRC',
    },

    common: {
      joinMaash: 'Join MAASH',
      contactUs: 'Contact us',
      discoverServices: 'Discover our services',
      downloadApp: 'Download the app',
      whatsapp: 'Contact MAASH on WhatsApp',
    },

    home: {
      badge: 'Welcome to MAASH',
      infoTitle: 'Key information',
      infoCreationLabel: 'Founded',
      infoRecognitionLabel: 'Recognition',
      infoRecognition: 'F92/56.275 (Ministry of Justice)',
      infoSeatLabel: 'Head office',
      infoSeat: 'Silikin Village, Ngaliema, Kinshasa — {pays}',
      infoMottoLabel: 'Motto',
      stats: [
        { valeur: '4', label: 'benefit branches' },
        { valeur: '4', label: 'districts covered in Kinshasa' },
        { valeur: '24', label: 'targeted communes in Kinshasa' },
        { valeur: '2 USD', label: 'monthly contribution from the Solo plan' },
      ],
      whoBadge: 'Who we are',
      whoTitle: 'A social protection mutual for everyone',
      more: 'Learn more',
      vision: 'Our vision',
      principles: 'Our principles',
      servicesBadge: 'Our services',
      servicesTitle: 'Four branches of protection',
      servicesSubtitle:
        'Accessible benefits suited to the needs of families and the informal sector.',
      prosocPoints: [
        'Simplified membership and administration',
        'Mobile Money and Visa card payments',
        'Token voucher to guide members to providers',
      ],
      discoverProgram: 'Discover the programme',
      memberBadge: 'Become a member',
      memberTitle: 'Join MAASH today',
      memberSubtitle: 'Membership fee {fee} Plans from {price} per month.',
      viewPrices: 'See pricing',
    },

    presentation: {
      h1: 'Institutional overview',
      purpose: 'Our purpose',
      vision: 'Vision',
      missionsBadge: 'Missions and purposes',
      missionsTitle: 'What MAASH commits to doing',
      missionsSubtitle:
        'Missions and purposes drawn from the Integrated Institutional Reference Framework (RII).',
      principlesBadge: 'Principles',
      principlesTitle: 'How we work',
      principlesSubtitle:
        'Principles drawn from the RII competency framework. This summary does not constitute an official list of values.',
      mottoLabel: 'Motto:',
      zonesBadge: 'Areas of operation',
      zonesTitle: 'Present in Kinshasa',
      zonesSubtitle:
        'Fields: social protection, socio-humanitarian activities and support for members.',
      zoneCurrent: 'Current coverage',
    },

    gouvernance: {
      h1: 'Governance and organization',
      badge: 'Institutional structure',
      title: '12 organizational units',
      subtitle: 'Detailed publication scope on the site: to be confirmed by MAASH.',
    },

    services: {
      h1: 'MAASH services',
      hero: 'Four covered branches — Pensions, Community, Health Care and Specialized — with benefits A to J and the coverages offered by partners.',
      note: 'Health rates are monthly, per family up to six people, and are added to MAASH’s monthly contributions. Detailed benefits, VIP rates, caps and exclusions are still to be provided by MAASH.',
    },

    prosoc: {
      h1: 'PROSOC programme',
      featuresBadge: 'Features',
      featuresTitle: 'What the Prosoc app does',
      rolesBadge: 'User roles',
      rolesTitle: 'User categories',
      dataTitle: 'Data protection',
      groupsTitle: 'Eligible groups',
      ctaTitle: 'Join MAASH right now',
      ctaText:
        'Membership, contribution payments and tracking of your record online, all made simple.',
    },

    activites: {
      h1: 'MAASH activities',
      hero: 'Discover the actions and initiatives carried out by MAASH for members and communities.',
      badge: 'Our field action',
      title: 'MAASH activities',
      subtitle: 'A local presence to listen, support and improve coverage for families.',
      futureBadge: 'Coming soon',
      futureTitle: 'Share MAASH activities',
      futureText: 'This gallery will be expanded with photos and reports from upcoming MAASH activities.',
    },

    adhesion: {
      h1: 'Membership and pricing',
      hero: 'Become a MAASH member and enjoy the benefits of the PROSOC programme.',
      badge: 'Monthly contributions',
      title: 'Family plans',
      thPlan: 'Plan',
      thComposition: 'Composition',
      thMonthly: 'Monthly contribution',
      noteHealth1: 'Health care in addition to contributions: standard category',
      noteHealth2: 'per family, community care',
      noteHealth3: 'from',
      noteHealth4: 'per family, up to six people.',
      docsTitle: 'Required documents',
      depsTitle: 'Dependants',
      payTitle: 'Payment',
      payList: [
        'Mobile Money — all operators in the DRC',
        'Visa card',
        'Receipt printed by the POS terminal',
        'Mobile Money confirmation message via Prosoc',
      ],
      howBadge: 'How it works',
      howTitle: 'How to join',
      ctaTitle: 'Ready to join?',
      ctaText: 'Join MAASH online or contact the secretariat — {phone} (WhatsApp).',
    },

    contact: {
      h1: 'Contact',
      hero: 'We are at your service for any information about MAASH and the PROSOC programme.',
      addressTitle: 'Head office address',
      phoneEmailTitle: 'Phone and email',
      secretariat: 'Secretariat:',
      emailLabel: 'Email:',
      secretariatEmail: 'Secretariat (email):',
      whatsappBtn: 'Contact us on WhatsApp',
      hoursTitle: 'Opening hours',
      coverageTitle: 'Coverage',
      coverageText:
        'Current coverage: Tshangu, Mont-Amba, Funa and Lukunga districts in Kinshasa. Rollout planned in the 24 communes of Kinshasa.',
      domainNote:
        'Planned official domain: {domaine} — availability and reservation to be checked. Map link: to be completed.',
    },

    recrutement: {
      h1: 'Join MAASH',
      hero: 'Do you share our values? Join MAASH and help protect Congolese people, in the field and at head office.',
      postesBadge: 'Open positions',
      postesTitle: 'Join our teams',
      postesText:
        'The positions below match the PROSOC programme roles. No matching profile? Apply spontaneously.',
      formBadge: 'Application',
      formTitle: 'Application form',
      nom: 'Full name',
      tel: 'Phone (e.g. +243…)',
      email: 'Email address',
      poste: 'Position',
      diplome: 'Education level',
      experience: 'Years of experience',
      expPlaceholder: 'E.g. 3 years',
      disponibilite: 'Availability',
      message: 'Message (optional)',
      cvNote: 'Your CV: send it to the secretariat via WhatsApp after submitting the form (button below).',
      consentLabel: 'I agree that my data may be used solely for MAASH recruitment.',
      notePrivacy:
        'Your information is used exclusively for the MAASH recruitment process and is not shared with third parties.',
      submit: 'Send my application',
      sending: 'Sending…',
      againBtn: 'New application',
      errRequired: 'Please fill in all required fields.',
      errEmail: 'Invalid email address.',
      errTel: 'Invalid phone number.',
      errConsent: 'Please accept the use of your data.',
      errSend:
        'Sending failed. Please try again or send your CV directly via WhatsApp (button below).',
      successTitle: 'Application sent!',
      successText:
        'Thank you. Your application has been forwarded to the MAASH secretariat — now send your CV via WhatsApp, and we will contact you very soon.',
      whatsappCta: 'Send via WhatsApp',
      recruitBadge: 'Recruitment',
      recruitTitle: 'We are hiring',
      recruitText:
        'Opportunities at MAASH: field agents, team leaders and more. Check the open positions and apply online.',
      recruitCta: 'See open positions',
    },

    notFound: {
      h1: 'Page not found',
      hero: 'The page you are looking for does not exist or has been moved.',
      text: 'The address may be wrong or the page has been removed. From the home page you will find all the information about MAASH and the PROSOC programme.',
      homeBtn: 'Back to home',
    },
  },
}
