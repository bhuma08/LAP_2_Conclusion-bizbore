import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTvShowData } from "../Actions/Actions";
import Results from './Results'
import Gif from "./Gif"
import './Form.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { withRouter } from 'react-router-dom';
 

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

    redirect = () =>{
        this.props.history.push('/')
    }

    render(){
        const { open } = this.state;
        return(
            <>
            <div className="btn">
                <button onClick={this.redirect} className="button bizbore is-rounded">BIZBORE</button>
            </div>
            <div>

                <form id="form" onSubmit= {this.handleSubmit}>
                    <input className="input is-rounded is-large mt-6" type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/>
                    {/* <input type="text" onChange = {this.handleChange} placeholder="Search by TV Show"/> */}
                </form>
                {/* <Gif/> */}
            </div>
{/* 
            <button className ='button submit is-large is-fullwidth is-rounded is-hovered' onClick={this.handleSubmit}>Submit</button> */}
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

export default withRouter((connect(null,mDTP)(Form)));