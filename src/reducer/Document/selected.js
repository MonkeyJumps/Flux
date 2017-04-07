import {SET_CURRENT_DOCUMENT} from './actions';
import {SET_CURRENT_PAGES} from './actions';


const initialState = [];

export default (state = initialState, action ) => {
    switch (action.type){        
        case SET_CURRENT_DOCUMENT:            
            return action.document;                  
        default:
            return state;
    }
}