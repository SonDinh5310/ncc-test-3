import React from 'react';
import styles from './Logo.module.css';

function Logo() {
    return (
        <img
            src={require('./assets/logoNCC.png')}
            alt=""
            className={styles.logo}
        />
    );
}

export default Logo;
