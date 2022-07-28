import React from "react";
import styles from "./Footer.module.css"
import Nav from "../../UI/NavMenu/NavMenu";
import Socials from "../../UI/Socials";
import state from "../../data";

const Footer = ()=> {
    return(
        <footer className={styles.footer}>
           <div className="container">
               <div className={styles.footerTop}>
                   <div className={styles.footerLogo}>
                       <a href="/src/components/pages">
                           <img src={state.footer.logo} alt="img"/>
                       </a>
                   </div>
                   <div className="footerContent">
                       <Nav/>
                       <div className={styles.footerContacts}>
                           <div className={styles.contacts}>
                               <span className={styles.phone}>
                                   <a href={state.footer.phone.value}>{state.footer.phone.number}</a>
                               </span><br/>
                               <span className={styles.mail}>
                                   <a href={state.footer.mail.value}>{state.footer.mail.address}</a>
                               </span>
                           </div>
                           <div className={styles.address}>
                               <span className={styles.city}>{state.footer.city}</span><br/>
                               <span className={styles.street}>{state.footer.street}</span>
                           </div>
                       </div>
                   </div>
                   <div className={styles.socials}>
                       <div className={styles.title}>Подписывайтесь на нас
                           в соц.сетях:</div>
                       <div className={styles.icons}>
                           <div className="socialsF">
                               <Socials/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            <hr/>
            <div className="container">
               <div className={styles.footerBot}>
                   <span className={styles.rights}>{state.footer.rights}</span>
                   <div className={styles.policy}>
                        <a href={state.footer.policy.url}>{state.footer.policy.title}</a>
                   </div>
                   <div className={styles.logo}>
                       <a href={state.footer.developer.url}>
                           <img src={state.footer.developer.image} alt="logo"/>
                       </a>
                   </div>
               </div>
           </div>
        </footer>
    )
}

export default Footer