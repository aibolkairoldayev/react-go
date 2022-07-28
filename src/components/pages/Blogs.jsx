import React, {useEffect, useState} from "react";
import styles from "./Blogs.module.css"
import state from "../../data";
import BlogItem from "../Items/BlogItem/BlogItem";
import Breadcrumbs from "../Partials/Breadcrumbs";


const Blogs = ()=> {
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

    return (
        <section className="blogs">
            <div className="container">
                <div className="breadcrumbs">
                    <Breadcrumbs name={state.blogsPage.title}/>
                </div>
                <div className={styles.title}>
                    <div className="titles">
                        {state.blogsPage.title}
                    </div>
                </div>
                <div className={styles.content}>
                    {blogs.map(b=><BlogItem b={b}/>)}
                </div>
            </div>
        </section>
    )
}

export default Blogs;