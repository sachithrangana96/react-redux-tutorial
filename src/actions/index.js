import { FETCH_DATA_SUCCESS,FETCH_DATA_FAILED } from '../types';
import axios from 'axios';


export const fetchPosts=()=>dispatch=>{
  axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then(res=>{
    dispatch({
      type:FETCH_DATA_SUCCESS,
      payload:res.data
    })
  }).catch(error => dispatch({type:FETCH_DATA_FAILED,payload:error}))
}
