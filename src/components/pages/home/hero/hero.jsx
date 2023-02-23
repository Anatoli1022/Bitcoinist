import classNames from 'classnames/bind';
import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Link from 'components/shared/link';

import styles from './hero.module.scss';

import illustration from './images/hero-coder.svg';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container', 'hero-container')}>
      <div>
        <h1 className={cx('title')}>
          We help sales managers with no experience sell more and faster
        </h1>
        <p className={cx('text')}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
        <Link to="" className={cx('link')}>
          Get Started
        </Link>
      </div>
      <div>
        <img src={illustration} alt="" loading="eager" />
      </div>
    </div>
  </section>
);

export default Hero;
