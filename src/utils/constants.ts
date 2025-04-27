export const sections = {
  experience: {
    title: "Experiencia",
    label: "experience",
    url: "/#experience",
  },
  projects: {
    title: "Proyectos",
    label: "projects",
    url: "/#projects",
  },
  aboutMe: {
    title: "Sobre mí",
    label: "about-me",
    url: "/#about-me",
  },
  contact: {
    title: "Contacto",
    label: "contact",
    url: "mailto:dalembert.dmu@gmail.com",
  },
} as const;

export const projectTypes = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile App",
} as const;

export const organizationsKeys = {
  innovo: "innovo",
  cineplanet: "cineplanet",
  flota: "flota"
} as const;

export const organizations = {
  [organizationsKeys.innovo]: {
    name: 'Innovo'
  },
  [organizationsKeys.cineplanet]: {
    name: 'Cineplanet'
  },
  [organizationsKeys.flota]: {
    name: '4G Flota'
  }
} as const;
