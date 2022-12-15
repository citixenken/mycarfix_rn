import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
import LandingScreen from "./screens/loggedIn/drawer/LandingScreen";
import DashboardScreen from "./screens/loggedIn/drawer/DashboardScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "./firebase/config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  //IIFE solution
  useEffect(() => {
    (async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData === null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // navigation.navigate("Dashboard");
          setLoggedIn(true);
        } else {
          // User is signed out
          // navigation.navigate("Login");
          setLoggedIn(false);
        }
      });
      return unsubscribe;
    })();
  }, []);

  if (loggedIn === true) {
    return (
      isAppFirstLaunched !== null && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LandingScreen"
              component={LandingScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )
    );
  } else {
    return (
      isAppFirstLaunched !== null && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
              ></Stack.Screen>
            )}

            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
            <Stack.Screen name="Help" component={HelpScreen}></Stack.Screen>
            <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            ></Stack.Screen>
            <Stack.Screen
              name="NewUser"
              component={NewUserScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )
    );
  }
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
