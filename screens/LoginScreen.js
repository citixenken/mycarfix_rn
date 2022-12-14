import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";
import Help from "../components/Help";

// handling login overlays
import SignUpFormSuccess from "../components/SignUpFormSuccess";
import SignUpFormError from "../components/SignUpFormError";

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  secondary: "orange",
  text: "#4f4f4f",
};

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log("User logged in successfully with: ", user.email);
        setIsLoading(false);
        setFormSuccessMessage("You've logged in successfully!");
        // setIsSignedIn(true);
      })
      .catch((error) => {
        setIsLoading(false);
        // const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode);
        // alert(errorMessage);
        setFormErrorMessage(errorMessage);
        setFormError(true);
      });
  };

  // form validation
  const loginFormValidation = () => {
    let form_inputs = [email, password];

    if (form_inputs.includes("") || form_inputs.includes(undefined)) {
      setFormErrorMessage("Please fill all required fields");
      return setFormError(true);
    }

    if (form_inputs) return handleLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.safeAreaContainer}
    >
      <StatusBar style="auto" />
      <Help onPress={() => navigation.navigate("Help")} />
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.loginContainer}>
        <View style={styles.loginScreenButtonsAndInputs}>
          <View style={styles.loginInputs}>
            <TextInput
              placeholder="Email"
              style={styles.email}
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={[styles.password, { marginTop: 10 }]}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
          </View>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: COLORS.secondary }]}
            onPress={() => loginFormValidation()}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View style={[styles.noAccount, { marginTop: 20 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text
                style={[
                  styles.btnLabel,
                  {
                    fontSize: 16,
                    color: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.indicator}></View>
          <View style={styles.noAccount}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={[
                  styles.btnLabel,
                  {
                    // fontWeight: "bold",
                    fontSize: 16,
                    color: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* overlays */}
      {formError ? (
        <SignUpFormError
          hideErrorOverlay={setFormError}
          errorMessage={formErrorMessage}
        />
      ) : null}
      {isLoading ? (
        <SignUpFormSuccess />
      ) : formSuccessMessage === "You've logged in successfully!" ? (
        <SignUpFormSuccess
          hideSuccessOverlay={setFormSuccessMessage}
          successMessage={formSuccessMessage}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  btn: {
    height: 40,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
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
  },
  indicator: {
    height: 2,
    width: 240,
    backgroundColor: COLORS.primary,
    marginHorizontal: 3,
    borderRadius: 6,
    marginVertical: 20,
  },
  loginScreenButtonsAndInputs: {},
  btnLabel: { color: COLORS.white, fontSize: 18 },
  noAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInputs: { marginBottom: 20 },
  email: { paddingBottom: 10, overflow: "hidden" },
  password: { paddingBottom: 10, overflow: "hidden" },
});
