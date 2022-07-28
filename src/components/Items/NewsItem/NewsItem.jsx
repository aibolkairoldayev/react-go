import React from "react";
import styles from "./NewsItem.module.css";
import ShareWhite from "../../../UI/ShareWhite/ShareWhite";
import {Link} from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className={styles.newsItem} style={{
            backgroundImage: `url(https://react.testkz.ru/storage/${props.n.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
        }}>
            <div className={styles.newsInfo}>
                <div className={styles.newsDate}>
                    {props.n.created_at.substring(0, 10)}</div>

                    <Link className={styles.newsName} to={`/news/${props.n.slug}`}>
                        {props.n.title}
                    </Link>
            </div>
            <ShareWhite/>
        </div>
    )
}

export default NewsItem;