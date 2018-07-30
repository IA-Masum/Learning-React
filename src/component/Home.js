import React from "react";

export class Home extends React.Component{
    render(){
        const p = this.props;
        return(
            <div className="container">
                <p className="lead">This is a new component</p>
                <p>Your Name : {p.name}</p>
                <p>Your Name : {p.age}</p>
                <p>Your Name : {p.user.name}</p>
                <div>
                    <h3>Hobbies</h3>
                    <ol>{p.user.hobbies.map((hobby , i) => <li key= {i} >{hobby}</li>)}</ol>
                </div>
            </div>
        );
    }
}