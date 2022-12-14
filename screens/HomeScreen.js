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
import Help from "../components/Help";
import Title from "../components/Title";

const PlaceholderImage = require("../assets/images/mcarfix-logo.jpg");

const COLORS = { primary: "teal", white: "#FFFFFF", secondary: "orange" };

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="auto" />
      <Help onPress={() => navigation.navigate("Help")} />
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
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnLabel}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: COLORS.secondary }]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Title onPress={() => navigation.navigate("About")} />
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

    shadowColor: "black",
    elevation: 10,
  },
  btnLabel: { color: "#ffffff", fontSize: 18 },
});
