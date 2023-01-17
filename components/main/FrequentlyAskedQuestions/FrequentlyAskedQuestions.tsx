import React, {useState} from 'react';
import Image from "next/image";
import styles from './FrequentlyAskedQuestions.module.scss';
import questionMark from '../../../assets/images/QuestionMark.svg';
import questionBoxOpen from '../../../assets/images/QuestionBoxOpen.svg';
import questionBoxClosed from '../../../assets/images/QuestionBoxClosed.svg';

const FrequentlyAskedQuestions = () => {

    const questions = [];
    const [chosen, setChosen] = useState<number | null>(null);

    for (let i = 0; i < 5; i++) {
        questions.push(i);
    }

    const handleClick = (i: number) => {
        if (chosen === i) {
            return setChosen(null);
        }
        setChosen(i);
    }

    return (
        <section className={styles.frequently_asked_questions} id={'questions'}>
            <h2> Frequently Asked Questions</h2>
            <span className={styles.content}>
                <div className={styles.content__left_part}>
                    <p>Do you have any kind of questions?</p>
                    <p>We are here to help.</p>
                    <Image src={questionMark} alt={'Question mark'}/>
                </div>
                <div className={styles.content__right_part}>
                    <ul>
                        {questions.map(i => {
                            return (
                                <li className={styles.articles_list} key={i}>
                                    <article className={styles.article} onClick={() => handleClick(i)}>
                                        <Image style={{visibility: i === chosen ? 'hidden' : 'visible'}}
                                               className={styles.question_box_closed} src={questionBoxClosed}
                                               alt={'Article image'}/>
                                        <Image style={{visibility: i !== chosen ? 'hidden' : 'visible'}}
                                               className={styles.question_box_open}
                                               src={questionBoxOpen}
                                               alt={'Article image'}/>
                                        <h3 className={styles.article__title}> What is the price?</h3>
                                        <p className={`${styles.article__text} ${i === chosen ? styles.article__text_active : ''}`}
                                           style={{visibility: i !== chosen ? 'hidden' : 'visible'}}>
                                            Front-end
                                            engineers work closely with
                                            designers
                                            to make websites beautiful,
                                            functional, and fast. This Career Path will teach you not only the necessary
                                            languages and technologies, but how to think like a front-end engineer,
                                            too.
                                        </p>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </span>
        </section>
    );
};

export default FrequentlyAskedQuestions;