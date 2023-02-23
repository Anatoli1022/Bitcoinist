import classNames from 'classnames/bind';
import React from 'react';

// import Link from 'components/shared/link';

import styles from './footer.module.scss';

import illustration from './images/footer-logo.svg';
import facebook from './images/footer-facebook.svg';
import twitter from './images/footer-twitter.svg';
import linkedin from './images/footer-linkedin.svg';
import youtube from './images/footer-youtube.svg';
import drible from './images/footer-drible.svg';
import behance from './images/footer-behance.svg';

const cx = classNames.bind(styles);

const Footer = () => (
  <section className={cx('footer')}>
    <div className={cx('container')}>
      <nav className={cx('navigation')}>
        <div>
          <img src={illustration} alt="" />
          <p className={cx('text')}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore{' '}
          </p>
          <ul className={cx('social-list')}>
            <li className={cx('social-item')}>
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={drible} alt="" />
              </a>
            </li>
            <li className={cx('social-item')}>
              <a href="">
                <img src={behance} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>Service</h3>
            <a href="" className={cx('link')}>
              Home
            </a>
            <a href="" className={cx('link')}>
              Pricing
            </a>
            <a href="" className={cx('link')}>
              Templates
            </a>
            <a href="" className={cx('link')}>
              Cases
            </a>
          </li>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>About us</h3>
            <a href="" className={cx('link')}>
              Team
            </a>
            <a href="" className={cx('link')}>
              Blog
            </a>
            <a href="" className={cx('link')}>
              FAQ
            </a>
          </li>
          <li className={cx('item')}>
            <h3 className={cx('item-title')}>Cantact </h3>
            <a href="mailto:Estimatesguru@info.co.us" className={cx('link')}>
              Estimatesguru@info.co.us
            </a>
            <a href="tel:+7 903-118-1515" className={cx('link')}>
              +7 903-118-1515
            </a>
          </li>
        </ul>
      </nav>
      <div className={cx('wrapper')}>
        <p className={cx('copyright')}>Copyright 2022 Estimatesguru All Rights Reserved</p>
        <div className={cx('text-wrapper')}>
          <p className={cx('privacy-text')}>Privacy policy</p>
          <p className={cx('terms-text')}>Terms of us</p>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
