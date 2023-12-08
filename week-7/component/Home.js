import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://653f4c109e8bd3be29e031ab.mockapi.io/shop")
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const Item = ({ obj }) => {
    return (
      <View style={{ alignItems:"center"}}>
          <Image  source={{uri:obj.url}} resizeMode="contain" style={{width:350,height:100}}></Image>
       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      
       <Text style={{color:"#1DD75B"}}>{obj.status === true ? "Accepting Orders" : "Temporary Unavailable"}</Text>
       <Text style={{color:"#DE3B40"}}>{obj.time}</Text>
       </View>
        <Text>{obj.name}</Text>
        
        <Text>{obj.address}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style = {{fontSize:30,fontWeight:700}}>Shops Near Me</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item obj={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home;
