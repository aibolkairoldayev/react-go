import React from "react";
import styles from "./Modal.module.css"

const Modal = ()=> {
    return (
        <div className={styles.modal}>
            <form action="">
                <div className={styles.title}>
                    Подать заявку на участие
                </div>
                <div className={styles.subTitle}>
                    Отправьте свои данный для регистрации на мероприятие
                </div>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Фамилия*"/>
                    <input type="text" placeholder="Имя*"/>
                    <input type="number" placeholder="Номер телефона*"/>
                    <input type="email" placeholder="E-mail"/>
                </div>
                <button className="blueButton">Отправить</button>
            </form>
        </div>
    )
}

export default Modal;