import {SET_CURRENT_PAGES} from './actions';

const initialState = [];

export default (state=initialState, action)=> {

    switch (action.type){
        case SET_CURRENT_PAGES:
            return action.pages;
        default:
        return state;
    }
} 
 
