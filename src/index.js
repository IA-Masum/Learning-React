import React from "react";
import { render } from "react-dom";

import { Header } from "./component/Header";
import { Home } from "./component/Home";

class App extends React.Component{
    render(){
        let user = {
            "name": "Tania",
            "hobbies": ["Reading", "Dancing", "Singing"]
        }
        return(
            <div>
                <Header/>
                <Home name={"Imran"} age={"25"} user ={user} />
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));