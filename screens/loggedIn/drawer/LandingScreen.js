import "react-native-gesture-handler";

import { StyleSheet } from "react-native";

import React, { useState, useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DashboardScreen from "./DashboardScreen";
import Transactions from "./Transactions";
import Support from "./Support";
import UpdateProfile from "./UpdateProfile";
import TermsPrivacyPolicy from "./TermsPrivacyPolicy";
import PaySubscribe from "./PaySubscribe";
import VehicleOwners from "./VehicleOwners";
import ReportedStolen from "./ReportedStolen";
import CarDiagnosis from "./CarDiagnosis";
import SelectCountry from "./SelectCountry";
import EmergencyServices from "./EmergencyServices";
import NewsArticles from "./NewsArticles";
import TrafficRules from "./TrafficRules";
import CarFinancing from "./CarFinancing";
import SpecialistServices from "./SpecialistServices";
import mCarFixSPC from "./DashboardScreen";
import Logout from "./Logout";

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
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="Support" component={Support} />

      <Drawer.Screen name="UpdateProfile" component={UpdateProfile} />
      <Drawer.Screen name="TermsPrivacyPolicy" component={TermsPrivacyPolicy} />
      <Drawer.Screen name="PaySubscribe" component={PaySubscribe} />
      <Drawer.Screen name="VehicleOwners" component={VehicleOwners} />
      <Drawer.Screen name="ReportedStolen" component={ReportedStolen} />
      <Drawer.Screen name="CarDiagnosis" component={CarDiagnosis} />
      <Drawer.Screen name="SelectCountry" component={SelectCountry} />
      <Drawer.Screen name="EmergencyServices" component={EmergencyServices} />
      <Drawer.Screen name="NewsArticles" component={NewsArticles} />
      <Drawer.Screen name="TrafficRules" component={TrafficRules} />
      <Drawer.Screen name="CarFinancing" component={CarFinancing} />
      <Drawer.Screen name="SpecialistServices" component={SpecialistServices} />
      <Drawer.Screen name="mCarFixSPC" component={mCarFixSPC} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default LandingScreen;
