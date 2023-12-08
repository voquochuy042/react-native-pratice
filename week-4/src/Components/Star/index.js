import {
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
}from 'react-native';
import React, {useState,useEffect} from "react";
const Star = ()=>{

    const [defaultRating,setDefaultRating] =useState(5)
    const [maxRating,setMaxRating] =useState([1,2,3,4,5])

    const starImgFilled = 'https://github.com/voquochuy042/images/blob/master/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/voquochuy042/images/blob/master/star_corner.png?raw=true'

    let message;

    if (3 <= defaultRating && defaultRating <= 4) {
        message = 'Hài lòng 😄!';
    } else if (1 <= defaultRating && defaultRating <= 2) {
        message = 'Không hài lòng 😡!';
    } else {
        message = 'Cực kỳ hài lòng 😃';
    }


    const CustomRatingBar = () =>{

        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((value, index)=>{
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={()=> setDefaultRating(value)}
                            ><Image
                                style={styles.starImgStyle}
                                source={
                                    value <= defaultRating ?
                                        {uri:starImgFilled}:
                                        {uri:starImgCorner}
                                }/>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                marginHorizontal:10
            }}>
                <Text style={{
                    fontSize:32,
                    fontWeight:600,
                    textAlign:'center'
                }}
                >  {message}</Text>
                <CustomRatingBar/>
                {/*<TouchableOpacity*/}
                {/*    activeOpacity={0.7}*/}
                {/*    style={styles.buttonStyle}*/}
                {/*    onPress={()=>{alert(defaultRating)}}>*/}

                {/*    <Text>GetSelected Value</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>
        </SafeAreaView>

    )
}
const styles =StyleSheet.create({
    container:{
        // flex:1,

    },
    customRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10
    },
    starImgStyle:{
        width:40,
        height:40,
        marginHorizontal:2,
        resizeMode:'cover'
    },
    buttonStyle:{
        borderWidth:1
    }
})
export default Star