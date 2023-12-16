// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
                {/* Your Logo */}
                Мечты
            </div>
            <nav>
                <ul className={styles.navLinks}>
                <li>
                    <Link to="/csv" className={styles.link}>
                    CSV
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.link}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={styles.link}>
                    About
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
     
    </header>
  );
};

export default Header;
