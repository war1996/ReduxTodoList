'use strict'
export const  ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO' 
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETE : 'SHOW_COMPLETE',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}

//添加todo
export function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    };
  }

//完成todo
export function completeTodo(id){
    return{
        type:COMPLETE_TODO,
        id
    };
}

//选择show
export function setVisibilityFilter(filter){
    return{
        type:SET_VISIBILITY_FILTER,
        filter
    };
}

