import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HelpScreen from "./screens/HelpScreen";
import AboutScreen from "./screens/AboutScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import NewUserScreen from "./screens/NewUserScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData === null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            ></Stack.Screen>
          )}

          <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          ></Stack.Screen>
          <Stack.Screen name="HelpScreen" component={HelpScreen}></Stack.Screen>
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="NewUserScreen"
            component={NewUserScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
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
