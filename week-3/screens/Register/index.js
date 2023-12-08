import {
    Text,
    View,
    StyleSheet
} from "react-native";
import {
    Button,
    Input,

} from "../../Components/index";
import RadioGroup from "react-native-radio-buttons-group";
import {useMemo, useState} from "react";

const Register = () => {
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: '1'
        },
        {
            id: '2',
            label: 'Female',
            value: '0'
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.textHeader}>
                <Text style={{
                    fontSize:35,
                    fontWeight:'500'
                }}>Register</Text>
            </View>
            <View style={styles.InputContainer}>
                <Input text='Name'/>
                <Input text='Phone'/>
                <Input text='Email'/>
                <Input text='Password' ispass={true} nameIconRight="eye"/>
                <Input text='Email'/>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={"row"}
                />
            </View>

            <View style={styles.buttonContainer}>
            <Button text ="REGISTER" bgcolor={'#a41f1f'}/>
                <Text style={{marginTop:10}}>When you agree to term and condition</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:100,
        backgroundColor:'rgba(37,115,106,0.3)'
    },
    textHeader:{
        flex:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    InputContainer:{
        flex:65
    },
    buttonContainer:{
        flex:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    }
})
export default Register