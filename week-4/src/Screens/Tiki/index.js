import {
    View,
    StyleSheet,
    Image,
    Text, TextInput, TouchableOpacity, Pressable, Button
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import {useState} from "react";
const Tiki = ()=>{
    const [amount,setAmount] =useState('')
    function updateAmount(){

    }
    return(
        <View style={styles.bgContainer}>
            <View style={styles.container1}>
                <View style={styles.detailContainer}>
                    <View style={styles.imgcontainer}>
                        <View>
                            <Image style={{
                                width:150,
                                height:150,
                                backgroundColor:'red'
                            }} source={{uri:'https://taxplus.vn/wp-content/uploads/2022/12/Dac-nhan-tam-1024x1024.jpg'}}/>

                        </View>
                    </View>
                    <View style={{flex:1,marginLeft:20}}>
                        <Text style={{
                            fontWeight:'700',
                            fontSize:16,
                            marginVertical:10,
                        }}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={{
                            fontWeight:'700',
                            fontSize:14,
                            marginBottom:10
                        }}>Cung cấp bởi tiki trading</Text>
                        <Text style={{
                            fontWeight:'700',
                            fontSize:18
                        }}>141.800₫</Text>
                        <Text style={{
                            fontSize:16,
                            textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid',
                            marginBottom:10
                        }}>141.800₫</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                                <TouchableOpacity style={{height:25,width:25,backgroundColor:'rgba(124,55,55,0.22)',alignItems:'center',justifyContent:'center'}}>
                                    <Entypo name={"plus"}/>
                                </TouchableOpacity>
                                <TextInput style={{width:10,marginHorizontal:10}} placeholder={'1'} value={amount}/>
                                <TouchableOpacity style={{height:25,width:25,backgroundColor:'rgba(124,55,55,0.22)',alignItems:'center',justifyContent:'center'}}>
                                    <Entypo name={"minus"}/>
                                </TouchableOpacity>
                            </View>
                                <TouchableOpacity>
                                    <Text style={{color:'blue',fontSize:18,marginRight:10}}>Mua sau</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20}}>Mã giảm giá đã lưu</Text>
                    </View>
                    <Text style={{flex:1}}>Xem tại đây</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{
                        borderWidth:1,
                        flex:1,
                        borderRadius:10,
                        height:50,
                        marginHorizontal:10,
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <Image style={{width:30,height:30,marginRight:10}} source={{uri:'https://github.com/voquochuy042/images/blob/master/gift.png?raw=true'}}/>
                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0 }
                            ]}
                            onPress={() => console.log('Pressed')}
                        >
                            <View><Text style={{fontSize:18,fontWeight:'500'}}>Mã giảm giá</Text></View>
                        </Pressable>

                    </View>
                    <View style={{
                        borderWidth:1,
                        flex:1,
                        borderRadius:10,
                        height:50,
                        marginHorizontal:10,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: '#2f5191',
                        marginBottom:20
                    }}>
                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.5 : 1.0 },
                                { backgroundColor: '#2f5191' }
                            ]}
                            onPress={() => console.log('Pressed')}
                        >
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: '600',color:'#fff' }}>Áp dụng</Text>
                            </View>
                        </Pressable>

                    </View>
                </View>
                <View style={{backgroundColor:'#C4C4C4',height:20}}></View>
                <View style={{flexDirection:'row',marginVertical:15}}>
                    <Text style={{fontSize:16,flex:3}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Pressable><Text style={{color:'#186094',fontSize:16,flex:1}}>Nhập tại đây</Text></Pressable>
                </View>
                <View style={{backgroundColor:'#C4C4C4',height:20}}></View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:24,fontWeight:'500',marginBottom:15,marginTop:10,marginLeft:10,flex:3}}>Tạm tính</Text>
                    <Text style={{fontSize:18,flex:1,color:'#961322'}}>141.800 ₫</Text>
                </View>
                <View style={{backgroundColor:'#C4C4C4',height:150}}></View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:24,fontWeight:'500',marginLeft:10,flex:3}}>Thành tiền</Text>
                    <Text style={{fontSize:18,flex:1,color:'#961322'}}>141.800 ₫</Text>
                </View>
                <View style={{
                    marginHorizontal:15,
                }}>
                    <Button color={'red'} title={"tiến hành đặt hàng"}/>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    bgContainer:{
        flex:1,
    },
    container1:{

    },
    detailContainer:{
        display:'flex',
        flexDirection:'row',
        // backgroundColor:'red',
        marginLeft:10
    },
    imgcontainer:{
        flex:1,

    }
})
export default Tiki