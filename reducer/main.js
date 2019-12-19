import { combineReducers } from 'redux';
// import ui from './ui.js';
import * as actionTypes from '../actions/types'
import cloneDeep from "clone-deep";


const todoApp =  (state, action) => {
  if( actionTypes[action.type] ){
      const newState = cloneDeep(state);
      const valueToChange = actionTypes[action.type];
      newState[valueToChange] = action.value;
      return  newState
  } else {
      return state
  }
};

export default todoApp