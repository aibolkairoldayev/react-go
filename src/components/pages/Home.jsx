import React, {useState, useEffect} from "react";
import styles from "./Home.module.css";
import ButtonBlue from "../../UI/ButtonBlue/ButtonBlue";
import state from "../../data";
import EventItem from "../Items/EventItem/EventItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import NewsItem from "../Items/NewsItem/NewsItem";
import Subcsribe from "../Subcsribe/Subcsribe";
import InfiniteCarousel from "react-leaf-carousel";
import PartnersItem from "../Items/PartnersItem/PartnersItem";
import Application from "../Modal/Application";

const Home = ()=> {

    const bannerStyle={
        backgroundImage : `url(${state.home.banner.background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [modalActive, setModalActive] = useState(false)
    const[partners, setPartners] = React.useState([])

    useEffect(()=> {
        fetch('https://react.testkz.ru/api/partner')
            .then(response => response.json())
            .then(partners => {
                {
                    setPartners(partners)
                }
            })
    }, [])

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

    const[events, setEvents] = React.useState([])

    useEffect(()=> {
        fetch('https://react.testkz.ru/api/event')
            .then(response => response.json())
            .then(events => {
                {
                    setEvents(events)
                }
            })
    }, [])

    return(
        <>
            <Application active={modalActive} setActive={setModalActive}/>
            <section className={styles.banner} style={bannerStyle}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.title}>{state.home.banner.title}</div>
                        <div className={styles.text}>
                            {state.home.banner.text}
                        </div>
                        <ButtonBlue openModal={()=>setModalActive(true)}/>
                    </div>
                </div>
            </section>
            <section className={styles.events}>
               <div className="container">
                   <div className={styles.eventTitles}>
                       <div className="title2">{state.events.title2}</div>
                       <div className="title" style={{marginBottom:"40px"}}>{state.events.title}</div>
                   </div>
                   <div className={styles.eventContent}>
                       {events.map(e=><EventItem e={e}/>)}
                   </div>
               </div>
            </section>
            <section className={styles.news}>
               <div className="container">
                   <div className={styles.newsTitle2}>{state.home.news.title2}</div>
                   <div className={styles.newsTitle}>{state.home.news.title}</div>
               </div>
                <div className="newsCarusel">
                    <Carousel autoPlay={true} infiniteLoop={true} selectedItem={1} showStatus={false}
                              showThumbs={false} centerMode={true} centerSlidePercentage={100}>
                        {news.map(n=><NewsItem n={n}/>)}
                    </Carousel>
                </div>
            </section>
            <section className={styles.partners}>
                <div className="container">
                    <div className="title2">{state.home.partners.title2}</div>
                    <div className="title" style={{marginBottom: "40px"}}>{state.home.partners.title}</div>
                    <div className="partnersCarousel">
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

                            {state.home.partners.partnersItem.map(p=><PartnersItem p={p}/>)}
                        </InfiniteCarousel>

                    </div>
                </div>
            </section>
            <Subcsribe/>
        </>

    )
}

export default Home;