export interface Sponsor {
  id: number
  name: string
  image: string
  alt: string
}

export interface Flag {
  id: number
  name: string
  flag: string
}

export interface NewsItem {
  id: number
  type: string
  iconName: string
  title: string
  sub_title: string
  text: string
  image: string
}

export interface Review {
  id: number
  profile: string
  name: string
  position: string
  flag: string
  rating: number
  description: string
}
export interface History {
  id: number
  title: string
  image: string
  description: string[]
}

export interface SponsorsDashboard {
  id: number
  name: string
  image: string
  link: string
}

export interface ProductsServicesItem {
  id: number
  type: string
  iconName: string
  title: string
  sub_title: string
  text: string
  image: string
}
export interface SuperAdminDashboard {
  id: number
  name: string
  image: string
  link: string
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Agile heroes league',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FAgile%20heroes%20league.png?alt=media&token=869a911c-250b-439b-a994-263454d9dded',
    alt: 'Agile_heroes_league'
  },
  {
    id: 2,
    name: 'Route Agile',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%2FWhatsApp%20Image%202025-02-19%20at%202.58.10%20PM.jpeg?alt=media&token=ca7fa64b-f3ad-42a8-9926-53cbc3504720',
    alt: 'Route_agile'
  },
  {
    id: 3,
    name: 'Agilisters',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%2FWhatsApp%20Image%202025-02-19%20at%202.57.58%20PM.jpeg?alt=media&token=d2531f5d-22c2-4f26-989f-c7a3e792e3ca',
    alt: 'Agilisters'
  },
  {
    id: 4,
    name: 'Agile heroes',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FCopia%20de%20Minimal%20We%20Are%20Open%20Store%20Instagram%20Story.png?alt=media&token=85a97e28-606a-467e-a53e-f98bdd98940f',
    alt: 'Agile_heroes'
  },
  {
    id: 5,
    name: 'Go productivity',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FGo%20productivity.png?alt=media&token=6fec46bd-c6e5-42a7-9b23-ff7d95f2d422',
    alt: 'Go_productivity'
  },
  {
    id: 7,
    name: 'ITcert',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FITcert.png?alt=media&token=b91a4efa-26f9-4aa1-8efd-1b0be7d6a80b',
    alt: 'ITcert'
  },
  {
    id: 8,
    name: 'Taurus Galaxy',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FTaurus%20Galaxy.png?alt=media&token=af85f62f-bf72-4f2b-8d3a-97eb92c72872',
    alt: 'Taurus_Galaxy'
  },
  {
    id: 11,
    name: 'kyooreas',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2Fkyooreas.png?alt=media&token=85aecd68-af32-4d1d-a194-5f1dcaad7d01',
    alt: 'kyooreas'
  },
  {
    id: 12,
    name: 'meta Agility',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2Fmeta%20Agility.png?alt=media&token=8f879dc9-2d39-4bd2-8a61-50e74492e00e',
    alt: 'meta_Agility'
  }
]

export const flags: Flag[] = [
  {
    id: 1,
    name: 'Argentina',
    flag: 'https://flagcdn.com/ar.svg'
  },
  {
    id: 2,
    name: 'Chile',
    flag: 'https://flagcdn.com/cl.svg'
  },
  {
    id: 3,
    name: 'Colombia',
    flag: 'https://flagcdn.com/co.svg'
  },
  {
    id: 4,
    name: 'España',
    flag: 'https://flagcdn.com/es.svg'
  },
  {
    id: 5,
    name: 'Peru',
    flag: 'https://flagcdn.com/pe.svg'
  },
  {
    id: 6,
    name: 'Ecuador',
    flag: 'https://flagcdn.com/ec.svg'
  },
  {
    id: 7,
    name: 'Guatemala',
    flag: 'https://flagcdn.com/gt.svg'
  },
  {
    id: 8,
    name: 'Panama',
    flag: 'https://flagcdn.com/pa.svg'
  },
  {
    id: 9,
    name: 'Costa Rica',
    flag: 'https://flagcdn.com/cr.svg'
  },
  {
    id: 10,
    name: 'Nicaragua',
    flag: 'https://flagcdn.com/ni.svg'
  },
  {
    id: 11,
    name: 'El Salvador',
    flag: 'https://flagcdn.com/sv.svg'
  },
  {
    id: 12,
    name: 'Honduras',
    flag: 'https://flagcdn.com/hn.svg'
  },
  {
    id: 13,
    name: 'México',
    flag: 'https://flagcdn.com/mx.svg'
  },
  {
    id: 14,
    name: 'Venezuela',
    flag: 'https://flagcdn.com/ve.svg'
  },
  {
    id: 15,
    name: 'Bolivia',
    flag: 'https://flagcdn.com/bo.svg'
  },
  {
    id: 16,
    name: 'Paraguay',
    flag: 'https://flagcdn.com/py.svg'
  },
  {
    id: 17,
    name: 'Brasil',
    flag: 'https://flagcdn.com/br.svg'
  },
  {
    id: 18,
    name: 'Canada',
    flag: 'https://flagcdn.com/ca.svg'
  },
  {
    id: 19,
    name: 'Estados Unidos',
    flag: 'https://flagcdn.com/us.svg'
  }
]

