import { ADD_TODO, COMPLETE_TODO } from '../actions/TodoListAction';


const defaultState =[
    {
        text:'start',
        completed:false,
        id:0
    }
]
export default function Todos(state  = defaultState,action){
    // console.log('0000000000',action)
    switch(action.type){
        case ADD_TODO:
          return[
              ...state,
              {
                  text:action.text,
                  completed:false,
                  id:state.reduce( (maxId,todo)=>Math.max(todo.id,maxId),-1 ) +1
              }
          ];
        case COMPLETE_TODO:
           return[
               ...state.slice(0,action.id),
               Object.assign({},state[action.id],{completed:true}),
               ...state.slice(action.id+1)
           ];
        default:
            return state
    }
}