import React from "react";
import styles from "./ButtonBlue.module.css";

const ButtonBlue = (props)=> {
    return(
        <div className={styles.buttonBlue}>
            <button className={styles.btn} type="submit" onClick={props.openModal}>
                <a className={styles.btnLink} href="#">Подать заявку</a>
            </button>
        </div>

    )
}

export default ButtonBlue;