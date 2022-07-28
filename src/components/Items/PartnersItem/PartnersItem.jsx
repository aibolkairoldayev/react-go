import React from "react";
import styles from "./PartnersItem.module.css"
import ReadMore from "../../../UI/ReadMore/ReadMore";

const PartnersItem = (props)=> {

    return(
        <div className={styles.partnersItem}>
            <div className={styles.partnersImg}>
                {/*{props.p.image===null ? <img src="" alt=""/> : <img src={`https://react.testkz.ru/storage/${props.p.image}`} alt="image"/>}*/}
                <img src={props.p.image}/>
            </div>
            <div className={styles.partnersName}>
                {props.p.title}
            </div>
            <ReadMore url={props.p.link}/>
        </div>
    )
}

export default PartnersItem