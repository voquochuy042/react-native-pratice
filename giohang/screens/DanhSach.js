import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const DanhSach = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const state = useSelector(state => state)
    console.log('stata', state);
    const dumb = [
        {
            id: 1,
            name: 'ip 15 promax',
            linkImg: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/2146519032.jpeg'
        },
        {
            id: 2,
            name: 'ip 15',
            linkImg: 'https://cdn1.viettelstore.vn/Images/Product/ProductImage/1979390149.jpeg'
        },

    ]
    const [item, setItem] = useState(dumb);
    return (
        <View>
            {
                item.map((item, index) => {
                    // console.log(item);
                    return (
                        <View key={index}>
                            <Text>{item.name}</Text>
                            <Image
                                style={{
                                    height: 100,
                                    width: 100
                                }}
                                source={{ uri: item.linkImg }} />

                            <View style={{ flexDirection: 'row' }}>
                                <Pressable
                                    style={{
                                        backgroundColor: '#9AD0C2',
                                        borderWidth: 1
                                    }}
                                    onPress={() => {
                                        dispatch({
                                            type: 'them',
                                            payload: { id: item.id, name: item.name, linkImg: item.linkImg }
                                        })
                                    }}>
                                    <Text>+1</Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        backgroundColor: '#9AD0C2',
                                        borderWidth: 1
                                    }}
                                    onPress={() => {
                                        dispatch({
                                            type: 'tru',
                                            payload: { id: item.id }
                                        })
                                    }}>
                                    <Text>-1</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                })
            }
            <Pressable
                onPress={() => {
                    navigation.navigate('giohang')
                }}>
                <Text>
                    Xem giỏ hàng
                </Text>

            </Pressable>
        </View>
    )
}

export default DanhSach

const styles = StyleSheet.create({})