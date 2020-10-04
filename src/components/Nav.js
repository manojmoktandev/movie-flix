import React, { useState, useEffect } from 'react';
import "./Nav.css";


function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
        
    }, []);
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Movieflix Logo" />
            </div>
          
            
            {/* <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" className="nav__avatar" alt="Movieflix Logo"/> */}
            <div className="nm-content-header-section nm-content-header-right"><div className="nm-content-header-text">UNLIMITED TV SHOWS &amp; MOVIES</div><button className="btn btn-get-started btn-red btn-large" type="submit" >JOIN NOW</button><a href="/login?" className="authLinks" >SIGN IN</a></div>
        </div>
    )
}

export default Nav;
