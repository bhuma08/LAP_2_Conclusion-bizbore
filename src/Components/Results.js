import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Results.css';


class Results extends Component {

    renderResults = () => {
      
        return this.props.results.map((item, index) => (
            <div id="tvShowList" key={index}>
                
                <h3>Name: {item.show.name}</h3>
                {/* <img src={item.show.image.medium} alt="hehe"/><br></br> */}
                {item.show.image ? <img src={item.show.image.medium} alt="image of the show"/> : null}<br></br>
                Genre: {item.show.genres.map((items, idx)=>
                <span key={idx}>
                    <span>{items} </span>
                </span>)}
                <p>Language: {item.show.language}</p>
                <p>Status: {item.show.status}</p>
                {item.show.summary ? <p id="summary">Summary: {item.show.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','').replace('<i>','').replace('</i>','')}</p> : null} 
                <p>Ratings: {item.show.rating.average}</p>
                
            </div>
        ))

    }
    

    // renderGif = () =>{
    //     return (
    //     this.props.gify.map((items, idx) =>{
    //         <div key={idx}>
    //             {console.log(items.data[1].images.original.url)}
    //             <img src={items.data[1].images.original.url}/> 
    //         </div>          
    //     })
       
    // ) }

    render(){
         
        return (
            <div>

                {/* {this.props.gify ? this.renderGif(this.props.gify) : "No GIFs sorry"} */}
                {this.props.results ? this.renderResults(this.props.results) : "There are no results"}
              
                
            </div>
        )
    }
}

const mSTP = state => ({
    results: state.tvShowData,
    // gify: state.gifData
})
export default connect(mSTP)(Results)