import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    
    //key: value
    state = {
        firstName: '',
        lastName: '',
        arr: [
            {id:'1', title:'Developer', salary:'500$'},
            {id:'2', title:'Tester', salary:'400$'},
            {id:'3', title:'PM', salary:'1000$'}

        ]
    }

    handleOnChangeName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleClickButon =() =>{
        alert('click me')
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log('>>>',this.state)
        alert('click me')
    }

    render(){
        return (
            <div>
                <form >
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" 
                    onClick={(event)=>this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent name={this.state.firstName} age = {"25"} arr={this.state.arr}/>
            </div>
        )
    }
}

export default MyComponent;