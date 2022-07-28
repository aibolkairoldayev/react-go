import React from "react";
import styles from "./Subcsribe.module.css"

const Subcsribe = ()=> {
    return(
        <section className={styles.subscribe}>
            <div className="container">
               <div className={styles.content}>
                   <div className={styles.left}>
                       <div className={styles.image}>
                           <img src="/images/subscribe-icon.svg" alt="icon"/>
                       </div>
                       <div className={styles.info}>
                           <div className={styles.title}>
                               Подпишитесь на нашу рассылку
                           </div>
                           <div className={styles.text}>
                               Получайте специальные предложения и новости от нас первыми
                           </div>
                       </div>
                   </div>
                   <div className={styles.right}>
                       <form action="">
                           <input type="text" placeholder="E-mail"/>
                           <button className="blueButton">Подписаться</button>
                       </form>
                   </div>
               </div>
            </div>
        </section>
    )
}

export default Subcsribe;