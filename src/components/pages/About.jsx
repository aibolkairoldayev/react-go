import React from "react";
import styles from "./About.module.css"
import state from "../../data";
import {useLocation} from "react-router-dom";
import Breadcrumbs from "../Partials/Breadcrumbs";

const About = ()=> {
    return(

        <section className="about">
            <div className="container">
                <div className="breadcrumbs">
                    <Breadcrumbs name={state.about.title}/>
                </div>
            </div>
            <div className={styles.image}>
                <img src={state.about.image} alt="img"/>
            </div>
            <div className="container">
                <div className={styles.content}>
                    <div className="titles">{state.about.title}</div>
                    <div className={styles.info}>
                        <div className={styles.textTop}>
                            {state.about.text1}
                        </div>
                        <div className={styles.textBot}>
                            <div className={styles.botImg}>
                                <img src={state.about.image2} alt="img"/>
                            </div>
                            <div className={styles.botText}>
                                {state.about.text2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;