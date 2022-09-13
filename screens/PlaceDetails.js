import React, {useEffect, useState} from "react";
import {ScrollView, View, Text, StyleSheet, Image} from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import {Colors} from "../constants/colors";
import {fetchDetailPlace} from "../util/database";

const PlaceDetails = ({navigation, route}) => {

  const [loadedPlace, setLoadedPlace] = useState(null);

  const placeDetailId = route.params.id;

  useEffect(()=>{
    const fetchPlace = async ()=>{
      const place = await fetchDetailPlace(placeDetailId);
      setLoadedPlace(place);
      navigation.setOptions({
            title: place.title
          }
      )
    }

    fetchPlace();

  }, [placeDetailId]);

  const openReadOnlyMapHandler = ()=>{
    navigation.navigate('Map', {
      lat: loadedPlace.lat,
      lng: loadedPlace.lng
    })
  }

  if(!loadedPlace){
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>Loading...</Text>
    </View>
  }

  return (
    <ScrollView >
      <Image style={styles.image} source={{uri: loadedPlace.imageUri}}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{loadedPlace.address}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <OutlineButton text="View On Map" icon="map" onPress={openReadOnlyMapHandler}/>
        </View>

      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '35%',
    minHeight: 300,
  },
  locationContainer: {
    padding: 20,
    alignItems: "center"
  },
  addressContainer: {
    alignItems: 'center',
    justifyContent: "center"
  },
  address: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary500,
    textAlign: "center"
  },
  buttonContainer: {
    width: '75%',
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.primary500
  }
});
