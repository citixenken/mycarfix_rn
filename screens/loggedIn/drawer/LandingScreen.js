import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

import React, { useState, useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useScrollToTop } from "@react-navigation/native";

import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";

import DashboardScreen from "../../DashboardScreen";
import About from "./About";
import Informational from "./Informational";
import MVRegulators from "./MVRegulators";
import UserActivities from "./UserActivities";

const Drawer = createDrawerNavigator();

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  secondary: "orange",
  text: "#4f4f4f",
  textInputBg: "#ebebeb",
};

const LandingScreen = () => {
  const ref = useRef(null);
  useScrollToTop(ref);

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("User logged out successfully");
        // navigation.navigate("Login");
        setIsSignedIn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };

  return (
    // <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Navigator>
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Informational" component={Informational} />
      <Drawer.Screen name="MVRegulators" component={MVRegulators} />
      <Drawer.Screen name="UserActivities" component={UserActivities} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    marginTop: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
  btn: {
    height: 50,
    width: "60%",
    marginVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    elevation: 10,
  },
  btnLabel: { color: COLORS.white, fontSize: 18 },
});
