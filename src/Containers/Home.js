import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    goToSearch = e =>{
        e.preventDefault();
        this.props.history.push("./search")
    }

    render(){
        return(
            <>

            <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        BizBore
                    </h1>
                    <h2 class="subtitle">
                        Get easy access on information of over thousands of tv series.
                    </h2>

                    <div class="buttons">
                        <button class="button is-primary is-light" onClick={this.goToSearch}>Get Started</button>
                    </div>
                </div>
            </div>
            </section>

            </>
        )
    }

}

export default withRouter(Home);