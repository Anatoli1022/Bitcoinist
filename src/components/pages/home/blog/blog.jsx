import React from 'react';
import classNames from 'classnames/bind';

import styles from './blog.module.scss';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import integration from './images/blog-integration.jpg';
import service from './images/blog-service.jpg';
import help from './images/blog-help.jpg';
import arrow from './images/blog-arrow.svg';

const cx = classNames.bind(styles);

const Blog = () => (
  <section className={cx('blog', 'wrapper')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>Our blog</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className={cx('blog-container')}>
            <img
              src={integration}
              alt=""
              loading="lazy"
              aria-hidden="true"
              className={cx('image')}
            />
            <a href="" className={cx('link')}>
              How to set up the widget "Estimates with Estimates.guru" for integration with amoCRM?
            </a>
            <p className={cx('text')}>
              Integration with Estimates.guru allows you to create estimates directly on the amoCRM
              transaction page...
            </p>
            <a href="" className={cx('link-more')}>
              <span>Read more</span>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('blog-container')}>
            <img src={service} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
            <a href="" className={cx('link')}>
              How to make an estimate for the development of a website for a client with a series of
              quick estimates
            </a>
            <p className={cx('text')}>
              Thanks to our service, you will be able to significantly reduce the time spent on this
              work.
            </p>
            <a href="" className={cx('link-more')}>
              <span>Read more</span>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('blog-container')}>
            <img src={help} alt="" loading="lazy" aria-hidden="true" className={cx('image')} />
            <a href="" className={cx('link')}>
              Fast online calculation of construction estimates with Estimates.guru service
            </a>
            <p className={cx('text')}>
              The Estimates.guru service will help you to quickly calculate the construction
              estimate, add all the necessary services and prices.
            </p>
            <a href="" className={cx('link-more')}>
              <span>Read more</span>
              <img src={arrow} alt="" className={cx('arrow')} loading="lazy" aria-hidden="true" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  </section>
);

export default Blog;
