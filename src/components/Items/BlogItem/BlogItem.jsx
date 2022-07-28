import React from "react";
import styles from "./BlogItem.module.css"
import {Link} from "react-router-dom";

const BlogItem = (props)=> {
    return (
        <div className={styles.blogItem} key={props.b.id}>
            <div className={styles.blogImg}>
                {props.b.image===null ? <img src="" alt=""/> : <img src={`https://react.testkz.ru/storage/${props.b.image}`} alt="image"/>}

            </div>
            <div className={styles.info}>
                <div className={styles.name}>
                    <Link to={`/blogs/${props.b.slug}`}>
                        {props.b.title}
                    </Link>
                </div>
                <div className={styles.text}  dangerouslySetInnerHTML={{
                    __html: props.b.excerpt
                }}>

                </div>
                <div className={styles.date}>
                    {props.b.created_at.substring(0, 10)}
                </div>
            </div>
        </div>
    )
}

export default BlogItem