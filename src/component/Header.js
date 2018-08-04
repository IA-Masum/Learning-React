import React from "react";

export const Header = (props) =>{

    return(
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">{props.homeLInk}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};