export const newsCommunity: NewsItem[] = [
  {
    id: 1,
    type: 'Webinar',
    iconName: 'folder',
    title: 'Nuevo Webinar',
    sub_title: 'Optimización de Sprints',
    text: 'Únete a nuestro próximo webinar el 15 de julio a las 18:00 (hora de Bogotá) donde expertos en Scrum compartirán estrategias para optimizar tus sprints y mejorar la eficiencia del equipo. No te pierdas esta oportunidad de aprendizaje y networking.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_webinar_news_comp.png?alt=media&token=b9539e05-8461-4fdd-a209-0b638a518736'
  },
  {
    id: 2,
    type: 'Noticias',
    iconName: 'globe',
    title: 'Últimas noticias',
    sub_title: 'Optimización de Sprints',
    text: 'Únete a nuestro próximo webinar el 15 de julio a las 18:00 (hora de Bogotá) donde expertos en Scrum compartirán estrategias para optimizar tus sprints y mejorar la eficiencia del equipo. No te pierdas esta oportunidad de aprendizaje y networking.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_noticias_comp.png?alt=media&token=bf80f4a5-62ac-4b16-9277-d42c293c3647'
  },
  {
    id: 3,
    type: 'Cursos',
    iconName: 'bookOpen',
    title: 'Nuevo Curso',
    sub_title: 'Optimización de Sprints',
    text: 'Únete a nuestro próximo webinar el 15 de julio a las 18:00 (hora de Bogotá) donde expertos en Scrum compartirán estrategias para optimizar tus sprints y mejorar la eficiencia del equipo. No te pierdas esta oportunidad de aprendizaje y networking.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_cursos_news_comp.png?alt=media&token=8973cc9c-7803-4fa2-9860-9c8b21e63a6f'
  }
]

export const reviews: Review[] = [
  {
    name: 'Penelope Flores',
    id: 1,
    position: 'Agile consultant',
    rating: 4,
    description:
      'Tengo dos años en la comunidad Scrum Latam. Esta comunidad ha sido clave en mi desarrollo profesional, brindándome acceso a charlas, capacitaciones y apoyo para entrevistas en roles como Scrum Master. Gracias a esto, he mejorado mi carrera y la calidad de vida de mi familia, además de disfrutar sorteos de cursos y certificaciones.',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg'
  },
  {
    name: 'Kevin Añez',
    id: 2,
    position: 'Agile coach',
    rating: 3,
    description:
      'Llevó cinco meses en el squad de educación, soy de Colombia. Estar en scrum Latam es un aprendizaje constante, donde alimento mis habilidades y conocimientos cada día como Scrum Master y además de eso me permito interactuar y conocer grandes personas y grandes coaches día a día.',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg'
  },
  {
    name: 'Richard Tavarez',
    id: 3,
    position: 'Scrum master',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg'
  },
  {
    name: 'Richard Tavarez',
    id: 4,
    position: 'Agile coach',
    rating: 3,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg'
  },
  {
    name: 'Richard Tavarez',
    id: 5,
    position: 'Scrum master',
    rating: 5,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg'
  },
  {
    name: 'Richard Tavarez',
    id: 6,
    position: 'Agile consultant',
    rating: 1,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg'
  }
]

