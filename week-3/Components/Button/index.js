import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native'
const Button = (props) => {
    return (
        <TouchableOpacity style={{
            width:'95%',
            height:50,
            borderWidth:0,
            alignItems:"center",
            justifyContent:'center',
            marginHorizontal:10,
            backgroundColor:`${props.bgcolor}`

        }}>
            <View >
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    text:{
        fontWeight:'500',
        fontSize:25,
        color:'white'
}
})
export default Button