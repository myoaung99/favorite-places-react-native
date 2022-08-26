import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Colors } from "../../constants/colors";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
  MediaTypeOptions,
} from "expo-image-picker";
import { Alert } from "react-native";

const ImagePicker = () => {
  const [pickImage, setPickImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  // check and request permission
  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay", style: "default" }]
      );

      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermissions = await verifyPermissions();

    if (!hasPermissions) {
      return;
    }

    const result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      mediaTypes: MediaTypeOptions.Images,
      quality: 0.5,
    });

    // do nothing if camera was cancelled
    if (result.cancelled) {
      return;
    }

    setPickImage(result.uri);
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: pickImage }} />
      </View>
      <Button title="Take Picture" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

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
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary100,
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
});
