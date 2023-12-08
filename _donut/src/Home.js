import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, View, Text, FlatList } from "react-native";
import { Item } from "./database";
import ItemProduct from "./ItemProduct";
const Home = () => {
    const [product, setProduct] = useState(Item);
    const [input, setInput] = useState('');
    console.log(input);

    return (
        <View style={{ flex: 1 }}>
            <Text>Welcome, Jala!</Text>
            <Text>Choice you Best food</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onChangeText={(value) => { setInput(value) }}
                    style={{
                        borderWidth: 1,
                        height: 55,
                        width: '85%'
                    }} />
                <TouchableOpacity >
                    <Image source={require('../assets/img/ser.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={product.filter(i => i.name.toLowerCase().includes(input.toLowerCase()))}
                    renderItem={({ item }) =>
                        <ItemProduct
                            item={item}
                        />
                    }
                />
            </View>
        </View>
    )
}
export default Home;