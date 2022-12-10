import {combineReducers} from 'react';
import auth from './auth';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;