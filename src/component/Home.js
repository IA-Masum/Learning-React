import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component{

    constructor(props){
        super();
        this.sate = {
            age : props.initialAge
        };
    }

    makeOlder (){
        this.setState(

            {
                age: this.sate.age += 3
            }
            
        );
    }
    render(){
        const p = this.props;
        return(
            <div className="container">
                <p className="lead">This is a new component</p>
                <p>Your Name : {p.name}</p>
                <p>Your Age : {this.sate.age}</p>
                <hr/>
                <button onClick={this.makeOlder.bind(this)} className="btn btn-primary">Make Me older!</button>
            </div>
        );
    }
}

Home.propTypes  = {

    name: PropTypes.string,
    initialAge : PropTypes.number,
};