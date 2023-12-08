// const BASE_URL = `https://655fed4a83aba11d99cffb02.mockapi.io/user`;
const BASE_URL = `https://655ffb3583aba11d99d00d85.mockapi.io/user`;

export const fetchUser = async() => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json()

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateUserToApi = async(users, newUsers, deleteUsers) => {
    try {
        const updateUser = users.map(async(el) => {
            await fetch(`${BASE_URL}/${el.id}`, {
                method: "put",
                body: JSON.stringify(el),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        })

        const addUser = newUsers.map(async(el) => {
            await fetch(`${BASE_URL}`, {
                method: "post",
                body: JSON.stringify(el),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        })

        const deleteUser = deleteUsers.map(async(el) => {
            await fetch(`${BASE_URL}/${el.id}`, {
                method: "delete"
            })
        })
        const result = await Promise.all(updateUser, addUser, deleteUser);

        return result;
    } catch (error) {
        console.log(error);
    }
}