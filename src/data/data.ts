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

export interface Counter {
  id: number
  number: number
  text: string
  icon: string
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

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Agile heroes league',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FAgile%20heroes%20league.png?alt=media&token=869a911c-250b-439b-a994-263454d9dded',
    alt: 'Agile_heroes_league',
  },
  {
    id: 2,
    name: 'Agile quest',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FAgile%20quest.png?alt=media&token=7e1d4fa8-8c2b-4fa1-acdd-8307051ac0e6',
    alt: 'Agile_quest',
  },
  {
    id: 3,
    name: 'Caroli',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FCaroli.png?alt=media&token=82894ec2-8911-47ab-b2de-e87c8029ffee',
    alt: 'Caroli',
  },
  {
    id: 4,
    name: 'Agile heroes',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FCopia%20de%20Minimal%20We%20Are%20Open%20Store%20Instagram%20Story.png?alt=media&token=85a97e28-606a-467e-a53e-f98bdd98940f',
    alt: 'Agile_heroes',
  },
  {
    id: 5,
    name: 'Go productivity',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FGo%20productivity.png?alt=media&token=6fec46bd-c6e5-42a7-9b23-ff7d95f2d422',
    alt: 'Go_productivity',
  },
  {
    id: 6,
    name: 'Hidekel',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FHidekel.png?alt=media&token=5b48187c-803b-4a0b-817c-540412b2fd26',
    alt: 'Hidekel',
  },
  {
    id: 7,
    name: 'ITcert',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FITcert.png?alt=media&token=b91a4efa-26f9-4aa1-8efd-1b0be7d6a80b',
    alt: 'ITcert',
  },
  {
    id: 8,
    name: 'Taurus Galaxy',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FTaurus%20Galaxy.png?alt=media&token=af85f62f-bf72-4f2b-8d3a-97eb92c72872',
    alt: 'Taurus_Galaxy',
  },
  {
    id: 9,
    name: 'Ya abtal',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2FYa%20abtal.png?alt=media&token=8350404d-8515-4905-a931-918eab8fb655',
    alt: 'Ya_abtal',
  },
  {
    id: 10,
    name: 'flowie',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2Fflowie.png?alt=media&token=02726fb1-065d-4c10-b891-84281c9f9d24',
    alt: 'flowie',
  },
  {
    id: 11,
    name: 'kyooreas',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2Fkyooreas.png?alt=media&token=85aecd68-af32-4d1d-a194-5f1dcaad7d01',
    alt: 'kyooreas',
  },
  {
    id: 12,
    name: 'meta Agility',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Sponsors%20Component%2Fmeta%20Agility.png?alt=media&token=8f879dc9-2d39-4bd2-8a61-50e74492e00e',
    alt: 'meta_Agility',
  },
]

export const flags: Flag[] = [
  {
    id: 1,
    name: 'Argentina',
    flag: 'https://flagcdn.com/ar.svg',
  },
  {
    id: 2,
    name: 'Chile',
    flag: 'https://flagcdn.com/cl.svg',
  },
  {
    id: 3,
    name: 'Colombia',
    flag: 'https://flagcdn.com/co.svg',
  },
  {
    id: 4,
    name: 'España',
    flag: 'https://flagcdn.com/es.svg',
  },
  {
    id: 5,
    name: 'Peru',
    flag: 'https://flagcdn.com/pe.svg',
  },
  {
    id: 6,
    name: 'Ecuador',
    flag: 'https://flagcdn.com/ec.svg',
  },
  {
    id: 7,
    name: 'Guatemala',
    flag: 'https://flagcdn.com/gt.svg',
  },
  {
    id: 8,
    name: 'Panama',
    flag: 'https://flagcdn.com/pa.svg',
  },
  {
    id: 9,
    name: 'Costa Rica',
    flag: 'https://flagcdn.com/cr.svg',
  },
  {
    id: 10,
    name: 'Nicaragua',
    flag: 'https://flagcdn.com/ni.svg',
  },
  {
    id: 11,
    name: 'El Salvador',
    flag: 'https://flagcdn.com/sv.svg',
  },
  {
    id: 12,
    name: 'Honduras',
    flag: 'https://flagcdn.com/hn.svg',
  },
  {
    id: 13,
    name: 'México',
    flag: 'https://flagcdn.com/mx.svg',
  },
  {
    id: 14,
    name: 'Venezuela',
    flag: 'https://flagcdn.com/ve.svg',
  },
  {
    id: 15,
    name: 'Bolivia',
    flag: 'https://flagcdn.com/bo.svg',
  },
  {
    id: 16,
    name: 'Paraguay',
    flag: 'https://flagcdn.com/py.svg',
  },
  {
    id: 17,
    name: 'Brasil',
    flag: 'https://flagcdn.com/br.svg',
  },
  {
    id: 18,
    name: 'Canada',
    flag: 'https://flagcdn.com/ca.svg',
  },
  {
    id: 19,
    name: 'Estados Unidos',
    flag: 'https://flagcdn.com/us.svg',
  },
]

