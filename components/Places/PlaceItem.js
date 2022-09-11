import React from "react";
import { Pressable, Text, Image, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place }) => {
  return (
      <View style={styles.outerContainer}>
        <Pressable
            style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        >
          <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                  uri: place.imageUri,
                }}
            />
          </View>

          <View style={styles.infos}>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.address}>{place.address}</Text>
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
    marginTop: 15,
  },
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  infos: {
    flex: 2,
    marginTop: 5,
    padding: 10,
    paddingStart: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    color: Colors.gray700,
  },
  address: {
    fontSize: 11,
    color: Colors.gray700,
  },
  pressed: {
    opacity: 0.75,
  },
});