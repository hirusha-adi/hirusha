/*
MIT License
Copyright (c) 2022 kuizuo
Based on: https://github.com/kuizuo/blog
*/ 

import React from 'react';
import { Icon } from '@iconify/react';
import social from '@site/data/social';
import styles from './styles.module.css';

const SocialLink = ({ href, icon, title, color, ...prop }) => {
  return (
    <a href={href} target="_blank" {...prop} title={title}>
      {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
    </a>
  );
};

const SocialLinks = ({ ...prop }) => {
  return (
    <div className={styles.socialLinks} {...prop}>
      {Object.entries(social).map(([key, { href, icon, title, color }]) => {
        if (!href) return <React.Fragment key={key} />;

        return (
          <SocialLink
            key={key}
            href={href}
            title={title}
            icon={icon}
            style={{ '--color': color }}
          ></SocialLink>
        );
      })}
    </div>
  );
};

export default SocialLinks;
