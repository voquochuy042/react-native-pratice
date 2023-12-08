import { useEffect, useLayoutEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import Ant from "react-native-vector-icons/AntDesign"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../CartReducer";
import Toast from 'react-native-toast-message';
const Drink = ({ navigation }) => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    // console.log(cart);
    const fetchDrinks = async () => {
        await fetch("https://653f53e99e8bd3be29e048c7.mockapi.io/tuan7/tuan7-drink")
            .then(response => response.json())
            .then(responseData => {
                // console.log(responseData);
                setData(responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useLayoutEffect(() => {
        fetchDrinks()
    }, [])
    // console.log(data);
    const Item = ({ item }) => {

        const addItemToCart = (item) => {
            Toast.show({
                type: 'success',
                text1: 'Thêm thành công',
                text2: `${item.name}`
            });
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
                <TouchableOpacity onPress={() => addItemToCart(item)}>
                    <AntDesign name="plus"
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', width: 40, fontSize: 24 }}>1</Text>
                <TouchableOpacity
                    onPress={() => decreaseQuantity(item)}
                >
                    <AntDesign name="minus"
                        style={{ fontSize: 24, padding: 10, borderRadius: 50, backgroundColor: '#D0D4CA' }} />
                </TouchableOpacity>

            </View>
        </View>
    }
    return (
        <View style={{ alignItems: 'center', flex: 1 }} >

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
            <FlatList
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => <Item item={item} />} />
            <TouchableOpacity
                onPress={() => navigation.navigate('cart')}
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#89CFF3', height: 50 }}>
                <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>go to cart</Text>
            </TouchableOpacity>
            <Toast />
        </View>
    )
}
export default Drink
