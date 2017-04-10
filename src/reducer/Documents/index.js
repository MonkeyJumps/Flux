import {SET_DOCUMENTS} from './actions';

//not mandatory but good practice
//set initial state of this reducer. We want our queues initialized with an empty array.
const initialState = [];


//all reducers use a case statement because you can have alot of actions that a particular reducer is listening for
//all reducers should follow this simple format.
export default (state = initialState, action) => {

    //match on action.type
    switch (action.type){
        case SET_DOCUMENTS:
        const documents = action.documents;
            return action.documents;
        default:
            return state;
    }
}