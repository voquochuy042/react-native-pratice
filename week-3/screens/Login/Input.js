import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";

const Input =(props)=>{
    const {nameIconLeft, nameIconRight, ispass} = props
    const place = props.text
    return (
        <View style={styles.inputContainer}>
            {nameIconLeft && <Fontisto name={nameIconLeft} style={styles.iconLeft}/>}
            <TextInput secureTextEntry={ispass} style={styles.input} placeholder={place}/>
            <TouchableOpacity>
                {nameIconRight && <AntDesign name={nameIconRight} style={styles.iconRight}/>}
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "rgba(211,227,57,0.66)",

    },
    input: {
        height: 60,
        width: '100%',
        fontSize: 25,

    },
    iconLeft: {
        fontSize: 30,
        marginLeft: 10,
        marginRight:10
    },
    iconRight: {
        fontSize: 30,
        marginRight: 10
    }
})
export default Input