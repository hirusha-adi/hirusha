import path from 'node:path'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes } from 'prism-react-renderer'
import { GiscusConfig } from './src/components/Comment'

const config: Config = {
  title: 'Hirusha Adikari',
  url: 'https://hirusha.xyz',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'hirusha-adi',
  projectName: 'hirusha',
  // trailingSlash: false, // change this to false and try if it fails
  customFields: {
    bio: 'a place to document/display/showcase all my work.',
    description:
      "I'm an IT student.",
  },
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'Hirusha Adikari, hirushaadi, hirusha-adi',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, python, react, security, pentest, web, flask, django, osint, web development, programming',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },

    navbar: {
      logo: {
        alt: 'Hirusha Adikari',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      hideOnScroll: false,
      items: [
        {
          label: 'Blog',
          position: 'right',
          to: '/blog/',
        },
        {
          label: 'Study',
          to: '/docs/study/',
          position: 'right',
          sidebarId: 'study',
        },
        {
          label: 'Projects',
          to: '/docs/projects/',
          position: 'right',
          sidebarId: 'study',
        },
        {
          label: 'Other Sections',
          position: 'right',
          items: [
            {
              label: 'Linux',
              to: '/docs/linux/',
              sidebarId: 'linux',
            },
            {
              label: 'Windows',
              to: '/docs/windows/',
              sidebarId: 'windows',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials',
              sidebarId: 'tutorials',
            },
            { label: 'Recommended Tools', to: '/recommended-tools' },
            { label: 'Contributions', to: '/contributions' },
            { label: 'Archive', to: 'blog/archive' },
          ],
        },
        {
          label: 'Photos',
          href: 'https://photos.hirusha.xyz/',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Main Sections',
          items: [
            { label: 'Blog', to: 'blog' },
            { label: 'Archive', to: 'blog/archive' },
            { label: 'Study', to: '/docs/study/' },
            { label: 'Projects', to: 'project' },
            { label: 'Documentation', to: '/docs/projects/' },
          ],
        },
        {
          title: 'Other Sections',
          items: [
            { label: 'Linux', to: '/docs/study/' },
            { label: 'Windows', to: '/docs/windows/' },
            { label: 'Tutorials', to: '/docs/tutorials/' },
          ],
        },
        {
          title: 'Social Media',
          items: [
            { label: 'About', to: '/about' },
            { label: 'GitHub', href: 'https://github.com/hirusha-adi' },
            { label: 'Twitter', href: 'https://twitter.com/hirushaadi' },
            { label: 'Photos', to: 'https://photos.hirusha.xyz/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Recommended Tools', position: 'right', to: '/recommended-tools' },
            { label: 'Contributions', position: 'right', to: '/contributions' },
            { label: 'Theme by 愧怍', position: 'right', to: 'https://github.com/kuizuo/blog' },
            {
              html: `
                <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p>Copyright © 2023-2024 Hirusha Adikari</p>
        `,
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
        'prolog',
        'diff'
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'hirusha-adi/hirusha',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTE2NzM5NTU=',
      category: 'General',
      categoryId: 'DIC_kwDOF1h4Y84CcYNF',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.scss'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-XXQ76Y7DDY',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/hirusha-adi/hirusha/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription:
          'A space to share enjoyable content and express my personal perspective on various matters.',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'Hirusha Adikari',
          copyright: `Copyright © ${new Date().getFullYear()} Hirusha Adikari.`,
        },
      },
    ],
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        hashed: true,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Hirusha Adikari',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
}

export default config
