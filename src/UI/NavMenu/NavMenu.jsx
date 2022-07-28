import React from "react";
import styles from "./NavMenu.module.css";
import state from "../../data";
import {Link} from "react-router-dom";

let store = state.header.menu;
const Nav =()=> {

    return(

        <ul>
            {store.map(i=><li key={i.id} className={styles.navLink}><Link className="navUrl" to={i.link}>{i.name}</Link></li>)}
        </ul>
    )
}

export default Nav;