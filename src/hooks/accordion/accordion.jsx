import React from 'react';
import styles from './accordion.module.scss';
import classNames from 'classnames/bind';
import Open from 'hooks/open/open';

const cx = classNames.bind(styles);

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = Open(false);

  return (
    <li className={cx('item', { active: isOpen == true })}>
      <ExpendableColumn question={section.question} isOpen={isOpen} toggle={toggle} />
      <TextSection text={section.text} />
    </li>
  );
};

export const ExpendableColumn = ({ question, toggle }) => {
  return (
    <h3 className={cx('item-title')} onClick={toggle}>
      {question}
    </h3>
  );
};

export const TextSection = ({ text }) => {
  return <p className={cx('item-text')}>{text}</p>;
};
