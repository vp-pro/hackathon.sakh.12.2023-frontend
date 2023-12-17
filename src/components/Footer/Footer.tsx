import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Данный сайт был разработан для{' '}
          <a href='https://leader-id.ru/events/470684' className={styles.link}>
          Хакатона «Digital Острова.65 12/23»
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
