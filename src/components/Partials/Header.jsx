import React, {useEffect, useState} from "react";
import styles from "./Header.module.css";
import Nav from "../../UI/NavMenu/NavMenu";
import Lang from "../../UI/Lang/Lang";
import Socials from "../../UI/Socials";
import state from "../../data";
import {Link} from "react-router-dom";

const Header = (props,) => {

    return (
        <header className="header">
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Link className={styles.logoLink} to="/">
                            <img src={state.header.logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <nav className={styles.navList}>
                            <Nav/>
                        </nav>
                    </div>
                    <div className={styles.lang}>
                        <Lang />
                    </div>
                    <div className="socialsD">
                        <Socials />
                    </div>
                    <div className={styles.hamburger} onClick={props.toggleHamburger}>
                        <div className={`${styles.burger} ${styles.burger1}`}/>
                        <div className={`${styles.burger} ${styles.burger2}`}/>
                        <div className={`${styles.burger} ${styles.burger3}`}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;