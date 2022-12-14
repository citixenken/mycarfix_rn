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
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";
import Help from "../components/Help";
import BackBtn from "../components/BackBtn";
import SignUpFormSuccess from "../components/SignUpFormSuccess";
import SignUpFormError from "../components/SignUpFormError";

import CheckBox from "expo-checkbox";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  secondary: "orange",
  text: "#4f4f4f",
};

const NewUserScreen = () => {
  const navigation = useNavigation();

  const [agree, setAgree] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleSignUp = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log("User created successfully with: ", user.email);
        setIsLoading(false);
        setFormSuccessMessage("Your account has been created successfully!");
        // setFormSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        // const errorCode = error.code;
        const errorMessage = error.message;
        // alert(error);
        // alert(errorCode);
        // alert(errorMessage);
        setFormErrorMessage(errorMessage);
        setFormError(true);
      });
  };

  // form validation
  const newUserFormValidation = () => {
    let form_inputs = [fullName, email, phoneNumber, password, confirmPassword];
    let password_match = password === confirmPassword;

    if (form_inputs.includes("") || form_inputs.includes(undefined)) {
      setFormErrorMessage("Please fill all required fields");
      return setFormError(true);
    }

    if (!password_match) {
      setFormErrorMessage("Passwords DO NOT match!!!");
      return setFormError(true);
    }

    if (password_match) return handleSignUp();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.safeAreaContainer}
    >
      <StatusBar style="auto" />
      <View style={styles.navBtns}>
        <BackBtn onPress={() => navigation.navigate("SignUp")} />
        <Help onPress={() => navigation.navigate("Help")} />
      </View>
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.loginContainer}>
        <View style={styles.loginScreenButtonsAndInputs}>
          <View style={styles.loginInputs}>
            <TextInput
              placeholder="Full Name"
              style={styles.name}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
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
              placeholder="Phone Number e.g. 0723XXX256"
              style={styles.phone}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={styles.password}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              enablesReturnKeyAutomatically
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
            <TextInput
              placeholder="Confirm Password"
              style={styles.password}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              enablesReturnKeyAutomatically
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
            <TextInput
              placeholder="Emergency Contact (optional)"
              style={styles.emergencyContact}
              keyboardType="phone-pad"
              placeholderTextColor="#aaaaaa"
              underlineColorAndroid="#116c6e"
            ></TextInput>
          </View>
          <View style={styles.wrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? COLORS.secondary : undefined}
            />
            <Text style={styles.text}>
              By signing up you have agreed to the Terms and Conditions and
              Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: COLORS.secondary }]}
            disabled={!agree}
            // onPress={() => navigation.navigate("SignUp")}
            onPress={() => newUserFormValidation()}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={styles.noAccount}>
            <Text>Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
                Log In
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
      ) : formSuccessMessage ===
        "Your account has been created successfully!" ? (
        <SignUpFormSuccess
          hideSuccessOverlay={setFormSuccessMessage}
          successMessage={formSuccessMessage}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};

export default NewUserScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
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
    marginVertical: 20,
  },
  loginScreenButtonsAndInputs: {},
  btnLabel: { color: COLORS.white, fontSize: 18 },
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
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    marginLeft: 10,
    color: COLORS.text,
  },
});
