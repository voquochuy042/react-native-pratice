import  {View,StyleSheet, Text} from 'react-native'
const Box =()=>{
    return (
        <View style={styles.box}></View>
    )

}
const styles = StyleSheet.create({
    box:{
        borderWidth:1,
        height:50,
        width:50,
        backgroundColor:'red'
    }})
export default Box
