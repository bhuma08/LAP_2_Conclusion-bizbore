import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Results.css';


class Results extends Component {

    renderResults = () => {
      
        return this.props.results.map((item, index) => (
            <div className="columns is-0" key={index}>
                {/* <img src={item.show.image.medium} alt="hehe"/><br></br> */}

                <div className="column">{item.show.image ? <img src={item.show.image.medium} alt="image of the show"/> : null}</div>

                <div className="column">
                    Name: {item.show.name}<br></br>
                    Genre: {item.show.genres.map((items, idx)=>
                       <span key={idx}>
                       <span>{items} </span>
                       </span>)}
                    <p>Language: {item.show.language}</p>
                    <p>Status: {item.show.status}</p>
                    {item.show.summary ? <p>Summary: {item.show.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','').replace('<i>','').replace('</i>','')}</p> : null} 
                    <p>Ratings: {item.show.rating.average}</p>
                </div>
                <br></br>

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