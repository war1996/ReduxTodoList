import React,{Component,Proptypes} from 'react'
import {connect} from 'react-redux'
import * as AllActions from '../actions/TodoListAction'
import {bindActionCreators } from 'redux'
import AddTodo from '../components/AddTodo'
import TodoList from'../components/TodoList'
import Footer from'../components/Footer'

class App extends Component{
      constructor(props){
      super(props)
      this.state ={}
    }
    handleOnClick(id){
        const{ Actions} = this.props
         Actions.completeTodo(id)
    }
    render(){
        const { dispatch,todos,visibilityFilter,Actions } = this.props;
        return(
            <div>
                <AddTodo 
                 onAddClick = {Actions.addTodo}
                />
                <TodoList 
                todos={todos}
                onTodoClick={this.handleOnClick.bind(this)}
                />
                <Footer
                filter={visibilityFilter}
                onFilterChange ={(nextFilter)=>{ Actions.setVisibilityFilter(nextFilter) } }
                />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    const { SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} = AllActions.VisibilityFilters;
    console.log("啦啦",filter)  
    switch (filter) {
      case SHOW_ALL:
        return todos;      
      case SHOW_ACTIVE:
      alert("active")
        return todos.filter(todo => !todo.completed);
        //case不到SHOW_COMPLETED
      case SHOW_COMPLETED:
      alert("completed")
         return todos.filter(todo => todo.completed);            
    }
  }

const mapStateTypes = state =>({
    todos: selectTodos(state.Todos, state.VisibilityFilter),
    visibilityFilter:state.VisibilityFilter
})

const mapDispatchToProps = dispatch =>({
    Actions:bindActionCreators(AllActions, dispatch)
})
export default connect(mapStateTypes, mapDispatchToProps)(App)

