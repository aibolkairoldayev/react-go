import React, {useEffect} from "react";
import styles from "./NewPage.module.css"
import Breadcrumbs from "../Partials/Breadcrumbs";
import state from "../../data";
import Share from "../../UI/Share/Share";
import InfiniteCarousel from "react-leaf-carousel";
import PartnersItem from "../Items/PartnersItem/PartnersItem";
import {useParams} from "react-router-dom";
import NewsItem from "../Items/NewsItem/NewsItem";

function NewPage() {
    const {id} =useParams()
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
    console.log(news)
    debugger
    return(
        <section className={styles.newsPage}>
            {news.filter(newItem=>newItem.slug==id).map((newItem)=>(
            <div className="newsPage">
                <div className="container">
                    <div className="breadcrumbs">
                        <Breadcrumbs subName={newItem.title} name={state.newsPage.title}/>
                    </div>

                    <div className={styles.title}>
                        <div className="titles">
                            {state.newsPage.title}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.date}>{newItem.created_at.substring(0, 10)}</div>
                        <div className={styles.title}>{newItem.title}</div>
                        <div className={styles.image}>
                            <img src={`https://react.testkz.ru/storage/${newItem.image}`} alt="image"/>
                        </div>
                        <div className={styles.source}>{newItem.source}</div>
                        <div className={styles.text} dangerouslySetInnerHTML={{
                            __html: newItem.excerpt}}>

                        </div>
                        <div className={styles.share}>
                            <Share/>
                        </div>
                    </div>
                </div>
                <div className={styles.others}>
                    <div className="container">
                        <div className={styles.otherTitle}>
                            Читайте также
                        </div>
                    </div>
                    <div className="newOtherCarousel">
                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll:1,
                                    },
                                },
                            ]}
                            dots={true}
                            slidesToScroll={1}
                            slidesToShow={3}
                            scrollOnDevice={true}
                            slidesSpacing={30}
                            autoCycle={true}
                            cycleInterval={5000}
                            responsive={true}
                        >
                            {
                                news.filter(n=>n.slug!=id).map(n=>
                                    <NewsItem n={n}/>
                                )
                            }
                        </InfiniteCarousel>
                    </div>
                </div>
            </div>
                ))}
        </section>
    )
}

export default NewPage