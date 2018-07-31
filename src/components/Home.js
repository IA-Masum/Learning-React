import React from "react";
import PropsTypes from "prop-types";

export class Home extends React.Component{

    constructor(props){
        super();
        this.age  = props.age
    }


    onMakeOlder (){
        this.age += 3;
        console.log(this.age);
    }

    render(){
        return(
            <div className="container">
                <hr/>
                <p> Name : {this.props.name}, Age : {this.age}</p>
                <hr/>
                <button onClick={ () => this.onMakeOlder()} className="btn btn-primary">Make Me Older!</button>
            </div>
        );
    }
}

Home.PropsTypes = {
    name : PropsTypes.string,
    age : PropsTypes.number,
};