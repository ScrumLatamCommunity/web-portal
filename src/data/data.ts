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

export const news = [
  {
    id: 1,
    title: 'Scrum: Clave en equipos tecnológicos',
    date: '10/JUL/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo.',
    img: 'https://s3-alpha-sig.figma.com/img/4306/d499/d1e6ef2d44e34f4d389e0cdeb46eea41?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jks73NYkmxsLkR0i7Rlv2Naxg2O0CFX9p6h9SQIJYvMTbK~Nw1EdtpvGyvWfdAPd0De5uvujaL6D37677gZuyO~geNGSF7oTtEW7ReoC9oy07ioyLxP~ftVAhWipsgAgZBhrp6opd8F7Dae6AGD94Bm4zNwa6K8xkgQ1fSV7J2AtLLf71vTVCKTRnzIaZGL79QDHaThgOwwBJElGBSSq9SRW6gjwdgdg23gdjhzOVEPYvKYlToHghG~JkV2ysb2akAyZjJ1W2QmF4VI80V-l8H0FJU-RGlzsqp5GKIvTd8Mt7JCGW255GhesC8HmOUBvP-Iq-aTica7ok0XRvm5T~Q__',
  },
  {
    id: 2,
    title: 'Gestión visual con Kanban en equipos TI',
    date: '15/JUL/2024',
    description:
      'Los equipos ahora pueden visualizar el estado de cada tarea en tiempo real, lo que ha facilitado una comunicación más efectiva entre los miembros y un enfoque más ágil.',
    img: 'https://s3-alpha-sig.figma.com/img/2c4e/1df7/75ce597aec387532eedc565550f0ab00?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3nqwiNwLY4Hxjcuj2bb-oiavCpvYFnOuRTKE6S8~SCx4vcOnNreRRQ-Qg7V287UY6FSGwuD~FN1SYQmVcnbf5oXpTN3ENl-Ss2wx~hOKCrh1UF28MZaZw92s5~7OHaB0NTTKReQOqHLg-5LkUn0KlvRJRJ2TxPDspncR1j7pPr69C5VId~hRbfDAzhCHalmvnGCgj-6eogqd58CTDUq6niQJungA8sZE70jmLH0mFnN1KEPV~hynAkVpxBetBR00IdiogirRNhJXSkxPIWkb8fMMPWX76zavP9UtnywdIFP5RpqG8exZw8RAOHeW1VECy5rOXwHl2YwuwbWyYL8eg__',
  },
  {
    id: 3,
    title: 'Agile Impulsa la Satisfacción del Cliente',
    date: '06/SEP/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo. ',
    img: 'https://s3-alpha-sig.figma.com/img/e270/7fb7/81be6df9336320083b26889275a348c3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lq9XHPZcQ4tlN4ac4WEIHITvX1AjH638zYYXgXc9U39w6Cg-QpNteqtBnrb20KyT0hJWDf2QGfZwkqH3PB5diN2oiWlTIL12Arza0E8--SB~V3vatDbL04oCl2k5Ar3y50nFz2zmumEc8776ayRpKqd6lgq-yr8jXGN88yv70cRPM3RDiaCd5dJIZnojgRWWmglm-1CPdrww7KtGHyJhYKnrNV2pI~LGXZNpC70kLvgL1k9l6xgdIhN8F1ySVT~lHrK-0SZuNnOVGhL5U36oClFXNZGEvi1lpAi1J4pepMUdtuI2RgYtj-NXhUAPcyjaEa~KBlDJb~WaokVY5Y3EZw__',
  },
  {
    id: 4,
    title: 'Flexibilidad y Productividad Para el Mundo Empresarial',
    date: '19/SEP/2024',
    description:
      'Empresas de todo el mundo han adoptado Scrum para optimizar sus procesos y mejorar la calidad de sus productos, logrando así una mayor satisfacción de sus clientes.',
    img: 'https://s3-alpha-sig.figma.com/img/157e/8f5d/a7c7c7dd76a56a383763b5e69a832e8c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yo878fk7PIwgTKnQIrcVMcCSkEcQgIEW9kX3YssllvS9qWEiRD4kKD8f4TT18YJ4kiPTHYkPnnItWNURui4NZSX1qVLGEvMoqt8dfw84OtvXQrouWA2WhH07Yo4nMn5aXJuDv~ELdtssF-1Z1UbIP5XM8vxG7DrPf8qCgi7e1AyWaRsF3LqYjZQVKON3vWnVBHkk3pwYDZwE4AA5Bp1D6iMD50ugRi95~EQqshuirRTjBy6yWGNj-HfIVlm3bcSgjsm7jaPS-8NSJaQtPFxKrPdHzQlqv9rAIX7d9mFvuSiKKG7536xDuBbjnh6z3jaACiCeplGkkH9MlnDbYA3Wiw__',
  },
  {
    id: 5,
    title: 'Kanban: Más visibilidad, Menos Estrés',
    date: '21/SEP/2024',
    description:
      'Recientemente, una importante empresa tecnológica anunció la adopción de la metodología Scrum para mejorar la agilidad de sus equipos de desarrollo. ',
    img: 'https://s3-alpha-sig.figma.com/img/542d/b1f5/eda87c676156f9ab64916ab5893e2aee?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdjcrFG3lvHawO8Ee6J9TUPUMMJwL93n1a1UfrN3sUAoe9D18iYybTjBSUAkbjz1-bxmoSCDTJB90D-BmMBGtJPYr6m8zT3CjqE~cSt7-h65AtQKm1WhayrsWleoxVg4NolkkrsNYeMImtfzcbQiOsSWb2heZ2fzvea22wmt-8f82VWkwbYHPvOyoESbzQdoRaIUG5EpvvV1PqNO4G2dSIJL-UVjnyJNxD1jHgkYZsFu9jw9Cr2kSYNwXk9pEDlsoceIdDyF-Yt74R5WczyUv31uxAL7p69QNRwwnOXE7Ct6cqLt74C2Uq1llon5EBnEp42GeDRWchyW-lxk8M8wBg__',
  },
  {
    id: 6,
    title: 'El Futuro de la Gestión de Proyectos',
    date: '02/OCT/2024',
    description:
      'Pilar fundamental para las empresas que buscan adaptarse rápidamente a un mercado en constante cambio. A través de enfoques como Scrum, Kanban y Lean',
    img: 'https://s3-alpha-sig.figma.com/img/8d44/7656/da044e04532b9cd31c96fccfb828bc5e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM66gfkWVdY5dejok8p5ZQuIRnyKjLiPJ-xe-IgFflbijaGZyGG3F6BT6ofELxPJx~PIfK9XfZG~Ta0MnCtRUh9ibuGlXFGhlSFhRtra4q1yY3zRcFfxcJtfPk9gu0qcRhT0XoZg0nN2kY6fhuMmVGbAsZ~yTed7z0DzySXD2sk54ItGAPxO4bPSZZgNw7JKWcPxg9hvUkyUMNGShU9NiwNDhSd0BCE8o-s3MAu-kjtOdltSmCNDkA75GOkReY8cH1TzDcFQMxvkDSDj9B2i~pcOXodmusPY6YvaiZiQWOSQT9WGC16ycpMgCsqWtmD2GPXqAsnjdfGuv01alcBDcQ__',
  },
]

