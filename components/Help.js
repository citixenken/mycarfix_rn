import { StyleSheet, Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Help = ({ onPress }) => {
  return (
    <View style={styles.circleButton}>
      <Pressable onPress={onPress}>
        <MaterialIcons name="help" size={30} color="#25292e" />
      </Pressable>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  circleButton: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10,
    paddingRight: 10,
    // borderRadius: 20,
  },
});
