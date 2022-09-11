import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Place } from "../../modal/place-modal";
import { Alert } from "react-native";

const PlaceForm = ({ onAddPlace }) => {
  const [enteredTitle, setEnteredTitle] = useState();
  const [pickedImage, setPickedImage] = useState();
  const [pickedLocaiton, setPickedLocation] = useState();

  const onChangeTextHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const onPickedImageHandler = (imageUri) => {
    setPickedImage({ uri: imageUri });
  };

  const onPickedLocationHandler = React.useCallback((coords) => {
    setPickedLocation({ lat: coords.lat, lng: coords.lng });
  }, []);

  const reset = () => {
    setEnteredTitle();
    setPickedImage();
    setPickedLocation();
  };

  const submitHandler = () => {
    // basic validation
    if (!enteredTitle) {
      Alert.alert("Invalid Submit", "No title has entered yet!");
      return;
    } else if (!pickedImage) {
      Alert.alert("Invalid Submit", "No image has picked yet!");
      return;
    } else if (!pickedLocaiton) {
      Alert.alert("Invalid Submit", "No location has entered yet!");
      return;
    }

    const place = new Place(
        Math.random().toString() + new Date().toString(),
        enteredTitle,
        pickedLocaiton.lat.toString() + pickedLocaiton.lng.toString(),
        pickedLocaiton,
        pickedImage.uri
    );
    onAddPlace(place);
    reset();
  };

  return (
      <ScrollView style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeTextHandler}
            value={enteredTitle}
        />

        <ImagePicker onPickedImage={onPickedImageHandler} />
        <LocationPicker onPickedLocation={onPickedLocationHandler} />
        <View style={styles.buttonContainer}>
          <Button onPress={submitHandler}>Submit</Button>
        </View>
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
    borderRadius: 2,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary500,
  },

  buttonContainer: {
    marginBottom: 50,
  },
});