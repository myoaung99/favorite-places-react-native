import React from "react";
import { Pressable, Text, Image, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: place.imageUri,
            }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 4,
    backgroundColor: Colors.primary500,
    overflow: "hidden",
  },
  container: {
    padding: 16,
    borderRadius: 4,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginTop: 16,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
  pressed: {
    opacity: 0.75,
  },
});