export const history: History[] = [
  {
    id: 1,
    title: 'Misión',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FGroup%20633297.svg?alt=media&token=e34f1b6b-0723-4bff-8640-7202192e1475',
    description: [
      'Difundir el conocimiento de agilidad: A través de eventos, talleres, webinars, publicaciones y otros recursos.',
      'Fomentar la colaboración y el intercambio: A través de experiencias entre profesionales ágiles de Latinoamérica.',
      'Promover la adopción de buenas prácticas de agilidad: Desde la experiencia generando una transformación cultural ágil en las organizaciones.'
    ]
  },
  {
    id: 2,
    title: 'Visión',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FGroup%20633229.svg?alt=media&token=885ec74a-0057-4779-af1d-d18fe6fb4488',
    description: [
      'Ser la comunidad líder en Agilidad en América Latina, reconocida por su impacto transformador, generación de valor y creación de conexiones significativas entre sus miembros, impulsando la innovación y el crecimiento en las organizaviones de la región.'
    ]
  },
  {
    id: 3,
    title: 'Propósito',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FGroup%20633230.svg?alt=media&token=59985452-bfb7-4c69-b9f9-b841fdf553bd',
    description: [
      'Inspirar y empoderar a personas y organizaciones para alcanzar su máximo potencial a través de la Agilidad, promoviendo una cultura de aprendizaje continuo, colaboración y transformación sostenible en América Latina. Además, impactamos en el ser, fomentando el crecimiento personal y profesional.'
    ]
  }
]

export const memberships = [
  {
    id: 1,
    title: 'Flex',
    price: '$50',
    description1: 'Acceso a Cursos Avanzados',
    description2: 'Talleres Prácticos Mensuales',
    description3: 'Certificado Profesional'
  },
  {
    id: 2,
    title: 'Gratuito',
    price: '$0.00',
    description1: 'Acceso a cursos introductorios',
    description2: 'Webinars Mensuales',
    description3: 'Certificado de participación'
  },
  {
    id: 3,
    title: 'Premium',
    price: '$150',
    description1: 'Asesorías Personalizadas Mensuales',
    description2: 'Invitación a Eventos Exclusivos',
    description3: 'Certificación Especializada'
  }
]

export const benefits = [
  {
    id: 1,
    text: 'Acceso a webinars , talleres y charlas virtuales sobre agilidad y similares',
    checkFree: true,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 2,
    text: 'Oportunidad participar de los sorteos que realiza la comunidad',
    checkFree: true,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 3,
    text: 'Preparación para CV  y entrevistas (Rol Scrum Master)',
    checkFree: true,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 4,
    text: 'Acceso a Simuladores. Preparación con certificación',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 5,
    text: 'Certificados de participación de Talleres',
    checkFree: false,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 6,
    text: 'Descuentos en cursos y certificaciones por parte de los aliados',
    checkFree: false,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 7,
    text: 'Coach o mentoring personalizado (one to one)',
    checkFree: false,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 8,
    text: 'Acceso a grupos de discusión con otros miembros',
    checkFree: false,
    checkFlex: true,
    checkPremium: true
  },
  {
    id: 9,
    text: 'Acceso a recursos básicos sobre metodologías ágiles',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 10,
    text: 'Cupo asegurado en nuestro Aniversarios  formato (Open Space)',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 11,
    text: 'Membresía bonificada por 6 meses a miembros activos',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 12,
    text: 'Posibilidad de hacer una certificación y un taller bonificados cada año',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  },
  {
    id: 13,
    text: 'Prioridad estar en todos los canales comunicación de Scrum Latam',
    checkFree: false,
    checkFlex: false,
    checkPremium: true
  }
]

