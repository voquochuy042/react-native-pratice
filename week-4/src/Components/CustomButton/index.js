import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
const CustomButton = ({ onPress, title }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#3B3B98",
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal:20,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
export default CustomButton