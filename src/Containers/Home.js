import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    goToSearch = e =>{
        e.preventDefault();
        this.props.history.push("./search")
    }

    render(){
        return(
            <>
            <h1>BizBore</h1>
            <h3>Get easy access on information of over thousands of tv series.</h3>
            <button onClick={this.goToSearch}>Get Started</button>
            </>
        )
    }

}

export default withRouter(Home);