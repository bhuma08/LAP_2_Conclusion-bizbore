const initialState = {
    tvShowName : "",
    tvShowData: [], //data from api
    // name: "",
    // tvShowDataOne: []
}

function Reducer (state = initialState, action){
    switch (action.type){
        case "ADD_TVSHOW" :
            return {...state, tvShowName: action.payload }
        //getting and storing data from api
        case "ADD_DATA" :
            return{...state, tvShowData: action.payload}
        // case "ADD_NAME" :
        //     return {...state, name: action.payload }
        // //getting and storing data from api
        // case "ADD_DATA_ONE" :
        //     return{...state, tvShowDataOne: action.payload}
        default:
            return state;
    }
}

export default Reducer;