export const news = [
  {
    id: 1,
    title: 'Scrum: Clave en equipos tecnológicos',
    date: '10/JUL/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fd1e6ef2d44e34f4d389e0cdeb46eea41.png?alt=media&token=d16451e2-8df0-4235-a4c8-b178de77bf94'
  },
  {
    id: 2,
    title: 'Gestión visual con Kanban en equipos TI',
    date: '15/JUL/2024',
    description:
      'Los equipos ahora pueden visualizar el estado de cada tarea en tiempo real, lo que ha facilitado una comunicación más efectiva entre los miembros y un enfoque más ágil.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F2771a871698d72743ceadfa4f5c14f21.png?alt=media&token=7e208a1c-28e4-49a3-94d4-a53f4a3bcd18'
  },
  {
    id: 3,
    title: 'Agile Impulsa la Satisfacción del Cliente',
    date: '06/SEP/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo. ',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F81be6df9336320083b26889275a348c3.png?alt=media&token=232a11bc-9ffc-4665-ae2a-be3d64c30310'
  },
  {
    id: 4,
    title: 'Flexibilidad y Productividad Para el Mundo Empresarial',
    date: '19/SEP/2024',
    description:
      'Empresas de todo el mundo han adoptado Scrum para optimizar sus procesos y mejorar la calidad de sus productos, logrando así una mayor satisfacción de sus clientes.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fa7c7c7dd76a56a383763b5e69a832e8c.png?alt=media&token=a1c901d7-0a0d-4f0c-83cf-5d0e758ccb30'
  },
  {
    id: 5,
    title: 'Kanban: Más visibilidad, Menos Estrés',
    date: '21/SEP/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo. ',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Feda87c676156f9ab64916ab5893e2aee.png?alt=media&token=a9576de5-1ba0-4dda-82b4-4553d6d2f63b'
  },
  {
    id: 6,
    title: 'El Futuro de la Gestión de Proyectos',
    date: '02/OCT/2024',
    description:
      'Pilar fundamental para las empresas que buscan adaptarse rápidamente a un mercado en constante cambio. A través de enfoques como Scrum, Kanban y Lean',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fda044e04532b9cd31c96fccfb828bc5e.png?alt=media&token=e04c775c-504f-459d-8f20-b89b3d6661cc'
  }
]

export const articles = [
  {
    id: 1,
    title: 'Talleres: Actualizaciones en Algunos Horarios',
    date: '10/JUL/2024',
    description:
      'A partir del 1 de noviembre de 2024, se implementarán algunos cambios clave en los horarios y formatos de los talleres y cursos disponibles. ',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F583a0ab9b6d457c1946ebf8ce35ff845.png?alt=media&token=55b0e9c8-9636-41ae-9e63-4d6519b0f221'
  },
  {
    id: 2,
    title: 'Descarga de Certificados Desde tu Perfil',
    date: '15/JUL/2024',
    description:
      'La comunidad también ha agregado nuevas funcionalidades, como la posibilidad de descargar certificados de participación directamente desde el perfil de usuario, tras completar cada curso.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F69483224fe586f63149d769cd253dd50.png?alt=media&token=8eb70d85-4105-4c33-bad6-0598761bda42'
  },
  {
    id: 3,
    title: 'Colaboración en Vivo Para Proyectos',
    date: '06/SEP/2024',
    description:
      ' La empresa busca fomentar una cultura de innovación y adaptación rápida a las necesidades del mercado, y Agile ha sido clave en este cambio.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fa4c7eea5688479b8acd8dd5e64ad7f7e.png?alt=media&token=b0b958c9-ba03-4ec9-89ef-b147c0c24391'
  },
  {
    id: 4,
    title: 'Nueva Función de Mentoría',
    date: '19/SEP/2024',
    description:
      'Finalmente, se ha implementado una nueva función de mentoría, donde los miembros más experimentados podrán guiar a otros en su camino hacia la agilidad.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F863cfae757f8154ffcf956215d3c46c4.png?alt=media&token=0c49c654-85b9-4b1c-b6d4-536b371e4205'
  },
  {
    id: 5,
    title: 'Biblioteca de Recursos Descargables',
    date: '21/SEP/2024',
    description:
      'Uno de los cambios más destacados es la incorporación de una biblioteca de recursos descargables, que incluirá plantillas de trabajo ágiles, guías de Scrum y Kanban.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Faee26d9fc35cf0e132de5471b8535945(1).png?alt=media&token=d5eadf64-d102-4027-853f-ee4909e631b1'
  },
  {
    id: 6,
    title: 'Únete a los foros de la Comunidad',
    date: '02/OCT/2024',
    description:
      'La comunidad ha mejorado su sistema de foros, agregando categorías específicas para diferentes temas como la gestión de proyectos ágiles y liderazgo en equipos remotos.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fb0183205782f01e6128d2125933380c0(1).png?alt=media&token=8d6a92f7-4bb3-451e-bf4b-df18035e3f13'
  }
]

