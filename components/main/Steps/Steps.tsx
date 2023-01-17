import React from 'react';
import styles from './Steps.module.scss';
import stepsImg from '../../../assets/images/Steps.png';
import stepsLine from '../../../assets/images/StepsLine.png';
import Image from "next/image";

const Steps = () => {

    const arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(i);
    }

    return (
        <section className={styles.steps} id={'steps'}>
            <h2>Steps</h2>
            <Image className={styles.steps__img_blocks} src={stepsImg} alt={"steps Image"}/>
            <Image className={styles.steps__img_line} src={stepsLine} alt={"steps Line"}/>
            <div className={styles.steps__content}>
                <ul className={styles.left_part}>
                    {arr.map(i => {
                        if (i % 2 === 0) {
                            return (
                                <li key={i}>
                                    <article className={styles.article}>
                                        <p className={styles.article__step}>Step {i + 1}</p>
                                        <h3>Introduction to frontend</h3>
                                        <p className={styles.article__text}>Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Maxime soluta
                                            temporibus
                                            veniam? </p>
                                    </article>
                                </li>
                            )
                        }
                    })}
                </ul>
                <ul className={styles.right_part}>
                    {arr.map(i => {
                        if (i % 2 === 1) {
                            return (
                                <li key={i}>
                                    <article className={styles.article}>
                                        <p className={styles.article__step}>Step {i + 1}</p>
                                        <h3>Introduction to frontend</h3>
                                        <p className={styles.article__text}>Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Maxime soluta
                                            temporibus
                                            veniam? </p>
                                    </article>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Steps;