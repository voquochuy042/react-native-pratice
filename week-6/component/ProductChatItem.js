import { Image, Text, TouchableOpacity, View, } from "react-native"

const ProductChatItem = (props) => {
    const { onPress, backgroundColor, url, name, shop } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ height: 100, marginVertical: 1, borderBottomWidth: 1, backgroundColor: backgroundColor, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <Image source={url} style={{ width: 100, height: 100 }} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{name}</Text>
                <Text style={{ fontSize: 16, fontWeight: '500', color: 'red' }}>{shop}</Text>
            </View>
            <TouchableOpacity>
                <View style={{}}>
                    <View style={{
                        backgroundColor: 'red',
                        width: 90,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Chat</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>

    )
}
export default ProductChatItem;