import { Image, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'
import { Database } from "./db/db";
import { useEffect, useState } from "react";

const Info = ({ route }) => {
    const id = route.params.productId
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct()
    }, []);
    const getProduct = () => {
        for (let i = 0; i < Database.length; i++) {
            if (Database[i].id === id) {
                setProduct(Database[i])
            }
        }
    }
    return (
        <View>
            <Image source={product.productImg} style={{
                width: 150,
                height: 150,
                resizeMode: 'contain'
            }} />
            <Text>{product.productName}</Text>
            <View>
                <Text>{product.discount}%</Text>
                <Text>{product.productPrice}</Text>
                <Text style={{ textDecorationLine: "line-through" }}>{product.productPrice + product.productPrice * product.discount}$</Text>
            </View>
            <Text>Description</Text>
            <Text>{product.Description}</Text>
            <View>
                <Icon name="hearto" />
                <TouchableOpacity>
                    <Text>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Info