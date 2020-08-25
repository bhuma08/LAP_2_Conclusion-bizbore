import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTvShowData } from "../Actions/Actions";
import Results from './Results'
import Gif from "./Gif"

class Form extends Component{
    
    state = {
        userInput:"",
    }

    handleChange = e => {
        this.setState({ userInput: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.userInput)
        // this.setState({userInput:""})
        form.reset()
        
    }

    render(){
        return(
            <div>
            <form id="form" onSubmit= {this.handleSubmit}>
                <input type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/>
            </form>
            <Results/>
            <Gif/>
            </div>
        )
    }

}

const mDTP = dispatch => ({
    add: (userInput) => dispatch(getTvShowData(userInput)),
})

export default (connect(null,mDTP)(Form));