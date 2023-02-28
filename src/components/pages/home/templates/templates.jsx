import React from 'react';
import classNames from 'classnames/bind';

import styles from './templates.module.scss';

import business from './images/templates-business.svg';
import templates from './images/templates-templates.svg';

const cx = classNames.bind(styles);

const Templates = () => (
  <section className={cx('templates')}>
    <div className={cx('container-xl')}>
      <div className={cx('templates-one')}>
        <div>
          <h2 className={cx('templates-title')}>Get Business Performance Insights</h2>
          <p className={cx('templates-text')}>
            Keep track of how many estimates you have created, and how much have been approved by
            client.
            <br /> You can also compare your performances from month to month, quarter to quarter,
            or annual to annual.
          </p>
        </div>
        <div className={cx('wrapper-image')}>
          <img src={business} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        </div>
      </div>
      <div className={cx('templates-two')}>
        <div className={cx('templates-info')}>
          <h2 className={cx('templates-title')}>Estimate Templates</h2>
          <p className={cx('templates-text')}>
            Selection of professionally designed templates. Upload your logo, select matching color,
            and you are ready to go.
          </p>
        </div>
        <div className={cx('container-image')}>
          <img src={templates} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
        </div>
      </div>
    </div>
  </section>
);

export default Templates;
