import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import circle from '../../assets/img/2.jpg';
import {styles} from './style'
const FirstScreen = () => {
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
                    <TouchableOpacity>
                    <View style={styles.btn}>
                            <Text style={styles.btnText}>Sign in</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.btn}>
                            <Text style={styles.btnText}>sign up</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}

export default FirstScreen