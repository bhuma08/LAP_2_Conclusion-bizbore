import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.js";
import "./Nav.css";

class Nav extends Component{

    render(){

        return(
            <div className='p-6'>

                <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/search">Search</a>
                </li>

                </ul>
    

            </div>
        )
    }   
}

export default Nav;