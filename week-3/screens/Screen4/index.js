import {
    StyleSheet,
    Text,
    TextInput,
    View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import {Button} from "../../Components";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import Box from "./Box";
const FourthScreen=()=>{
    const dummy =[1,2,3,4]
    return(
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
                {/*{dummy.map((e) => (*/}
                {/*    <Box key={index}/>*/}
                {/*))}*/}
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
            <View style={styles.btn}>
                <Button text="VERIFY CODE" bgcolor={'yellow'}/>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    box:{
      borderWidth:1,
      height:50,
      width:50,
        // backgroundColor:'red'
    },
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
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        // backgroundColor:'red'

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
export default FourthScreen