export const blogs = [
  {
    id: 1,
    title: 'Scrum vs. Kanban: ¿Qué marco ágil es mejor para tu proyecto?',
    date: '06/SEP/2024',
    description:
      'En este artículo, exploramos cómo estas metodologías no solo mejoran la productividad y la colaboración en equipos, sino que también permiten una mayor adaptabilidad frente a los desafíos. Descubre los principios fundamentales del agilismo y cómo aplicarlos para maximizar el éxito.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F2c77dae153ea601efcb05ed200bb4498.png?alt=media&token=f32ff936-bd8a-4c64-a152-c95b7834b47a'
  },
  {
    id: 2,
    title: 'Cómo implementar metodologías ágiles en equipos remotos',
    date: '11/SEP/2024',
    description:
      'La transformación digital ha permitido que cada vez más empresas adopten el trabajo remoto como una modalidad estándar. Sin embargo, la gestión de proyectos en equipos distribuidos puede ser un desafío, especialmente si se busca mantener un ritmo ágil y colaborativo.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fb6df1bf955633ef74ad36629278931be.png?alt=media&token=8a246b81-b5f5-4d2c-a6c3-ca0a323db54f'
  },
  {
    id: 3,
    title: 'El rol del product owner en un equipo ágil exitoso',
    date: '05/OCT/2024',
    description:
      'El Product Owner es una figura clave en cualquier equipo ágil exitoso, responsable de maximizar el valor del producto desarrollado. En esta entrada, analizamos las principales responsabilidades de este rol, desde la gestión del backlog hasta la toma de decisiones estratégicas.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2Fa608643a18e5f41158e36f3ef0c84550.png?alt=media&token=e0c729b7-0036-42d5-8d74-de022a7d2434'
  },
  {
    id: 4,
    title: 'Transformando equipos ágiles con Jira: un enfoque eficiente',
    date: '12/OCT/2024',
    description:
      'En el mundo de las metodologías ágiles, Jira se ha convertido en una de las herramientas más populares para gestionar proyectos y equipos de trabajo. Su flexibilidad permite implementar marcos como Scrum y Kanban, facilitando la planificación, el seguimiento de tareas y la priorización del backlog.',
    img: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Novedades%2F8707a207f678c22343417a18e9db520f.png?alt=media&token=6ab28e8d-7219-425b-a8f7-8842a5eebf81'
  }
]

export const superAdminDashboard: SuperAdminDashboard[] = [
  {
    id: 1,
    name: 'Dashboard',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633846.svg?alt=media&token=0d2cf271-3da2-4968-a525-1d1f82bfbb6e',
    link: '/super-admin-dashboard'
  },
  {
    id: 2,
    name: 'Miembros',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633847.svg?alt=media&token=2f5c5931-b3f2-4386-8ba1-402e9b34ed33',
    link: '/super-admin-dashboard/members'
  },
  {
    id: 3,
    name: 'Eventos',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633848.svg?alt=media&token=86acaf56-8d28-4a41-9d56-77837e7bc75d',
    link: '/super-admin-dashboard/events'
  },
  {
    id: 4,
    name: 'Aliados',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633849.svg?alt=media&token=e577db73-eca6-441a-a7c5-bd898b305d19',
    link: '/super-admin-dashboard/allies'
  },
  {
    id: 5,
    name: 'Membresías',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633850.svg?alt=media&token=e0c1047f-2f37-4ccd-893f-502449783841',
    link: '/super-admin-dashboard/memberships'
  }
]

export const userDashboard = [
  {
    id: 1,
    name: 'Mi Perfil',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633847.svg?alt=media&token=2f5c5931-b3f2-4386-8ba1-402e9b34ed33',
    link: '/users'
  }
]

export const sponsorDashboard = [
  {
    id: 1,
    name: 'Perfil',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633847.svg?alt=media&token=2f5c5931-b3f2-4386-8ba1-402e9b34ed33',
    link: '/sponsors'
  },
  {
    id: 2,
    name: 'Mis publicaciones',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633848.svg?alt=media&token=86acaf56-8d28-4a41-9d56-77837e7bc75d',
    link: '/sponsors/mis-publish'
  },
  // {
  //   id: 3,
  //   name: 'Publicar contenido',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633848.svg?alt=media&token=86acaf56-8d28-4a41-9d56-77837e7bc75d',
  //   link: '/sponsors/posts'
  // },
  {
    id: 4,
    name: 'Ofertas',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Super%20Admin%20Dashboard%2FGroup%20633848.svg?alt=media&token=86acaf56-8d28-4a41-9d56-77837e7bc75d',
    link: '/sponsors/offerts'
  }
]

