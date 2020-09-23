import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.js";
import "./Nav.css";

class Nav extends Component{

    render(){

        return(
            <div>

                <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/search">Search</a>
                </li>

                </ul>
    

            </div>
        )
    }   
}

export default Nav;