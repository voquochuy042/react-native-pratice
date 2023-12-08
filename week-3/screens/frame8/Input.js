import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const Input =(props)=>{
    const {nameIconLeft,ispass} = props
    const place = props.text
    return (
        <View style={styles.inputContainer}>
            {nameIconLeft && <Ionicons name={nameIconLeft} style={styles.iconLeft}/>}
            <TextInput secureTextEntry={ispass} style={styles.input} placeholder={place}/>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,

    },
    input: {
        height: 60,
        width: '100%',
        fontSize: 25,

    },
    iconLeft: {
        fontSize: 30,
        marginLeft: 10,
        marginRight:10,
        color:'#213c6e'
    },
    iconRight: {
        fontSize: 30,
        marginRight: 10
    }
})
export default Input