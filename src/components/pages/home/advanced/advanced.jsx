import React from 'react';
import classNames from 'classnames/bind';
import styles from './advanced.module.scss';

const cx = classNames.bind(styles);

const Advanced = () => (
  <div className={cx('advanced')}>
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <span className={cx('numbers')}>1830+</span>
          <p className={cx('text')}>Project executed</p>
        </li>
        <li className={cx('item')}>
          <span className={cx('numbers')}>220</span>
          <p className={cx('text')}>Data analytics</p>
        </li>
        <li className={cx('item')}>
          <span className={cx('numbers')}>390</span>
          <p className={cx('text')}>Data management</p>
        </li>
        <li className={cx('item')}>
          <span className={cx('numbers')}>834+</span>
          <p className={cx('text')}>Satisfied customers</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Advanced;
