import React from 'react';
import styles from './Paragraph.module.css';

function Paragraph() {
    return (
        <div className={[styles.wrapper, styles.wrapper_padding].join(' ')}>
            <p className={styles.title}>Lorem ipsum dolor sit asmet?</p>
            <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique consequat placerat. Vestibulum auctor pellentesque
                sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                turpis. Nam facilisis, ligula in mattis sodales, augue justo
                tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                augue. Aliquam vel mauris a nibh auctor commodo. Praesent et
                nisi eu justo eleifend convallis. Quisque suscipit maximus
                vestibulum. Phasellus congue mollis orci, sit amet luctus augue
                tristique eu. Donec vulputate odio neque, sed semper turpis
                pellentesque a.
            </p>
        </div>
    );
}

export default Paragraph;
