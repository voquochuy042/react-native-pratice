import { Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Item } from "./database";
const ProductInfo = ({ route, navigation }) => {
    const pId = route.params.productId
    const [product, setProduct] = useState({});
    console.log(pId);
    useEffect(() => {
        getCake()
    }, []);
    function getCake() {
        for (let i = 0; i < Item.length; i++) {
            if (Item[i].id === pId) {
                setProduct(Item[i])
                return
            }
        }
    }

    console.log(product);
    return (
        <View>
            <Image source={product.img} style={{ width: '95%', height: 250, resizeMode: 'contain' }} />
            <Text>{product.name}</Text>
            <View>
                <Text>{product.description}</Text>
                <Text>${product.price}</Text>
            </View>
            <Text>Delivery in</Text>
            <View>
                <Text>30 min</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/group16.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/img/group15.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>Restaurants info</Text>
            <Text>{product.info}</Text>
        </View>
    )
}
export default ProductInfo;