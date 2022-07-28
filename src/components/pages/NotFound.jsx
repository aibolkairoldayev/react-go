import React from "react";
import styles from "./NotFound.module.css";

function NotFound (props) {
    return (
        <section className={styles.notFound}>
            <div className={styles.error}>
                <div className={styles.title}>
                    404
                </div>
                <div className={styles.text}>
                    Sowwy! Page not found.
                </div>
                <div className={styles.toHome}>
                    <a href="/">Go home</a>
                </div>
            </div>
        </section>
    )
}

export default NotFound