export const setData = (users) => {
    return {
        type: "user/fetch",
        payload: users
    }
}

export const addUser = (user) => {
    return {
        type: "user/add",
        payload: user
    }
}

export const selectUser = (user) => {
    return {
        type: "user/select",
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: "user/update",
        payload: user
    }
}

export const deleteUser = (user) => {
    return {
        type: "user/delete",
        payload: user
    }
}