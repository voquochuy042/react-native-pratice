import { useEffect, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addUser, updateUser } from "../redux/actions";

const AddUserForm = () => {
    const {selectedUser} = useSelector(state => state)
    const dispatch = useDispatch();
   
    const [title, setTitle] = useState("Add user")
    const [username, setUsername] = useState(selectedUser.username)
    const [role, setRole] = useState(selectedUser.role)
    const [password, setPasword] = useState(selectedUser.password)
    const [id, setId] = useState(selectedUser.id)

    const submitHandler = () => {
        if(!username || !role || !password || !id) return;

        if(title === "Add user"){
            dispatch(addUser({username, role, password, id}));
            
        }
        else{
            dispatch(updateUser({username, role, password, id}));
            
        }

        setUsername("")
        setRole("")
        setPasword("")
        setId("")
        setTitle("Add user")
    }

    useEffect(() => {
        if(!selectedUser) return;

        selectedUser.id && setTitle("Update user")

        setUsername(selectedUser.username)
        setRole(selectedUser.role)
        setPasword(selectedUser.password)
        setId(selectedUser.id)
    }, [selectedUser])

    return <View style={{flex: 1, width: '100%', marginBottom: 40}}>
        <Text style={{fontSize: 30, fontWeight: 600, textAlign: 'center', marginBottom: 15}}>{title}</Text>
        <View style={{gap: 20}}>
            <TextInput editable={title === "Update user" ? false : true} style={{width: '100%', padding: 10, fontSize: 20, fontWeight: 600, borderWidth: 1, borderColor: "#000"}} placeholder="Enter id" value={id} onChangeText={setId}/>
            <TextInput style={{width: '100%', padding: 10, fontSize: 20, fontWeight: 600, borderWidth: 1, borderColor: "#000"}} placeholder="Enter username" value={username} onChangeText={setUsername}/>
            <TextInput style={{width: '100%', padding: 10, fontSize: 20, fontWeight: 600, borderWidth: 1, borderColor: "#000"}} placeholder="Enter password" value={password} onChangeText={setPasword} secureTextEntry={true}/>
            <TextInput style={{width: '100%', padding: 10, fontSize: 20, fontWeight: 600, borderWidth: 1, borderColor: "#000"}} placeholder="Enter role" value={role} onChangeText={setRole}/>
            <Pressable onPress={submitHandler} style={{width: '100%', padding: 15, backgroundColor: "pink", borderWidth: 1, borderColor: "#000"}}>
                <Text style={{fontSize: 20, fontWeight: 600, textAlign: 'center'}}>{title}</Text>
            </Pressable>
        </View>
    </View>
}

export default AddUserForm