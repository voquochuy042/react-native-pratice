import React from "react";
import {
    View,
    StyleSheet,
    TextInput, TouchableOpacity
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Input = (props) => {
    const {nameIconLeft, nameIconRight, ispass} = props
    const place = props.text
    return <View style={styles.inputContainer}>
        {nameIconLeft && <AntDesign name={nameIconLeft} style={styles.iconLeft}/>}
        <TextInput secureTextEntry={ispass} style={styles.input} placeholder={place}/>
        <TouchableOpacity>
            {nameIconRight && <AntDesign name={nameIconRight} style={styles.iconRight}/>}
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor:'red',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "rgba(51,51,51,0.18)"
    },
    input: {
        height: 60,
        width: '100%',
        fontSize: 25,
    },
    iconLeft: {
        fontSize: 30,
        marginLeft: 10
    },
    iconRight: {
        fontSize: 30,
        marginRight: 10
    }
})
export default Input