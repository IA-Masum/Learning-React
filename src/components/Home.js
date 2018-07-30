import React from "react";

export class Home extends React.Component{
    render(){

        return(
            <div className="container">
                <p> Name : {this.props.name}, Age : {this.props.age}</p>
                <p>User Object => Name : {this.props.User.name}</p>
                <div>
                    <p>Hobbies : </p>
                    <ul>{this.props.User.hobbies.map((hobby) => <li>{hobby}</li>)}</ul>
                </div>
            </div>
        );
    }
}