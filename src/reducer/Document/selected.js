import {SET_CURRENT_DOCUMENT} from './actions';

const initialState = [];

export default (state = initialState, action ) => {
    switch (action.type){        
        case SET_CURRENT_DOCUMENT:    
        console.log("current doc set");     
            return action.document;                       
        default:
            return state;
    }
}