export const counters: Counter[] = [
  {
    id: 1,
    number: 9115,
    text: 'Integrantes',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FMiembros%20icon.svg?alt=media&token=02805ba0-1dbe-43db-b5d6-9b8918212dc6',
  },
  {
    id: 2,
    number: 19,
    text: 'Países',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FPaises%20icon.svg?alt=media&token=5768415a-6508-411c-849c-6ce59b0eccf7',
  },
  {
    id: 3,
    number: 165,
    text: 'Webinars',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FWebinar%20icon.svg?alt=media&token=2ed101e1-382c-49d8-8f43-fd00fe3492b8',
  },
  {
    id: 4,
    number: 99,
    text: 'Talleres',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FTaller%20icon.svg?alt=media&token=550749ca-b2ce-4a8f-b230-0cf2c5efadcf',
  },
  {
    id: 5,
    number: 135,
    text: 'Membresias',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FMembresia%20icon.svg?alt=media&token=ded69439-e716-49e6-81fb-7a0e392b6c73',
  },
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
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_webinar_news_comp.png?alt=media&token=b9539e05-8461-4fdd-a209-0b638a518736',
  },
  {
    id: 2,
    type: 'Noticias',
    iconName: 'globe',
    title: 'Últimas noticias',
    sub_title: 'Optimización de Sprints',
    text: 'Únete a nuestro próximo webinar el 15 de julio a las 18:00 (hora de Bogotá) donde expertos en Scrum compartirán estrategias para optimizar tus sprints y mejorar la eficiencia del equipo. No te pierdas esta oportunidad de aprendizaje y networking.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_noticias_comp.png?alt=media&token=bf80f4a5-62ac-4b16-9277-d42c293c3647',
  },
  {
    id: 3,
    type: 'Cursos',
    iconName: 'bookOpen',
    title: 'Nuevo Curso',
    sub_title: 'Optimización de Sprints',
    text: 'Únete a nuestro próximo webinar el 15 de julio a las 18:00 (hora de Bogotá) donde expertos en Scrum compartirán estrategias para optimizar tus sprints y mejorar la eficiencia del equipo. No te pierdas esta oportunidad de aprendizaje y networking.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/News%20component%2Fimg_cursos_news_comp.png?alt=media&token=8973cc9c-7803-4fa2-9860-9c8b21e63a6f',
  },
]

