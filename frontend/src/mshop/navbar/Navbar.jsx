import React from 'react'
import { FaBars } from "react-icons/fa6";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.allnavbar}>
            <nav>
                <div className={styles.container}>
                    <div className={styles.topbar}>
                        <div className={styles.contact}>
                            <span>+12312-3-1209</span>
                            <span>SUPPORT@COLORLIB.COM</span>
                        </div>
                        <div className={styles.login}>LOGIN</div>
                    </div>
                </div>
            </nav>
            <header>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <div className={styles.logo}><img src="	https://preview.colorlib.com/theme/shop/img/logo.png" alt="" /></div>
                        <div className={styles.pages}>
                            <a href="/">HOME</a>
                            <a href="">CATEGORY</a>
                            <a href="">MEN</a>
                            <a href="">WOMEN</a>
                            <a href="basket">BASKET</a>
                            <a href="wishlist">wishlist</a>
                            <a href="dashboard">DASHBOARD</a>
                        </div>
                        <div className={styles.hamburger}><FaBars /></div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar