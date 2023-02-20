import { combineReducers } from 'redux';
import KeywordReducer from './KeywordReducer';


const rootReducer = combineReducers({
    keysearch: KeywordReducer,
});

export default rootReducer;