export const image_url_mobile =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20scrum%20latam%20MOBILE.svg?alt=media&token=9341b402-afa4-481c-90a4-1c12b8a121ab'
export const image_url_desktop =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20DESTOK.svg?alt=media&token=abfb73e3-b1d4-4a92-a924-a86e3df53fb1'

export const ProductsServices: ProductsServicesItem[] = [
  {
    id: 1,
    type: 'Noticia',
    iconName: 'globe',
    title: ' Impulsando el Liderazgo Ágil en Scrum Latam',
    sub_title: 'El respaldo que fortalece a una comunidad de líderes',
    text: 'Gracias al apoyo estratégico, Scrum Latam puede seguir creciendo como un espacio de formación para nuevos líderes ágiles. Este respaldo permite crear experiencias de aprendizaje, generar conexiones entre profesionales y difundir las buenas prácticas de Scrum en toda la región. Haz clic aquí para conocer cómo estamos construyendo juntos un ecosistema más colaborativo e innovador.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'
  },
  {
    id: 2,
    type: 'Blog',
    iconName: 'book',
    title: 'Formar líderes comienza con creer en la comunidad',
    sub_title: ' El crecimiento ágil necesita espacios que lo hagan posible',
    text: 'En Scrum Latam creemos que el liderazgo nace del aprendizaje continuo y del contacto con una comunidad viva. El apoyo recibido nos permite generar oportunidades, abrir conversaciones y conectar a quienes transforman equipos a través de metodologías ágiles. Haz clic aquí para ser parte del cambio.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'
  },
  {
    id: 3,
    type: 'Actualización',
    iconName: 'bell',
    title: ' Construyendo el futuro del agilismo en Latinoamérica',
    sub_title: ' Cuando una comunidad crece, el liderazgo también lo hace',
    text: 'El impacto de Scrum Latam no sería posible sin el impulso que permite llegar a más personas, más equipos y más países. Gracias a esta sinergia, podemos inspirar a nuevos líderes, crear contenido formativo y reforzar el compromiso con el crecimiento ágil en toda la región. Haz clic aquí para conocer más.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa'
  }
]

export const profilesTecnologia = [
  {
    name: 'Ruben Dario Romero Chica',
    title: 'Fundador',
    description: 'Creador y fundador de la comunidad SCRUM Latam',
    countryFlagUrl: 'https://flagcdn.com/ve.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FRuben.jpg?alt=media&token=87648c10-26cf-4968-a2f3-65fa52fee715',
    linkedinUrl: 'https://www.linkedin.com/in/ruben-dario-scrumlatam/'
  },
  {
    name: 'Geornith Melo Ortiz',
    title: 'Scrum Master',
    description:
      'Facilitadora de equipos ágiles, enfocada en la mejora continua y la entrega de valor',
    countryFlagUrl: 'https://flagcdn.com/co.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FGeornith_Melo_Ortiz.jpg?alt=media&token=31faefd8-2bcf-4a06-8172-07867e13324b',
    linkedinUrl: 'www.linkedin.com/in/geornith-melo-ortiz'
  },
  {
    name: 'Rosita Jhaneth Chichipe Falen',
    title: 'Product Owner',
    description:
      'Líder estratégica en productos digitales con foco en necesidades del usuario y visión de negocio',
    countryFlagUrl: 'https://flagcdn.com/co.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FRosita_Jhaneth_Chichipe_Falen.jpeg?alt=media&token=35f11502-fe26-4cb9-8ea7-8f24ab5b3b37',
    linkedinUrl: 'https://www.linkedin.com/in/rosi-chichipe/'
  },
  {
    name: 'Majiruz Vargas',
    title: 'UX/UI Designer',
    description:
      'Diseñadora enfocada en experiencias de usuario atractivas y funcionales',
    countryFlagUrl: 'https://flagcdn.com/ve.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FMajiruz_Vargas.jpg?alt=media&token=343f4f7b-f8c9-4165-85da-08647a7046a2',
    linkedinUrl: 'https://www.linkedin.com/in/majiruz-vargas-majilustra/'
  },
  {
    name: 'Fernando Campellone',
    title: 'Fullstack Developer',
    description:
      'Desarrollador fullstack apasionado por las tecnologías web modernas',
    countryFlagUrl: 'https://flagcdn.com/ar.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FFernando_C.jpg?alt=media&token=782a7e9b-3e78-4ef2-8f03-67381259a822',
    linkedinUrl: 'https://www.linkedin.com/in/fernando-campellone-a57335232/'
  },
  {
    name: 'David Morcillo Benavidez',
    title: 'Fullstack Developer',
    description:
      'Desarrollador fullstack apasionado en crear soluciones robustas y ',
    countryFlagUrl: 'https://flagcdn.com/co.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FAlejandro_Morcillo.jpg?alt=media&token=7c76c116-055f-49aa-938c-c7d577ac6044',
    linkedinUrl:
      'https://www.linkedin.com/in/david-morcillo-benavidez-aljo1996/'
  }
]

