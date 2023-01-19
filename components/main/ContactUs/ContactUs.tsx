import React from 'react';
import styles from './ContactUs.module.scss';
import Image from "next/image";
import FromBg from '../../../assets/images/FormBg.png';
import {useForm} from "react-hook-form";
import {IFormData} from "./ContactUs.types";
import SubmitForm from "./SubmitForm";


const ContactUs = () => {
    return (
        <section className={styles.contact_us} id={'contactUs'}>
            <h2>
                Contact us
            </h2>
            <p>Do you have any kind of help please contact with us.</p>
            <Image src={FromBg} alt={'Form background'}/>
            <SubmitForm/>
        </section>
    );
};

export default ContactUs;