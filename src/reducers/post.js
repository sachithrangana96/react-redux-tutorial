import { FETCH_DATA_SUCCESS,FETCH_DATA_FAILED } from '../types';

const initialState = {
    data: null,
    error: null
  };

export default function(state=initialState,action){
    switch(action.type){
        case 'FETCH_DATA_SUCCESS':
            return {
              ...state,
              data: action.payload,
              error: null
            };
          case 'FETCH_DATA_FAILED':
            return {
              ...state,
              data: null,
              error: action.payload
            };
         default:
                return state;
      
    }
  
}