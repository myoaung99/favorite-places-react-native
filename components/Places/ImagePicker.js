import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Pressable,
} from "react-native";
import { Colors } from "../../constants/colors";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
  MediaTypeOptions,
} from "expo-image-picker";
import { Alert } from "react-native";
import IconButton from "../UI/IconButton";
import CustomButton from "../UI/CustomButton";

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

  let ImagePreview = <Text>No image taken yet.</Text>;

  if (pickImage) {
    ImagePreview = <Image style={styles.image} source={{ uri: pickImage }} />;
  }

  return (
    <View>
      <View style={styles.imageContainer}>{ImagePreview}</View>
      <CustomButton onPress={takeImageHandler}>
        <IconButton icon="camera" color="white" size={30} />
      </CustomButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary100,
    marginTop: 30,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.gray700,
    borderRadius: 2,
  },
  image: {
    flex: 1,
  },
});
