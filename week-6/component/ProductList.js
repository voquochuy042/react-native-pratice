import { Image, TouchableOpacity, View, Text, FlatList, ScrollView } from "react-native"
import react, { useState } from "react"
import ProductChatItem from "./ProductChatItem"
const dm_product = [
    {
        id: 1,
        productName: 'Ca nấu lẩu, nấu mì mini',
        shopName: 'Devang',
        productImage: require('../assets/productChat/ca_nau_lau.png')
    },
    {
        id: 2,
        productName: '1KG gà khô bơ tỏi',
        shopName: 'LTD Food',
        productImage: require('../assets/productChat/ga_bo_toi.png')
    },
    {
        id: 3,
        productName: 'Xe cần cẩu đa năng',
        shopName: 'Thế giới đồ chơi',
        productImage: require('../assets/productChat/xa_can_cau.png')
    },
    {
        id: 4,
        productName: 'Đồ chơi dạng mô hình',
        shopName: 'Thế giới đồ chơi',
        productImage: require('../assets/productChat/do_choi_dang_mo_hinh.png')
    },
    {
        id: 5,
        productName: 'Lãnh đạo giản đơn',
        shopName: 'Minh Long shop',
        productImage: require('../assets/productChat/lanh_dao_gian_don.png')
    },
    {
        id: 6,
        productName: 'Hiếu lòng con trẻ',
        shopName: 'Minh Long shop',
        productImage: require('../assets/productChat/hieu_long_con_tre.png')
    },
]

const ProductList = ({ navigation, count }) => {
    const [product, setProduct] = useState(dm_product)
    const [selectedId, setSelectedId] = useState();
    console.log(count);
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#FFFFFF' : '#EAD7BB';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <ProductChatItem
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                url={item.productImage} name={item.productName} shop={item.shopName}
            />
        );
    };
    return (
        <View style={{ flex: 100 }}>
            <View style={{
                flex: 8,
                backgroundColor: 'blue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TouchableOpacity>
                    <Image source={require('../assets/ant-design_arrow-left-outlined.png')} style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 10

                    }} />

                </TouchableOpacity>
                <View><Text style={{ fontSize: 24, fontWeight: '500' }}>Home</Text></View>
                <TouchableOpacity>
                    <Image source={require('../assets/bi_cart-check.png')} style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 10

                    }} />

                </TouchableOpacity>
            </View >
            <View style={{ flex: 82 }}>
                <Text style={{ marginLeft: 20 }}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
                {/* <ScrollView>
                    {product.map(item => <ProductChatItem url={item.productImage} name={item.productName} shop={item.shopName} />)}
                </ScrollView> */}
                <FlatList
                    data={product}
                    renderItem={renderItem} />
            </View>
            {/* <View style={{
                flex: 8,
                backgroundColor: 'blue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TouchableOpacity>
                    <Image source={require('../assets/Group.png')} style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 10

                    }} />

                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Vector (Stroke).png')} style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 10

                    }} />

                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Vector.png')} style={{
                        width: 25,
                        height: 25,
                        marginHorizontal: 10

                    }} />

                </TouchableOpacity>
            </View > */}

        </View >
    )
}
export default ProductList;