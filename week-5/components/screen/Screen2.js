import { useState } from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"

const ChooseColor = ({ navigation }) => {
    const list = [
        {
            id: 1,
            color: 'silver',
            productLink: require('../../assets/img/vs_silver.png')
        },
        {
            id: 2,
            color: 'red',
            productLink: require('../../assets/img/vs_red.png')
        },
        {
            id: 3,
            color: 'black',
            productLink: require('../../assets/img/vs_black.png')
        },
        {
            id: 4,
            color: 'blue',
            productLink: require('../../assets/img/vs_blue.png')
        },
    ];

    const [img, setImg] = useState(list[0].productLink); // Set the initial image

    const selectImg = (imageLink) => {
        setImg(imageLink);
    };

    const Box = ({ color, onPress }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: color,
                    width: 50,
                    height: 50,
                    margin: 5,
                }}
                onPress={onPress}
            ></TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 30, flexDirection: 'row' }}>
                <View style={{ flex: 40 }}>
                    <Image
                        source={img}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain', // Correct the property name
                        }}
                    />
                </View>
                <View style={{
                    flex: 60,
                    justifyContent: 'center', // Center align content vertically
                }}>
                    <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <Text>Màu: <strong>đỏ</strong></Text>
                    <Text>Cung cấp bởi: <strong>Tiki Trading</strong></Text>
                    <Text>Màu: <strong>1.790.000</strong></Text>
                </View>
            </View>
            <View style={{ flex: 70, flexDirection: 'row', flexWrap: 'wrap' }}>
                {list.map(element =>
                    <Box
                        key={element.id}
                        color={element.color}
                        onPress={() => selectImg(element.productLink)}
                    />)
                }
            </View>
            <TouchableOpacity style={{
                width: '100%',
                height: 45,
                backgroundColor: '#234896',
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
            }}
                onPress={() => navigation.navigate('Home', { pathImg: img })}>
                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 15,
                    fontWeight: 400,
                    color: '#fff',
                }}>XONG</Text>
            </TouchableOpacity>
        </View >
    )
}
export default ChooseColor;
