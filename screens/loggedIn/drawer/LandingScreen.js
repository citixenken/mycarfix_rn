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

import { FontAwesome } from "@expo/vector-icons";

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
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        swipeEnabled: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#232323",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
      }}
    >
      {/* <Drawer.Navigator> */}
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: "Transactions",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          title: "Support",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          title: "Update Profile",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TermsPrivacyPolicy"
        component={TermsPrivacyPolicy}
        options={{
          title: "Terms and Privacy Policy",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PaySubscribe"
        component={PaySubscribe}
        options={{
          title: "How to Pay/Subscribe",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="VehicleOwners"
        component={VehicleOwners}
        options={{
          title: "Vehicle Owners Forum",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ReportedStolen"
        component={ReportedStolen}
        options={{
          title: "Reported Stolen Vehicles",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CarDiagnosis"
        component={CarDiagnosis}
        options={{
          title: "Car Diagnosis",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SelectCountry"
        component={SelectCountry}
        options={{
          title: "Select Your Country",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="EmergencyServices"
        component={EmergencyServices}
        options={{
          title: "Emergency Services",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="NewsArticles"
        component={NewsArticles}
        options={{
          title: "News and Articles",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="TrafficRules"
        component={TrafficRules}
        options={{
          title: "Traffic Rules and Penalties",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CarFinancing"
        component={CarFinancing}
        options={{
          title: "Car Financing",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SpecialistServices"
        component={SpecialistServices}
        options={{
          title: "Specialist Services",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="mCarFixSPC"
        component={mCarFixSPC}
        options={{
          title: "mCarFix S.P.C",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: "Logout",
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "#116c6e" : "#232323"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default LandingScreen;
