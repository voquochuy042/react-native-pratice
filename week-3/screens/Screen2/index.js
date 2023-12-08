import {FirstScreen} from '../index'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import circle from "../../assets/img/2.jpg";
const SecondScreen =()=>{
    return (
            <>
                <LinearGradient style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['white', 'blue']}>
                    <View style={styles.img}>
                        <View >
                            <ImageBackground source={{ uri: circle }} style={styles.circle} />
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>Grow</Text>
                        <Text style={styles.text1}>Your Business</Text>
                        <Text style={styles.text2}>We will help you to grow your business using online server</Text>
                    </View>
                    <View style={styles.btnContainer}>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                <Text style={styles.btnText}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity>
                                    <Text style={styles.btnText}>sign up</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.text3Container}>
                        <Text style={styles.text3}>HOW WE WORK</Text>
                    </View>
                </LinearGradient>
            </>
    )
}
const styles = StyleSheet.create({
        text3Container:{
            alignItems:"center",
            flex:20
        },
        text3:{
            textAlign:"center",
            fontSize:25,
            fontWeight:"600"
        },
        textContainer: {
            flex: 30
        },
        text2: {
            fontSize: 20,
            marginTop: 50,
            textAlign: "center"
        },
        text1: {
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 40
        },
        btnText: {
            color: 'black',
            fontSize: 25,
            fontWeight: "700",
        },
        btn: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width: 150,
            height: 55,
            borderRadius: 20,
        },
        btnLeft: {
            marginRight: 50
        },
        btnContainer: {
            width: '100%',
            alignSelf: 'center',
            flexDirection: "row",
            justifyContent: "space-around",
            flex: 10,
        },
        container: {
            flex: 100,
        },
        img: {
            // backgroundColor: 'red',
            display: "flex",
            alignItems: 'center',
            flex: 30,
        },
        circle: {
            width: 140,
            height: 140,
            marginTop: 50,
        }
    },

)
export default SecondScreen