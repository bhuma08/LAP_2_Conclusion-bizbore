const addTvShowName = tvShowName => ({
    type: "ADD_TVSHOW",
    payload: tvShowName
})

const addTvShowData = tvShowData => ({
    type:"ADD_DATA",
    payload: tvShowData
})

export const getTvShowData = tvShowName => {
    return async dispatch => {
        try {
            dispatch(addTvShowName(tvShowName))
            const data = await fetchTvShowData(tvShowName)
            dispatch(addTvShowData(data))
        } catch (err) {
            console.warn(err.message)
        }   
    }
}

const fetchTvShowData = async tvShowName => {
    try {
        const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${tvShowName}`);
        const data = await resp.json()
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}
const addGifName = gifName => ({
    type: "ADD_GIF_NAME",
    payload: gifName
})
const addGifData = gifData => ({
    type: "ADD_GIF_DATA",
    payload: gifData
})

export const getGifData = gifName => {
    return async dispatch => {
        try {
            dispatch(addGifName(gifName))
            const data = await fetchGifData(gifName)
            dispatch(addGifData(data))
        } catch (err) {
            console.warn(err.message)
        }   
    }
}


const fetchGifData = async gifName => {
   

        try {
            const gifyAPIKey = 'qpx6gNTGPO74C8mY6JCzKpMTCiGKxkjC'
            const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${gifyAPIKey}&limit=3`);
            const data = await resp.json()
            return data
        
    } catch (err) {
        throw new Error(err.message)
    }
    
}