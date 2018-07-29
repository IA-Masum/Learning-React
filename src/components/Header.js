import React from "react";

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}