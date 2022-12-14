import "react-native-gesture-handler";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React, { useState, useRef } from "react";
import { useScrollToTop } from "@react-navigation/native";

import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  secondary: "orange",
  text: "#4f4f4f",
  textInputBg: "#ebebeb",
};

const DashboardScreen = () => {
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
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.heading}>
        Welcome back, {auth.currentUser?.email.match(/^(.+)@/)[1]}!
        {/* Welcome back, {auth.currentUser?.email.split("@")[0].toUpperCase()}! */}
      </Text>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: COLORS.secondary }]}
        onPress={() => handleLogout()}
      >
        <Text style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

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
