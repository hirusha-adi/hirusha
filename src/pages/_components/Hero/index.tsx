import React from 'react'
import { Variants, motion, useScroll, useTransform } from 'framer-motion' // Import motion from framer-motion
import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import styles from './styles.module.scss'
import SocialLinks from '@site/src/components/SocialLinks'
import skills from '@site/data/skills'

import { Icon } from '@iconify/react'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Skills() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-500%'], {
    clamp: false,
  })

  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '500%'], {
    clamp: false,
  })

  return (
    <>
      {skills.map((skill, index) => {
        const yValue = index % 2 === 0 ? y1 : y2

        return (
          <motion.div
            className={styles.box}
            initial={{ opacity: 0.01, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              delay: 0.5,
            }}
            style={{
              ...skill.style,
              y: yValue,
            }}
            key={index}
          >
            <Icon icon={skill.icon}></Icon>
          </motion.div>
        )
      })}
    </>
  )
}

function Circle() {
  return <div className={styles.circle} />
}

function Name() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={e => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      }}
    >
      Hey! I'm
      <span
        className={styles.name}
        onMouseMove={e => {
          const bounding = e.currentTarget.getBoundingClientRect()
          e.currentTarget.style.setProperty('--mouse-x', `${bounding.x}px`)
          e.currentTarget.style.setProperty('--mouse-y', `${bounding.y}px`)
        }}
      >
        {' '}
        Hirusha Adikari
      </span>
      <span className={styles.wave}>👋</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <Name />
        <motion.p custom={2} initial="hidden" animate="visible" variants={variants}>
          {`This is my website! This is where i write about stuff i find cool.`}
        </motion.p>
        <motion.div custom={3} initial="hidden" animate="visible" variants={variants}>
          <SocialLinks />
        </motion.div>

        <motion.div
          className={styles.buttonGroup}
          custom={4}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className={styles.outer}>
            <div className={styles.gradient} />
            <Link className={styles.button} href={'./blog'}>
              {`Discover`}
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div className={styles.background}>
        <Skills />
        <HeroMain />
        <Circle />
      </motion.div>
    </motion.div>
  )
}
