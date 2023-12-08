import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import Ant from "react-native-vector-icons/AntDesign"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../CartReducer";
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    // console.log(cart);
    // let total = calcAmount(cart)
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
    const Item = ({ item }) => {
        // console.log(item.item);
        const addItemToCart = (item) => {
            dispatch(addToCart(item));
        };
        const removeItemFromCart = (item) => {
            dispatch(removeFromCart(item));
        };
        const increaseQuantity = (item) => {
            dispatch(incrementQuantity(item));
        }
        const decreaseQuantity = (item) => {
            
            if (item.quantity == 1) {
                dispatch(removeFromCart(item));
            } else {
                dispatch(decrementQuantity(item));
            }
        }
        // console.log(item.quantity);
        return <View style={{ flexDirection: 'row', width: '100%', justifyContent: "space-between" }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: item.image }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 24 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather name="play" style={{ fontSize: 20 }} />
                        <Text>$ {item.price}</Text>
                    </View>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => increaseQuantity(item)}
                >
                    <AntDesign
                        name="plus"
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', width: 40, fontSize: 24 }}>{item.quantity}</Text>
                <TouchableOpacity
                    onPress={() => decreaseQuantity(item)}
                >
                    <AntDesign
                        name="minus"
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>
            </View>
        </View >
    }
    function calcAmount(item) {
        let amount = 0
        cart.forEach(item => {
            amount += parseInt(item.price) * item.quantity
        })
        return amount
    }
    console.log(calcAmount(cart));
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            flex: 1
        }}>
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        marginHorizontal: 20,
                        width: '100%'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: '#D2E3C8', marginLeft: 15 }}>
                        <Ant name="left" style={{ fontSize: 30, padding: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30 }}>Drinks</Text>
                    <Ant name="search1" style={{ fontSize: 30, marginRight: 15 }} />
                </View>
                {
                    cart.length == 0 ? <Text style={{ fontSize: 30 }}>Empty</Text> :
                        <FlatList data={cart} renderItem={({ item }) => <Item item={item} />} />
                }
            </View>
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ flex: 40, textAlign: 'center', fontSize: 24, backgroundColor: '#FFF6F6' }}>Amount :${total}</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#7752FE',
                        flex: 60,
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}
                >
                    <Text style={{ fontSize: 24, textTransform: 'uppercase' }}>Pay now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Cart;
