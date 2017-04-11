import { combineReducers } from 'redux';
import selected from './selected';
import resetFields from './resetFields';

export default combineReducers ({
    selected,
    resetFields
});