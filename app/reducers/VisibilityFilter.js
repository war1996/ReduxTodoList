// import * as Actions from '../actions/TodoListAction'
import { SET_VISIBILITY_FILTER,VisibilityFilters } from '../actions/TodoListAction'
const { SHOW_ALL } = VisibilityFilters

export default function VisibilityFilter(state = SHOW_ALL,action){
      switch(action.type){
          case SET_VISIBILITY_FILTER:
            return action.filter;
          default:
            return state;
      }
}