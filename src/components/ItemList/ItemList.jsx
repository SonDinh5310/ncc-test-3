import React from 'react';
import styles from './ItemList.module.css';
import Item from '../Item/Item';

function ItemList() {
    const items = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue Pellentesque ultrices vestibulum mattis.',
            image: './assets/css-icon.png',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue Pellentesque ultrices vestibulum mattis.',
            image: './assets/html-icon.png',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue Pellentesque ultrices vestibulum mattis.',
            image: './assets/url-icon.png',
        },
    ];

    return (
        <div className={styles.wrapper}>
            {items.map((item, index) => {
                return (
                    <div
                        style={{
                            paddingRight:
                                index === items.length - 1 ? '0' : '3%',
                        }}
                        key={index}
                    >
                        <Item item={item} />
                    </div>
                );
            })}
        </div>
    );
}

export default ItemList;
