import React, {useState} from 'react';
import styles from './Review.module.scss';
import Image from "next/image";
import Review1 from '../../../assets/images/Review1.png';
import Review2 from '../../../assets/images/Review2.png';
import Review3 from '../../../assets/images/Review3.png';
import ArrowRight from '../../../assets/images/ArrowRight.svg';
import ArrowLeft from '../../../assets/images/ArrowLeft.svg';

const Review = () => {

    const amountOfImages = [{id: 1, img: Review1}, {id: 2, img: Review2}, {id: 3, img: Review3}];

    const [currentReview, setCurrentReview] = useState(1);

    const moveRight = () => {
        if (currentReview < amountOfImages.length) {
            setCurrentReview(prev => prev + 1);
        }
    }

    const moveLeft = () => {
        if (currentReview > 1) {
            setCurrentReview(prev => prev - 1);
        }
    }

    return (
        <section className={styles.section}>
            <h2>
                Review
            </h2>
            <div className={styles.buttons}>
                <button className={styles.buttons__left} onClick={moveLeft}><Image src={ArrowLeft} alt={'Arrow Left'}/>
                </button>
                <button className={styles.buttons__right} onClick={moveRight}><Image src={ArrowRight}
                                                                                     alt={'Arrow Right'}/></button>
            </div>
            <span className={styles.container}>
                {amountOfImages.map((item) => {
                    return (
                        <>
                            {item.id === currentReview &&
                                <Image key={item.id} src={item.img} alt={"Image"}/>}
                        </>
                    )
                })}
            </span>
        </section>
    );
};

export default Review;