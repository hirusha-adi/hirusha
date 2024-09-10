import React from 'react'
import Layout from '@theme/Layout'
import Hero from './_components/Hero'
import BlogSection from './_components/BlogSection'
import FeaturesSection from './_components/FeaturesSection'
import HomepageProject from './_components/ProjectSection'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext()
  const { description } = customFields as { description: string }

  return (
    <Layout title={tagline} description={description}>
      <main>
        <Hero />
        <div className="container-wrapper">
          <BlogSection />
          <HomepageProject />
          <FeaturesSection />
          <div className={clsx('padding-vert--xl')}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h3 className={clsx('text--center', 'margin-bottom--lg')}>
                    "An idiot admires complexity, a genius admires simplicity, a physicist tries to make it simple, for an idiot anything the more complicated it is the more he will admire it, if you make something so clusterfucked he can't understand it he's gonna think you're a god cause you made it so complicated nobody can understand it. That's how they write journals in Academics, they try to make it so complicated people think you're a genius" ― Terry Davis, Creator of Temple OS
                  </h3>
                  <center>- hirusha</center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
