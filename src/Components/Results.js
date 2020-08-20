import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {

    renderResults = () => {
        console.log(this.props.results)

        return this.props.results.map((item, index) => (
            <div key={index}>
                <h3>Name: {item.show.name}</h3>
                <img src={item.show.image.medium}/><br></br>
                Genre: {item.show.genres.map((items, idx)=>
                <span key={idx}>
                    <span>{items} </span>
                </span>)}
                <p>Language: {item.show.language}</p>
                <p>Status: {item.show.status}</p>
                <p>Summary: {item.show.summary}</p>
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