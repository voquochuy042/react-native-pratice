import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEng, addVN, updateEng, updateVN } from "../redux/actions";

export default function AddDicForm() {
  const [title, setTitle] = useState("ADD DICTIONARY");
  const { selectEng, selectVN } = useSelector((state) => state);
  console.log(selectEng + " " + selectVN);
  const [english, setEnglish] = useState(selectEng.word);
  const [vietnam, setVietnam] = useState(selectVN.word);
  const { dictionary } = useSelector((state) => state);
  const dispatch = useDispatch();
  const listENG = dictionary.english;
  const listVN = dictionary.vietnamese;
  const submitForm = () => {
    if (!english || !vietnam) return;

    if (title === "ADD DICTIONARY") {
      dispatch(addVN({ id: listVN.length + 1, word: vietnam }));
      dispatch(addEng({ id: listENG.length + 1, word: english }));
    } else {
      dispatch(updateVN({ id: selectVN.id, word: vietnam }));
      dispatch(updateEng({ id: selectEng.id, word: english }));
    }
    setVietnam("");
    setEnglish("");
    setTitle("ADD DICTIONARY");
  };
  useEffect(() => {
    if (!selectVN && !selectEng) return;
    selectVN.id && selectEng.id && setTitle("UPDATE DICTIONARY");
    setEnglish(selectEng.word);
    setVietnam(selectVN.word);
  }, [selectEng, selectVN]);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter English"
        value={english}
        onChangeText={setEnglish}
      ></TextInput>
      <TextInput
        placeholder="Enter Vietnam"
        value={vietnam}
        onChangeText={setVietnam}
        style={styles.input}
      ></TextInput>

      <Pressable
        onPress={submitForm}
        style={{ width: "100%", backgroundColor: "green", padding: 10 }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>{title}</Text>
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
