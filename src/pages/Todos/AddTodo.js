import React from "react";
import './ListTodo.scss'
import {toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        title:''
    }

    handleOnchangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }   

    handleOncliclAdd = () => {
        if (!this.state.title) {
            //underfined, null, empty => false
            toast.error("Missing title")
            return;
        }

        let todo = {
            id: Math.floor(Math.random()*100),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title:''
        })
    }

    render() {

        let {title} = this.state;
        return (
            <div className="add-todo">
            <p>Simple Todo List</p>
            <input type = "text" value={title}
            onChange= {(event) => this.handleOnchangeTitle(event)}
            ></input>
            <button type = "button" className="add"
            onClick={() => this.handleOncliclAdd()}
            >Add</button>
        </div>
        )
    }
}

export default AddTodo;