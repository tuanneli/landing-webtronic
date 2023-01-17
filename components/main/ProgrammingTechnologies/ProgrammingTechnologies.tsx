import React from 'react';
import Image from "next/image";
import styles from './ProgrammingTechnologies.module.scss';
import AngularImg from '../../../assets/images/Angular.png';
import ReactImg from '../../../assets/images/React.png';
import VueImg from '../../../assets/images/Vue.png';
import JsImg from '../../../assets/images/Js.png';

const ProgrammingTechnologies = () => {
    return (
        <section className={styles.programming_technologies} id={'programs'}>
            <h2 className={styles.programming_technologies__title}>Programming technologies</h2>
            <p> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
            <ul className={styles.programming_technologies__list}>
                <li>
                    <Image src={AngularImg} alt={'image'}/>
                </li>
                <li>
                    <Image src={ReactImg} alt={'image'}/>
                </li>
                <li>
                    <Image src={VueImg} alt={'image'}/>
                </li>
                <li>
                    <Image src={JsImg} alt={'image'}/>
                </li>
            </ul>
        </section>
    );
};

export default ProgrammingTechnologies;