import {SET_CURRENT_RECORDS} from './actions';

const initialState = [];

export default (state=initialState, action)=> {

    switch (action.type){
        case SET_CURRENT_RECORDS:
            return action.records;
        default:
        return state;
    }
} 
 