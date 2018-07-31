import React from "react";
import PropsTypes from "prop-types";

export class Home extends React.Component{

    constructor(props){
        super();
        this.state  = {
            age : props.initialAge,
            status : 0
        }
    }


    onMakeOlder (){
        this.setState(
            {
                age : this.state.age += 3
            }
        );
    }

    render(){
        return(
            <div className="container">
                <hr/>
                <p>In a New Component</p>
                <p> Name : {this.props.name}, Age : <span>{this.state.age}</span></p>
                <p> Status : {this.state.status}</p>
                <hr/>
                <button onClick={ () => this.onMakeOlder()} className="btn btn-primary">Make Me Older!</button>
                <hr/>
                <button onClick={ this.props.greet} className="btn btn-primary">Greet!</button>
            </div>
        );
    }
}

Home.PropsTypes = {
    name : PropsTypes.string,
    age : PropsTypes.number,
    greet: PropsTypes.func
};