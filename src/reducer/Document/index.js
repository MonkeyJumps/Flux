import { combineReducers } from 'redux';
import selected from './selected';
import pages from './pages';
import records from './records';


export default combineReducers ({
    selected,
    pages,
    records    
});
