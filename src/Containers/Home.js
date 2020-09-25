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

            <section className="hero is-medium is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="font">
                        BIZBORE
                    </h1>
                    <h2 className="subtitle">
                        Get easy access on information of over thousands of tv series.
                    </h2>

                    <div className="buttons">
                        <button className="button is-rounded" onClick={this.goToSearch}>Get Started</button>
                    </div>
                </div>
            </div>
            </section>
            <div>
            {/* <img class='picture' src='https://images.unsplash.com/photo-1600195751261-88986ffe4a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt="Italian Trulli"/>
            <img class='picture' src='https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80'/> */}
            
            <img class='picture' src ='https://www.truehead.com/wp-content/uploads/2019/12/top_tv-shows-all-time.jpg'/>
            <img class='picture' src='https://i1.wp.com/celebmix.com/wp-content/uploads/2019/01/celebmixs-top-tv-series-of-2018-01.png?fit=637%2C377&ssl=1'/>
            </div>

            </>
        )
    }

}

export default withRouter(Home);