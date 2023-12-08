import { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native";
import Ant from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
const ShopNearMe = ({ navigation }) => {
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        fetch("https://653f53e99e8bd3be29e048c7.mockapi.io/tuan7/tuan7-home")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const Item = ({ item }) => {
        console.log(item.image);
        let color = item.status === "Accepting Orders" ? 'green' : 'red'

        return <View style={{
            width: '100%',
            height: 150,
            marginTop: 10,
            marginVertical: 60
        }}>
            <Image
                style={{ width: '100%', height: 150, resizeMode: 'contain' }}
                source={{ uri: item.image }} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#B2C8BA'
                }}>
                    <Ant name={item.status === "Accepting Orders" ? 'check' : 'lock'}
                        style={{
                            color: color,
                            fontSize: 26
                        }} />
                    <Text>{item.status}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#B2C8BA'
                }}>
                    <Ant
                        name="clockcircleo" style={{
                            color: color,
                            fontSize: 26
                        }} />
                    <Text>{item.timeToOrder}</Text>
                </View>
                <EvilIcons
                    name="location"
                    style={{
                        fontSize: 26,
                        color: 'green',
                    }} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
            <Text style={{}}>{item.address}</Text>

        </View>
    }
    return <View style={{ alignItems: 'center' }} >
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
            <Text style={{ fontSize: 30 }}>Shops Near Me</Text>
            <Ant name="search1" style={{ fontSize: 30, marginRight: 15 }} />
        </View>
        <FlatList data={data} renderItem={({ item }) => <Item item={item} />} />
    </View>
}
export default ShopNearMe;