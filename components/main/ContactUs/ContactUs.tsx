import React from 'react';
import styles from './ContactUs.module.scss';
import Image from "next/image";
import FromBg from '../../../assets/images/FormBg.png';


const ContactUs = () => {
    return (
        <section className={styles.contact_us} id={'contactUs'}>
            <h2>
                Contact us
            </h2>
            <p>Do you have any kind of help please contact with us.</p>
            <Image src={FromBg} alt={'Form background'}/>
            <form className={styles.form}>
                <label style={{position: "absolute"}} htmlFor="Name"></label>
                <input name={'Name'} placeholder={'Name'} type="text"/>
                <label style={{position: "absolute"}} htmlFor="Name"></label>
                <input placeholder={'Phone'} type="text"/>
                <label style={{position: "absolute"}} htmlFor="Name"></label>
                <input placeholder={'E-mail'} type="text"/>
                <button>Send</button>
            </form>
        </section>
    );
};

export default ContactUs;