import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";
import Help from "../components/Help";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="auto" />
      <Help onPress={() => navigation.navigate("HelpScreen")} />
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.loginContainer}>
        <View style={styles.loginScreenButtonsAndInputs}>
          <View style={styles.loginInputs}>
            <TextInput
              placeholder="Email"
              style={styles.email}
              keyboardType="email-address"
              underlineColorAndroid="teal"
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={[styles.password, { marginTop: 10 }]}
              secureTextEntry
              underlineColorAndroid="teal"
            ></TextInput>
          </View>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "orange" }]}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Login
            </Text>
          </TouchableOpacity>
          {/* <Text style={{ marginTop: 20, textAlign: "center" }}>
            Forgot Password?
          </Text> */}
          <View style={[styles.noAccount, { marginTop: 20 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
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
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.indicator}></View>
          <View style={styles.noAccount}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
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
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  btnLabel: { color: "#ffffff", fontSize: 18 },
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
    backgroundColor: "teal",
    marginHorizontal: 3,
    borderRadius: 6,
    marginVertical: 20,
  },
  loginScreenButtonsAndInputs: {},
  btnLabel: { color: "#ffffff", fontSize: 18 },
  noAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInputs: { marginBottom: 20 },
  email: { paddingBottom: 10 },
  password: { paddingBottom: 10 },
});
