import React from "react";
import ReactDOM from 'react-dom';
import Header from "./header";
import TodoList from "./todolist";
import "./style.css"
import '../node_modules/font-awesome/css/font-awesome.css';
import { getTodos, addTodo, toggleComplete, deleteTodo ,updateTodo} from "./APIServices"
import openSocket from 'socket.io-client';
const socket = openSocket('https://todo11235.herokuapp.com');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArray: [],
        }
        socket.on('handleChange', () => {
            getTodos().then(res => {
                this.setState({ todoArray: res.data });
            })
        })
    }
    componentDidMount = () => {
        socket.emit('change');
    }
    handleSubmit = (text) => {
        addTodo(text).then(res => {
            socket.emit('change');
        });
    }
    handleComplete = (id) => {
        toggleComplete(id).then((res) => {
            socket.emit('change');
        })
    }
    handleDelete = (id) => {
        deleteTodo(id).then((res) => {
            socket.emit('change');
        })
    }
    handleUpdate = (id,text) => {
          updateTodo(id,text).then(res => {
              console.log(id);
              socket.emit('change');
          })
    }
    render() {
        return (
            <div id="dashboard">
                <Header handleSubmit={this.handleSubmit} />
                <TodoList
                    todoArray={this.state.todoArray}
                    handleComplete={this.handleComplete}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));