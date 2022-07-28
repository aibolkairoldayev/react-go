import React from "react";
import styles from "./EventItem.module.css"
import ReadMore from "../../../UI/ReadMore/ReadMore";
import Share from "../../../UI/Share/Share";
import {Link} from "react-router-dom";

const EventItem = (props)=> {
    return (
           <div className={styles.eventItem}>
               <div className={styles.eventImg}>
                   <img src={`https://react.testkz.ru/storage/${props.e.image}`} alt="img"/>
               </div>
               <div className={styles.eventInfo}>
                   {/*<span>{props.e.created_at.substring(0, 10)}</span>*/}
                   <div className={styles.eventName}>
                       <Link to={`/events/${props.e.slug}`}>
                           {props.e.title}
                       </Link>
                   </div>
                   <div className={styles.eventText}>
                       {props.e.excerpt}
                   </div>
                   <div className={styles.eventLinks}>
                       <ReadMore url={`/events/${props.e.slug}`}/>
                       <Share/>
                   </div>
               </div>
           </div>
    )
}

export default EventItem;