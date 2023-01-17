import React from 'react';
import styles from './FrontendDeveloper.module.scss';

const FrontendDeveloper = () => {
    return (
        <section className={styles.fronted_developer}>
            <div className={styles.fronted_developer__wrapper}>
                <span className={styles.row_one}>
                 <h1 className={styles.main_title}>
                     Front-End
                 </h1>
                    <p>
                        Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                    </p>
                 </span>
                <span className={styles.row_two}>
                     <button>
                         Start my career change
                     </button>
                     <h1>DEVELOPER</h1>
                 </span>
                <span className={styles.row_three}>
                     <p>
                         Courses
                     </p>
                 </span>
            </div>
        </section>
    );
};

export default FrontendDeveloper;