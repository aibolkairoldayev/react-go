import React, {useEffect} from "react";
import styles from "./BlogPage.module.css"
import Breadcrumbs from "../Partials/Breadcrumbs";
import {useParams} from "react-router-dom";
import state from "../../data";

function BlogPage () {
    const[blogs, setBlogs] = React.useState([])

    useEffect(()=> {
        fetch('https://react.testkz.ru/api/blogs')
            .then(response => response.json())
            .then(blogs => {
                {
                    setBlogs(blogs)
                }
            })
    }, [])
    const {id} =useParams()
        return (
            <section className={styles.blogPage}>
                {blogs.filter(blog=>blog.slug==id).map((blog)=>(
                <div className="container">
                    <div className="breadcrumbs">
                        <Breadcrumbs subName={blog.title} name={state.blogsPage.title}/>
                    </div>

                    <div className={styles.title}>
                        <div className="titles">
                            Блог
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.date}>{blog.created_at.substring(0, 10)}</div>
                        <div className={styles.title}>{blog.title}</div>
                        <div className={styles.image}>
                            {blog.image===null ? <></> : <img src={`https://react.testkz.ru/storage/${blog.image}`} alt="image"/>}
                        </div>
                        <div className={styles.source}>{blog.source}</div>
                        <div className={styles.text} dangerouslySetInnerHTML={{
                            __html: blog.excerpt
                        }}>

                        </div>
                    </div>
                </div>
                ))}
            </section>
        )
}

export default BlogPage