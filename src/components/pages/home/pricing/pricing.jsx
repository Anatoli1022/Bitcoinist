import React from 'react';
import classNames from 'classnames/bind';

import styles from './pricing.module.scss';

const cx = classNames.bind(styles);

const Pricing = () => (
  <section className={cx('pricing')}>
    <div className={cx('container')}>
      <div classNames={cx('pricing-container')}>
        <h2 className={cx('title')}>Our pricing</h2>
      </div>
      <ul className={cx('list')}>
        <li className={cx('list-item')}>
          <h3 className={cx('item-title')}>Starter</h3>
          <button className={cx('item-button')}>Get started</button>
          <p className={cx('item-text')}>1 Team users </p>
          <p className={cx('item-text')}>3 Estimates</p>
          <p className={cx('item-text')}>Estimatesguru watermark</p>
        </li>
        <li className={cx('list-item')}>
          <h3 className={cx('item-title')}>Standard</h3>
          <button className={cx('item-button')}>Get started</button>
          <p className={cx('item-text')}>3 Team users </p>
          <p className={cx('item-text')}>Export to PDF</p>
          <p className={cx('item-text')}>Export to XLS</p>
        </li>
        <li className={cx('list-item')}>
          <h3 className={cx('item-title')}>Professional</h3>
          <button className={cx('item-button')}>Get started</button>
          <p className={cx('item-text')}>For big teams – unlimited</p>
          <p className={cx('item-text')}>Individual support</p>
          <p className={cx('item-text')}>Multi-currency estimates</p>
          <p className={cx('item-text')}>Analytics</p>
          <p className={cx('item-text')}>CRM integration</p>
        </li>
      </ul>
      <button className={cx('button')}>Сompare options</button>
    </div>
  </section>
);

export default Pricing;
