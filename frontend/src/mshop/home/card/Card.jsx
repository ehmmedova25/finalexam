import React from 'react'
import styles from './Card.module.css'

const Card= () => {
    return (
        <section className={styles.differentSection}>
            <div className={styles.container}>

                <div className={styles.differentTitle}>
                    <h1>Shop for Different Categories</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>

                <div className={styles.differentBox}>
                    <div className={`${styles.differentCard} ${styles.card1}`}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
                    </div>
                    <div className={`${styles.differentCard} ${styles.card2}`}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
                    </div>
                    <div className={`${styles.differentCard} ${styles.card3}`}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
                    </div>
                    <div className={`${styles.differentCard} ${styles.card4}`}>
                        <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Card