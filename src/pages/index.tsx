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
                    "Don't let the chains of orthodoxy shackle your imagination. Break free and let
                    your ideas soar, for that's where true innovation is born."
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
