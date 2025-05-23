import React from 'react';
import styles from './Footer.module.css'; 
import { GoHeart } from "react-icons/go";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 All rights reserved | This template is made with <GoHeart /> by Colorlib</p>
        </footer>
    );
}

export default Footer;

