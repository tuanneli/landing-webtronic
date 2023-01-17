import React, {useState} from 'react';
import styles from "./ToTop.module.scss";

const ToTop = () => {
    const [elementStyle, setElementStyle] = useState<'block' | 'none'>('none')

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setElementStyle('block')
            // }
        } else {
            setElementStyle('none');
        }
    }

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <button onScroll={scrollFunction}
                    style={{display: elementStyle}}
                    onClick={topFunction}
                    className={styles.to_top}
                    id="myBtn"
                    title="Go to top">
                Top
            </button>
        </>
    );
};

export default ToTop;