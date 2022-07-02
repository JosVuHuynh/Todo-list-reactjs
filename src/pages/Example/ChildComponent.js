import React from 'react';

class ChildComponent extends React.Component {
    
    //key: value
    state = {
        firstName: '',
        lastName: ''
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
        console.log(">>>", this.props);
        // let name = this.props.name
        // let age = this.props.age

        let {name, age, arr} = this.props
        return (
            <div>
                Child component : 
                {name} - {age}
                <div className='job-lists'>
                    {
                        arr.map((item, index) => {
                            return(
                                <div  key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ChildComponent;