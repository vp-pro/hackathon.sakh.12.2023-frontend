import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
              <div className={styles.container}>
              <p>Данный сайт был разработан для Хаккатота 2023 Сахалин </p>
              <a href='https://leader-id.ru/events/470684'> Ссылочка</a>
        </div>

    </footer>
  );
};

export default Footer;





    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                Мечты
            </div>
        </div>
    </header>
