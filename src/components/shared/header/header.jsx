import React from 'react';
import classNames from 'classnames/bind';
import Link from 'components/shared/link';
import Navbar from 'hooks/menu';

import logo from '../../../../src/images/header-logo.svg';
import logo_text from '../../../../src/images/header-logo-text.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <section className={cx('header')}>
    <div className={cx('container')}>
      <nav className={cx('navigation')}>
        <Link to="/" className={cx('item-link')}>
          <img src={logo} loading="eager" className={cx('logo')} />
          <img src={logo_text} loading="eager" className={cx('logo-text')} />
        </Link>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>
            <Link to="/" className={cx('item-link')}>
              Home
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="#" className={cx('item-link')}>
              Pricing
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="#" className={cx('item-link')}>
              Templates
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="#" className={cx('item-link')}>
              Blog
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="#" className={cx('item-link')}>
              Cases
            </Link>
          </li>
        </ul>
        <div className={cx('container-button')}>
          <button className={cx('button-sing')}>Sing Up</button>
          <button className={cx('button-login')}>Log in</button>
        </div>
        <Navbar />
      </nav>
    </div>
  </section>
);

export default Header;
