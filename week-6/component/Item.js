import { Image, Text, View, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/Entypo';
const ItemP2 = (props) => {
    const width = Dimensions.get('window').width

    const { productName, productPrice, productDiscount, productReviewCount, productImg } = props
    return (
        < View style={{}}>
            <View style={{ marginHorizontal: 10, flexDirection: 'column', height: 180, width: width / 2 - 20 }}>
                <Image source={productImg}
                    style={{
                        width: '100%',
                        height: 80,
                        resizeMode: 'contain',
                    }} />

                <Text>{productName}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" style={{ color: 'yellow', fontSize: 24 }} />
                        <Icon name="star" style={{ color: 'yellow', fontSize: 24 }} />
                        <Icon name="star" style={{ color: 'yellow', fontSize: 24 }} />
                        <Icon name="star" style={{ color: 'yellow', fontSize: 24 }} />
                        <Icon name="star-outlined" style={{ color: 'yellow', fontSize: 24 }} />
                    </View>
                    <Text>({productReviewCount})</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{productPrice}</Text>
                    <Text>{productDiscount}</Text>
                </View>
            </View>
        </View>
    )
}
export default ItemP2