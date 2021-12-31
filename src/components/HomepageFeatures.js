import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Une Roadmap ?',
    Svg: require('../../static/img/map.svg').default,
    description: (
      <>
        Ma Roadmap pour level up cette annee.
      </>
    ),
  },
  {
    title: 'Étape par étape !',
    Svg: require('../../static/img/step.svg').default,
    description: (
      <>
        L'objectif de ma Roadmap est de visualiser les étapes qui me permettront d'atteindre progressivement mon objectif.
      </>
    ),
  },
  {
    title: 'Devenir une meilleur dev !',
    Svg: require('../../static/img/dev.svg').default,
    description: (
      <>
        Avec cette Roadmap je devrai être en mesure de devenir une meilleure développeuse!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
