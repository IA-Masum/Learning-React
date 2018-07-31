import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            homeLink : "Home"
        }
    }

    onGreet(){
        alert("Hello!");
    }

    changeHomeLink(newName){
        this.setState(
            {
                homeLink : newName
            }
        );
    }

    render(){
        return(
            <div className="container">
                <Header homeLink={this.state.homeLink}/>
                <Home
                    name={"Imran"}
                    initialAge={27}
                    greet={this.onGreet}
                    changeName = {this.changeHomeLink.bind(this)}
                />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
