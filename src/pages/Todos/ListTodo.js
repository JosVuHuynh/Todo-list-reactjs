import React  from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss'
import {toast } from 'react-toastify';

class ListTodo extends React.Component {
    
    state = {
        listTodos :[
            {id:'todo1', title:'doing homework'},
            {id:'todo2', title:'fix bug'},
            {id:'todo3', title:'play sport'},
            {id:'todo4', title:'Fix bug'},
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add Success")
    }
    
    handleDelete = (todo) =>{
       let currentTodos = this.state.listTodos;
       currentTodos = currentTodos.filter(item => 
           item.id !== todo.id);
        this.setState({
            listTodos: currentTodos,
            editTodo: {}
        }) 


        toast.success("Delete success")

    }

    handleEditTodo = (todo) =>{
        let {editTodo, listTodos} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex(item=> item.id === todo.id)
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update todo success')
            return;
        }

         //edit
        this.setState({
            editTodo: todo
        })
        
    }

    handleOnchangeEditTodo= (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('check empty objec', isEmptyObj)

        return (
            <div className="list-todo-container">
                
                <AddTodo addNewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item,index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ? 
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>  
                                        {
                                            editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input
                                                 value={editTodo.title}
                                                 onChange= {(event) => this.handleOnchangeEditTodo(event)}
                                                />
                                            </span>
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                    </>
                                   
                                    }
                                 <div>
                                    <button className="edit"
                                    onClick={() => this.handleEditTodo(item)}
                                    >   {isEmptyObj === false && editTodo.id === item.id ?
                                         "Save":"Edit" }
                                    </button>
                                    <button className="delete" onClick={() => this.handleDelete(item)}>Delete</button>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>

        )
    }
}

export default ListTodo;