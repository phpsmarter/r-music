import { combineReducers } from 'redux'
import { RANKLIST } from '../actions/rank'

function rankList(state = [], action){
  switch(action.type) {
    case RANKLIST:
      return action.obj;
    default:
      return state;
  }
}


const Reducers = combineReducers({
  rankList
})

export default Reducers