import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    
    //key: value
    state = {
        arrJob: [
            {id:'1', title:'Developer', salary:'500'},
            {id:'2', title:'Tester', salary:'400'},
            {id:'3', title:'PM', salary:'1000'}
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

    addNewJob = (job) => {
        this.setState({
            arrJob:[...this.state.arrJob, job]
        })
        console.log('check job from parent:', job)
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({arrJob: currentJobs})
    }

    render(){
        return (
            <div>
                <AddComponent addNewJob= {this.addNewJob}/>
               
                <ChildComponent arrJob={this.state.arrJob} deleteJob = {this.deleteJob}/>
            </div>
        )
    }
}

export default MyComponent;