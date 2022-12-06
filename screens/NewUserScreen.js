import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";
import Help from "../components/Help";
import BackBtn from "../components/BackBtn";

import CheckBox from "expo-checkbox";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const NewUserScreen = () => {
  const navigation = useNavigation();

  const [agree, setAgree] = useState(false);
  // const [text, setText] = useState("");
  // const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.safeAreaContainer}
    >
      <StatusBar style="auto" />
      <View style={styles.navBtns}>
        <BackBtn onPress={() => navigation.navigate("SignUpScreen")} />
        <Help onPress={() => navigation.navigate("HelpScreen")} />
      </View>
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.loginContainer}>
        <View style={styles.loginScreenButtonsAndInputs}>
          <View style={styles.loginInputs}>
            <TextInput
              placeholder="Full Name"
              style={styles.name}
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Email"
              style={styles.email}
              keyboardType="email-address"
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Phone Number e.g. 0723XXX256"
              style={styles.phone}
              keyboardType="phone-pad"
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={styles.password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              enablesReturnKeyAutomatically
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Confirm Password"
              style={styles.password}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              enablesReturnKeyAutomatically
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Emergency Contact (optional)"
              style={styles.emergencyContact}
              keyboardType="phone-pad"
              underlineColorAndroid="teal"
            ></TextInput>
          </View>
          <View style={styles.wrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "teal" : undefined}
            />
            <Text style={styles.text}>
              By signing up you have agreed to the Terms and Conditions and
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "teal" }]}
            disabled={!agree}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={styles.noAccount}>
            <Text>Have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text
                style={[
                  styles.btnLabel,
                  {
                    // fontWeight: "bold",
                    fontSize: 16,
                    color: "teal",
                    backgroundColor: "#fbfbfb",
                  },
                ]}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewUserScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  btn: {
    height: 40,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    elevation: 10,
  },
  loginContainer: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  indicator: {
    height: 2,
    width: 240,
    backgroundColor: "teal",
    marginHorizontal: 3,
    borderRadius: 6,
    marginVertical: 20,
  },
  loginScreenButtonsAndInputs: {},
  btnLabel: { color: "#fbfbfb", fontSize: 18 },
  noAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginInputs: { marginBottom: 20 },
  name: { paddingBottom: 10, marginBottom: 10 },
  email: { paddingBottom: 10, marginBottom: 10 },
  phone: { paddingBottom: 10, marginBottom: 10 },
  password: { paddingBottom: 10, marginBottom: 10 },
  emergencyContact: { paddingBottom: 10, marginBottom: 10 },
  navBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingHorizontal: 10,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 15,
  },
  text: {
    marginLeft: 10,
    color: "teal",
  },
});
