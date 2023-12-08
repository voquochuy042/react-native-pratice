import { Image, View, Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from "react";
import { useNavigation } from '@react-navigation/native';
const ProductItem = (props) => {
    const { productName, productPrice, productImg, id } = props

    const navigation = useNavigation();
    return (
        <View style={{
            position: 'relative',
            padding: 20,
            backgroundColor: '#736767',
            borderRadius: 15
        }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Info', { productId: id })
            }}>
                <AntDesign style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    fontSize: 24,
                }} name="hearto" />
                <View style={{
                    justifyContent: 'center',

                }}>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            resizeMode: 'contain'
                        }}
                        source={productImg} />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>{productName}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>${productPrice}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}
export default ProductItem;