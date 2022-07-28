import React from "react";
import styles from "./ReadMore.module.css"

const ReadMore = (props)=> {
    return (
        <div className={styles.readMore}>
            <a href={props.url}>
                Подробнее
            </a>
        </div>
    )
}

export default ReadMore;