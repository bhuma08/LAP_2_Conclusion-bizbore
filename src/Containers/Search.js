import React, { Component } from 'react';
import Form from "../Components/Form";
import "./Search.css"
import Nav from "../Components/Nav";

class Search extends Component {

    state ={
        condition: true
    }
    render(){
        const renderThis = this.state.condition ? <div><Form/></div> : <h1></h1>
        return(
            <>
            {/* <Nav/> */}
            
            <div class='searchpage'>
                {renderThis}
            </div>
            <div className='extra'></div>
            </>
        )
    }
}

export default Search;