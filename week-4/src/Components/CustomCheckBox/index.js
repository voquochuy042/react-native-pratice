import React, {useRef} from 'react';
import {
    TouchableOpacity,
    Animated,
    Easing,
    StyleSheet,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckbox = ({checked, label, onChange}) => {
    const scaleValue = useRef(new Animated.Value(0)).current;

    const toggleCheckbox = () => {
        const toValue = checked ? 0 : 1;
        Animated.timing(scaleValue, {
            toValue,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
        onChange();
    };

    const animatedScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.8, 1.2, 1],
    });

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={toggleCheckbox}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}>
            <Text style={styles.label}>{label}</Text>
            <Animated.View
                style={[
                    styles.checkbox,
                    {
                        transform: [{scale: animatedScale}],
                        backgroundColor: checked ? '#1DBC7B' : 'transparent',
                    },
                ]}>
                {checked && <Icon name="check" size={25} color="white" />}
            </Animated.View>
        </TouchableOpacity>
    );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
    checkbox: {
        width: 32,
        height: 32,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#1DBC7B',
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        fontSize: 24,
        fontWeight: '500',
        color: '#fff',
        marginLeft: 10,
    },
});
