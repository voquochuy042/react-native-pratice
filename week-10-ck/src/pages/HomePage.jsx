import { useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import AddUserForm from "../components/AddUserForm"
import { fetchUser, updateUserToApi } from "../services/user.service"
import {deleteUser, selectUser, setData} from "./../redux/actions"

const HomePage = () => {
    const [notification, setNotification] = useState("")
    const {users, newUsers, updateUsers, deleteUsers} = useSelector(state => state);
    const dispatch = useDispatch();

    const updateHandler = (idx) => {
        dispatch(selectUser(users[idx]))
    }

    const deleteHandler = (idx) => {
        dispatch(deleteUser(users[idx]));
    }

    const updateToApiHandler = async() => {
        try {
            await updateUserToApi(updateUsers, newUsers, deleteUsers);
            setNotification("Update to API successfully")
        } catch (error) {
            setNotification("Update to API failed")
        }
    }

    useEffect(() => {
        fetchUser().then(data => {
            console.log(data);
            dispatch(setData(data))})
    }, [])

    return <View style={{padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AddUserForm/>

        {users.length > 0 && users.map((el, idx) => {
            const {id, username, password, role} = el;
            return <View style={{flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center', padding: 15, borderWidth: 1, borderColor: "#000", width: '100%', marginBottom: 15}} key={id}>
                <View style={{gap: 10}}>
                    <Text style={{fontSize: 14, fontWeight: 600}}>Username: {username}</Text>
                    <Text style={{fontSize: 14, fontWeight: 600}}>Password: {password}</Text>
                    <Text style={{fontSize: 14, fontWeight: 600}}>Role: {role}</Text>
                </View>

                <View style={{gap: 10}}>
                    <Pressable onPress={() => updateHandler(idx)} style={{padding: 10, backgroundColor: 'green' }}>
                        <Text style={{fontSize: 18, fontWeight: 600}}>Update</Text>
                    </Pressable>

                    <Pressable onPress={() => deleteHandler(idx)} style={{padding: 10, backgroundColor: 'red' }}>
                        <Text style={{fontSize: 18, fontWeight: 600}}>Delete</Text>
                    </Pressable>
                </View>
            </View>  
        })}

        <Pressable onPress={updateToApiHandler} style={{padding: 10, backgroundColor: "red"}}>
            <Text style={{fontSize: 20, fontWeight: 600, color: "#fff"}}>Update to API</Text>
        </Pressable>
        <Text>{notification}</Text>
    </View>
}

export default HomePage