export const articles = [
  {
    id: 1,
    title: 'Talleres: Actualizaciones en Algunos Horarios',
    date: '10/JUL/2024',
    description:
      'A partir del 1 de noviembre de 2024, se implementarán algunos cambios clave en los horarios y formatos de los talleres y cursos disponibles. ',
    img: 'https://s3-alpha-sig.figma.com/img/7c9a/c95b/583a0ab9b6d457c1946ebf8ce35ff845?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTFi2V814wcg6rfuJ3t69l3EUz00ur7hnKbq7czL4nN08WLdvOcqBobbzAW7U9ItzJn1XCywuP4Ju5CpCHble~klplwZznnefJhwmBNF5C~21QjG0fklMDazuCqFo3sz4HHJK0L~xG5Z9ZnDxjR2VNcfAN7~SZclshezMve3QN0EIrugM2CavwlAAtgc7KeOjTIYwQRiopJCEHvpV5pzCPSu~IHXOJz5xVAmRPoujPOlVShDv012r~E-ZDYKjRo5-IDikpG8tgDjEasTjC8ahkHvT1Qj82vBDNLW0AzKVYFehykpuhBYSCuJq5Q5LAddyxGRtyMLKCIJ9Efza7-I2A__',
  },
  {
    id: 2,
    title: 'Descarga de Certificados Desde tu Perfil',
    date: '15/JUL/2024',
    description:
      'La comunidad también ha agregado nuevas funcionalidades, como la posibilidad de descargar certificados de participación directamente desde el perfil de usuario, tras completar cada curso.',
    img: 'https://s3-alpha-sig.figma.com/img/f9dd/c5a7/69483224fe586f63149d769cd253dd50?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K67ksL2~MLMu5GpSfKWD5tIwo9OgXFG9xkuP-7oqcx3IWHpYu-XEIiGKnZVw95Q1Z4Rq4UE1nvbKYQMiW9OMmkYx3S~K0PzsnEwvZYPwYXHrWSw7U7qMx4vIr0rorbYpxtm5uCShTjL5uuH0EWxmniq4g08~YEWBMf6PzEghTxulq9Y~cCi~aPdWogU8XWlPX2zG1~27JaUaq8bJ9DgFXAO9vo197N6VXT6w~TLlWDfIq8-Fo16AcOqpAMdt3uL2AZPgovNgLKh9kIDJRzLJ7BvCVgGmDzMN~PgU6rVGZj7F6zVRVPII24wJg4EHtXePmH84yEatfaT2K3HLWOJBJQ__',
  },
  {
    id: 3,
    title: 'Colaboración en Vivo Para Proyectos',
    date: '06/SEP/2024',
    description:
      ' La empresa busca fomentar una cultura de innovación y adaptación rápida a las necesidades del mercado, y Agile ha sido clave en este cambio.',
    img: 'https://s3-alpha-sig.figma.com/img/4a60/725a/a4c7eea5688479b8acd8dd5e64ad7f7e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYP8vh9GaKb0sj0lXtCYvTbze7Vx3WQ6tR9yQEcsXfuZU0sfKqFBhOeCKlQeqDgDMMAJrJro0MFixhLd5QkXyI-oD43eKoTjX1EQOB4TPotx5a7h7Eg0qYlWojWTvFZ9U4TEotMe8KUu-FRlh9Bs795L1q0enmzVBg4KKBfPjKNcYxPfhl7oBeDSt~pSBVsDTmKViESI5O7FfZpHGaFfRa3vNhHeAkZfcVzWeSOjLn4A62J2IVckK9vmk-9ffTBF2-nWqLj4aLEQEnBdl73qQ9eDYARTq1hdUReqi92ezAdDpGy-iC-kqs3nwFkzEFlYNtKVQL9n8x2le6Ct3s15YA__',
  },
  {
    id: 4,
    title: 'Nueva Función de Mentoría',
    date: '19/SEP/2024',
    description:
      'Finalmente, se ha implementado una nueva función de mentoría, donde los miembros más experimentados podrán guiar a otros en su camino hacia la agilidad.',
    img: 'https://s3-alpha-sig.figma.com/img/e89a/a641/d99a1fb0a858216a4a6e5baeb29c374b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RMr4YxWw-msc-fwC-icCwLTugpEX5nIdbv9V~lvcppILBhLSiaP2GN-dHsxMglQA28fhH3W7fHU1tqC0wd8hq9vAaapiccbBkUS0EFcgftw4bYJYIU4dJ-zTXmDPOilUtW1FRKVoyoVdkS68OybaZFAQa6s5dzxi0kizy7dX4BEGuV7SvcPuxekJt3p1zt3BNT-GcFb1Ey8XhxmJIq46fFvhtJKs3twBgPLPHzFq1E88aFVehZMenvgxJAiHyoJuPrVDl8UXeRICgBu7lU9odY8Q73AYebIavAMAmX2EZhN8B8fTAyTJQSfJtTE8H3NTIfcufDLMuhpircqctMdxCg__',
  },
  {
    id: 5,
    title: 'Biblioteca de Recursos Descargables',
    date: '21/SEP/2024',
    description:
      'Uno de los cambios más destacados es la incorporación de una biblioteca de recursos descargables, que incluirá plantillas de trabajo ágiles, guías de Scrum y Kanban.',
    img: 'https://s3-alpha-sig.figma.com/img/3c86/f7f7/aee26d9fc35cf0e132de5471b8535945?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i483Cw4kZlmb9EdlKU3Keawfu~T5EixFi~xAY9w2DpGgvtIx2C~TH2INPiJ-9tBpSWkizpuJtLwCFktmTqqWVr6Qu5etJ3Xi222nwfa0SLKgvY0xfZ0bjNEsADwK0WHpj0UpkAOkK~i125LBQPZEaLBxdwtc87Iw9nUvOqI5vqQ~Z0n6SzIVmAbZ-lobu1ZtyOhtnBUK-s8yiDkS~rQ~q0NqFOpXSWwDgeJU-dV4LhgHnJmJq8-1AKgaIj9URXIKdCC-Fp5xfr1e9e~DCo7GMaXyV-AAWBt-6C61Y3ChJzbKHrFc~csllTN0EZ9JdrJGYQG9sTTWo5wHWmqM3CtnXA__',
  },
  {
    id: 6,
    title: 'Únete a los foros de la Comunidad',
    date: '02/OCT/2024',
    description:
      'La comunidad ha mejorado su sistema de foros, agregando categorías específicas para diferentes temas como la gestión de proyectos ágiles y liderazgo en equipos remotos.',
    img: 'https://s3-alpha-sig.figma.com/img/0b06/9a5e/b0183205782f01e6128d2125933380c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QQSHPfJhbOlthex8wNG2OUbkQiohIi28dHUzpZfsAcL9L7par8OzXlZjCjYLp86C5bd9NA3LeRBsZhlAiJ4IwniWxi-rrnzvIEaJZeLbnsP~3EPw6MWajc6KycMgSIGwP8R4FKrxTYhsnmNdpLMe~zcE0hqPISc-E-DIgYavT3VI5ngwEBPVPV3bLR9KO6sAE--tcdU1bWfbXDnJ9efUSK~i-~1ytJeRIbDFCA1L-RN6U-B8yl1vMcMmk0zDQwQDmcnqf0nWqOAd7a~RGRTbQsZpTx-tm0QWMLFSJJRlNSdMIUFJac6Ie0Hgy46BXDcaC-kfy-DC4kSdy9ZS-P7Lbw__',
  },
]

