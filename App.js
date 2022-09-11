import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import PlaceDetails from "./screens/PlaceDetails";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { useEffect } from "react";
import { initDB } from "./util/database";
import { useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [dbInitialized, setDbInitialized] = useState(false);

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       await initDB();
  //
  //     } catch (e) {
  //       console.warn(e);
  //     }finally {
  //         setDbInitialized(true);
  //     }
  //   };
  //
  //   init();
  // }, []);
  //
  // console.log(dbInitialized);

  // if (dbInitialized) {
  //   SplashScreen.hideAsync();
  // }
  //
  // if (!dbInitialized) {
  //   return null;
  // }

  return (
    <View>
      <StatusBar style="dark" backgroundColor={Colors.primary500} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={{ title: "All Places" }}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: "Add Favorite Place" }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
