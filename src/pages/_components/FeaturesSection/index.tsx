import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'
import features, { type FeatureItem } from '@site/data/whatilike'
import SectionTitle from '../SectionTitle'

function Feature({ title, Svg }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <div
          style={{
            width: '100%',
            maxWidth: '150px',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <Svg style={{ width: '100%', height: '100%' }} role="img" />
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection(): JSX.Element {
  return (
    <section className={clsx(styles.featureContainer, 'container padding-vert--sm')}>
      <SectionTitle icon={'ri:presentation-line'}>Classes I teach:</SectionTitle>
      <div className={clsx('row', styles.features)}>
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
