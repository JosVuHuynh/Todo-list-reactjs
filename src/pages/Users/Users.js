import React from "react";
import axios from 'axios'
import './Users.scss'

class Users extends React.Component {


    state = {
        listUsers:[]
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res => {
        //     console.log("res is", res)
        // })
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data: []
        })
        console.log("res is", res)
    }

  
    render() {
        let {listUsers} = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key = {item.key}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        )
    }
}

export default Users;