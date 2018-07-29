import React from "react";

export class Header extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}