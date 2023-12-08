import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pressable } from 'react-native'

const GioHang = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state);
    return (
        <View>
            {state.danhsach.map((item, index) => {
                console.log(123);
                return (
                    <View key={index}>
                        <Image style={{ width: 50, height: 50 }} source={{
                            uri: item.linkImg
                        }} />
                        <Text>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                onPress={() => {
                                    dispatch({
                                        type: 'tru',
                                        payload: { id: item.id }
                                    })
                                }}>
                                <Text style={{ fontSize: 20 }}>-</Text>
                            </Pressable>
                            <TextInput value={item.quantity}></TextInput>
                            <Pressable
                                onPress={() => {
                                    console.log(123);
                                    dispatch({
                                        type: 'them',
                                        payload: { id: item.id, name: item.name, linkImg: item.linkImg }
                                    })
                                }}
                            >
                                <Text style={{ fontSize: 20 }}>+</Text>
                            </Pressable>
                        </View>

                    </View>
                )
            })}
        </View >
    )
}

export default GioHang

const styles = StyleSheet.create({})