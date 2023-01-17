import React from 'react';
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from '../../assets/images/logo.svg';
import bg from '../../assets/images/bg-image.png';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
                <Image className={styles.navbar__logo} width={169} height={33} src={logo} alt="Logo"/>
                <ul className={styles.navbar__links}>
                    <li className={styles.navbar__link}>
                        <Link href={'#about'}>About</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <Link href={'#programs'}>Programs</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <Link href={'#steps'}>Steps</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <Link href={'#questions'}>Questions</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <Link href={'#contactUs'}>Get in touch</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;