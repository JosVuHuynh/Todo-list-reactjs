const initState = {
    users: [
        {id: 1, name: "jos"},
        {id:2, name:"jack"}
    ],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {...state, users}
            break
        default:
            return state
    }
}

export default rootReducer;