import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTvShowData } from "../Actions/Actions";
import Results from './Results'
import Gif from "./Gif"
import './Form.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
 

class Form extends Component{
    
    state = {
        userInput:"",
        open: false
    }

    handleChange = e => {
        this.setState({ userInput: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.userInput)
        // this.setState({userInput:""})
        this.setState({ open: true });
        form.reset()
        
    }
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render(){
        const { open } = this.state;
        return(
            <>
            <div id="allForm"></div>
            <div>
            <form id="form" onSubmit= {this.handleSubmit}>
                <input className="input is-rounded is-primary mt-6" type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/>
                {/* <input type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/> */}
            </form>
            {/* <Gif/> */}
            </div>

            <button className ='button is-primary is-fullwidth is-rounded is-hovered' onClick={this.handleSubmit}>Submit</button>
            <Modal open={open} onClose={this.onCloseModal} center>
                <Results/>
            </Modal>
            </>
        )
    }

}

const mDTP = dispatch => ({
    add: (userInput) => dispatch(getTvShowData(userInput)),
})

export default (connect(null,mDTP)(Form));