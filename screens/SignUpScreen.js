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

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <BackBtn onPress={() => navigation.navigate("Home")} />
      <HomeImageViewer homeImageSource={PlaceholderImage} />

      <View style={styles.signUpContainer}>
        <View style={styles.signUpScreenTextAndButton}>
          <Text style={styles.text}>Create Account</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("NewUser")}
          >
            <Text
              style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}
            >
              Motorist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  signUpContainer: {},
  signUpScreenTextAndButton: { flexDirection: "column" },
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
  text: { textAlign: "center", marginBottom: 20, fontSize: 18, color: "teal" },
  btnLabel: { color: "#fbfbfb", fontSize: 18 },
});
