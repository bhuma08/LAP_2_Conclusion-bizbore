import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getGifData } from '../Actions/Actions';


class Gif extends Component {


    renderNames = () => {
        this.props.gify.map((item, idx) => {
            // <div key={idx}>
            //     {item.show.name}
            // </div>
            const all = item.show.name
            // console.log(all)
            this.props.add(all)
        
        })

    }

    renderGIFs = () =>{
        this.props.getGIFs.map((items, index)=>{
            console.log(items.data)

        })
    }
    

    render(){
        return(
            <div>
                {this.props.gify ? this.renderNames(this.props.gify) : <h1></h1>} 
            </div>
        )
    }
}

const mSTP = state => ({
    gify: state.tvShowData,
    getGIFs: state.GifData
})

const mDTP = dispatch => ({
    add: (all) => dispatch(getGifData(all)),
})

export default connect(mSTP, mDTP)(Gif)