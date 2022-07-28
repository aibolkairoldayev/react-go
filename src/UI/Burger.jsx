import React from "react";
import Nav from "./NavMenu/NavMenu";
import LangChange from "./Lang/Lang";
import Socials from "./Socials";

const Burger = (props)=> {
    return(
        <div className="burger">
            <div>
                <a href="/">
                    <img src="/images/logo-header.svg" alt=""/>
                </a>
            </div>
           <Nav/>
            <LangChange/>
            <div className="socialsD">
                <Socials />
            </div>
            <style jsx>{`
                  .burger{
                        display: ${props.isOpen ? 'inline' : 'none'};
                        height: 100vh;
                        width: 80vw;
                        position: absolute;
                        left: 0px;
                        background-color: #E5E5E5;
                        padding: 5px 20px;
                        top: 0;
                  }
            `}</style>
        </div>
    )
}

export default Burger;

