import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Home = ({ navigation, route }) => {
    const pathImg = route.params

    console.log(pathImg)
    return (
        <View style={{ flex: 100, alignItems: 'center' }}>
            <View style={{ flex: 55 }}>
                <Image source={pathImg == undefined ? require('../../assets/img/vs_blue.png') : pathImg.pathImg} style={{ width: 380, height: '100%', resizeMode: "contain" }} />
            </View>
            <View style={{ flex: 45, width: '85%', alignItems: "flex-start" }}>
                <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={{ flexDirection: 'row', width: '100%', marginVertical: 15, justifyContent: "space-between" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/img/star.png')} style={{ width: 25, height: 25 }} />
                        <Image source={require('../../assets/img/star.png')} style={{ width: 25, height: 25 }} />
                        <Image source={require('../../assets/img/star.png')} style={{ width: 25, height: 25 }} />
                        <Image source={require('../../assets/img/star.png')} style={{ width: 25, height: 25 }} />
                        <Image source={require('../../assets/img/star.png')} style={{ width: 25, height: 25 }} />
                    </View>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>1.790.000 đ</Text>
                    <Text style={{ textDecorationLine: "line-through" }}>1.790.000 đ</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'red' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <FontAwesome style={{ fontSize: 20, marginLeft: 10 }} name="question-circle-o" />
                </View>
                <TouchableOpacity style={{
                    width: '100%',
                    borderRadius: 10,
                    borderWidth: 1
                }}
                    onPress={() => navigation.navigate('Choose')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 34 }}>
                        <Text>4 MÀU-CHỌN MÀU</Text>
                        <FontAwesome style={{ fontSize: 24 }} name="angle-right" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 55, marginTop: 60 }}>
                    <View style={{ borderRadius: 15, width: '100%', backgroundColor: 'red', height: 44, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>CHỌN MUA</Text>
                    </View>
                </TouchableOpacity>
            </View >

        </View >
    )
}
export default Home;