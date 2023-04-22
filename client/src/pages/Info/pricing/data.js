const data = [
  {
    titulo: 'Plan Básico',
    precio: 9.99,
    caracteristicas: [
      'Perfil personalizado',
      'Acceso a la bolsa de trabajo',
      'Hasta 5 postulaciones mensuales',
      'Soporte por correo electrónico',
    ],
    popular: false,

    descripcion:
      'Ideal para profesionales que buscan oportunidades de trabajo y desean postularse a pocos trabajos al mes.',
  },
  {
    titulo: 'Plan Estándar',
    precio: 19.99,
    caracteristicas: [
      'Perfil personalizado',
      'Acceso a la bolsa de trabajo',
      'Hasta 15 postulaciones mensuales',
      'Soporte por correo electrónico y chat',
    ],
    popular: true,
    descripcion:
      'Perfecto para profesionales que buscan más oportunidades de trabajo y desean postularse a varios trabajos al mes.',
  },
  {
    titulo: 'Plan Premium',
    precio: 29.99,
    caracteristicas: [
      'Perfil personalizado con destacado',
      'Acceso a la bolsa de trabajo',
      'Hasta 50 postulaciones mensuales',
      'Soporte por correo electrónico, chat y teléfono',
    ],
    popular: false,

    descripcion:
      'El plan más completo para profesionales que buscan una mayor exposición y más oportunidades de trabajo, y desean postularse a varios trabajos al mes.',
  },
]

const dataEmpresa = [
  {
    titulo: 'Plan Básico',
    precio: 49.99,
    caracteristicas: [
      'Perfil de empresa',
      'Publicación de hasta 5 ofertas mensuales',
      'Acceso a la base de datos de candidatos',
      'Soporte por correo electrónico',
    ],
    popular: false,
    descripcion:
      'Ideal para empresas que buscan contratar personal y quieren publicar pocas ofertas mensuales.',
  },
  {
    titulo: 'Plan Estándar',
    precio: 99.99,
    caracteristicas: [
      'Perfil de empresa',
      'Publicación de hasta 15 ofertas mensuales',
      'Acceso a la base de datos de candidatos',
      'Soporte por correo electrónico y chat',
    ],
    popular: true,
    descripcion:
      'Perfecto para empresas que buscan contratar personal y desean publicar varias ofertas al mes.',
  },
  {
    titulo: 'Plan Premium',
    precio: 199.99,
    caracteristicas: [
      'Perfil de empresa con destacado',
      'Publicación de hasta 50 ofertas mensuales',
      'Acceso a la base de datos de candidatos',
      'Soporte por correo electrónico, chat y teléfono',
    ],
    popular: false,
    descripcion:
      'El plan más completo para empresas que buscan contratar personal y desean publicar varias ofertas al mes con mayor exposición.',
  },
]

export { data, dataEmpresa }
