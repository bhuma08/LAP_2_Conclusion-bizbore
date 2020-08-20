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

// const addCelebName = name => ({
//     type: "ADD_TVSHOW",
//     payload: name
// })

// const addCelebData = tvShowDataOne => ({
//     type:"ADD_DATA",
//     payload: tvShowDataOne
// })

// export const getTvShowDataOne = name => {
//     return async dispatch => {
//         try {
//             dispatch(addCelebName(name))
//             const data = await fetchCelebData(name)
//             dispatch(addCelebData(data))
//         } catch (err) {
//             console.warn(err.message)
//         }   
//     }
// }

// const fetchCelebData = async name => {
//     try {
//         const resp = await fetch(`http://api.tvmaze.com/search/people?q=${name}`);
//         const data = await resp.json()
//         return data
//     } catch (err) {
//         throw new Error(err.message)
//     }
// }