export const INITIAL_STATE = {
    email : "",
    phone : "",
    password : "",
}

export const reducerfunction = (state,action) => {
    switch(action.type){
        case "Changestate":
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        default: return state
    }
}