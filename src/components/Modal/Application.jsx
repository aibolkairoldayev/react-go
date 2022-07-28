import React from "react";
import styles from "./Application.module.css"
import Modal from "./Modal";

const Application =({active, setActive})=> {
    return (
        <div className={active ? `${styles.application} + ${styles.active}`: `${styles.application}`} onClick={()=>setActive(false)}>
            <div className={active ? `${styles.applicationContent} + ${styles.active}`: `${styles.applicationContent}`} onClick={e=>e.stopPropagation()}>
                <Modal/>
            </div>
        </div>
    )
}

export default Application