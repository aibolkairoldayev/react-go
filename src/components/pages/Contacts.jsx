import React, {useEffect} from "react";
import styles from "./Contacts.module.css"
import Subcsribe from "../Subcsribe/Subcsribe";
import state from "../../data";
import Breadcrumbs from "../Partials/Breadcrumbs";

const Contacts = ()=> {

    const[contacts, setContacts] = React.useState([])
    useEffect(()=> {
        fetch('https://react.testkz.ru/api/settings')
            .then(response => response.json())
            .then(contacts => {
                {
                    setContacts(contacts)
                }
            })
    }, [])

    return (
        <section className={styles.contacts}>
            <div className="container">
                <div className="breadcrumbs">
                    <Breadcrumbs name={state.contactsPage.title}/>
                </div>
                <div className={styles.title}>
                    <div className="titles">
                        {state.contactsPage.title}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.contact}>
                            <div className={styles.name}>
                                Телефон:
                            </div>
                            <div className={styles.value}>
                                <a href={state.contactsPage.phoneValue}>
                                    {state.contactsPage.phone}
                                </a>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.name}>
                                E-mail:
                            </div>
                            <div className={styles.value}>
                                {/*<a href={state.contactsPage.mailValue}>*/}
                                {/*    site.description*/}
                                {/*    {state.contactsPage.mail}*/}
                                {/*</a>*/}
                                <a href={state.contactsPage.mailValue}>
                                    {contacts.filter(s=>s.key==="site.description").value}
                                </a>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.name}>
                                Адрес:
                            </div>
                            <div className={styles.value}>
                                <a href="">
                                    {state.contactsPage.address}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        {state.contactsPage.map}
                    </div>

                </div>

            </div>
            <div className="contactSub">
                <Subcsribe/>
            </div>
        </section>
    )
}

export default Contacts