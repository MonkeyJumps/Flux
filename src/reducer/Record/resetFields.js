import {RESET_RECORD_FIELDS} from './actions';

const initialState = false;

export default (state = initialState, action ) => {    
    switch (action.type){        
        case RESET_RECORD_FIELDS:     
        console.log("reset record fields");    
        console.log(action);
            return true;                       
        default:
            return state;
    }
}