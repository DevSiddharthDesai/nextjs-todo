import MAIN_ACTION_TYPES from "./main.types";

export const MAIN_INITIAL_STATE = {
    name: "guest"
}

export const MainReducer = (state = MAIN_INITIAL_STATE, action = {}) => {
    
    const {type, payload} = action;

    switch(type){
        case MAIN_ACTION_TYPES.SET_NAME:
            return{
                ...state,
                name: payload
            }
        default:
            return state
    }
}