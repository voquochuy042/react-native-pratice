import { View, Text, Pressable } from "react-native"
import { decrement, increment } from './action';
import store from "./store";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { StyleSheet } from "react-native";
import { useState } from "react";

const Counter = ({ count }) => {
    const [a, setCount] = useState(count);
    return (
        <View style={styles.container}>
            <Pressable style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    store.dispatch(decrement);
                    setCount(store.getState().count);
                }}>
                <Icon name="minus" size={30} color="gray" />
            </Pressable>
            <View style={{ width: 50, alignItems: 'center' }}>
                <Text style={{ padding: 10, fontSize: 20 }}>{count}</Text>
            </View>
            <Pressable style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    store.dispatch(increment);
                    setCount(store.getState().count);
                }}>
                <Icon name="plus" size={30} color="gray" />
            </Pressable>
        </View>
    );
};

var mapStateToProps = (state) => ({
    count: state.count
})
const styles = StyleSheet.create({
    container: {

    }
})
export default connect(mapStateToProps, null)(Counter);
