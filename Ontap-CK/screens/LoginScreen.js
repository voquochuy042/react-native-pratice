import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dic, setDic] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/dictionary")
      .then((resp) => resp.json())
      .then((json) => setDic(json));
  }, []);

  console.log(dic);

  const validateLogin = () => {
    dic.map((item) => {
      if (item.username === username && item.password === password) {
        navigation.navigate("Home", { id: item.id });
      } else {
        setMessage("Username or password incorrect");
      }
      setUsername("");
      setPassword("");
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontStyle: 15, color: "red", textAlign: "center" }}>
        {message}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      ></TextInput>

      <Pressable
        style={{ width: "100%", backgroundColor: "orange", padding: 10 }}
        onPress={validateLogin}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 10,
  },
});
