import React from "react"
import { Image, View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
const ItemProduct = (props) => {
    const { id, name, description, price, img } = props.item
    const navigation = useNavigation()
    console.log(navigation);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductInfo', { productId: id })}
            style={{
                backgroundColor: '#F4DDDD',
                height: 150,
                flexDirection: 'row',
                position: 'relative',
                alignItems: 'center',
                marginVertical: 5
            }}>
            <View style={{
            }}>
                <Image
                    source={img}
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: 'contain',
                        padding: 5
                    }} />

            </View>

            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>${price}</Text>
            </View>
            <Image source={require('../assets/img/plus_button.png')}
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }} />
        </TouchableOpacity>
    )
}
export default ItemProduct