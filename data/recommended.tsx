export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

export const resourceData: ResourceCategory[] = [
  {
    name: 'Browsers',
    resources: [
      {
        name: 'Google Chrome',
        desc: 'Up to date. Slow. Best sync.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
        href: 'https://www.google.com/chrome/',
      },
      {
        name: 'Thorium',
        desc: 'Fastest. Not as up to date as Chrome. FOSS',
        logo: 'https://thorium.rocks/imgs/thorium.svg',
        href: 'https://thorium.rocks/',
      },
      {
        name: 'Waterfox',
        desc: 'Slowest. Good Features & UI.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Waterfox_logo_2020_%28vectorized%29.svg/1024px-Waterfox_logo_2020_%28vectorized%29.svg.png',
        href: 'https://www.waterfox.net/',
      },
      {
        name: 'Libreworlf',
        desc: 'Private. FOSS',
        logo: 'https://librewolf.net/icon.svg',
        href: 'https://librewolf.net/',
      },
      {
        name: 'Brave',
        desc: 'Bloated. Best ad-blocking.',
        logo: 'https://brave.com/static-assets/images/brave-logo-sans-text.svg',
        href: 'https://www.brave.com/',
      },
    ],
  },
  // {
  //   name: '站点 🖥️',
  //   resources: [
  //     {
  //       name: 'Developer Roadmap',
  //       desc: 'Roadmap to becoming a web developer.',
  //       logo: '/img/resource/roadmap.png',
  //       href: 'https://roadmap.sh/',
  //     },
  //   ],
  // },
]
