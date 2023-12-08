import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "./ProductItem";
import { Database } from "./db/db";
import { useState } from "react";
const ProductList = () => {
    const [product, setProduct] = useState(Database);
    const renderItem = (data) => {
        return (
            <ProductItem id={data.id} productName={data.productName} productPrice={data.productPrice} productImg={data.productImg} />
        )
    }
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Text>The world’s Best Bike</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={styles.selectbar}>All</Text>
                <Text style={styles.selectbar}>Road bike</Text>
                <Text style={styles.selectbar}>Mountain</Text>
            </View>
            <FlatList numColumns={2} data={product} renderItem={({ item }) => renderItem(item)} />
        </View>
    )
}
const styles = StyleSheet.create({
    selectbar: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
    }
})
export default ProductList;