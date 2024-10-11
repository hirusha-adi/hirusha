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
        name: 'Brave',
        desc: 'Bloated with Crypto features. Best ad-blocking.',
        logo: 'https://brave.com/static-assets/images/brave-logo-sans-text.svg',
        href: 'https://www.brave.com/',
      },
      {
        name: 'Firefox Developer Edition',
        desc: 'Best development tools.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Firefox_Developer_Edition_logo%2C_2019.svg/117px-Firefox_Developer_Edition_logo%2C_2019.svg.png?20210518161103',
        href: 'https://www.mozilla.org/en-US/firefox/developer/',
      },
      {
        name: 'Thorium',
        desc: 'Fastest. Not as up to date as Chrome. FOSS, Basically Chrome.',
        logo: 'https://thorium.rocks/imgs/thorium.svg',
        href: 'https://thorium.rocks/',
      },

    ],
  },
  {
    name: 'Operating Systems (Desktop)',
    resources: [
      {
        name: 'PopOS',
        desc: 'It just woks with Nvidia devices.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pop_OS-Logo-nobg.svg/1200px-Pop_OS-Logo-nobg.svg.png',
        href: 'https://system76.com/pop',
      },
      {
        name: 'ALCI',
        desc: 'Arch Linux with Calamares Installer. Unstable. Fun',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/800px-Arch_Linux_%22Crystal%22_icon.svg.png',
        href: 'https://alci.online/',
      },
      {
        name: 'Windows LTSC 2021',
        desc: 'Stable. Less bloated. Has useful tools. Supports Adobe ans MS-Office.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg/800px-Windows_logo_-_2012_%28dark_blue%2C_lines_thinner%29.svg.png',
        href: 'https://hirusha.xyz/docs/windows/windows-ltsc-2021/',
      },
    ],
  },
  {
    name: 'Operating Systems (Mobile)',
    resources: [
      {
        name: 'Stock Android',
        desc: 'Just works. Bloated. Supports banking app (play protect)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Android_Logo_2014_-_2019.svg/800px-Android_Logo_2014_-_2019.svg.png',
        href: 'https://www.android.com/',
      },
      {
        name: 'Lineage OS',
        desc: 'De-Googled android. Works fine.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Lineageos_logo.png',
        href: 'https://lineageos.org/',
      },
      {
        name: 'Graphene OS',
        desc: 'As secure and priacy respecting as it gets.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/GrapheneOS_Logo.svg/313px-GrapheneOS_Logo.svg.png',
        href: 'https://grapheneos.org/',
      },
    ],
  },
  {
    name: 'Version Control',
    resources: [
      {
        name: 'Git',
        desc: 'Please learn the basics.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png',
        href: 'https://git-scm.com/',
      },
      {
        name: 'GitHub Desktop',
        desc: 'Easy github repo management.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png',
        href: 'https://github.com/',
      },
    ],
  },

]
