import React from "react";
import styles from "./Breadcrumbs.module.css"
import {useLocation,} from "react-router-dom";
import {Link} from "react-router-dom";

const Breadcrumbs = (props) => {
    const location = useLocation()
    const {pathname} = location
    const pathNames = pathname.split("/").filter((item)=>item)
    return (

        <div className={styles.breadcrumbs}>
            <ol>

                <li><Link className={styles.subMain} to="/">Главная &#160;&#160;&#160;</Link></li>
                {pathNames.length==1 ? <li>/ &#160;&#160;&#160;   {props.name}</li> :
                    <li><Link className={styles.main} to={`/${pathNames[0]}`}>/ &#160;&#160;&#160;   {props.name}</Link></li>}
                {pathNames.length==2 ? <li> &#160;&#160;&#160;  / &#160;&#160;&#160;   {props.subName}</li> :
                    <li></li>}
            </ol>
        </div>
    )
}

export default Breadcrumbs;