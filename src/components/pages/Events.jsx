import React, {useEffect} from "react";
import styles from "./Events.module.css";
import Share from "../../UI/Share/Share";
import Modal from "../Modal/Modal";
import EventItem from "../Items/EventItem/EventItem";
import state from "../../data";
import Breadcrumbs from "../Partials/Breadcrumbs";
import {useLocation, useParams} from "react-router-dom";

const Events = ()=> {
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
    const {id} =useParams()
    return (
        <section className="events">

            <div className="container">
                {events.filter(event=>event.slug==id).map((event)=>(
                <>
                    <div className="breadcrumbs">
                        <Breadcrumbs name={state.events.title} subName={event.title}/>
                    </div>
                    <div className={styles.title}>
                        <div className="titles">
                            {state.events.title}
                        </div>
                    </div>
                    <div className={styles.contentTop}>
                        <div className={styles.date}>{event.created_at.substring(0, 10)}</div>
                        <div className={styles.subTitle}>
                            <div className="subTitles">
                                {event.title}
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={`https://react.testkz.ru/storage/${event.image}`} alt="img"/>
                        </div>
                        <div className={styles.text} dangerouslySetInnerHTML={{
                            __html: event.excerpt
                        }}>
                        </div>
                        <Share/>
                        <div className={styles.application}>
                            <Modal/>
                        </div>
                    </div>
                </>))}
                <div className={styles.contentBot}>
                    <div className={styles.others}>
                        <div className="titles">
                            Другие мероприятия
                        </div>
                    </div>
                    {events.filter(event=>event.slug!=id).map(e=><EventItem e={e}/>)}
                </div>
            </div>
        </section>
    )
}

export default Events