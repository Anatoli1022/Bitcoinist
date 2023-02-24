import React from 'react';
import classNames from 'classnames/bind';

import styles from './templates.module.scss';

import business from './images/templates-business.svg';
import templates from './images/templates-templates.svg';

const cx = classNames.bind(styles);

const Templates = () => (
  <section className={cx('information')}>
    <div className={cx('container-xl')}>
      <div className={cx('information-one')}>
        <div>
          <h2 className={cx('information-title')}>Get Business Performance Insights</h2>
          <p className={cx('information-text')}>
            Keep track of how many estimates you have created, and how much have been approved by
            client.
            <br /> You can also compare your performances from month to month, quarter to quarter,
            or annual to annual.
          </p>
        </div>
        <div className={cx('information-image')}>
          <img src={business} alt="" loading="lazy" aria-hidden="true" />
        </div>
      </div>
      <div className={cx('information-two')}>
        <div className={cx('information-info')}>
          <h2 className={cx('information-title')}>Estimate Templates</h2>
          <p className={cx('information-text')}>
            Selection of professionally designed templates. Upload your logo, select matching color,
            and you are ready to go.
          </p>
        </div>
        <div className={cx('information-wrapper')}>
          <img src={templates} alt="" loading="lazy" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default Templates;
