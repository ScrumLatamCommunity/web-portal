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
    name: 'Mexico',
    flag: 'https://flagcdn.com/mx.svg',
  },
  {
    id: 5,
    name: 'España',
    flag: 'https://flagcdn.com/es.svg',
  },
  {
    id: 6,
    name: 'Peru',
    flag: 'https://flagcdn.com/pe.svg',
  },
  {
    id: 7,
    name: 'Ecuador',
    flag: 'https://flagcdn.com/ec.svg',
  },
  {
    id: 8,
    name: 'Guatemala',
    flag: 'https://flagcdn.com/gt.svg',
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
    number: 20,
    text: 'Países',
    icon: 'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Counters%20icons%2FPaises%20icon.svg?alt=media&token=5768415a-6508-411c-849c-6ce59b0eccf7',
  },
  {
    id: 3,
    number: 162,
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

export const image_url_mobile =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20scrum%20latam%20MOBILE.svg?alt=media&token=9341b402-afa4-481c-90a4-1c12b8a121ab'
export const image_url_desktop =
  'https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Imagen%20home%20-%20DESTOK.svg?alt=media&token=abfb73e3-b1d4-4a92-a924-a86e3df53fb1'