export const reviews: Review[] = [
  {
    name: 'Penelope Flores',
    id: 1,
    position: 'Agile consultant',
    rating: 4,
    description: 'Muy buena página.',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg',
  },
  {
    name: 'Kevin Añez',
    id: 2,
    position: 'Agile coach',
    rating: 3,
    description: 'Excelente página, muy buen diseño, amo la modernidad',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg',
  },
  {
    name: 'Richard Tavarez',
    id: 3,
    position: 'Scrum master',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg',
  },
  {
    name: 'Richard Tavarez',
    id: 4,
    position: 'Agile coach',
    rating: 3,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg',
  },
  {
    name: 'Richard Tavarez',
    id: 5,
    position: 'Scrum master',
    rating: 5,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/ar.svg',
  },
  {
    name: 'Richard Tavarez',
    id: 6,
    position: 'Agile consultant',
    rating: 1,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, explicabo eveniet enim illum nisi quis ad assumenda. Deserunt, itaque. Necessitatibus amet sapiente',
    profile: 'https://i.pravatar.cc/200',
    flag: 'https://flagcdn.com/cl.svg',
  },
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
      'Promover la adopción de buenas prácticas de agilidad: Desde la experiencia generando una transformación cultural ágil en las organizaciones.',
    ],
  },
  {
    id: 2,
    title: 'Visión',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FGroup%20633229.svg?alt=media&token=885ec74a-0057-4779-af1d-d18fe6fb4488',
    description: [
      'Ser la comunidad líder en Agilidad en América Latina, reconocida por su impacto transformador, generación de valor y creación de conexiones significativas entre sus miembros, impulsando la innovación y el crecimiento en las organizaviones de la región.',
    ],
  },
  {
    id: 3,
    title: 'Propósito',
    image:
      'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/History%2FGroup%20633230.svg?alt=media&token=59985452-bfb7-4c69-b9f9-b841fdf553bd',
    description: [
      'Inspirar y empoderar a personas y organizaciones para alcanzar su máximo potencial a través de la Agilidad, promoviendo una cultura de aprendizaje continuo, colaboración y transformación sostenible en América Latina. Además, impactamos en el ser, fomentando el crecimiento personal y profesional.',
    ],
  },
]

export const memberships = [
  {
    id: 1,
    title: 'Flex',
    price: '$50',
    description1: 'Acceso a Cursos Avanzados',
    description2: 'Talleres Prácticos Mensuales',
    description3: 'Certificado Profesional',
  },
  {
    id: 2,
    title: 'Gratuito',
    price: '$0.00',
    description1: 'Acceso a cursos introductorios',
    description2: 'Webinars Mensuales',
    description3: 'Certificado de participación',
  },
  {
    id: 3,
    title: 'Premium',
    price: '$150',
    description1: 'Asesorías Personalizadas Mensuales',
    description2: 'Invitación a Eventos Exclusivos',
    description3: 'Certificación Especializada',
  },
]

export const benefits = [
  {
    id: 1,
    text: 'Acceso a webinars , talleres y charlas virtuales sobre agilidad y similares',
    checkFree: true,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 2,
    text: 'Oportunidad participar de los sorteos que realiza la comunidad',
    checkFree: true,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 3,
    text: 'Preparación para CV  y entrevistas (Rol Scrum Master)',
    checkFree: true,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 4,
    text: 'Acceso a Simuladores. Preparación con certificación',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 5,
    text: 'Certificados de participación de Talleres',
    checkFree: false,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 6,
    text: 'Descuentos en cursos y certificaciones por parte de los aliados',
    checkFree: false,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 7,
    text: 'Coach o mentoring personalizado (one to one)',
    checkFree: false,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 8,
    text: 'Acceso a grupos de discusión con otros miembros',
    checkFree: false,
    checkFlex: true,
    checkPremium: true,
  },
  {
    id: 9,
    text: 'Acceso a recursos básicos sobre metodologías ágiles',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 10,
    text: 'Cupo asegurado en nuestro Aniversarios  formato (Open Space)',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 11,
    text: 'Membresía bonificada por 6 meses a miembros activos',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 12,
    text: 'Posibilidad de hacer una certificación y un taller bonificados cada año',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
  {
    id: 13,
    text: 'Prioridad estar en todos los canales comunicación de Scrum Latam',
    checkFree: false,
    checkFlex: false,
    checkPremium: true,
  },
]

export const image_url_mobile =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20scrum%20latam%20MOBILE.svg?alt=media&token=9341b402-afa4-481c-90a4-1c12b8a121ab'
export const image_url_desktop =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20DESTOK.svg?alt=media&token=abfb73e3-b1d4-4a92-a924-a86e3df53fb1'
