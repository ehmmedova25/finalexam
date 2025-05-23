import React from 'react'
import styles from './Related.module.css'
import { IoPricetagOutline } from "react-icons/io5";
const product = [
    {
        id: 1,
        image: 'https://preview.colorlib.com/theme/shop/img/r1.jpg',
    },
    {
        id: 2,
        image: 'https://preview.colorlib.com/theme/shop/img/r2.jpg',
    },
    {
        id: 3,
        image: 'https://preview.colorlib.com/theme/shop/img/r3.jpg',
    },
    {
        id: 4,
        image: 'https://preview.colorlib.com/theme/shop/img/r4.jpg',
    },
    {
        id: 5,
        image: 'https://preview.colorlib.com/theme/shop/img/r5.jpg',
    },
    {
        id: 6,
        image: 'https://preview.colorlib.com/theme/shop/img/r6.jpg',
    },
    {
        id: 7,
        image: 'https://preview.colorlib.com/theme/shop/img/r7.jpg',
    },
    {
        id: 8,
        image: 'https://preview.colorlib.com/theme/shop/img/r8.jpg',
    },
    {
        id: 9,
        image: 'https://preview.colorlib.com/theme/shop/img/r9.jpg',
    },
    {
        id: 10,
        image: 'https://preview.colorlib.com/theme/shop/img/r10.jpg',
    },
    {
        id: 11,
        image: 'https://preview.colorlib.com/theme/shop/img/r11.jpg',
    },
    {
        id: 12,
        image: 'https://preview.colorlib.com/theme/shop/img/r12.jpg',
    },
]

const Related = () => {
    return (
        <section className={styles.relatedSection}>
            <div className={styles.container}>
                <div className={styles.raletedTitle}>
                    <h1>Related Searched Products</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>

                <div className={styles.relatedBox}>
                    {product.map((item, index) => (
                        <div key={index} className={styles.relatedCard}>
                            <div className={styles.relatedimage}>
                                <img src={item.image} alt="" />
                            </div>
                            <div className={styles.relatedBody}>
                                <span>Black lace Heels</span>
                                <span><IoPricetagOutline /> $189.00</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >

    )
}

export default Related
