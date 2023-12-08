import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from "react-native";
import {
    Button,
    Input,

} from "../../Components/index";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLogin}>LOGIN</Text>
            <View style={styles.inputContainer}>
                <Input text='Email'/>
                <Input text='Password' ispass={true}  nameIconLeft="lock" nameIconRight="eye"/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="Login" bgcolor={'red'}/>
            </View>
            <View style={styles.textDetail}>
                <Text>When you agree to term and conditions</Text>
                <TouchableOpacity><Text style={styles.fPass}>Forgot your password</Text></TouchableOpacity>
                <Text>Or login with</Text>
            </View>
            <View style={styles.logo}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity>
                        <Image
                            style={{width: 70, height: 70,marginTop:10}}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png',
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 90, height: 90, marginHorizontal: 20}}
                            source={{
                                uri: 'https://bookvexe.vn/wp-content/uploads/2023/04/tong-hop-25-mau-logo-zalo-dep-va-an-tuong_1-850x560.jpg',
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 70, height: 70, marginTop: 10}}
                            source={{
                                uri: 'https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png',
                            }}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor:'rgba(87,159,68,0.23)'
    },
    textLogin: {
        flex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: '600'
    },
    inputContainer: {
        flex: 30,
        // backgroundColor:'blue',
    },
    buttonContainer: {
        flex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDetail: {
        flex: 20,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo: {
        flex: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fPass: {
        color: '#3950c0',
    }
})
export default Login