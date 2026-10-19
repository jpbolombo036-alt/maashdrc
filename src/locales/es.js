/**
 * Catálogo ES — contenidos institucionales y textos de interfaz MAASH.
 * El nombre oficial y el eslogan en lingala se conservan en el original.
 * Traducción automática redactada para revisión por MAASH.
 */
export default {
  maash: {
    nom: 'MAASH',
    nomComplet: 'Mutuelle Autorisée d’Assistance Socio-Humanitaire', // nombre oficial (FR)
    slogan: 'Protegidos con toda dignidad, a bajo precio.',
    sloganLingala: 'Na mbongo muke, tobateli bomoto na biso.',
    devise: 'Mbongi – Salongo – Likelemba',
    creation: '15 de julio de 2023',
    reconnaissance: 'Documento de reconocimiento F92/56.275 — Ministerio de Justicia',
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
      ligne1: '372, avenida Colonel Mondjiba, barrio Bassoko',
      ligne2: 'Comuna de Ngaliema, Kinshasa',
      ligne3: 'Silikin Village, concesión Cotex',
      pays: 'República Democrática del Congo',
    },
    horaires: [
      { jour: 'Lunes – viernes', heure: '08:00 – 16:00' },
      { jour: 'Sábado', heure: '09:00 – 13:00' },
      { jour: 'Domingos y festivos', heure: 'Cerrado' },
    ],
    zones: {
      couverture: [
        'Distrito de Tshangu',
        'Distrito del Mont-Amba',
        'Distrito del Funa',
        'Distrito del Lukunga',
      ],
      extension:
        'Despliegue previsto en las 24 comunas de Kinshasa, con administraciones comunales de proximidad.',
    },
  },

  presentation: {
    resume:
      'MAASH es la Mutual Autorizada de Asistencia Socio-Humanitaria, una mutual de protección social sin fines de lucro. Ejecuta el programa PROSOC, respaldado por la aplicación Prosoc.',
    raisonCreation:
      'Atenuar los efectos de los choques económicos y sociales y extender progresivamente la protección social, sobre todo en el sector informal, mediante una protección básica para las personas sin cobertura y una protección complementaria para las ya protegidas.',
    missions: [
      'Estudiar y proponer soluciones de cobertura y protección social.',
      'Divulgar la cultura de la protección social.',
      'Participar en la organización y mejora de los mecanismos de asistencia socio-humanitaria y cobertura social.',
      'Contribuir a acciones sociales, sanitarias y de desarrollo dentro de sus competencias y alianzas.',
    ],
    vision: 'Extender la cobertura de protección social a las personas del sector informal.',
    principes: [
      'Solidaridad y valores mutualistas',
      'Respeto y acogida sin discriminación',
      'Confidencialidad',
      'Prevención de conflictos de interés',
      'Respeto de las habilitaciones',
      'Cooperación y rendición de cuentas de las actividades',
    ],
  },

  gouvernance: {
    introduction:
      'La estructura de MAASH se presenta en 12 bloques. El Consejo de Ejecución comprend la Coordinación General y las estructuras operativas; la CCA es un órgano estatutario de control, sin subordinación funcional al CE. El CA dispone de su propia secretaría, distinta de la Secretaría General.',
    blocs: [
      { nom: 'Asamblea General (AG)', role: 'Órgano supremo de deliberación de los miembros.' },
      { nom: 'Consejo de Administración (CA)', role: 'Orientación estratégica; dispone de su propia secretaría.' },
      { nom: 'Consejo de Ejecución (CE)', role: 'Comprende la Coordinación General y las estructuras operativas.' },
      { nom: 'Coordinación General (CG)', role: 'Dirección operativa del programa y de la institución.' },
      { nom: 'Secretaría General', role: 'Coordinación administrativa y soportes transversales.' },
      { nom: 'Control y Cámara de Cuentas (CCA)', role: 'Control y auditoría, órgano estatutario independiente.' },
      { nom: 'Recursos Humanos y Socio-Humanitario', role: 'Gestión de los recursos humanos y acción socio-humanitaria.' },
      { nom: 'Finanzas y Operaciones', role: 'Gestión financiera y operativa.' },
      { nom: 'Digital', role: 'Sistemas de información y aplicación Prosoc.' },
      { nom: 'Salud Pública', role: 'Cobertura y prestaciones de salud.' },
      { nom: 'Seguros', role: 'Alianzas con las aseguradoras asociadas.' },
      { nom: 'Comunicación y Relaciones Exteriores', role: 'Comunicación institucional y alianzas.' },
    ],
  },

  branches: [
    {
      id: 'pensions',
      titre: 'Rama de Pensiones',
      icon: 'home',
      resume: 'Prestaciones gratuitas cubiertas por las cuotas.',
      prestations: [
        { code: 'A', nom: 'Ayudas de vejez', detail: 'Ayudas de vejez para la jubilación. Condiciones de edad, modalidades y montos: por precisar.' },
        { code: 'B', nom: 'Ayudas por fallecimiento', detail: 'Asistencia funeraria, disponible desde la aprobación de la adhesión.' },
      ],
    },
    {
      id: 'communautaire',
      titre: 'Rama Comunitaria',
      icon: 'users',
      resume: 'Solidaridad y acompañamiento a los miembros en el día a día.',
      prestations: [
        { code: 'C', nom: 'Microcrédito', detail: 'Microcrédito mutual sin intereses, cero comisiones. Periodo de prueba de dos meses. Crédito adicional con los asociados de MAASH.' },
        { code: 'D', nom: 'Cantina alimentaria', detail: 'Acceso a productos agropecuarios a bajo precio, cuando estén disponibles.' },
        { code: 'E', nom: 'Asistencia jurídica', detail: 'Acompañamiento gratuito en los procedimientos judiciales del miembro, tras la aprobación.' },
        { code: 'F', nom: 'Formaciones profesionales', detail: 'Acompañamiento de la juventud para el aprendizaje gratuito de distintos oficios, cuando estén disponibles.' },
        { code: 'G', nom: 'Alojamiento', detail: 'Cobertura gratuita de personas mayores y muy vulnerables, cuando esté disponible.' },
      ],
    },
    {
      id: 'sante',
      titre: 'Rama de Atención Sanitaria',
      icon: 'heart',
      resume: 'Tres tipos de atención, hasta seis personas por familia. Tarifas mensuales por familia, además de las cuotas. Acceso desde el mes siguiente al pago.',
      prestations: [
        { code: 'H', nom: 'Categoría estándar', detail: 'Hospitales de referencia. 19 USD / mes / familia (hasta 6 personas).' },
        { code: 'I', nom: 'Atención sanitaria VIP', detail: 'Centros hospitalarios privados de alta calidad. Tarifas: por completar.' },
        { code: 'J', nom: 'Atención sanitaria comunitaria', detail: 'Centros de salud locales. Desde 10 USD / mes / familia (hasta 6 personas).' },
      ],
    },
    {
      id: 'specialisee',
      titre: 'Rama Especializada',
      icon: 'shield',
      resume: 'Organizada junto a sociedades de seguros para mejorar las prestaciones y ampliar la cobertura. Los productos de seguro corresponden a los asociados; MAASH no los presenta como propios.',
      prestations: [
        { code: '•', nom: 'Previsión funeraria', detail: 'Producto de las aseguradoras asociadas, según convenios.' },
        { code: '•', nom: 'Jubilación complementaria', detail: 'Producto de las aseguradoras asociadas, según convenios.' },
        { code: '•', nom: 'Previsión educativa', detail: 'Producto de las aseguradoras asociadas, según convenios.' },
        { code: '•', nom: 'Ahorro de proyecto', detail: 'Producto de las aseguradoras asociadas, según convenios.' },
      ],
    },
  ],

  prosoc: {
    resume:
      'PROSOC es el programa de protección social ejecutado en MAASH. Prosoc es la aplicación de gestión utilizada para su dirección.',
    fonctionnalites: [
      'Registro y gestión administrativa de los afiliados (adhesión por el agente AT)',
      'Verificación de elegibilidad y mecanismo del bono de jetón',
      'Orientación hacia el prestador elegido',
      'Pago mediante Mobile Money (todos los operadores de la RDC) y con tarjeta Visa',
      'Recibo imprimible tras la adhesión o la cuota: referencia, afiliado, tipo de operación, monto, fecha y agente',
      'Historial de cuotas consultable por el afiliado (monto, fecha, periodo, estado)',
      'Cartera (wallet) del agente con solicitud de recarga y seguimiento del estado',
      'Indicadores de rendimiento: objetivos diario, semanal y mensual',
    ],
    roles: [
      { nom: 'Agente AT (agente de terreno)', detail: 'Adhesión, cuotas, impresión de recibos, wallet e indicadores de rendimiento.' },
      { nom: 'Afiliado', detail: 'Consulta de sus cuotas, perfil, personas a cargo y datos de su agente AT.' },
      { nom: 'Jefe de equipo', detail: 'Resumen de las recaudaciones de sus agentes: cantidad, monto, por periodo (diario, semanal, mensual).' },
      { nom: 'Cobrador', detail: 'Recaudaciones y cobros, consulta semanal de los montos recaudados.' },
      { nom: 'Supervisor', detail: 'Gestión de los jefes de equipo y de sus agentes, asignación de afiliados con trazabilidad.' },
      { nom: 'Codificador', detail: 'Complementos, control y trazabilidad de los expedientes.' },
    ],
    regleDonnees:
      'Los agentes de terreno no recopilan datos sanitarios o clínicos; estos datos no se almacenan en Prosoc. Corresponden a los servicios habilitados de MAASH y a los prestadores sanitarios.',
  },

  cibles: {
    adherent: 'Afiliado: de 18 a 55 años inclusive.',
    personnesCharge: [
      'Niños de 0 a 17 años — sin condición documentaria, identidad completa a registrar.',
      'Niños de 18 a 25 años inclusive aún estudiantes — con justificativo escolar.',
      'Cónyuge desde los 18 años.',
      'Personas de 56 años en adelante.',
    ],
    documents: [
      'Identidad completa para todos.',
      'Carné de identidad para los adultos.',
      'Pruebas o documentos escolares para los niños de 18 a 25 años aún estudiantes.',
    ],
    formules: [
      { nom: 'Solo', composition: '1 persona', prix: '2 USD' },
      { nom: 'Pareja', composition: 'Afiliado + 1 persona a cargo', prix: '4 USD' },
      { nom: 'F3', composition: 'Afiliado + 2 personas a cargo', prix: '4,50 USD' },
      { nom: 'F4', composition: 'Afiliado + 3 personas a cargo', prix: '6 USD' },
      { nom: 'F5', composition: 'Afiliado + 4 personas a cargo', prix: '7,50 USD' },
      { nom: 'F6', composition: 'Afiliado + 5 personas a cargo', prix: '9 USD' },
    ],
    adherence: '1,50 USD para el afiliado al inscribirse y luego en cada renovación anual.',
    remarqueFormules: 'Las fórmulas F3 a F6 corresponden a 1,50 USD por persona y por mes.',
    modalites: [
      'Adhesión en MAASH: en línea en el sitio, ante un agente de terreno o mediante la aplicación Prosoc.',
      'Cualquier agente de MAASH puede realizar una adhesión; el supervisor asigna después al miembro a un agente de terreno.',
      'Pago mediante Prosoc, con Mobile Money (todos los operadores de la RDC) y con tarjeta Visa.',
    ],
  },

  hopitaux: {
    titre: 'Hospitales de referencia — categoría estándar',
    voir: 'Ver la lista de hospitales',
    fermer: 'Cerrar',
    repere: 'Punto de referencia',
    itineraire: 'Cómo llegar',
    aVenir: 'Se añadirán más establecimientos próximamente.',
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
      { code: 'agent-at', nom: 'Agente AT (agente de terreno)' },
      { code: 'chef-equipe', nom: 'Jefe de equipo' },
      { code: 'superviseur', nom: 'Supervisor' },
      { code: 'encodeur', nom: 'Codificador' },
      { code: 'spontanee', nom: 'Candidatura espontánea' },
    ],
  },

  ui: {
    meta: {
      accueil: {
        title: 'MAASH — Mutual Autorizada de Asistencia Socio-Humanitaria',
        description:
          'MAASH — Mutual Autorizada de Asistencia Socio-Humanitaria. Protegidos con toda dignidad, a bajo precio. Programa PROSOC, Kinshasa, República Democrática del Congo.',
      },
      presentation: {
        title: 'Presentación — MAASH',
        description:
          'Razón de ser, misiones, visión y principios de MAASH, mutual de protección social sin fines de lucro en Kinshasa (RDC).',
      },
      gouvernance: {
        title: 'Gobernanza — MAASH',
        description:
          'Gobernanza MAASH: asamblea general, consejo de administración, consejo de ejecución y los 12 bloques organizacionales de la mutual.',
      },
      services: {
        title: 'Servicios y prestaciones — MAASH',
        description:
          'Las 4 ramas de prestaciones MAASH (pensiones, comunitaria, salud, especializada) y las prestaciones A a J para los afiliados.',
      },
      prosoc: {
        title: 'Programa PROSOC — MAASH',
        description:
          'PROSOC: programa de protección social de MAASH, aplicación Prosoc, roles de usuario, Mobile Money y protección de datos.',
      },
      adhesion: {
        title: 'Adhesión y tarifas — MAASH',
        description:
          'Planes MAASH de Solo (2 USD) a F6 (9 USD) al mes: documentos requeridos, personas a cargo y pago con Mobile Money o Visa.',
      },
      contact: {
        title: 'Contacto — MAASH',
        description:
          'Contacto MAASH: dirección de la sede en Ngaliema (Kinshasa), teléfonos, WhatsApp, correos y horarios de atención.',
      },
      recrutement: {
        title: 'Empleo — MAASH',
        description:
          'Puestos abiertos en MAASH: agente de terreno, jefe de equipo, supervisor… postúlese en línea y envíe su CV.',
      },
      introuvable: {
        title: 'Página no encontrada — MAASH',
        description: 'La página solicitada no existe o ha sido movida.',
      },
    },

    nav: {
      accueil: 'Inicio',
      presentation: 'Presentación',
      gouvernance: 'Gobernanza',
      services: 'Servicios',
      prosoc: 'PROSOC',
      adhesion: 'Adhesión',
      contact: 'Contacto',
      join: 'Afiliarse',
      login: 'Iniciar sesión',
      recrutement: 'Empleo',
    },
    burger: { open: 'Abrir el menú' },
    theme: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro',
      lightTitle: 'Modo claro',
      darkTitle: 'Modo oscuro',
    },
    lang: { choose: 'Elegir el idioma', title: 'Idioma' },

    footer: {
      navigation: 'Navegación',
      contact: 'Contacto',
      hours: 'Horarios',
      desc: '{name} — mutual de protección social sin fines de lucro, ejecutora del programa PROSOC.',
      rights: '© {year} MAASH — Todos los derechos reservados.',
      created: 'Creada el {date} • Kinshasa, RDC',
    },

    common: {
      joinMaash: 'Afiliarse a MAASH',
      contactUs: 'Contáctenos',
      discoverServices: 'Descubrir nuestros servicios',
      downloadApp: 'Descargar la aplicación',
    },

    home: {
      badge: 'Bienvenido a MAASH',
      infoTitle: 'Información clave',
      infoCreationLabel: 'Creación',
      infoRecognitionLabel: 'Reconocimiento',
      infoRecognition: 'F92/56.275 (Ministerio de Justicia)',
      infoSeatLabel: 'Sede',
      infoSeat: 'Ngaliema, Kinshasa — {pays}',
      infoMottoLabel: 'Lema',
      stats: [
        { valeur: '4', label: 'ramas de prestaciones' },
        { valeur: '4', label: 'distritos cubiertos en Kinshasa' },
        { valeur: '24', label: 'comunas previstas en Kinshasa' },
        { valeur: '2 USD', label: 'cuota mensual desde el plan Solo' },
      ],
      whoBadge: 'Quiénes somos',
      whoTitle: 'Una mutual de protección social para todos',
      more: 'Saber más',
      vision: 'Nuestra visión',
      principles: 'Nuestros principios',
      servicesBadge: 'Nuestros servicios',
      servicesTitle: 'Cuatro ramas de protección',
      servicesSubtitle:
        'Prestaciones accesibles, adaptadas a las necesidades de las familias y del sector informal.',
      prosocPoints: [
        'Adhesión y gestión administrativa simplificadas',
        'Pagos por Mobile Money y tarjeta Visa',
        'Bono de jetón para la orientación hacia los prestadores',
      ],
      discoverProgram: 'Descubrir el programa',
      memberBadge: 'Hazte miembro',
      memberTitle: 'Únete a MAASH desde hoy',
      memberSubtitle: 'Cuota de adhesión {fee} Planes desde {price} al mes.',
      viewPrices: 'Ver tarifas',
    },

    presentation: {
      h1: 'Presentación institucional',
      purpose: 'Razón de ser',
      vision: 'Visión',
      missionsBadge: 'Misiones y finalidades',
      missionsTitle: 'Lo que MAASH se compromete a hacer',
      missionsSubtitle:
        'Misiones y finalidades extraídas del Referencial Institucional Integrado (RII).',
      principlesBadge: 'Principios',
      principlesTitle: 'Nuestros valores de funcionamiento',
      principlesSubtitle:
        'Principios recogidos en el marco de competencias del RII. Este resumen no constituye una lista oficial de valores.',
      mottoLabel: 'Lema:',
      zonesBadge: 'Zonas de intervención',
      zonesTitle: 'Presentes en Kinshasa',
      zonesSubtitle:
        'Ámbitos: protección social, actividades socio-humanitarias y acompañamiento de los miembros.',
      zoneCurrent: 'Cobertura actual',
    },

    gouvernance: {
      h1: 'Gobernanza y organización',
      badge: 'Estructura institucional',
      title: '12 bloques organizacionales',
      subtitle: 'Alcance de publicación detallado en el sitio: por confirmar por MAASH.',
    },

    services: {
      h1: 'Servicios de MAASH',
      hero: 'Cuatro ramas cubiertas — Pensiones, Comunitaria, Atención Sanitaria y Especializada — con las prestaciones A a J y las coberturas ofrecidas por las aseguradoras asociadas.',
      note: 'Las tarifas de salud son mensuales, por familia hasta seis personas, y se suman a las cuotas mensuales de MAASH. Las prestaciones detalladas, tarifas VIP, techos y exclusiones siguen pendientes de aporte por MAASH.',
    },

    prosoc: {
      h1: 'Programa PROSOC',
      featuresBadge: 'Funcionalidades',
      featuresTitle: 'Lo que hace la aplicación Prosoc',
      rolesBadge: 'Roles de usuario',
      rolesTitle: 'Categorías de usuarios',
      dataTitle: 'Protección de datos',
      groupsTitle: 'Públicos destinatarios',
      ctaTitle: 'Afíliate a MAASH ahora mismo',
      ctaText:
        'Adhesión, pago de cuotas y seguimiento de su expediente en línea, con toda sencillez.',
    },

    adhesion: {
      h1: 'Adhesión y tarifas',
      hero: 'Hágase miembro de MAASH y disfrute de las prestaciones del programa PROSOC.',
      badge: 'Cuotas mensuales',
      title: 'Planes familiales',
      thPlan: 'Plan',
      thComposition: 'Composición',
      thMonthly: 'Cuota mensual',
      noteHealth1: 'Atención sanitaria además de las cuotas: categoría estándar',
      noteHealth2: 'por familia, atención comunitaria',
      noteHealth3: 'a partir de',
      noteHealth4: 'por familia, hasta seis personas.',
      docsTitle: 'Documentos requeridos',
      depsTitle: 'Personas a cargo',
      payTitle: 'Pago',
      payList: [
        'Mobile Money — todos los operadores de la RDC',
        'Tarjeta Visa',
        'Recibo impreso por la máquina POS',
        'Mensaje de confirmación de Mobile Money mediante Prosoc',
      ],
      howBadge: 'Modalidades',
      howTitle: 'Cómo afiliarse',
      ctaTitle: '¿Listo para afiliarse?',
      ctaText: 'Afíliese a MAASH en línea o contacte a la secretaría — {phone} (WhatsApp).',
    },

    contact: {
      h1: 'Contacto',
      hero: 'Estamos a su disposición para cualquier información sobre MAASH y el programa PROSOC.',
      addressTitle: 'Dirección de la sede',
      phoneEmailTitle: 'Teléfono y correo electrónico',
      secretariat: 'Secretaría:',
      emailLabel: 'Correo:',
      secretariatEmail: 'Secretaría (correo):',
      whatsappBtn: 'Contáctenos por WhatsApp',
      hoursTitle: 'Horario de atención',
      coverageTitle: 'Implantación',
      coverageText:
        'Cobertura actual: distritos de Tshangu, Mont-Amba, Funa y Lukunga en Kinshasa. Despliegue previsto en las 24 comunas de Kinshasa.',
      domainNote:
        'Dominio oficial previsto: {domaine} — disponibilidad y reserva por verificar. Enlace cartográfico: por completar.',
    },

    recrutement: {
      h1: 'Únete a MAASH',
      hero: '¿Compartes nuestros valores? Únete a MAASH y contribuye a proteger a los congoleños, en el terreno y en la sede.',
      postesBadge: 'Puestos abiertos',
      postesTitle: 'Únete a nuestros equipos',
      postesText:
        'Los puestos corresponden a los roles del programa PROSOC. ¿No encuentras tu perfil? Postúlate espontáneamente.',
      formBadge: 'Candidatura',
      formTitle: 'Formulario de candidatura',
      nom: 'Nombre completo',
      tel: 'Teléfono (p. ej. +243…)',
      email: 'Correo electrónico',
      poste: 'Puesto',
      diplome: 'Nivel de estudios',
      experience: 'Años de experiencia',
      expPlaceholder: 'Ej.: 3 años',
      disponibilite: 'Disponibilidad',
      message: 'Mensaje (opcional)',
      cvNote: 'Su CV: envíelo a la secretaría por WhatsApp después de enviar el formulario (botón de abajo).',
      consentLabel: 'Acepto que mis datos se utilicen únicamente para el reclutamiento de MAASH.',
      notePrivacy:
        'Su información se usa exclusivamente para el proceso de reclutamiento de MAASH y no se comparte con terceros.',
      submit: 'Enviar mi candidatura',
      sending: 'Enviando…',
      againBtn: 'Nueva candidatura',
      errRequired: 'Complete todos los campos obligatorios.',
      errEmail: 'Correo electrónico no válido.',
      errTel: 'Número de teléfono no válido.',
      errConsent: 'Acepte el uso de sus datos.',
      errSend:
        'El envío falló. Réintente o envíe su CV directamente por WhatsApp (botón de abajo).',
      successTitle: '¡Candidatura enviada!',
      successText:
        'Gracias. Su candidatura fue enviada a la secretaría de MAASH — envíe ahora su CV por WhatsApp y le contactaremos muy pronto.',
      whatsappCta: 'Enviar por WhatsApp',
      recruitBadge: 'Reclutamiento',
      recruitTitle: 'Estamos reclutando',
      recruitText:
        'Oportunidades en MAASH: agentes de terreno, jefes de equipo y más. Consulte los puestos abiertos y postúlese en línea.',
      recruitCta: 'Ver puestos abiertos',
    },

    notFound: {
      h1: 'Página no encontrada',
      hero: 'La página que busca no existe o ha sido movida.',
      text: 'La dirección puede ser errónea o la página fue retirada. Desde el inicio encontrará toda la información sobre MAASH y el programa PROSOC.',
      homeBtn: 'Volver al inicio',
    },
  },
}
