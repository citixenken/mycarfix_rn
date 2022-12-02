import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.homeScreenText}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  //   homeScreenText: { flex: 1, justifyContent: "center", alignItems: "center" },
});
