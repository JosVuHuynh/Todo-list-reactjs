import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        if (!this.state.title || !this.state.salary){
            alert('missing require params')
            return;
        }
        console.log(">>>", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title:'',
            salary:''
        })
    }

    render(){
        
        return (
            <div>
                 <form >
                    <label htmlFor="fname">Job Title:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br/>
                    <label htmlFor="lname">salary:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                    /><br/><br/>
                    <input type="submit" 
                    onClick={(event)=>this.handleSubmit(event)}
                    />
                </form>

            </div>

        )
    }
}

export default AddComponent;