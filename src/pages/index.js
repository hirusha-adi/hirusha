import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "./_components/Hero";

import styles from "./index.module.css";

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout title="Welcome 👋" description={siteConfig.tagline}>
      <Hero />
      <IntroSecondPart />
    </Layout>
  );
}

function IntroSecondPart() {
  return (
    <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h3
              className={clsx(
                "text--center",
                "margin-bottom--lg",
                styles.sectionTitle
              )}
            >
              "Don't let the chains of orthodoxy shackle your imagination. Break
              free and let your ideas soar, for that's where true innovation is
              born."
            </h3>
            <center>- hirusha</center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
