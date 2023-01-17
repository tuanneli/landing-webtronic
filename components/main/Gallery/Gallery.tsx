import React from 'react';
import styles from './Gallery.module.scss';
import Image from "next/image";
import GalleryImg1 from '../../../assets/images/GalleryImg1.png';
import GalleryImg2 from '../../../assets/images/GalleryImg2.png';
import GalleryImg3 from '../../../assets/images/GalleryImg3.png';

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>
                Gallery
            </h2>
            <div className={styles.content}>
                <p className={styles.paragraph_a}>
                    By the end of this course, you will be able to develop and publish your very own Google Chrome
                    extension! In this course we will focus on coding exercises and projects.
                </p>
                <Image className={styles.image_b} src={GalleryImg1} alt={'Image'}/>
                <Image className={styles.image_c} src={GalleryImg2} alt={'Image'}/>
                <p className={styles.paragraph_d}>
                    If you would like to learn web development and get a job in the tech industry, you are going to LOVE
                    this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video
                    tutorials! This course was designed to be extremely beginner friendly. We will begin with the very
                    basics of HTML and build a simple web page.
                </p>
                <Image className={styles.image_e} src={GalleryImg3} alt={'Image'}/>
            </div>
        </section>
    );
};

export default Gallery;