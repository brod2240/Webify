import { reducerCases } from "./Constants";

export const initialState = {
    token:null,
};

const reducer = (state,action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state,token:action.token,
            };
        }
        case reducerCases.SET_ARTISTS : {
            return {
                ...state,
                artists: action.artists,
            };
        }
        default:
            return state;
    }
};

export default reducer;