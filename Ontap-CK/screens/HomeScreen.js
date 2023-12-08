import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, updateDataToAPI } from "../service/dictionary.service";
import {
  deleteEng,
  deleteVN,
  selectEng,
  selectVN,
  setData,
} from "../redux/actions";
import AddDicForm from "./AddDicForm";

export default function HomeScreen({ navigation, route }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { dictionary } = useSelector((state) => state);
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    fetchData(id).then((data) => {
      dispatch(setData(data));
    });
  }, []);

  console.log(dictionary);

  const listENG = dictionary.english;
  const listVN = dictionary.vietnamese;

  const deleteHandler = (idx) => {
    dispatch(deleteVN(listVN[idx]));
    dispatch(deleteEng(listENG[idx]));
  };

  const updateHandler = (idx) => {
    dispatch(selectVN(listVN[idx]));
    dispatch(selectEng(listENG[idx]));
  };

  const updateAPI = async () => {
    try {
      await updateDataToAPI(dictionary, id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AddDicForm />
      <View>
        {listENG.map((el, idx) => {
          const { word } = el;
          const vnWord = listVN[idx].word; // Assuming listENG and listVN have the same length

          return (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "red", fontWeight: "bold" }}>
                English: {word}
              </Text>
              <Text
                style={{ color: "green", fontWeight: "bold", marginLeft: 10 }}
              >
                Vietnamese: {vnWord}
              </Text>
              <View style={{ gap: 10 }}>
                <Pressable
                  onPress={() => updateHandler(idx)}
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    padding: 10,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    UPDATE
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => deleteHandler(idx)}
                  style={{ backgroundColor: "red", padding: 10 }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    DELETE
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>

      <Pressable
        onPress={updateAPI}
        style={{ width: "100%", backgroundColor: "pink", padding: 10 }}
      >
        <Text>UPDATE API</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
