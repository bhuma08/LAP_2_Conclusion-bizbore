import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTvShowData } from "../Actions/Actions";
// import { withRouter } from 'react-router-dom';
import Results from './Results'

class Form extends Component{
    
    state = {
        userInput:"",
        // userInputOne:""
    }

    handleChange = e => {
        this.setState({ userInput: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.userInput)
        this.setState({userInput:""})
    }

    // handleChangeOne = e => {
    //     this.setState({ userInputOne: e.target.value })
    // }

    // handleSubmitOne = e => {
    //     e.preventDefault();
    //     this.props.addOne(this.state.userInputOne)
    //     this.setState({userInputOne:""})
    // }

    render(){
        return(
            <div>
            <form onSubmit= {this.handleSubmit}>
                <input type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/>
            
            {/* <form onSubmit={ this.handleSubmitOne}>
                <input type="text" onChange = {this.handleChangeOne} placeholder="Search by Name"/>
            </form> */}
            <input type="Submit"></input>
            </form>
            <Results/>
            </div>
        )
    }

}

const mDTP = dispatch => ({
    add: (userInput) => dispatch(getTvShowData(userInput)),
    // addOne: (userInputOne) => dispatch(getTvShowDataOne(userInputOne))
})

// export default withRouter(connect(null, mDTP)(Form));

export default (connect(null,mDTP)(Form));