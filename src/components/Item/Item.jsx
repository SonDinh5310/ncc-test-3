import React from 'react';
import styles from './Item.module.css';

function Item({ item }) {
    const { title, content, image } = item;
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <div>
                <img
                    src={require(`${image}`)}
                    alt=""
                    style={{
                        width: '128px',
                        height: '128px',
                    }}
                    className={styles.image}
                />
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Item;
