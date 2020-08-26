import React, { Component } from 'react';
import Form from "../Components/Form";
import "./Search.css"

class Search extends Component {

    state ={
        condition: true
    }
    render(){
        const renderThis = this.state.condition ? <div><Form/></div> : <h1></h1>
        return(
            <>
            <div id="search"></div>
            <div>
                {renderThis}
            </div>
            </>
        )
    }
}

export default Search;