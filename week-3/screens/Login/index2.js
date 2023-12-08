import {
    View,
    StyleSheet, Text, TouchableOpacity
} from "react-native";
import Input from "./Input";
import Button from "../../Components/Button";

const Login2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textHeaderContainer}>
                <Text style={{
                    marginTop:60,
                    fontWeight:'600',
                    fontSize:40,
                    marginLeft:30
                }}>LOGIN</Text>
            </View>
            <View style={styles.inputContainer}>
                <Input nameIconLeft={"person"} ispass={false} text ="Name"/>
                <Input nameIconLeft={"locked"} nameIconRight={"eye"} ispass={true} text ="Password"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button bgcolor={"black"} text={"LOGIN"}/>
                <TouchableOpacity style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        marginTop:30,
                        fontWeight:'600',
                        fontSize:25
                    }}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:100,
        backgroundColor:'#dad01d'
    },
    textHeaderContainer:{
        flex:30
    },
    inputContainer:{
        flex:40
    },
    buttonContainer:{
        flex:30
    },
})
export default Login2