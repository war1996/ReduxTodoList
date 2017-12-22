import React,{Component , PropTypes} from 'react'


export default class Todo extends Component{
    constructor(props) {
        super(props)
        this.onClick=this.onClick.bind(this)
    }

    onClick(){
        const { todo } = this.props
        // console.log(todo.id)
        this.props.onTodoClick(todo.id)
    }
    render(){
        const { todo } = this.props;
        return(
           <li
            onClick={this.onClick}
            style={
                {
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }
            }
            >
            {todo.text}
           </li>
        );
    }
}