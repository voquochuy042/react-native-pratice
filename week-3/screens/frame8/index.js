import {
    Image,
    View,
    StyleSheet, Text, TouchableOpacity
} from "react-native";
import Input from "./Input";
import {Button} from "../../Components";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
const Frame8 =()=>{
    return(
        <View style={{
            flex:100
        }}>
            <View style={styles.imgContainer}>
                <Image
                    source={{uri:'https://png.pngtree.com/png-clipart/20220823/original/pngtree-mid-autumn-festival-egg-yolk-moon-cake-illustration-png-image_8483514.png'}}
                style={{
                    width: 300,
                    height: 250,
                    resizeMode: 'contain'
                }}
                />
            </View>
            <View style={{
                flex:25,
            }}>
                <Input nameIconLeft={"person-outline"} text={"Please input your user name"}/>
                <Input nameIconLeft={"lock-closed-outline"} ispass={true} text={"Please input your user name"}/>
            </View>
            <View style={{
                flex:15,
            }}>
                <Button bgcolor={"blue"} text={"LOGIN"}/>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginHorizontal:20,
                    marginTop:20,

                }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize:20
                        }}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{
                            fontSize:20
                        }}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex:25,
                // backgroundColor:'red'
            }}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginHorizontal:20,
                    marginTop:20,

                }}>
                    <View style={{
                        borderWidth:1,
                        flex:1,
                        borderColor:'#364da9'
                    }}/>
                    <View style={{
                        marginHorizontal:10
                    }}>
                        <Text  style={{
                            fontSize:18
                        }}>Other Login method</Text>
                    </View>
                    <View style={{
                        borderWidth:1,
                        flex:1,
                        borderColor:'#364da9'
                    }}/>
                </View>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginHorizontal:20,
                    marginTop:20,

                }}>
                    <TouchableOpacity style={{
                        backgroundColor:"#356f98",
                        width:90,
                        height:90,
                        borderRadius:20,
                    }}>
                        <MaterialIcons style={{
                            fontSize:80,
                            color:'white',
                            textAlign:'center'
                        }} name={"person-add-alt-1"}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width:90,
                        height:90,
                        borderRadius:20,
                        backgroundColor:'#cbb028'
                    }}>
                        <MaterialIcons style={{
                            fontSize:80,
                            textAlign:'center'
                        }} name={"wifi"} />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <AntDesign
                            style={{
                                fontSize:100,
                                textAlign:'center',
                                color:'#143fcb'
                            }}
                            name={"facebook-square"}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    imgContainer:{
        flex:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'

    }
})
export default Frame8