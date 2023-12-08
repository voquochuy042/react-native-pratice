const initialState = {
    users: [],
    selectedUser: { id: '', username: '', password: '', role: '' },
    newUsers: [],
    updateUsers: [],
    deleteUsers: []
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "user/fetch":
            return {
                ...state,
                users: [...action.payload]
            }
        case "user/add":
            console.log(action.payload);
            return {
                ...state,
                users: [...state.users, action.payload],
                newUsers: [...state.newUsers, action.payload]

            }
        case "user/select":
            return {
                ...state,
                selectedUser: action.payload
            }
        case "user/update":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? action.payload : el),
                updateUsers: [...state.updateUsers, action.payload]

            }
        case "user/delete":
            return {
                ...state,
                users: state.users.filter(el => el.id !== action.payload.id),
                deleteUsers: [...state.deleteUsers, action.payload]
            }
        default:
            return state;
    }
}

export default appReducer