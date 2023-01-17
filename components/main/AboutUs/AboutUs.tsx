import React from 'react';
import Image from "next/image";
import styles from './AboutUs.module.scss';
import mentors_table from '../../../assets/images/mentors.svg';
import per1 from '../../../assets/images/WadeWarren.png';
import per2 from '../../../assets/images/KristingWatson.png';
import per3 from '../../../assets/images/RobertFox.png';
import {start} from "repl";

const AboutUs = () => {
    return (
        <section className={styles.about_us} id={'about'}>
            <h2 className={styles.about_us__title}>About us</h2>
            <span className={styles.content}>
                <div className={styles.content__left_part}>
                    <h3 className={styles.content__mentors}>
                        Mentors
                    </h3>
                    <div className={styles.content__image}>
                    <Image src={mentors_table} alt={'Mentors_table'}/>
                    </div>
                    <ul className={styles.mentors_table}>
                        <li className={styles.mentors_table__card}>
                            <Image className={styles.mentors_table__image} src={per1} alt={"image"}/>
                            <dt>Wade Warren</dt>
                            <dd>Front-end engineers work closely with designers</dd>
                        </li>
                        <li className={styles.mentors_table__card}>
                            <Image className={styles.mentors_table__image} src={per2} alt={"image"}/>
                            <dt>Kristin Watson</dt>
                            <dd>Front-end engineers work closely with designers</dd>
                        </li>
                        <li className={styles.mentors_table__card}>
                            <Image className={styles.mentors_table__image} src={per3} alt={"image"}/>
                            <dt>Robert Fox</dt>
                            <dd>Front-end engineers work closely with designers</dd>
                        </li>
                    </ul>
                </div>
                <p className={styles.content__right_part}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                    This Career Path will teach you not only the necessary languages and technologies, but how to think
                    like a front-end engineer, too.
                </p>
            </span>
        </section>
    );
};

export default AboutUs;