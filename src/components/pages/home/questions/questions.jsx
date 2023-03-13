import React from 'react';
import classNames from 'classnames/bind';

import styles from './questions.module.scss';

const cx = classNames.bind(styles);

const Questions = () => (
  <section className={cx('questions')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>Frequently asked questions</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>How to change the status of an estimate?</h3>
          <p className={cx('item-text')}>
            Estimate statuses are tags that help you understand at what stage the work with the
            document is.
          </p>
          <p className={cx('item-text')}>
            - In the work - a new estimate, estimate in the process of creation. <br />
            - Sent - you sent the estimate to the client for approval. <br />
            - Agreed — the client has agreed on the budget estimate. <br />- Canceled - the client
            saw the estimate and did not approve it.
          </p>
          <p className={cx('item-text')}>
            In the list of estimates - click on the text in the "Status" column and select the
            appropriate tag from the drop-down list.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>Lists of goods and services</h3>
          <p className={cx('item-text')}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odio commodi quod iste
            inventore dolor dolorum quasi omnis quo vero eaque iusto, voluptatum blanditiis soluta
            similique explicabo, sapiente porro vel.
          </p>
          <p className={cx('item-text')}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>How to add a commission?</h3>
          <p className={cx('item-text')}>
            Labore, tenetur, quaerat ab, quas quisquam voluptas rem explicabo ratione accusantium ut
            nihil voluptatibus dolores natus nobis laborum odit nisi suscipit maxime.
          </p>
          <p className={cx('item-text')}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className={cx('item-text')}>
            Labore, tenetur, quaerat ab, quas quisquam voluptas rem explicabo ratione accusantium ut
            nihil voluptatibus dolores natus nobis laborum odit nisi suscipit maxime.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>How to set up prepayment?</h3>
          <p className={cx('item-text')}>
            Labore, tenetur, quaerat ab, quas quisquam voluptas rem explicabo ratione accusantium ut
            nihil voluptatibus dolores natus nobis laborum odit nisi suscipit maxime.
          </p>
        </li>
        <li className={cx('item')}>
          <h3 className={cx('item-title')}>How to attach a picture to an estimate?</h3>
          <p className={cx('item-text')}>
            Labore, tenetur, quaerat ab, quas quisquam voluptas rem explicabo ratione accusantium ut
            nihil voluptatibus dolores natus nobis laborum odit nisi suscipit maxime.
          </p>
          <p className={cx('item-text')}>
            Labore, tenetur, quaerat ab, quas quisquam voluptas rem explicabo ratione accusantium ut
            nihil voluptatibus dolores natus nobis laborum odit nisi suscipit maxime.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Questions;
