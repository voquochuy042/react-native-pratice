import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import {Button} from "../../Components/index";
import {LinearGradient} from "expo-linear-gradient";

const ThirdScreen = () => {
    return (
        <LinearGradient style={styles.container} start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['white', 'blue']}>
            <View style={styles.lock}>
                <AntDesign name={"lock"} style={styles.icon}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Forget</Text>
                <Text style={styles.text}>Password</Text>
                <Text style={styles.textInfo}>Provide your account's email for which you want to reset your
                    password</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Fontisto name={"email"}
                              style={{
                                  alignSelf: "center",
                                  marginLeft: 10,
                                  fontSize: 25,
                                  marginRight:10
                              }}/>
                    <TextInput style={styles.input} placeholder={"Email"}/>
                </View>
            </View>
            <View style={styles.btn}>
                <Button text="NEXT" bgcolor={'yellow'}/>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        // backgroundColor:'blue'
    },
    lock: {
        flex: 30,
        // backgroundColor:'red',
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        fontSize: 150
    },
    textContainer: {
        flex: 30,
        // backgroundColor:'red',
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "600"

    },
    textInfo: {
        fontSize: 20,
        marginHorizontal: 15,
        textAlign: "center",
        fontWeight: "500",
        marginTop: 10

    },
    inputContainer: {
        flex: 20,
        // backgroundColor:'red',
        marginHorizontal:20,

    },
    input: {
        height: 50,
        width: '100%',
    },
    inputRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius:20,
        backgroundColor: "#F9F3CC"
    },
    btn: {
        flex: 20,
        // backgroundColor:'red'

    }
})
export default ThirdScreen