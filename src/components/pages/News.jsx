import React, {useEffect} from "react";
import styles from "./News.module.css"
import state from "../../data";
import NewsItem from "../Items/NewsItem/NewsItem";
import Breadcrumbs from "../Partials/Breadcrumbs";

function News(){
    const[news, setNews] = React.useState([])

    useEffect(()=> {
        fetch('https://react.testkz.ru/api/articles')
            .then(response => response.json())
            .then(news => {
                {
                    setNews(news)
                }
            })
    }, [])

    return(
        <section className="news">
            <div className="container">
                <div className="breadcrumbs">
                    <Breadcrumbs name={state.newsPage.title}/>
                </div>
                <div className={styles.title}>
                    <div className="titles">
                        Новости
                    </div>
                </div>
                <div className={styles.content}>
                    {news.map(n=>
                        <div className={styles.item}>
                            <NewsItem n={n}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default News