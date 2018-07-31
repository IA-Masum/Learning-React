import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{

    onGreet(){
        alert("Hello!");
    }
    render(){
        return(
            <div className="container">
                <Header homeLink={"Home"}/>
                <Home name={"Imran"} initialAge={27} greet={this.onGreet}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
