import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './layout.module.scss';

import Header from 'components/shared/header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => (
  <div className={cx('wrapper')}>
    <Header />
    <main className={cx('content')}>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
