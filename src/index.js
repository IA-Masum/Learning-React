import React from "react";
import { render } from "react-dom";

import { Header } from "./component/Header";
import { Home } from "./component/Home";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Home name={"IA Masum"} initialAge={25}/>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));