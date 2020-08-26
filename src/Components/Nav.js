import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.js";
import "./Nav.css";

class Nav extends Component{

    render(){

        return(
            <div>
         
                <ul> 
                <Link to = "/">
                <li>Home</li>
                </Link>
                <Link to = "/search">
                <li>Search</li>
                </Link>
                </ul>

            </div>
        )
    }   
}

export default Nav;