import React from "react";
import PropsTypes from "prop-types";

export class Home extends React.Component{

    render(){
        var p = this.props;
        return(
            <div className="container">
                <p> Name : {p.name}, Age : {p.age}</p>
                <p>User Object => Name : {this.props.User.name}</p>
                <div>
                    <p>Hobbies : </p>
                    <ul>{p.User.hobbies.map((hobby , i) => <li key={i}>{hobby}</li>)}</ul>
                </div>
            </div>
        );
    }
}

Home.PropsTypes = {
    name : PropsTypes.string,
    age : PropsTypes.number,
    User : PropsTypes.object
};