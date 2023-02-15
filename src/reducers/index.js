import {combineReducers} from 'redux';
import AllPostReducer from './post';


const rootReducer=combineReducers({
    Posts:AllPostReducer,
})

export default rootReducer;