import React from 'react';
import classNames from 'classnames/bind';

import styles from './information.module.scss';

import advanced from './images/information-advanced.svg';
import item from './images/information-item.svg';

const cx = classNames.bind(styles);

const Information = () => (
  <section className={cx('information')}>
    <div className={cx('container-xl')}>
      <div className={cx('information-one')}>
        <div>
          <h2 className={cx('information-title')}>Easy to use, advanced Estimates editor</h2>
          <p className={cx('information-text')}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className={cx('wrapper-image')}>
          <img src={advanced} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        </div>
      </div>
      <div className={cx('information-two')}>
        <div className={cx('information-info')}>
          <h2 className={cx('information-title')}>Hourly rates, item and services lists</h2>
          <p className={cx('information-text')}>
            Our easy to use, advenced editor will help you create estimates faster, confident and
            without any errors.
          </p>
        </div>
        <div className={cx('container-image')}>
          <img src={item} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        </div>
      </div>
    </div>
  </section>
);

export default Information;
