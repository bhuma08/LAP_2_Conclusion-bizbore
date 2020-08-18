import React, { Component } from 'react';
import Form from "../Components/Form"

class Search extends Component {

    state ={
        condition: true
    }
    render(){
        const renderThis = this.state.condition ? <div><Form/></div> : <h1></h1>
        return(
            <div>
                {renderThis}
            </div>
        )
    }
}

export default Search;