export const blogs = [
  {
    id: 1,
    title: 'Scrum vs. Kanban: ¿Qué marco ágil es mejor para tu proyecto?',
    date: '06/SEP/2024',
    description:
      'En este artículo, exploramos cómo estas metodologías no solo mejoran la productividad y la colaboración en equipos, sino que también permiten una mayor adaptabilidad frente a los desafíos. Descubre los principios fundamentales del agilismo y cómo aplicarlos para maximizar el éxito.',
    img: 'https://s3-alpha-sig.figma.com/img/5206/fb83/72eec118c5de159399faad54904d2dd5?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhWcrqhZqy0pzYVXKrVcJ-PMTvKtLQorzBL2IgERd~D8Ui-BNZeaAPoLs-2-71ogA6lRvwq9AX5e-8AB-hE2Z7ElZIC96K2RJb2oA4sHHv~zuZq9md40PdQrKwPst60rxNXrclBrFUfguJOmhxNMqlTXY1dK-GszURxIBn2hKV5e660RNqYIUxmcyDzVXqzGMb~BAk8XVkWSPnhIp1dl3QavuE9~EEuPFdihJvA3VAVAZVhLBEF0eUjglsZjpy4SEX0znKQKRZu8B7jwOFf9JED~RNVo5AlH3XotRYnfMW7O0JNj91hdmuULRI1tYt6cjNRw9QL9fMgO-iD2I2vG9w__',
  },
  {
    id: 2,
    title: 'Cómo implementar metodologías ágiles en equipos remotos',
    date: '11/SEP/2024',
    description:
      'La transformación digital ha permitido que cada vez más empresas adopten el trabajo remoto como una modalidad estándar. Sin embargo, la gestión de proyectos en equipos distribuidos puede ser un desafío, especialmente si se busca mantener un ritmo ágil y colaborativo.',
    img: 'https://s3-alpha-sig.figma.com/img/8511/9ec2/b6df1bf955633ef74ad36629278931be?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5dWQBQkSX~gSxa9oPfGSiUowAP23k~dnDRsquF-I5HbqMFmz79cVPxD56tX4HPyHU8I0v9wdM4A9HvBETFCRQqqKFBC2e8IKJRVNnouVZG~4jutDRpJIOLCUBoOo3BhdIMdptOM4M0X9mOLcNE6UY~WbZTCSe4vVsAvaGI~5S4UInJ1fsSKzqiaHONDrbqxYCAL7Gh2Xa42FZS-Y8EQd3lU1tPLXlGR22Dd1ZdWrhFFCy~YOpi6dxmP79MJzygnUwkUEKHqR3JlRfzVkdUaT08BCpCMz3pyvltRfCFgLM78JwZKNwlqhSgfQnbuv6WAwnd-yPw8QUhSkKI7KMYbJw__',
  },
  {
    id: 3,
    title: 'El rol del product owner en un equipo ágil exitoso',
    date: '05/OCT/2024',
    description:
      'El Product Owner es una figura clave en cualquier equipo ágil exitoso, responsable de maximizar el valor del producto desarrollado. En esta entrada, analizamos las principales responsabilidades de este rol, desde la gestión del backlog hasta la toma de decisiones estratégicas.',
    img: 'https://s3-alpha-sig.figma.com/img/8696/d6b2/fad549f877adc8cae4627c00a727ce17?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghaqTTcPL1pQfzlyX5uJaCAJt8pTDCLdQkgHL4Pb6FcVjIByQcWFucid1QRAfuvEnwrCL3HF6Wd6A5zzmO6PY84F1IZ5IKZayulvzXt1Op0XawIM8U78mzoLlK-rcGhLKEUVZxUM4eWWDTro3iufoIWAFGkjTK5COSFlCle9ZSUI3ec9Y2c2gkmwJaaB7v2qO-K1y2V62ETczxgq8MI1mQl8XysAcNiZQOTKgHB2AQYpHdP-mD1SvjMI-3Yt9x5WolC1sy8C451coLi4YhusaaZr7JYkulWoBI23QULAcQOEYTuMmdo1~STM4LqjGgN4B8vC4At3rrL2NOn-zt6UGw__',
  },
  {
    id: 4,
    title: 'Transformando equipos ágiles con Jira: un enfoque eficiente',
    date: '12/OCT/2024',
    description:
      'En el mundo de las metodologías ágiles, Jira se ha convertido en una de las herramientas más populares para gestionar proyectos y equipos de trabajo. Su flexibilidad permite implementar marcos como Scrum y Kanban, facilitando la planificación, el seguimiento de tareas y la priorización del backlog.',
    img: 'https://s3-alpha-sig.figma.com/img/2d62/9260/8707a207f678c22343417a18e9db520f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GYF2E73IVZmalGd7~G8a6axZ~9FuO1qRcN3Mq-4UMZDviVzgJ2kkUnJ~9Ft8jNrN84ZmvudS7BtwuDSYq7e7Y4M~-TuUVdsjidqu03EhK7NSdifVG6KqreUns2B4jjnpiLQovCgXOX3zPo8z6VLRbiySqkFK2YGtKG-IWDIOr7WRWHhL2IyGKEvBpzVi0toGCNTcyauhHD~wxWyr14PKYmXV1QWeQf-5eRNVfZ1kAZLEhwqAk7uyLPLWyfr~2NVfLsuuQm6RwiA~JCXWIYWHJyzkY3TnmCrMvgtuxz8lShDYc38phEi3We7EuRoHkFOkXfyrujzxpo2QVvGyE0stbw__',
  },
]

export const image_url_mobile =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20scrum%20latam%20MOBILE.svg?alt=media&token=9341b402-afa4-481c-90a4-1c12b8a121ab'
export const image_url_desktop =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20DESTOK.svg?alt=media&token=abfb73e3-b1d4-4a92-a924-a86e3df53fb1'
