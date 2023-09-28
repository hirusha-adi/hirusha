import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HeroSection() {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Hello There!</h1>
        <img
          alt={siteConfig.title}
          className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
          src={useBaseUrl('img/logo.svg')}
        />
        <p className="hero__subtitle">
          its me hirusha. nice to meet you.
          <br></br>
          this is {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/aboutme">
            About Me
          </Link>
        </div>


      </div>
    </header>
  );
}

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout
      title="Welcome 👋"
      description={siteConfig.tagline}>
      <HeroSection />
      <IntroSecondPart />
    </Layout>
  );
}

function IntroSecondPart() {
  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h3
              className={clsx(
                'text--center',
                'margin-bottom--lg',
                styles.sectionTitle,
              )}>
              "Don't let the chains of orthodoxy shackle your imagination. Break free and let your ideas soar,
              for that's where true innovation is born."
            </h3>
            <center>
              - hirusha
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;