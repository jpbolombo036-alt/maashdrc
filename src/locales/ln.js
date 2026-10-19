/**
 * Catalogue LINGALA (ln) — contenus institutionnels et textes d'interface MAASH.
 * Copie de la structure exacte de fr.js.
 * Traduction d'apport : à faire relire par MAASH. Le nom officiel, le slogan
 * (déjà en lingala) et les formules juridiques restent tels quels.
 */
export default {
  maash: {
    nom: 'MAASH',
    nomComplet: 'Mutuelle Autorisée d’Assistance Socio-Humanitaire', // nom ofisiel (FR)
    slogan: 'Na mbongo muke, tobateli bomoto na biso.',
    sloganLingala: 'Na mbongo muke, tobateli bomoto na biso.',
    devise: 'Mbongi – Salongo – Likelemba',
    creation: '15 julleti 2023',
    reconnaissance: 'Dokimante ya koyembo F92/56.275 — Ministeré ya Lisawa',
    domaine: 'maashprosoc.cd',
    prosocAdhesionUrl: 'https://prosoc.maashrdc.com/adhesions/create',
    prosocLoginUrl: 'https://prosoc.maashrdc.com/login',
    apkUrl: '/apk/prod-prosoc-14.10.apk',
    email: 'contact@maashprosoc.cd',
    emailSecretariat: 'secretariat@maashprosoc.cd',
    telephone: '+243 976 158 691',
    telephoneHref: 'tel:+243976158691',
    whatsappHref: 'https://wa.me/243976158691',
    adresse: {
      ligne1: '372, avenue Colonel Mondjiba, maanda ya Bassoko',
      ligne2: 'Komun ya Ngaliema, Kinshasa',
      ligne3: 'Silikin Village, concession Cotex',
      pays: 'Republiki ya Demokrasiki ya Kongo',
    },
    horaires: [
      { jour: 'Mokolo ya maboko — mokolo ya mitanu', heure: '08:00 – 16:00' },
      { jour: 'Samedi', heure: '09:00 – 13:00' },
      { jour: 'Lohore na misapi', heure: 'Kolakani' },
    ],
    zones: {
      couverture: [
        'Distriki ya Tshangu',
        'Distriki ya Mont-Amba',
        'Distriki ya Funa',
        'Distriki ya Lukunga',
      ],
      extension:
        'Etikali ya kobimba na komun 24 ya Kinshasa, pamasaka na bokonzi bwa komun ebandeli.',
    },
  },

  presentation: {
    resume:
      'MAASH etika Mutuelle Autorisée d’Assistance Socio-Humanitaire — mutuelle ya kobatela bomoto na mboka ya lisalu, ya kotalisa mobimba te. Eteka programme ya PROSOC, moko na application ya Prosoc.',
    raisonCreation:
      'Kokwesola mopitisi ya mbongo na mbokano, na kotongola kobatela bomoto mokolo na mokolo — likanisi na bato ba basolo — na kobatela mpasani ya kala na bango ba basolo na mbwa ya kokotama, na kobatela ya dongokolo na bango ba kobatwama te.',
    missions: [
      'Koyeba na kopesa boyebani bwa bokobatami na bomoto.',
      'Kosololisa mboka kobatela bomoto.',
      'Kokendekeza na kobongola misapi ya kobatela bomoto na kobotami na bato.',
      'Kokendekeza na makambo ya botondi, ya mwasu na ya kotongola, na bikalo bya biso na bapartneri.',
    ],
    vision: 'Kotongola bokobatami bwa bomoto na bato ba basolo.',
    principes: [
      'Bokundani na mibeko ya mutuelle',
      'Lolengeli na kobangwaka, na kokabola te',
      'Kemba',
      'Kobwa konfliti ya mbokano',
      'Lolengeli ya bikolo',
      'Koyokolana na koyebisa makambo ya biso',
    ],
  },

  gouvernance: {
    introduction:
      'Boyungani bwa MAASH bolakamaki na makambo 12. Conseil ya Kosala makambo ezali na Bokonzi ya Malamu pamasaka na bango ba kosala; CCA eza na bikalo bya yango moko, te na bokonzi bwa CE. CA eza na sekreteri ya yango moko, ebandeli na Sekreteri ya Mokolo.',
    blocs: [
      { nom: 'Bandaka ya Bato (AG)', role: 'Bikalo bikulu bya koyungisa makambo na memba.' },
      { nom: 'Conseil ya Bokonzi (CA)', role: 'Boyebisi bwa makambo; eza na sekreteri ya yango moko.' },
      { nom: 'Conseil ya Kosala makambo (CE)', role: 'Ezali na Bokonzi ya Malamu pamasaka na bango ba kosala.' },
      { nom: 'Bokonzi ya Malamu pamasaka (CG)', role: 'Boyebisi bwa sili bwa programme na institusion.' },
      { nom: 'Sekreteri ya Mokolo', role: 'Bongoli ya ba administrator na bango ba koyokolama.' },
      { nom: 'Kolakisa na Kamera ya Maboko (CCA)', role: 'Kolakisa na kolandalisa, bikalo bya yango moko.' },
      { nom: 'Bango ba Sili na Sosyo-Humanitaire', role: 'Bokonzi bwa bango ba sili na misapi ya sosyo-humanitaire.' },
      { nom: 'Mbongo na Bango ba kosala', role: 'Bokonzi bwa mbongo na bango ba kosala.' },
      { nom: 'Digital', role: 'Mikongo ya data na application ya Prosoc.' },
      { nom: 'Mwasu ya Bato', role: 'Bokobatami na basombo ya mwasu.' },
      { nom: 'Taifansi', role: 'Bapartneri na bango ba taifansi ya pamba.' },
      { nom: 'Komunikasion na Yebisa na Monde', role: 'Komunikasion ya institusion na bapartneri.' },
    ],
  },

  branches: [
    {
      id: 'pensions',
      titre: 'Minda ya Pensions',
      icon: 'home',
      resume: 'Basombo ezali te na ntango ya cotizasion.',
      prestations: [
        { code: 'A', nom: 'Ntango ya bokolo', detail: 'Ntango ya bokolo. Makambo ya mondu, ndenge na bango na bango: koyebisa.' },
        { code: 'B', nom: 'Ntango ya bakufi', detail: 'Lisalu ya bakufi, ekoki kokolwa tango eyimbotami bokoyani.' },
      ],
    },
    {
      id: 'communautaire',
      titre: 'Minda ya Bokundani',
      icon: 'users',
      resume: 'Bokundani na koyokolama na memba mokolo na mokolo.',
      prestations: [
        { code: 'C', nom: 'Mikrokredit', detail: 'Mikrokredit ya mutuelle na luya te, biluya te. Nkianu ya miei misapi. Krediti ya dongokolo na bapartneri ba MAASH.' },
        { code: 'D', nom: 'Kantin ya liya', detail: 'Kokamwa na biloko ya bisani na mbongo muke, tango eyokami.' },
        { code: 'E', nom: 'Lisalu ya mibeko', detail: 'Koyokolama na yela na mibeko ya memba, mbwa ya kotindwa.' },
        { code: 'F', nom: 'Sanza ya maboko', detail: 'Koyokolama na bana ba gangani ya koyekola maboko misusu na ntango te, tango eyokami.' },
        { code: 'G', nom: 'Kobanda', detail: 'Kobangama na bantu ba bakufi na bato ba kokotama na ntango te, tango eyokami.' },
      ],
    },
    {
      id: 'sante',
      titre: 'Minda ya Mwasu',
      icon: 'heart',
      resume: 'Mila mibale ya mwasu, mpaka bantu 6 na ndako ntango. Taifansi ya mwezi na ndako ntango, na kokwama cotizasion. Kokamwa na mwezi eyokanaki na kotikwa.',
      prestations: [
        { code: 'H', nom: 'Kategori ya banambo', detail: 'Bolongo ya referans. 19 USD / mwezi / ndako ntango (mpaka bantu 6).' },
        { code: 'I', nom: 'Mwasu ya VIP', detail: 'Bolongo ya bokwasani ya lingi. Taifansi: koyebisa.' },
        { code: 'J', nom: 'Mwasu ya komunauté', detail: 'Bolongo ya mwasu ya makambo. Kuanza na 10 USD / mwezi / ndako ntango (mpaka bantu 6).' },
      ],
    },
    {
      id: 'specialisee',
      titre: 'Minda ya Singa',
      icon: 'shield',
      resume: 'Eyungani na bango ba taifansi ya pamba moko ba basombo na kotongola bokobatami. Basombo ya taifansi baza na bapartneri; MAASH etiki yango te ya nkombo.',
      prestations: [
        { code: '•', nom: 'Lisalu ya bakufi', detail: 'Basombo bwa bataifansi ba partneri, na ndenge ya bango.' },
        { code: '•', nom: 'Bokolo ya dongokolo', detail: 'Basombo bwa bataifansi ba partneri, na ndenge ya bango.' },
        { code: '•', nom: 'Sanza', detail: 'Basombo bwa bataifansi ba partneri, na ndenge ya bango.' },
        { code: '•', nom: 'Mosimboli ya mokolo', detail: 'Basombo bwa bataifansi ba partneri, na ndenge ya bango.' },
      ],
    },
  ],

  prosoc: {
    resume:
      'PROSOC programme ya kobatela bomoto ya kotekwa na MAASH. Prosoc application ya kobongola etikali na kotekwa yango.',
    fonctionnalites: [
      'Kosala na bango ba memba na bokongoli ya ba administrator (bokoyani na agent ya AT)',
      'Kokufola na bolingo na ndenge ya bon ya jeton',
      'Kokendekeza na moko eyokisaki',
      'Kotika na Mobile Money (ba opérateur bonso na RDC) na kaleti ya Visa',
      'Résu ekomaki tango bokoyani oyo cotizasion: numéro, memba, ndenge ya makambo, ntango, datu na agent',
      'Makambo ma cotizasion ya memba ayoki kotala (ntango, datu, ngana, statut)',
      'Wallet ya agent na kotindwa na mbongo na kotala statut',
      'Ba indicateurs ya sili: objektif ya mokolo, ya sikamusu na ya mwezi',
    ],
    roles: [
      { nom: 'Agent ya AT (agent ya bokambi)', detail: 'Bokoyani, cotizasion, komisama ya résu, wallet na ba indicateurs ya sili.' },
      { nom: 'Moto ya memba', detail: 'Kotala cotizasion na ye, profil na ye, bato bako belengaki na contacts ya agent na ye AT.' },
      { nom: 'Chef ya ekipi', detail: 'Boyekoli bwa makambo ma bango ba agent: mibale, ntango, na ngana (ya mokolo, ya sikamusu, ya mwezi).' },
      { nom: 'Mokoli mbongo', detail: 'Kokoli mbongo na kotika, kotala ntango ya sikamusu moya ya ntango ezokolaki.' },
      { nom: 'Mokanisi', detail: 'Bokonzi bwa bana ba chef ya ekipi na bango ba agent, kobikama memba na koyebisa makambo moko.' },
      { nom: 'Encodeur', detail: 'Bikisi, kolakisa na koyebisa makambo ma dossiers.' },
    ],
    regleDonnees:
      'Ba agent ya bokambi batondoli te data ya mwasu oyo ya kliniki; data oyo etiki te na Prosoc. Eza na bokonzi bwa ba service ya MAASH na bango ba kotiki basombo ya mwasu.',
  },

  cibles: {
    adherent: 'Moto ya memba: na mibu 18 mpaka 55.',
    personnesCharge: [
      'Bana ba 0 mpaka 17 mibu — dokimante esengeli te, kombo na bango na bomoko kosaleliswa.',
      'Bana ba 18 mpaka 25 mibu oyo bazali na sanza — na dokimante ya sanza.',
      'Mokolakani na mibu 18.',
      'Bantu ba mibu 56 na mingi.',
    ],
    documents: [
      'Kombo na bomoko na bonso.',
      'Kaleti ya libanda na bato ba mibu 18 na mingi.',
      'Dokimante ya sanza na bana ba 18 mpaka 25 mibu bazali na sanza ntango nioso.',
    ],
    formules: [
      { nom: 'Solo', composition: '1 moto', prix: '2 USD' },
      { nom: 'Mibale', composition: 'Moto ya memba + 1 moko belengaki', prix: '4 USD' },
      { nom: 'F3', composition: 'Moto ya memba + 2 bato ba belengaki', prix: '4,50 USD' },
      { nom: 'F4', composition: 'Moto ya memba + 3 bato ba belengaki', prix: '6 USD' },
      { nom: 'F5', composition: 'Moto ya memba + 4 bato ba belengaki', prix: '7,50 USD' },
      { nom: 'F6', composition: 'Moto ya memba + 5 bato ba belengaki', prix: '9 USD' },
    ],
    adherence: '1,50 USD na moto ya memba tango ayambaki, na kila nkianu ya mwaka.',
    remarqueFormules: 'Ba formule F3 na F6 ezali na 1,50 USD na muntu na mwezi.',
    modalites: [
      'Bokoyani na MAASH: na internet na site, na agent ya bokambi, to na application ya Prosoc.',
      'Bonso agent ya MAASH ayoki kosala bokoyani; mokanisi akende akamwa memba na agent ya bokambi.',
      'Kotika na Prosoc, na Mobile Money (ba opérateur bonso na RDC) na kaleti ya Visa.',
    ],
  },

  hopitaux: {
    titre: 'Bolongo ya referans — kategori ya banambo',
    voir: 'Tala lita ya bolongo',
    fermer: 'Efungola',
    repere: 'Repère',
    itineraire: 'Nzela ya kokende',
    aVenir: 'Banakisi misusu bazongwama sikasusu.',
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

  ui: {
    meta: {
      accueil: {
        title: 'MAASH — Mutuelle Autorisée d’Assistance Socio-Humanitaire',
        description:
          'MAASH — Mutuelle Autorisée d’Assistance Socio-Humanitaire. Na mbongo muke, tobateli bomoto na biso. Programme PROSOC, Kinshasa, Republiki ya Demokrasiki ya Kongo.',
      },
      presentation: {
        title: 'Kosolola — MAASH',
        description:
          'Mbonsa, basombo, vizyon na mibeko ya MAASH, mutuelle ya kobatela bomoto ya biloko biso na yo na Kinshasa (RDC).',
      },
      gouvernance: {
        title: 'Bokonzi — MAASH',
        description:
          'Bokonzi bwa MAASH: bandaka ya bato, conseil ya bokonzi, conseil ya kosala makambo na makambo 12 ya boyungani ya mutuelle.',
      },
      services: {
        title: 'Basombo na taifansi — MAASH',
        description:
          'Minda minei ya basombo ya MAASH (pensions, bokundani, mwasu, singa) na basombo A na J na memba.',
      },
      prosoc: {
        title: 'Programme ya PROSOC — MAASH',
        description:
          'PROSOC: programme ya kobatela bomoto ya MAASH, application ya Prosoc, bikolo bya bato, Mobile Money na kobatela ba data.',
      },
      adhesion: {
        title: 'Bokoyani na ba taifansi — MAASH',
        description:
          'Ba formule ya MAASH kuanza na Solo (2 USD) na F6 (9 USD) na mwezi: dokimante esengeli, bato bako belengaki na kotika na Mobile Money to Visa.',
      },
      contact: {
        title: 'Koyokana — MAASH',
        description:
          'Koyokana na MAASH: bikalo na Ngaliema (Kinshasa), telefoni, WhatsApp, mails na saa ya koyoka.',
      },
      introuvable: {
        title: 'Page elabami te — MAASH',
        description: 'Page oyo osaki elelami te, oyo ekotindami.',
      },
    },

    nav: {
      accueil: 'Ebandelo',
      presentation: 'Kosolola',
      gouvernance: 'Bokonzi',
      services: 'Basombo',
      prosoc: 'PROSOC',
      adhesion: 'Bokoyani',
      contact: 'Koyokana',
      join: 'Koyana',
      login: 'Login',
    },
    burger: { open: 'Bukisa menu' },
    theme: {
      toLight: 'Kosimba na mode mwanamine',
      toDark: 'Kosimba na mode mulembe',
      lightTitle: 'Mode mwanamine',
      darkTitle: 'Mode mulembe',
    },
    lang: { choose: 'Lolaka lolobo ya yo', title: 'Lolobo' },

    footer: {
      navigation: 'Navigation',
      contact: 'Koyokana',
      hours: 'Saa',
      desc: '{name} — mutuelle ya kobatela bomoto ya biloko biso na yo, ya koteka programme ya PROSOC.',
      rights: '© {year} MAASH — Tous droits réservés.',
      created: 'Yabotamiwe na {date} • Kinshasa, RDC',
    },

    common: {
      joinMaash: 'Yana na MAASH',
      contactUs: 'Yokana na biso',
      discoverServices: 'Tala basombo biso',
      downloadApp: 'Downloada application',
    },

    home: {
      badge: 'Bofungamiwe na MAASH',
      infoTitle: 'Biloko bikulu',
      infoCreationLabel: 'Kobotwa',
      infoRecognitionLabel: 'Koyembo',
      infoRecognition: 'F92/56.275 (Ministeré ya Lisawa)',
      infoSeatLabel: 'Bikalo',
      infoSeat: 'Ngaliema, Kinshasa — {pays}',
      infoMottoLabel: 'Lisolo',
      stats: [
        { valeur: '4', label: 'minda ya basombo' },
        { valeur: '4', label: 'distriki ebatamiwe na Kinshasa' },
        { valeur: '24', label: 'komun etikaki na Kinshasa' },
        { valeur: '2 USD', label: 'cotizasion ya mwezi na kuanza na Solo' },
      ],
      whoBadge: 'Twe nini?',
      whoTitle: 'Mutuelle ya kobatela bomoto na munongo wonso',
      more: 'Tala mingi',
      vision: 'Vizyon ya biso',
      principles: 'Mibeko ya biso',
      servicesBadge: 'Basombo biso',
      servicesTitle: 'Minda minei ya kobatela',
      servicesSubtitle:
        'Basombo esengeli, eyokani na bokambi bwa ba ndako na ba ntango ya basolo.',
      prosocPoints: [
        'Koyana na bokongoli esengeli bwa ba administrator',
        'Kotika na Mobile Money na kaleti ya Visa',
        'Bon ya jeton ya kokendekeza na bato ba kotiki basombo',
      ],
      discoverProgram: 'Tala programme',
      memberBadge: 'Kozala memba',
      memberTitle: 'Yana na MAASH na lelo',
      memberSubtitle: 'Koyana {fee} — ba formule kuanza na {price} na mwezi.',
      viewPrices: 'Tala ba tarif',
    },

    presentation: {
      h1: 'Kosolola ya institusion',
      purpose: 'Mbonsa ya kozala',
      vision: 'Vizyon',
      missionsBadge: 'Basombo na makomi',
      missionsTitle: 'Bisengeli bya MAASH ya kokola',
      missionsSubtitle: 'Basombo na makomi bazomaki na Référentiel Institutionnel Intégré (RII).',
      principlesBadge: 'Mibeko',
      principlesTitle: 'Mibeko ya biso ya kosala',
      principlesSubtitle:
        'Mibeko ezangi na RII. Boyekoli bino te ekozala ndenge ya makambo mangai.',
      mottoLabel: 'Lisolo:',
      zonesBadge: 'Bikalo bya kosala',
      zonesTitle: 'Turi na Kinshasa',
      zonesSubtitle:
        'Makambo: kobatela bomoto, misapi ya sosyo-humanitaire, na koyokolama na memba.',
      zoneCurrent: 'Kobatamiwe',
    },

    gouvernance: {
      h1: 'Bokonzi na boyungani',
      badge: 'Boyungani ya institusion',
      title: 'Makambo 12 ma boyungani',
      subtitle: 'Boyekoli mingi ya publikasi na site etikali: koyebisa na MAASH.',
    },

    services: {
      h1: 'Basombo ya MAASH',
      hero: 'Minda minei ebatamiwe — na basombo A na J, na bokobatami bwa bango ba taifansi ya pamba.',
      note: 'Ba taifansi ya mwasu azali na mwezi, na ndako ntango na bantu 6, na ezongwami na cotizasion ya mwezi ya MAASH. Ba taifansi misusu, ba VIP, ba nkisi na bawuli te, bazali na kotindama na MAASH.',
    },

    prosoc: {
      h1: 'Programme ya PROSOC',
      featuresBadge: 'Basombo',
      featuresTitle: 'Application ya Prosoc eyoki kokola',
      rolesBadge: 'Bikolo',
      rolesTitle: 'Banakisi ba bato ba kosalemisa',
      dataTitle: 'Kobatela ba data',
      groupsTitle: 'Bato bazo koka',
      ctaTitle: 'Yana na MAASH na lelo sikasusu',
      ctaText:
        'Koyana, kotika cotizasion, na kotala dossiers ya yo na internet — na sili esengeli.',
    },

    adhesion: {
      h1: 'Bokoyani na ba taifansi',
      hero: 'Yana na MAASH omona basombo ya programme ya PROSOC.',
      badge: 'Cotizasion ya mwezi',
      title: 'Ba formule ya ndako',
      thPlan: 'Formule',
      thComposition: 'Bokaboli',
      thMonthly: 'Cotizasion ya mwezi',
      noteHealth1: 'Mwasu ekokwama cotizasion na ngai: kategori ya banambo',
      noteHealth2: 'na ndako ntango, mwasu ya komunauté',
      noteHealth3: 'kuanza na',
      noteHealth4: 'na ndako ntango, mpaka bantu 6.',
      docsTitle: 'Dokimante esengeli',
      depsTitle: 'Bato bako belengaki',
      payTitle: 'Kotika',
      payList: [
        'Mobile Money — ba opérateur bonso na RDC',
        'Kaleti ya Visa',
        'Recu ekomaki na machine ya POS',
        'Message ya kobongisama ya Mobile Money na Prosoc',
      ],
      howBadge: 'Ndenge ya kosala',
      howTitle: 'Ndenge ya koyana',
      ctaTitle: 'Oyoki koyana?',
      ctaText: 'Yana na MAASH na internet, oyo oyokolama na scretariat — {phone} (WhatsApp).',
    },

    contact: {
      h1: 'Koyokana',
      hero: 'Turi kosikisila yo na makambo moke ya MAASH na programme ya PROSOC.',
      addressTitle: 'Bikalo bya bokonzi',
      phoneEmailTitle: 'Telefoni na mail',
      secretariat: 'Sekreteri:',
      emailLabel: 'Mail:',
      secretariatEmail: 'Sekreteri (mail):',
      whatsappBtn: 'Yokana na WhatsApp',
      hoursTitle: 'Saa ya koyoka',
      coverageTitle: 'Kobikama',
      coverageText:
        'Kobatamiwe na lelo: distriki ya Tshangu, Mont-Amba, Funa na Lukunga na Kinshasa. Etikali ya kobimba na komun 24 ya Kinshasa.',
      domainNote:
        'Domaine ofisiel etikali: {domaine} — koyeba na kolanda. Lisalisi ya carte: kotindwa.',
    },

    notFound: {
      h1: 'Page elabami te',
      hero: 'Page oyo osaki elelami te, oyo ekotindami.',
      text: 'Lifongisi likoki kozala lisusu te, oyo page ekotindami. Na ebandelo, omona makambo manso ya MAASH na programme ya PROSOC.',
      homeBtn: 'Kokende na ebandelo',
    },
  },
}
