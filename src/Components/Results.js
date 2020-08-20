import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

    renderResults = () => {
        console.log(this.props.results)

        return this.props.results.map((item, index) => (
            <div key={index}>
                <h3>Name: {item.show.name}</h3><br></br>
                <img src={item.show.image.medium}/><br></br>
                Genre: {item.show.genres.map((items, idx)=>
                <ul key={idx}>
                    <li>{items}</li> 
                </ul>)}
                <p>Language: {item.show.language}</p><br></br>
                <p>Status: {item.show.status}</p><br></br>
                <p>Summary: {item.show.summary}</p><br></br>
                <p>Ratings: {item.show.rating.average}</p><hr></hr>
            </div>
        ))
    }

    render(){
         
        return (
            <div>
                {this.props.results ? this.renderResults(this.props.results) : "There are no results"}
            </div>
        )
    }
}

const mSTP = state => ({
    results: state.tvShowData
})
export default connect(mSTP)(Results)