const data = {
  company: {
    free: {
      plan_name: 'Discovery',
      plan_type: 'gratis',
      plan_category: 'company',
      features: [
        'Explora nuestro marketplace de empleos y descubre oportunidades.',
        'Publica empleos limitados para contratar de forma gratuita.',
        'Accede a currículums vitae de candidatos para encontrar talento.',
      ],
    },

    standard: {
      plan_name: 'Horizons',
      plan_type: 'estandar',
      plan_category: 'company',
      features: [
        'Publica moderadamente, llega a un público amplio.',
        'Destaca tus publicaciones de trabajo en la búsqueda.',
        'Acceso a una base de datos ampliada de CVs de candidatos.',
        'Comunícate con los candidatos directamente en la plataforma.',
        'Soporte prioritario por correo electrónico y chat en vivo.',
        'Personalización avanzada del perfil empresarial.',
      ],
    },

    premium: {
      plan_name: 'Odyssey',
      plan_type: 'premium',
      plan_category: 'company',
      features: [
        'Publica ilimitadamente para llegar a audiencias diversas',
        'Destaca tus publicaciones para aparecer en la parte superior de búsqueda',
        'Acceso completo a CVs de candidatos',
        'Comunícate directamente y programa entrevistas con candidatos',
        'Soporte dedicado por correo, chat y teléfono',
        'Personalización avanzada del perfil empresarial',
        'Integración completa con sistemas de recursos humanos',
        'Anuncios destacados para atraer más candidatos',
        'Informes detallados sobre el rendimiento y actividad de candidatos',
      ],
    },
  },

  talent: {
    free: {
      plan_name: 'Trush',
      plan_type: 'gratis',
      plan_category: 'talent',
      features: [
        'Publica un número limitado de trabajos de construcción y conecta con otros profesionales',
        'Acceso limitado a la base de datos de currículums vitae de candidatos',
        'Comunícate con los candidatos por correo electrónico a través de nuestra plataforma de mensajería integrada',
      ],
    },
    standard: {
      plan_name: 'Orbit',
      plan_type: 'estandar',
      plan_category: 'talent',
      features: [
        'Publica un número moderado de trabajos de construcción para llegar a una audiencia amplia y diversa',
        'Destaca tus publicaciones de trabajo para destacarlas en los resultados de búsqueda y aparecer en la parte superior',
        'Acceso limitado a la base de datos de currículums vitae de candidatos',
        'Comunícate directamente con los candidatos a través de la plataforma de mensajería integrada y programar entrevistas',
      ],
    },
    premium: {
      plan_name: 'Galaxy',
      plan_type: 'premium',
      plan_category: 'talent',
      features: [
        'Publica una cantidad ilimitada de trabajos de construcción para llegar a una amplia audiencia de talentos de construcción',
        'Destaca tus publicaciones de trabajo para destacarlas en los resultados de búsqueda y aparecer en la parte superior',
        'Acceso completo a la base de datos de currículums vitae de candidatos y la capacidad de filtrar y clasificar candidatos',
        'Comunícate directamente con los candidatos a través de la plataforma de mensajería integrada, programar entrevistas y enviar ofertas de trabajo',
        'Soporte dedicado por correo electrónico y chat en vivo con respuesta en tiempo real',
      ],
    },
  },
}

export { data }
