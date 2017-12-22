import React,{Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component{
    constructor(props){
        super(props)
    }
    onTodoClick(id){
        this.props.onTodoClick(id)
    }

    render(){
        const todos = this.props.todos
   
        return(
            <ul>
              {
                  todos.map((item,index)=>
                  <Todo
                    todo ={item}
                    onTodoClick ={this.onTodoClick.bind(this)}
                    key = {index}
                  />
                )
              }
            </ul>
        )
    }
}