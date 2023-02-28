import React from 'react';
import classNames from 'classnames/bind';

import styles from './customers.module.scss';

import wood from './images/customers-wood.jpg';
import apple from './images/customers-apple.jpg';
import logo from './images/customers-logo.jpg';
import group from './images/customers-group.jpg';
import hurd from './images/customers-hurd.jpg';
import fairtech from './images/customers-fairtech.jpg';

const cx = classNames.bind(styles);

const Customers = () => (
  <section className={cx('customers')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>Our customers</h2>
      <p className={cx('text')}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudan, totam rem aperiam.
      </p>
      <div className={cx('customers-container')}>
        <img src={wood} alt="Wild Wood" loading="lazy" className={cx('image')} />
        <img src={apple} alt="Apple Rush" loading="lazy" className={cx('image')} />
        <img src={logo} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        <img src={group} alt="AV-group" loading="lazy" className={cx('image')} />
        <img src={hurd} alt="Hard 2 ignore" loading="lazy" className={cx('image')} />
        <img src={fairtech} alt="Fairtech" loading="lazy" className={cx('image')} />
      </div>
    </div>
  </section>
);

export default Customers;
