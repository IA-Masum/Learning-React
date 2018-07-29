import React from "react";

export class Home extends React.Component{
    render(){

        let comp = "";
        if(true){
            comp = <p>Hello</p>
        }
        return(
            <div className="container">
                <p>This is the new Component</p>
                { comp }
            </div>
        );
    }
}