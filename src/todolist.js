import React from "react"
import Item from "./item"
class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoArray.map(item=>{
           return <Item key={item._id} id={item._id} todo={item.todo} completed={item.completed} 
           handleComplete={this.props.handleComplete} 
           handleDelete={this.props.handleDelete}
           handleUpdate={this.props.handleUpdate}
           />
        })
        return (
            <div>
                <ul>
                   {todoList}
                </ul>
            </div>
        )
    }
}

export default TodoList