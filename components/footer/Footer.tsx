import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import logo from '../../assets/images/logo.svg';
import FbLogo from '../../assets/images/FbLogo.png';
import GitLogo from '../../assets/images/GitLogo.png';
import TwitterLogo from '../../assets/images/TwitterLogo.png';
import InLogo from '../../assets/images/InLogo.png';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.left_part}>
                <Image src={logo} alt={'Logo'}/>
                <p>Wisconsin Ave, Suite 700</p>
                <p>Chevy Chase, Maryland 20815</p>
            </div>
            <div className={styles.middle_part}>
                <div className={styles.middle_part__left}>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Steps</p>
                    <p>FAQs</p>
                </div>
                <div className={styles.middle_part__right}>
                    <p>Review</p>
                    <p>Gallery</p>
                </div>
            </div>
            <div className={styles.right_part}>
                <h3>Social media</h3>
                <ul className={styles.right_part__logos}>
                    <li className={styles.right_part__logo}>
                        <Image src={FbLogo} alt={'Logo'}/>
                    </li>
                    <li className={styles.right_part__logo}>
                        <Image src={GitLogo} alt={'Logo'}/>
                    </li>
                    <li className={styles.right_part__logo}>
                        <Image src={TwitterLogo} alt={'Logo'}/>
                    </li>
                    <li className={styles.right_part__logo}>
                        <Image src={InLogo} alt={'Logo'}/>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;