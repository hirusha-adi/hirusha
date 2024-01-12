export const Friends: ContributedProject[] = [
  {
    title: 'Sonixd',
    description: 'Added sinhala translation.',
    website: 'https://github.com/jeffvli/sonixd',
    avatar: 'https://images.pling.com/cache/85x85-2/img/00/00/50/02/87/1700828/icon.png',
  },
  {
    title: 'YT-Spammer-Purge',
    description: 'Changed an extremely basic thing.',
    website: 'https://github.com/ThioJoe/YT-Spammer-Purge',
    avatar: 'https://avatars.githubusercontent.com/u/12518330?v=4',
  },
]

export type ContributedProject = {
  title: string
  description: string
  website: string
  avatar?: string
}
