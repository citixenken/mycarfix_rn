import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

import React, { useState, useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DashboardScreen from "./DashboardScreen";
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
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      {/* <Drawer.Navigator> */}
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Informational" component={Informational} />
      <Drawer.Screen name="MVRegulators" component={MVRegulators} />
      <Drawer.Screen name="UserActivities" component={UserActivities} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default LandingScreen;
