import React from "react";
import state from "../data";

const Socials = ()=> {
    return(
        <div className="socials">
            <ul>
                {state.socials.map(s=>(
                    <li><a href={s.link}>{s.img}</a></li>
                ))}

            </ul>
        </div>
    )
}

export default Socials;