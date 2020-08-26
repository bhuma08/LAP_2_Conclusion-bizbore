import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.js";
import "./Nav.css";

class Nav extends Component{

    render(){

        return(
            <div>
         
                <ul className="NavBar"> 
                <Link to = "/" style={{ textDecoration: 'none' }}>
                <li className="list">Home</li>
                </Link>
                <Link to = "/search" style={{ textDecoration: 'none' }}>
                <li className="list">Search</li>
                </Link>
                </ul>

            </div>
        )
    }   
}

export default Nav;