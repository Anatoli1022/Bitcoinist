import React from 'react';
import classNames from 'classnames/bind';

import styles from './business.module.scss';

import learning from './images/business-learning.svg';
import analytics from './images/business-analytics.svg';
import control from './images/business-control.svg';
import date from './images/business-date.svg';
import consuliting from './images/business-consuliting.svg';
import intelligence from './images/business-intelligence.svg';

const cx = classNames.bind(styles);

const Business = () => (
  <section className={cx('business')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>For Your Business</h2>
      <p className={cx('text')}>
        You can easily prepare a commercial offer or make an online estimate that takes into account
        the needs of the client
      </p>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <img src={learning} alt="" />
          <h4 className={cx('item-title')}>Machine learning</h4>
          <p className={cx('item-text')}>
            The service does not need to be studied for a long time — the sales department will be
            able to work in it immediately.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={analytics} alt="" />
          <h4 className={cx('item-title')}>Embed analytics</h4>
          <p className={cx('item-text')}>
            Those who work with you will be impressed by the speed and quality of the prepared
            estimates specifically at the request of the client.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={control} alt="" />
          <h4 className={cx('item-title')}>Access control</h4>
          <p className={cx('item-text')}>
            The service has templates with which a new employee will prepare an estimate. Without
            the intervention of the manager.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={date} alt="" />
          <h4 className={cx('item-title')}>Data analytics</h4>
          <p className={cx('item-text')}>
            Each assessment has statuses — you understand how the work of each manager is
            progressing.
          </p>
        </li>
        <li className={cx('item')}>
          <img src={consuliting} alt="" />
          <h4 className={cx('item-title')}>Big data consulting</h4>
          <p className={cx('item-text')}>
            You earn money on every transaction. It's simple: after all, your profitability is
            calculated automatically
          </p>
        </li>
        <li className={cx('item')}>
          <img src={intelligence} alt="" />
          <h4 className={cx('item-title')}>Artificial intelligence</h4>
          <p className={cx('item-text')}>
            Do you sell yourself or do you have ten salesmen under your command? Estimates.guru will
            suit everyone.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Business;
