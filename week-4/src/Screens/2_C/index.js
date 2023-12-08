import {FlatList, StatusBar, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {CustomCheckbox} from "../../Components/index";
import {CustomButton} from "../../Components";

const GeneRatePassword =() =>{
    const DATA =[
        {
            id: '1',
            label: 'Include lower case',
            checked: false
        },
        {
            id: '2',
            label: 'Include upper case letter',
            checked: false
        },
        {
            id: '3',
            label: 'Include number',
            checked: false
        },
        {
            id: '4',
            label: 'Include special symbol',
            checked: false
        },
    ]
    const [data, setData] = useState(DATA);
    const [passwordLength,setPasswordLength]=useState('6')
    const handleCheckboxChange = itemId => {
        const newData = data.map(item =>
            item.id === itemId ? {...item, checked: !item.checked} : item,
        );

        setData(newData); // Update the state with the new data
    };
    const submitHandler =()=>{

    }

    function getRandomLoweLetter() {
        const letters = "abcdefghijklmnopqrstuvwxyz"
        const randomIndex = Math.floor(Math.random() * letters.length)
        return letters[randomIndex]
    }
    function randomNum(){
        return Math.floor(Math.random()*10)
    }
    function getRandomUpperLowerCase(){
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const randomIndex = Math.floor(Math.random() * letters.length)
        return letters[randomIndex]
    }
    function getSpecialChar(){
        const specialChar ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
        return specialChar[Math.floor(Math.random()*specialChar.length)]
    }
    const renderItem = ({item}) => (
        <CustomCheckbox
            checked={item.checked}
            label={item.label}
            onChange={() => handleCheckboxChange(item.id)}
        />
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Generator</Text>
            <TextInput style={{
                borderWidth:1,
                borderRadius:15,
                flex:10,
                marginHorizontal:10,
                fontSize:26,
                backgroundColor:'#151537',
                color:'white'
            }} />
            <View style={styles.optionContainer}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginHorizontal:15,
                    marginTop:10,
                }}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:24,fontWeight:'500',color:'#fff'}}>Password length</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput
                            style={{
                                borderWidth:1,
                                backgroundColor:'#fff',
                                fontSize:24,
                                borderRadius:15,
                                height:50,

                            }}
                            onChangeText={(text)=>setPasswordLength(text)}
                        />
                    </View>

                </View>
                <View>
                    <View style={styles?.container}>
                        <StatusBar backgroundColor="#c3c3c3" />

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: '#fff',
                                marginBottom: 10,
                            }}>
                            {/*Selected: {data.map(item => (item.checked ? `${item.label}, ` : ''))}*/}
                        </Text>

                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
            <View style={{flex:10}}>
                <CustomButton onPress={submitHandler} title={"Generate Password"}/>
            </View>
        </View>
    )
}
const styles = {
    container:{
        flex:100,
        backgroundColor:'#23235B'
    },
    title:{
        fontSize:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'700',
        flex: 20,
        marginTop:10,
        color:'#fff'
    },
    optionContainer:{
        flex:60,
        marginTop: 30
    }
}
export default GeneRatePassword;