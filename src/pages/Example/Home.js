import React from "react";
import {connect} from 'react-redux' 
class Home extends React.Component {

    handleDeleteUser(user) {
        this.props.deleteUserRedux(user)
    }

    render () {
        let listUsers = this.props.dataRedux
        console.log("check props", this.props)
        return (
            <div>
                Hello Home
                <div>
                    {
                        listUsers && listUsers.length >0 && 
                        listUsers.map((item,index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}  - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}> X</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {dataRedux: state.users}
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch ({
            type: 'DELETE_USER', payload: userDelete
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);