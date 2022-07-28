import React from "react";
import styles from "./Share.module.css"

const Share = ()=> {
    return (
       <div className={styles.share}>
           <img className={styles.shareIcon} src="/images/share-blue.svg" alt="icon"/>
           <a className={styles.link} href="#">
               Поделиться
           </a>
       </div>
    )
}

export default Share;