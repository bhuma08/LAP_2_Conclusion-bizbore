const initialState = {
    tvShowName : "",
    tvShowData: [], //data from api
    gifName: [],
    gifData: []
}

function Reducer (state = initialState, action){
    switch (action.type){
        case "ADD_TVSHOW" :
            return {...state, tvShowName: action.payload }
        //getting and storing data from api
        case "ADD_DATA" :
            return{...state, tvShowData: action.payload}
        case "ADD_GIF_NAME" :
            return{...state, gifName: [...state.gifName, action.payload]}
        case "ADD_GIF_DATA" :
            return{...state, gifData: [...state.gifData, action.payload]}
        default:
            return state;
    }
}

export default Reducer;