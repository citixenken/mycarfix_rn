import { StyleSheet, Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BackBtn = ({ onPress }) => {
  return (
    <View style={styles.backButton}>
      <Pressable onPress={onPress}>
        <MaterialIcons name="arrow-back" size={30} color="#25292e" />
      </Pressable>
    </View>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backButton: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
});
