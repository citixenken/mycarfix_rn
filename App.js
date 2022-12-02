import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomeScreen from "./screens/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeImageViewer from "./components/HomeImageViewer";

const Stack = createStackNavigator();
const HomeImage = require("./assets/splash.jpg");

export default function App() {
  return (
    // <View style={styles.container}>
    //   <HomeImageViewer homeImageSource={HomeImage} />
    //   <Text style={styles.homeText}>Why Use mCarFix App...</Text>

    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        ></Stack.Screen>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    paddingTop: 24,
    fontSize: 20,
    color: "#000080",
  },
});
