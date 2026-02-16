export const clinic = {
  name: "Oxeo",
  logo: "/images/logo.png",
  tagline: "Fisioterapia experta en La Coruña que elimina tu dolor",
  description: "Oxeo es tu clínica de fisioterapia de confianza en La Coruña, con 5 estrellas en Google y 48 reseñas que avalan nuestro trabajo. Nuestro equipo, liderado por Carlos y Álvaro, se especializa en resolver lesiones crónicas, contracturas severas y dolor localizado con técnicas manuales avanzadas. Tratamos desde lesiones deportivas hasta fisioterapia infantil, siempre con un trato cercano y resultados desde la primera sesión.",
  colors: {
    primary: "#9c6565",
    secondary: "#3a0b07",
    accent: "#e9e7e2",
    neutral: "#f7f3f3"
  },
  phone: "881 88 65 35",
  whatsapp: "+34881886535",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Cl. Enrique Mariñas Romero, 6, 1º E, 15009 A Coruña, La Coruña, España",
    city: "La Coruña",
    province: "Álava",
    postalCode: "15009",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=15710071453904417540&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Oxeo%20%4043.3419%2C-8.40676&z=16&output=embed",
  coordinates: {
    lat: 43.3419,
    lng: -8.40676
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "10:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 48,
    url: "https://maps.google.com/?cid=15710071453904417540&g_mp=Cilnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaE5lYXJieRACGAQgAA",
    featured: [
      {
        author: "Alfonso Gonzalez",
        rating: 5,
        text: "Carlos es un fuera de serie!!! Mi lesión pensaba que sería algo crónico al haber pasado por traumatólogos y fisios. Llegué a sus manos con un dolor muy localizado, y salí sin dolor....aún estoy alucinando....ahora tengo que seguir sus consejos para fortalecer la zona, etc. Y encima, su trato es inmejorable, te explica, te dice las cosas claras, y con una sonrisa. Un 10 en todos los sentidos. Enhorabuena Carlos por tú trabajo, por ver como disfrutas realizándolo, y mil gracias!!!!",
        date: "Hace 3 años"
      },
      {
        author: "Sonia Sestayo",
        rating: 5,
        text: "He empezado a ir con mi niña y tanto ella como yo hemos salido encantadas. Magníficos profesionales, con un gran saber estar, mucha empatía y paciencia. Y lo mejor de todo con una sola sesión mi niña ya me dice \"mamá ya lo muevo más y no me duele\". Solo puedo decir. Gracias Carlos, mil gracias.",
        date: "Hace 3 años"
      },
      {
        author: "Oscar Cerni",
        rating: 5,
        text: "Álvaro es espectacular.Ademas que llame el mismo día de urgencia y me busco un hueco,aunque trabajan con cita previa lógicamente.Me ayudo mucho en una contractura muy potente que tenía en el cuello y salí nuevo.Gran profesional.Sera mi centro de referencia sin duda.Muy Agradecido",
        date: "Hace 3 meses"
      },
      {
        author: "María Dolores Oñate",
        rating: 5,
        text: "Acudí sin conocerlos estando de vacaciones en La Coruña y me fue muy bien. Al acabar la sesión ya noté alivio. Muy buena impresión y muy buen trato.  Recomendable 100%",
        date: "Hace 6 años"
      },
      {
        author: "maica rodriguez moreno",
        rating: 5,
        text: "Para mí lo mejor de lo mejor. Excelentes profesionales",
        date: "Hace 7 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual Avanzada",
      description: "Técnicas manuales especializadas que van al origen del problema. Tratamos dolor localizado, lesiones crónicas y problemas que otros profesionales no han resuelto. Nuestro enfoque personalizado identifica la causa raíz para eliminar el dolor de forma efectiva.",
      benefits: [
        "Resultados visibles desde la primera sesión",
        "Tratamiento de lesiones crónicas complejas",
        "Técnicas adaptadas a cada paciente"
      ],
      icon: "Hand"
    },
    {
      id: "contracturas-cervicales",
      name: "Tratamiento de Contracturas",
      description: "Especialistas en contracturas severas de cuello, espalda y otras zonas. Aplicamos técnicas específicas para liberar la tensión muscular profunda y eliminar el dolor intenso. Ideal para contracturas potentes que limitan tu día a día.",
      benefits: [
        "Alivio inmediato del dolor agudo",
        "Liberación de tensión muscular profunda",
        "Recuperación rápida de la movilidad"
      ],
      icon: "Target"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación integral de lesiones deportivas con técnicas avanzadas. Desde esguinces hasta sobrecargas musculares, diseñamos planes de tratamiento que te devuelven a tu actividad física de forma segura y efectiva.",
      benefits: [
        "Vuelta rápida y segura al deporte",
        "Prevención de recaídas",
        "Fortalecimiento de zonas vulnerables"
      ],
      icon: "Dumbbell"
    },
    {
      id: "fisioterapia-infantil",
      name: "Fisioterapia Infantil",
      description: "Tratamiento especializado para niños con problemas de movilidad, dolor o desarrollo motor. Trabajamos con empatía, paciencia y técnicas adaptadas a los más pequeños, consiguiendo mejoras notables desde la primera sesión.",
      benefits: [
        "Trato cercano y empático con los niños",
        "Mejora visible en movilidad y dolor",
        "Ambiente seguro y profesional"
      ],
      icon: "Heart"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión y objetivos. Te guiamos en cada fase del proceso con ejercicios de fortalecimiento y consejos prácticos para prevenir futuras lesiones.",
      benefits: [
        "Plan adaptado a tu ritmo de vida",
        "Seguimiento continuo de tu evolución",
        "Educación para prevenir recaídas"
      ],
      icon: "Activity"
    },
    {
      id: "dolor-cronico",
      name: "Tratamiento de Dolor Crónico",
      description: "Soluciones efectivas para dolores persistentes que llevan meses o años. Analizamos tu caso en profundidad para identificar la verdadera causa y aplicar el tratamiento más adecuado, incluso cuando otros profesionales no han dado con la solución.",
      benefits: [
        "Enfoque integral del problema",
        "Eliminación del dolor persistente",
        "Explicación clara de tu lesión"
      ],
      icon: "Zap"
    },
    {
      id: "atencion-urgencias",
      name: "Atención de Urgencias",
      description: "Disponibilidad para casos urgentes el mismo día. Si tienes un dolor agudo o una lesión reciente que necesita atención inmediata, buscamos un hueco en nuestra agenda para atenderte lo antes posible.",
      benefits: [
        "Respuesta rápida en casos urgentes",
        "Atención el mismo día si es necesario",
        "Alivio inmediato del dolor agudo"
      ],
      icon: "Target"
    },
    {
      id: "valoracion-completa",
      name: "Valoración Completa",
      description: "Evaluación exhaustiva de tu lesión o dolor con explicaciones claras y honestas. Te contamos exactamente qué te pasa, por qué te duele y cuál es el mejor plan de tratamiento para tu caso específico.",
      benefits: [
        "Diagnóstico preciso de tu problema",
        "Explicación detallada y comprensible",
        "Plan de tratamiento personalizado"
      ],
      icon: "Activity"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con nosotros",
      description: "Llámanos al 881 88 65 35 para reservar tu cita. Trabajamos con cita previa, pero si es urgente buscamos un hueco para atenderte el mismo día. Tu recuperación es nuestra prioridad."
    },
    {
      step: 2,
      title: "Valoración detallada",
      description: "Realizamos una evaluación completa de tu lesión o dolor. Te explicamos con claridad qué te ocurre, cuál es el origen del problema y diseñamos un plan de tratamiento específico para tu caso."
    },
    {
      step: 3,
      title: "Tratamiento personalizado",
      description: "Aplicamos las técnicas manuales más efectivas para tu recuperación. Notarás alivio desde la primera sesión mientras trabajamos en resolver el problema de raíz, no solo en calmar el síntoma."
    },
    {
      step: 4,
      title: "Seguimiento y fortalecimiento",
      description: "Te damos consejos y ejercicios específicos para fortalecer la zona afectada y prevenir futuras lesiones. Hacemos seguimiento de tu evolución hasta tu completa recuperación y vuelta a la normalidad."
    }
  ],
  whyUs: [
    {
      title: "Valoración de 5 estrellas con 48 reseñas",
      description: "Nuestros pacientes nos avalan con la máxima puntuación en Google. Destacan nuestros resultados reales desde la primera sesión, el trato cercano y profesional, y nuestra capacidad para resolver lesiones que otros no han conseguido tratar. Tu confianza es nuestro mayor logro.",
      icon: "Award"
    },
    {
      title: "Especialistas en casos complejos",
      description: "Resolvemos lesiones crónicas y dolores persistentes donde otros tratamientos han fallado. Nuestro equipo tiene la experiencia y las técnicas avanzadas necesarias para identificar el origen real del problema y eliminarlo de raíz, no solo calmar el síntoma temporalmente.",
      icon: "Target"
    },
    {
      title: "Resultados desde la primera sesión",
      description: "La mayoría de nuestros pacientes experimentan alivio notable ya en su primera visita. Aplicamos técnicas manuales efectivas que van directamente al problema, consiguiendo que salgas de la consulta con menos dolor y más movilidad desde el primer día.",
      icon: "Zap"
    },
    {
      title: "Trato cercano y explicaciones claras",
      description: "En Oxeo te tratamos con empatía, paciencia y una sonrisa. Te explicamos exactamente qué te pasa, qué vamos a hacer y te damos consejos prácticos para tu recuperación. Nuestros pacientes valoran especialmente que les hablemos con claridad y honestidad sobre su lesión.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Carlos",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Oxeo nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Álvaro",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Oxeo nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Oxeo - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Oxeo - Imagen 2"
    },
    {
      src: "/images/hero.webp",
      alt: "Oxeo - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Oxeo - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Oxeo - Imagen 5"
    }
  ],
  faq: [
    {
      question: "¿Necesito cita previa para acudir a Oxeo?",
      answer: "Sí, en Oxeo trabajamos con cita previa para garantizar una atención personalizada y sin esperas. Sin embargo, si tienes una urgencia, llámanos al 881 88 65 35 y haremos todo lo posible por atenderte el mismo día. Entendemos que el dolor no espera y buscamos soluciones rápidas para casos urgentes."
    },
    {
      question: "¿En cuántas sesiones notaré mejoría?",
      answer: "La mayoría de nuestros pacientes notan alivio desde la primera sesión, como confirman nuestras reseñas de 5 estrellas. Sin embargo, el número total de sesiones depende de tu lesión específica, su antigüedad y tu estado físico. En la valoración inicial te explicaremos con claridad cuántas sesiones estimamos necesarias para tu caso concreto."
    },
    {
      question: "¿Qué diferencia a Oxeo de otras clínicas de fisioterapia?",
      answer: "En Oxeo resolvemos lesiones crónicas que otros profesionales no han conseguido tratar. Nuestro equipo combina técnicas manuales avanzadas con un enfoque personalizado, dedicando el tiempo necesario a entender tu problema. Con 48 reseñas de 5 estrellas en Google, nuestros pacientes destacan nuestros resultados reales, trato cercano y explicaciones claras sobre cada tratamiento."
    },
    {
      question: "¿Tratáis lesiones deportivas y dolores crónicos?",
      answer: "Sí, en Oxeo somos especialistas tanto en fisioterapia deportiva como en tratamiento de dolor crónico. Tratamos desde contracturas severas hasta lesiones que llevan meses sin resolverse. Nuestro enfoque va al origen del problema, no solo al síntoma, por eso conseguimos resultados donde otros tratamientos han fallado."
    },
    {
      question: "¿Atendéis también a niños?",
      answer: "Sí, ofrecemos fisioterapia infantil con profesionales especializados en el trato con niños. Trabajamos con mucha empatía y paciencia, creando un ambiente seguro donde los pequeños se sienten cómodos. Los padres destacan que sus hijos notan mejoría en movilidad y dolor desde la primera sesión."
    },
    {
      question: "¿Puedo acudir si estoy de vacaciones en La Coruña?",
      answer: "Por supuesto. En Oxeo atendemos tanto a pacientes habituales como a personas que están de vacaciones o de paso por La Coruña y necesitan tratamiento urgente. Muchos visitantes nos han valorado positivamente tras recibir atención de calidad durante su estancia en la ciudad."
    },
    {
      question: "¿Qué debo llevar a mi primera cita en Oxeo?",
      answer: "Para tu primera cita, trae ropa cómoda que permita acceder a la zona a tratar y cualquier informe médico o prueba diagnóstica relevante (radiografías, resonancias, etc.). Si vienes derivado de otro profesional, cualquier información sobre tratamientos previos nos ayudará a diseñar el mejor plan para ti."
    },
    {
      question: "¿Explicáis qué tratamiento vais a realizar y por qué?",
      answer: "Absolutamente. En Oxeo creemos en la transparencia total con nuestros pacientes. Te explicamos con claridad qué te ocurre, qué técnicas vamos a aplicar, por qué son las más adecuadas para tu caso y qué puedes esperar del tratamiento. Nuestros pacientes valoran especialmente que les digamos las cosas claras y con honestidad."
    }
  ],
  seo: {
    titleTemplate: "%s | Oxeo",
    defaultTitle: "Oxeo - Fisioterapia en La Coruña | 5★ en Google",
    defaultDescription: "Clínica de fisioterapia en La Coruña especializada en dolor crónico, contracturas y lesiones deportivas. Valoración 5★ con 48 reseñas. Cita: 881 88 65 35",
    keywords: [
      "fisioterapia La Coruña",
      "fisioterapeuta La Coruña",
      "Oxeo",
      "dolor crónico La Coruña",
      "contracturas cervicales La Coruña",
      "fisioterapia deportiva La Coruña",
      "fisioterapia infantil La Coruña",
      "rehabilitación La Coruña",
      "fisioterapia manual La Coruña",
      "tratamiento dolor La Coruña",
      "fisio urgencias La Coruña",
      "mejor fisioterapeuta La Coruña"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Oxeo",
    cif: "",
    registeredAddress: "Cl. Enrique Mariñas Romero, 6, 1º E, 15009 A Coruña, La Coruña, España, La Coruña, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en La Coruña"
  ],
  heroDescription: "En Oxeo resolvemos lesiones que otros no han conseguido tratar. Nuestros fisioterapeutas especializados combinan técnicas manuales avanzadas con un enfoque personalizado para eliminar tu dolor y recuperar tu movilidad. Con valoración de 5 estrellas, somos la clínica de referencia en La Coruña para quienes buscan resultados reales.",
  specialty: "Tratamiento de dolor crónico",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperarte de verdad?",
  ctaDescription: "Llámanos al 881 88 65 35 y reserva tu cita de valoración. Descubre por qué nuestros pacientes nos valoran con 5 estrellas y salen sin dolor desde la primera sesión.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
