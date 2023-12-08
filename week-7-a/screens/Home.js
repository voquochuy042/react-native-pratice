import { TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 100 }}>
            <View style={{ flex: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600' }}>
                    Welcome to Cafe world
                </Text>
            </View>
            <View style={{ flex: 80, alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={{ uri: 'https://github.com/voquochuy042/images/blob/master/tuan7/jewel.png?raw=true' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={{ uri: 'https://github.com/voquochuy042/images/blob/master/tuan7/javasti.png?raw=true' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', marginTop: 50, borderRadius: 10 }} onPress={() => navigation.navigate('drink')}>
                    <Image
                        style={{ width: 200, height: 70, backgroundColor: '#CDF5FD', borderRadius: 10 }}
                        source={{ uri: 'https://github.com/voquochuy042/images/blob/master/tuan7/trungnguyen.png?raw=true' }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('shop')}
                    style={{
                        marginTop: 50,
                        backgroundColor: '#89CFF3',
                        width: 300,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                    <Text style={{ textTransform: "uppercase", fontSize: 24, fontWeight: '600' }}
                    >get started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home;