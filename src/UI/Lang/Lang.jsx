import React from "react";
import styles from "./Lang.module.css";
import state from "../../data";

const Lang = () => {
    return (
        <select className={styles.select}>
            {state.header.lang.map(l=>(
                <option value="fruit">
                    <a href={l.link}>{l.name}</a>
                </option>
            ))}
        </select>
    )
}

export default Lang