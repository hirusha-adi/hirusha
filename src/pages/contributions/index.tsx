import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'

import FriendCard from './_components/FriendCard'
import { Friends } from '@site/data/contributed'

import styles from './styles.module.css'
import { motion } from 'framer-motion'

const TITLE = 'Contributions'
const DESCRIPTION = 'FOSS contributions that I have done'

function SiteInfo() {
  return (
    <div className={styles.siteInfo}>
      <CodeBlock language="yaml" title="about.yaml">
        {`
  title: 'Hirusha Adikari'
  description: 'A/L Student interested in Tech'
  avatar: 'https://hirusha.xyz/img/logo.png'
  `}
      </CodeBlock>
    </div>
  )
}

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
    </section>
  )
}

function CustomCards() {
  const friends = Friends

  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className={styles.friendContainer}>
        <ul className={styles.friendList}>
          {friends.map(friend => (
            <FriendCard key={friend.avatar} friend={friend} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function FriendLink(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <motion.main ref={ref} className="margin-vert--md">
        <FriendHeader />
        <CustomCards />
        <motion.div drag dragConstraints={ref} className={styles.dragBox}>
          <SiteInfo />
        </motion.div>
      </motion.main>
    </Layout>
  )
}
