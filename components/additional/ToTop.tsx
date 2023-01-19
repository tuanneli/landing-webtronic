import React, {useEffect, useState} from 'react';
import styles from "./ToTop.module.scss";

const ToTop = () => {
    const [elementStyle, setElementStyle] = useState<'block' | 'none'>('none')

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return function () {
            document.removeEventListener('scroll', scrollFunction);
        }
    }, [])

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setElementStyle("block")
        } else {
            setElementStyle('none');
        }
    }

    // console.log(document.body.scrollTop)
    // console.log(document.documentElement.scrollTop)

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