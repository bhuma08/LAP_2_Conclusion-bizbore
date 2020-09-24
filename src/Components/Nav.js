import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component{

    render(){

        return(
            // <div className='blah'>

            //     <ul className="nav nav-pills nav-fill">
            //     <li className="nav-item">
            //         <a className="nav-link" href="/">Home</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="/search">Search</a>
            //     </li>

            //     </ul>
    

            // </div>
            <div className='all'>
            <Link className= 'link' to='/'>BizBore</Link>
            <Link className= 'link' to='/search'>Search TV</Link>
            </div>
           
        )
    }   
}

export default Nav;