export const profilesCOE = [
  {
    name: 'Ruben Dario Romero Chica',
    title: 'Fundador',
    description: 'Creador y fundador de la comunidad SCRUM Latam',
    countryFlagUrl: 'https://flagcdn.com/ve.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Tecnologia%2FRuben.jpg?alt=media&token=87648c10-26cf-4968-a2f3-65fa52fee715',
    linkedinUrl: 'https://www.linkedin.com/in/ruben-dario-scrumlatam/'
  },
  {
    name: 'Karen Lara Ferrufino',
    title: 'Scrum Master',
    description: 'Facilitador del equipo y guardián de los principios ágiles',
    countryFlagUrl: 'https://flagcdn.com/bo.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Catalizador%2FKaren_Lara.png?alt=media&token=db24f658-5e6e-46ac-bbff-e275b64e44a6',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'Vanesa Dominguez',
    title: 'Scrum Master',
    description:
      'Facilita el trabajo del equipo y promueve la mejora continua en la comunidad ágil',
    countryFlagUrl: 'https://flagcdn.com/py.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FCoE%2FVanesa_Dominguez.jpeg?alt=media&token=fdde85c3-5b6f-4ece-9b22-8a9e8fd81e67',
    linkedinUrl: 'https://www.linkedin.com/in/vane-dominguez/'
  }
]

export const profilesCatalizador = [
  {
    name: 'Karen Lara Ferrufino',
    title: 'Scrum Master',
    description: 'Facilitador del equipo y guardián de los principios ágiles',
    countryFlagUrl: 'https://flagcdn.com/bo.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Catalizador%2FKaren_Lara.png?alt=media&token=db24f658-5e6e-46ac-bbff-e275b64e44a6',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'David Oña',
    title: 'Product Owner',
    description: 'Visionario del impacto del Squad en la comunidad ágil.',
    countryFlagUrl: 'https://flagcdn.com/ec.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Catalizador%2FDavid%20.jpg?alt=media&token=d894b9e0-f813-4a88-a730-8c86da79c56d',
    linkedinUrl: 'https://www.linkedin.com/company/scrum-latam-comunidad/'
  },
  {
    name: 'Yenny Viviana Campos Diaz',
    title: 'Team Member',
    description: 'Ejecutores y co-creadores de iniciativas de cambio.',
    countryFlagUrl: 'https://flagcdn.com/co.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Catalizador%2FViviana.jpg?alt=media&token=0904d4ff-4dcb-4e71-afd3-8d1d80242f2d',
    linkedinUrl: 'www.linkedin.com/in/viviana-campos-031a25142/'
  },
  {
    name: 'Michelle Bonilla',
    title: 'Team Member',
    description: 'Ejecutores y co-creadores de iniciativas de cambio.',
    countryFlagUrl: 'https://flagcdn.com/sv.svg',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/profile_squads_photo%2FSquad_Catalizador%2FMichelleBonilla.jpg?alt=media&token=b6d9b0c4-a2ca-4c96-baae-1f94e8bda72d',
    linkedinUrl: 'www.linkedin.com/in/joyamichelle'
  }
]

export const activityCategoriesData = [
  {
    id: 'agile-sos',
    title: 'Agile S.O.S',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/activities%2F1e74b39a1c935fa15298fc9f02ebbc13907954ef.jpg?alt=media&token=fab37897-f470-4202-b581-8635ce45f883'
  },
  {
    id: 'track-formativo',
    title: 'Track Formativo',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/activities%2F2e8f549881db4bcd5748258ac626e1c377d80d53.jpg?alt=media&token=d52d5827-32d7-4438-ba20-e6573d36ae6c'
  },
  {
    id: 'agile-learning-lab',
    title: 'Agile Learning Lab',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/activities%2Fa43260d3f862e9736aa046286aa92a1795051164.jpg?alt=media&token=85d27b4a-3544-44b6-8cc2-8fd7c5676dcf'
  },
  {
    id: 'scrum-latam-live',
    title: 'Scrum Latam Live',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/activities%2Ff68ad6c595fe49cee207cea7e0fc286d611f01ad.jpg?alt=media&token=e58d46d8-2228-4859-b96e-0a39b5e1bc88'
  }
]

