import React from 'react';
import styles from './SideBar.module.css';

function SideBar() {
    return (
        <div>
            <ul className={styles.sidebar}>
                <li className={styles.currentpage}>Home</li>
                <li>Services</li>
                <li>News</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default SideBar;
