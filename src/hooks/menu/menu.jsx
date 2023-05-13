import React, { useState } from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import Link from 'components/shared/link';

const cx = classNames.bind(styles);

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [navigation, setNavigation] = useState('');

  const updateMenu = () => {
    if (menu === '') {
      setMenu('active');
      setNavigation('active');
    } else {
      setMenu('');
      setNavigation('active');
    }
  };

  return (
    <div>
      <button className={cx('menu', { active: menu === 'active' })} onClick={updateMenu}>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
        <div className={cx('menu-button')}></div>
      </button>
      <nav className={cx('navigation', { active: menu === 'active' })}>
        <ul className={cx('list')}>
          <li className={cx('list-item')}>
            <Link to="" className={cx('item-link')}>
              Home
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="" className={cx('item-link')}>
              Pricing
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="" className={cx('item-link')}>
              Templates
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="" className={cx('item-link')}>
              Blog
            </Link>
          </li>
          <li className={cx('list-item')}>
            <Link to="" className={cx('item-link')}>
              Cases
            </Link>
          </li>
        </ul>
        <div className={cx('container-button')}>
          <button className={cx('button-sing')}>Sing Up</button>
          <button className={cx('button-login')}>Log in</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
