import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeImageViewer from "../components/HomeImageViewer";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const COLORS = { primary: "teal", white: "#FFFFFF" };

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="auto" />
      <HomeImageViewer homeImageSource={PlaceholderImage} />
      <View style={styles.loginAndSignUpContainer}>
        <View style={styles.homeScreenButtons}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                borderWidth: 1,
                borderColor: "teal",
                marginBottom: 20,
              },
            ]}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.btnLabel}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "orange" }]}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    borderColor: "teal",
    margin: 10,
    borderWidth: 1,
    borderRadius: 18,
  },
  loginAndSignUpContainer: {},
  homeScreenButtons: { flexDirection: "column" },
  btn: {
    height: 50,
    marginHorizontal: 60,
    borderRadius: 6,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: { color: "#ffffff", fontSize: 18 },
});
