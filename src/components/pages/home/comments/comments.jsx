import React from 'react';
import classNames from 'classnames/bind';

import styles from './comments.module.scss';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import alex from './images/comments-alex.jpg';
import ruben from './images/comments-ruben.jpg';

const cx = classNames.bind(styles);

const Comments = () => (
  <section className={cx('comments', 'wrapper')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>What our customers say </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className={cx('comment')}>
            <div className={cx('wrapper-user')}>
              <img src={alex} alt="" loading="lazy" aria-hidden="true" />
              <div className={cx('user-info')}>
                <h4 className={cx('user-name')}>Alex Bern</h4>
                <p className={cx('user-work')}>CEO by PixelPerfect</p>
              </div>
            </div>
            <p className={cx('text-comment')}>
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure
              reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”{' '}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('comment')}>
            <div className={cx('wrapper-user')}>
              <img src={ruben} alt="" loading="lazy" aria-hidden="true" />
              <div className={cx('user-info')}>
                <h4 className={cx('user-name')}>Ruben Chifundo</h4>
                <p className={cx('user-work')}>CEO by NOX</p>
              </div>
            </div>
            <p className={cx('text-comment')}>
              “Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure
              reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Comments;
