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

            <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        BizBore
                    </h1>
                    <h2 className="subtitle">
                        Get easy access on information of over thousands of tv series.
                    </h2>

                    <div className="buttons">
                        <button className="button is-primary is-light" onClick={this.goToSearch}>Get Started</button>
                    </div>
                </div>
            </div>
            </section>
            <div>
            <img class='picture' src='https://images.unsplash.com/photo-1600195751261-88986ffe4a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt="Italian Trulli"/>
            <img class='picture' src='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80'/>
            </div>

            </>
        )
    }

}

export default withRouter(Home);