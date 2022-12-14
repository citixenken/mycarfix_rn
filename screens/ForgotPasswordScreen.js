import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";
import BackBtn from "../components/BackBtn";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

import React from "react";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BackBtn onPress={() => navigation.navigate("Home")} />
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.forgotContainer}>
        <View style={styles.forgotPasswordTextAndButton}>
          <TextInput
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            underlineColorAndroid="teal"
            style={[styles.phone, { marginTop: 10 }]}
          ></TextInput>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "orange" }]}
            // onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Send Code
            </Text>
          </TouchableOpacity>
          <View style={styles.gotPassword}>
            <Text>Got your Password? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  styles.btnLabel,
                  {
                    fontSize: 16,
                    color: "teal",
                    backgroundColor: "#fbfbfb",
                  },
                ]}
              >
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  forgotPasswordTextAndButton: {},
  btn: {
    height: 40,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    elevation: 10,
    marginVertical: 20,
  },
  forgotContainer: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  gotPassword: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  phone: { paddingBottom: 10, textAlign: "center" },
  btnLabel: { color: "#fbfbfb", fontSize: 18 },
});
