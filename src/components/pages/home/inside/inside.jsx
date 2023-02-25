import React from 'react';
import classNames from 'classnames/bind';

import styles from './inside.module.scss';

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import image from './images/inside-interface.jpg';

const cx = classNames.bind(styles);

const Inside = () => (
  <section className={cx('inside', 'wrapper')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>See what's inside</h2>
      <p className={cx('text')}>
        A user-friendly and intuitive interface that will help you from the very first step. The
        right template for increasing sales without SMS and registration
      </p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={image} alt="" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Inside;
