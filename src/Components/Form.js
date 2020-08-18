import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(
            <div>
            <form>
                <input type="text" placeholder="Search by TV Show"/>
                <input type="text" placeholder="Search by Name"/>
                <input type="Submit"></input>
            </form>
            </div>
        )
    }

}

export default Form;