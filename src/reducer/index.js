//top level reducer
//make sure the reducer dir follows the same path that the data is kept inside the store.

import {combineReducers} from 'redux';
import documents from './documents';
import document from './document';
import record from './record';


export default combineReducers({
    documents,
    document,
    record
});


