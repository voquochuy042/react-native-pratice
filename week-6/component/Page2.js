import { FlatList, View } from "react-native";
import ItemP2 from "./Item";
import { useState } from "react";
import Item from './Item'
const Page2 = () => {
    const dm_data = [
        {
            id: 1,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/giacchuyen.png')
        },
        {
            id: 2,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/daynguon.png')
        },
        {
            id: 3,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/dauchuyendoipsps2.png')
        },
        {
            id: 4,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/dauchuyendoi.png')
        },
        {
            id: 5,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/carbusbtops2.png')
        },
        {
            id: 6,
            productName: 'Cáp chuyển từ Cổng USB sang PS2...',
            productPrice: '69.900 đ',
            productDiscount: '39%',
            productReviewCount: 15,
            productImg: require('../assets/page2/daucam.png')
        }
    ]
    const [product, setproduct] = useState(dm_data);
    const renderItem = ({ item }) => {
        return (
            <Item
                productName={item.productName}
                productPrice={item.productPrice}
                productDiscount={item.productDiscount}
                productImg={item.productImg}
                productReviewCount={item.productReviewCount}
            />
        )
    }
    return (
        <View style={{ flex: 100 }}>
            <FlatList
                data={product}
                renderItem={(item) => renderItem(item)}
                numColumns={2}

            />
        </View>
    )
}
export default Page2;