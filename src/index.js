import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
    render(){

        var user = {
            name: "Masum",
            hobbies : [ "Playing", "Music", "Fishing"]
        }

        return(
            <div className="container">
                <Header/>
                <Home name={"Imran"} age={27} User={user}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
