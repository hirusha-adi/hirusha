import React from 'react'
import clsx from 'clsx'
import { usePluginData } from '@docusaurus/useGlobalData'
import type { BlogPost } from '@docusaurus/plugin-content-blog'
import Link from '@docusaurus/Link'
import { Icon } from '@iconify/react'
import SocialLinks from '@site/src/components/SocialLinks'
import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './styles.module.scss'

export default function UserCard({ isNavbar = false }: { isNavbar?: boolean }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  const { bio } = customFields as { bio: string }

  const {
    navbar: { title, logo = { src: '' } },
  } = useThemeConfig()

  const logoLink = useBaseUrl(logo.src || '/')

  const blogData = usePluginData('docusaurus-plugin-content-blog') as {
    posts: BlogPost[]
    postNum: number
    tagNum: number
  }
  const docData = (
    usePluginData('docusaurus-plugin-content-docs') as { versions: { docs: BlogPost[] } }
  )?.versions[0].docs

  return (
    <div className={clsx(isNavbar ? styles.userCardNavbar : styles.userCard)}>
      <Link href="/about">
        <img className={styles.cardImg} src={logoLink} alt="logo"></img>
      </Link>
      <div>
        <Link className={styles.name} href="about">
          {/* {title} */}
          Hirusha Adikari
        </Link>
      </div>
      <div className={styles.bio}>{bio}</div>
      <div className={styles.num}>
        <Link className={styles.numItem} href="/blog/archive">
          <Icon icon="carbon:blog" width="20" height="20" />
        </Link>
        <Link className={styles.numItem} href="/blog/tags">
          <Icon icon="ri:price-tag-3-line" width="20" height="20" />
        </Link>
        <Link className={styles.numItem} href="/docs/study">
          <Icon icon="bi:book" width="20" height="20" />
        </Link>
        <Link className={styles.numItem} href="/docs/projects">
          <Icon icon="codicon-project" width="20" height="20" />
        </Link>
      </div>
      <SocialLinks
        style={{
          maxWidth: '100%',
          padding: '0.5em 0',
          justifyContent: 'center',
          gap: '0.5rem',
          ...(isNavbar ? { borderBottom: '1px solid #eee' } : null),
        }}
      />
    </div>
  )
}
