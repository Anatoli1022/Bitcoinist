import React from 'react';
import classNames from 'classnames/bind';

import styles from './contact.module.scss';

const cx = classNames.bind(styles);

const Contact = () => (
  <section className={cx('contact')}>
    <div className={cx('container', 'contact-container')}>
      <div className={cx('wrapper')}>
        <h2 className={cx('title')}>
          Left questions? Contacts us now for a free consultation and free trial!
        </h2>
        <p className={cx('text')}>
          If you still have questions or you want to get advice, write to us and we will help you
          find a solution.
        </p>
        <div className={cx('mail-wrapper')}>
          <p className={cx('mail-text')}>Email address</p>
          <a href="mailto:Estimatesguru@info.co.us" className={cx('mail')}>
            Estimatesguru@info.co.us
          </a>
        </div>
        <div className={cx('phone-wrapper')}>
          <p className={cx('phone-text')}>Phone number</p>
          <a href="tel:+7 903-118-1515" className={cx('phone')}>
            +7 903-118-1515
          </a>
        </div>
      </div>
      {/* <div className={cx('container-form')}>
        <form action="" className={cx('form')}></form>
      </div> */}
    </div>
  </section>
);

export default Contact;
