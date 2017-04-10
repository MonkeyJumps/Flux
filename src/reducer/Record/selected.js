import {SET_CURRENT_RECORD} from './actions';

const initialState = [];

export default (state = initialState, action ) => {    
    switch (action.type){        
        case SET_CURRENT_RECORD:     
        console.log("set current record");    
            return action.record;                       
        default:
            return state;
    }
}