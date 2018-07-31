import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Home name={"Imran"} initialAge={27}/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
