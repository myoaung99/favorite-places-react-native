import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const onChangeTextHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    color: Colors.primary500,
    marginBottom: 4,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.primary100,
    fontSize: 16,
  },
});
