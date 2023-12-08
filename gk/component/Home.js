import { Image, View, Text, TouchableOpacity } from "react-native"

const Home = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>A premium online store for sporter and their stylish choice</Text>
            <View style={{
                backgroundColor: '#E941411A',
                borderRadius: 30,
                padding: 30
            }}>
                <Image source={require('../component/db/img/bifour_-removebg-preview.png')}
                    style={{
                        width: 300,
                        height: 300,
                        resizeMode: 'contain'
                    }} />
            </View>
            <Text>POWER BIKE SHOP</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ProductList')
                }}
                style={{
                    width: '85%',
                    height: 50,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20
                }}>
                <Text style={{
                    color: '#fff'
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home