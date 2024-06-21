export const projects: Project[] = [
  {
    title: 'Data-Recovery',
    description:
      'This application is designed to help users recover lost or forgotten data such as Wi-Fi passwords, browser data, browser passwords, and other sensitive information from their computers.',
    preview:
      'https://repository-images.githubusercontent.com/391273224/639a37d9-4f9c-4a39-b211-13f99d993bf0',
    website: 'http://hirusha.xyz/docs/projects/data_recovery/',
    source: 'https://github.com/hirusha-adi/Data-Recovery',
    tags: ['opensource', 'favorite', 'security'],
    type: 'tools',
  },
  {
    title: 'Fuel-Availability',
    description:
      'A web-based platform that helps fuel stations manage fuel availability, with user-friendly UI and comprehensive admin panel',
    preview:
      'https://user-images.githubusercontent.com/36286877/221198338-87532d43-56c8-4c60-b8a4-1a224b778767.png',
    website: 'https://github.com/hirusha-adi/Fuel-Availability',
    source: 'https://github.com/hirusha-adi/Fuel-Availability',
    tags: ['opensource', 'favorite', 'large', 'teamsds'],
    type: 'web',
  },
  {
    title: 'Near',
    description:
      'An easy to deoloy, fully featured, Discord Bot also with the capability to play music using Lavalink for Team SDS',
    preview:
      'https://user-images.githubusercontent.com/36286877/208341567-6706e40f-03b5-4e29-836c-760708f2e619.png',
    website: 'https://github.com/hirusha-adi/Near',
    source: 'https://github.com/hirusha-adi/Near',
    tags: ['opensource', 'favorite', 'large'],
    type: 'bot',
  },
  {
    title: 'InstaStalker',
    description:
      'Get information of instagram profiles easily with a user friendly web user interface.',
    preview:
      'https://user-images.githubusercontent.com/36286877/163312296-dac7047a-c8b2-4a8f-a25f-e8cd7d5c2fc9.png',
    website: 'https://github.com/hirusha-adi/InstaStalker',
    source: 'https://github.com/hirusha-adi/InstaStalker',
    tags: ['opensource', 'favorite', 'osint'],
    type: 'web',
  },
  {
    title: 'Discord-Token-Grabber-by-QR',
    description:
      'Scam the user into scanning a login QR code by sending a fake gifted nitro subscription.',
    preview:
      'https://raw.githubusercontent.com/hirusha-adi/hirusha/main/data/projects_images/Discord-Token-Grabber-by-QR.png',
    website: 'https://github.com/hirusha-adi/Discord-Token-Grabber-by-QR',
    source: 'https://github.com/hirusha-adi/Discord-Token-Grabber-by-QR',
    tags: ['opensource', 'favorite', 'security'],
    type: 'tools',
  },

  // old
  // ---
  {
    title: 'Mahathama-Gandhi',
    description:
      'Website made for a history school project in Year 7, about India.',
    preview:
      'https://raw.githubusercontent.com/hirusha-adi/hirusha/main/data/projects_images/Mahathama-Gandhi.png',
    website: 'https://github.com/hirusha-adi/Mahathama-Gandhi',
    source: 'https://github.com/hirusha-adi/Mahathama-Gandhi',
    tags: ['archived'],
    type: 'old',
  },


  // {
  //   title: 'rust-wasm-md5',
  //   description: 'Rust',
  //   website: 'https://github.com/kuizuo/rust-wasm-md5',
  //   tags: ['opensource'],
  //   type: 'other',
  // },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'large'
  | 'underdev'
  | 'teamsds'
  | 'osint'
  | 'security'
  | 'fork'
  | 'archived'

export type ProjectType = 'web' | 'tools' | 'other' | 'bot' | 'old' | 'personal'

export const projectTypeMap = {
  web: 'Wesbites',
  tools: 'Software',
  bot: 'Bots',
  other: 'Other',
  old: 'Old',
  archived: 'Archived',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: 'Favourtie',
    description: 'My favorite site, must check it out!',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open source',
    description: 'Open source projects can provide inspiration!',
    color: '#39ca30',
  },
  large: {
    label: 'Large',
    description: 'Large projects',
    color: '#8c2f00',
  },
  underdev: {
    label: 'Under Development',
    description: 'Project is still under development and its incomplete!',
    color: '#8c2f00',
  },
  teamsds: {
    label: 'TeamSDS',
    description: 'Made for TeamSDS.',
    color: '#ff0000',
  },
  osint: {
    label: 'OSINT',
    description: 'Open Source Intelligence',
    color: '#ff0000',
  },
  security: {
    label: 'Security',
    description: 'Security related. Belongs to a shady gray area...',
    color: '#ff0000',
  },
  fork: {
    label: 'Forked',
    description: 'A forked repository that i improved upon',
    color: '#0000ff',
  },
  archived: {
    label: 'Archived',
    description: 'BAD CODE & DESIGN. PLEASE DO NOT OPEN THIS.',
    color: '#0000ff',
  }
  
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
