import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        textContainer: {
            flex: 30
        },
        text2: {
            fontSize: 20,
            marginTop: 50,
            textAlign: "center"
        },
        text1: {
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 40
        },
        btnText: {
            color: 'black',
            fontSize: 25,
            fontWeight: "700"
        },
        btn: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width: 150,
            height: 55,
            borderRadius: 20,

        },
        btnLeft: {
            marginRight: 50
        },
        btnRight: {

        },
        btnContainer: {
            width: '100%',
            alignSelf: 'center',
            flexDirection: "row",
            justifyContent: "space-around",
            flex: 20
        },
        container: {
            flex: 100,

            // backgroundColor: 'red'
        },
        img: {
            // backgroundColor: 'red',
            display: "flex",
            alignItems: 'center',
            flex: 40,
        },
        circle: {
            width: 140,
            height: 140,
            marginTop: 50,
        }
    },

)

export { styles }