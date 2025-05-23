import React from 'react'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerDiv}>
                <div className={styles.bannerLeft}><img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" /></div>
                <div className={styles.bannerRight}>
                    <h1><span>Flat</span>75%Off</h1>
                    <h1>IT’S HAPPENING THIS SEASON!</h1>
                    <button>Purchase Now</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
