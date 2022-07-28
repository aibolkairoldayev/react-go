import React from "react";
import styles from "./ShareWhite.module.css"

const ShareWhite = ()=> {
    return(
        <div className={styles.shareWhite}>
            <a className={styles.link} href="">
                <img className={styles.image} src="/images/share-white.svg" alt="icon"/>
            </a>
        </div>
    )
}

export default ShareWhite;