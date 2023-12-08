import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, {useState} from 'react'
import {
    Star
    ,CustomButton
} from "../../Components/index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ProductReview =()=>{
    const [text,setText] = useState('')
    const submit =()=>{

        alert(text)
    }
    const textHandle =(value)=>{
        setText(value)
    }
    return(
        <View style={{
            flex:1,
            marginHorizontal:10
        }}>
            <View style={styles.titleContainer}>
                <View style={{}}>
                    <Image
                        style={{
                            objectFit:'cover',
                            width:130,
                            height:130,
                        }}
                        source={{
                            uri:'https://cdn.tgdd.vn/Products/Images/75/313002/usb-3-2-32gb-apacer-ah357-xanh-duong-1.jpg'
                        }}/>
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        fontSize: 24,
                    }}>USB 3.2 32GB Apacer AH357 với thiết kế siêu nhỏ, thoải mái lưu trữ với dung lượng 32 GB</Text>
                </View>
                </View>


            <View style={styles.reviewContainer}>
                <Star/>
            </View>
            <TouchableOpacity>
            <View style={{
                borderWidth:1,
                borderColor:'#307ea6',
                height:50,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:10,
                paddingVertical:30
            }}>
                <FontAwesome size={30} name={'camera'}/>
                    <Text style={{fontSize:28,fontWeight:'600',marginHorizontal:10}}>Thêm hình ảnh</Text>
            </View>
            </TouchableOpacity>
            <View>
                <TextInput
                    style={{
                        borderWidth:1,
                        borderColor:'#307ea6',
                        borderRadius:10,
                        marginTop:10,
                        fontSize:24,
                }}
                    value={text}
                    onChangeText={textHandle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    multiline={true}
                    numberOfLines={8}
                    placeholder={"Hãy chia sẽ những điều bạn thích về sản phẩm"}/>
            </View>
            <View style={{
                marginTop:10
            }}>
                <CustomButton onPress={submit} title={"Gửi"}/>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
    },
    reviewContainer:{
        display:'flex',
        alignItems:'center',
        // backgroundColor:'red'

    },
    startContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
    
})
export default ProductReview;