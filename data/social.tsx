export type Social = {
  photos_site?: string
  github?: string
  twitter?: string
  medium?: string
  linkedin?: string
  instagram1?: string
  instagram2?: string
  telegram?: string
  email?: string
}

const social: Social = {
  photos_site: 'https://photos.hirusha.xyz',
  github: 'https://github.com/hirushaadi',
  twitter: 'https://twitter.com/hirushaadi',
  medium: 'https://medium.com/@hirushaadi',
  linkedin: 'https://www.linkedin.com/in/hirusha-adikari-9b2b48169/',
  instagram1: 'https://www.instagram.com/hirusha.adikari/',
  instagram2: 'https://www.instagram.com/hirushaadi.photos',
  telegram: 'https://t.me/hirushaadi',
  email: 'mailto:hirushaadi@gmail.com',
}

const SOCIAL = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  twitter: {
    href: social.twitter,
    title: 'Twitter',
    icon: 'ri:twitter-line',
    color: '#1da1f2',
  },
  linkedin: {
    href: social.linkedin,
    title: 'Linkedin',
    icon: 'ri:linkedin-line',
    color: '#1da1f2',
  },
  telegram: {
    href: social.telegram,
    title: 'Telegram',
    icon: 'ri:telegram-line',
    color: '#1da1f2',
  },
  email: {
    href: social.email,
    title: 'Email',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
}

export default SOCIAL