// En tu archivo, por ejemplo: /data/data.ts

export const allEventsData = [
  // --- Scrum Latam Live ---
  {
    id: '1',
    type: 'scrum-latam-live',
    title: 'TRIPLE TRACK Product Discovery y PBB',
    facilitator: 'Antonio Gallardo',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-06-25', // Formato YYYY-MM-DD es más robusto
    time: ['19:00 - 20:00 (COL)'],
    description:
      'Explora a fondo el Product Discovery y la creación de un Product Backlog potente (PBB) en este taller intensivo con Antonio Gallardo.',
    status: 'ACTIVE',
    link: '/events/1'
  },
  {
    id: '2',
    type: 'scrum-latam-live',
    title: 'IA con Norte: Estrategias y Métricas que Transforman',
    facilitator: 'Yoko Pérez y Heileen Goodson',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-07-08',
    time: ['19:00 - 21:00 (COL)'],
    description:
      'Descubre cómo la Inteligencia Artificial puede potenciar tus estrategias de producto y las métricas que realmente importan para el éxito.',
    status: 'ACTIVE',
    link: '/events/2'
  },
  // --- Agile Learning Lab ---
  {
    id: '3',
    type: 'agile-learning-lab',
    title: 'De 0 a Pro: Taller Práctico de Jira para Equipos Ágiles',
    facilitator: 'Rigoberto Nava',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-07-15',
    time: ['18:00 - 20:00 (MEX)'],
    description:
      'Domina Jira desde cero. Aprende a configurar tableros, flujos de trabajo y reportes para maximizar la productividad de tu equipo ágil.',
    status: 'ACTIVE',
    link: '/events/3'
  },
  {
    id: '4',
    type: 'agile-learning-lab',
    title: 'Agilidad Empresarial con IA',
    facilitator: 'Hiriam Eduardo Pérez',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-07-22',
    time: ['19:00 - 21:00 (COL)'],
    description:
      'Desde la estrategia hasta la planeación, aprende a integrar la Inteligencia Artificial para llevar la agilidad a toda tu organización.',
    status: 'ACTIVE',
    link: '/events/4'
  },
  // --- Agile S.O.S ---
  {
    id: '5',
    type: 'agile-sos',
    title: 'Sesión Abierta de Dudas y Desafíos Ágiles',
    facilitator: 'Comunidad Scrum Latam',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-06-20',
    time: ['21:00 - 23:00 (ARG)'],
    description:
      '¿Tienes un bloqueo en tu proyecto? ¿Una duda sobre una ceremonia? Trae tus desafíos a esta sesión de ayuda mutua y aprovecha la inteligencia colectiva.',
    status: 'ACTIVE',
    link: '/events/5'
  },
  // --- Track Formativo ---
  {
    id: '6',
    type: 'track-formativo',
    title: 'Preparación de Entrevistas para Roles Ágiles',
    facilitator: 'Jonathan Marinches',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-08-01',
    time: ['19:00 - 21:00 (COL)'],
    description:
      'Prepárate para tu próxima entrevista. En este track, simularemos entrevistas, revisaremos preguntas comunes y te daremos feedback para que consigas el rol que buscas.',
    status: 'ACTIVE',
    link: '/events/6'
  },
  // --- Evento Inactivo (para probar el filtro de estado) ---
  {
    id: '7',
    type: 'scrum-latam-live',
    title: 'Evento Pasado: Retrospectivas Efectivas',
    facilitator: 'Ana C.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2Fimage_banner_sponsors.png?alt=media&token=6f18d393-5502-4b71-8f1c-f7adf65816fa',
    date: '2025-05-15',
    time: ['19:00 - 20:00 (COL)'],
    description:
      'Este evento ya concluyó. Aprendimos técnicas avanzadas para que las retrospectivas generen acciones de mejora reales y medibles.',
    status: 'INACTIVE',
    link: '/events/7'
  }
]
