import {API_URL } from '../../constants';

export const SET_DOCUMENTS = 'SET_DOCUMENTS';


//return function from an action, then the redux middleware will make sure the dispatch func is passed into this function that we return this allows
//one to do ansyc work and delay the dispatching of an actual action that the application will respond too until a network response comes back or equivalent.
export function getDocuments () {
    return dispatch => {

        fetch(`${API_URL}`)
        .then(res=>res.json())        
        .then(documents=>             
            dispatch(setDocuments(documents))        
        );              
    };
}
//returns action object consisting of type and action where type is always what the reducer is looking for
export function setDocuments(documents){    
    return {
        type: SET_DOCUMENTS,
        documents
    };
}