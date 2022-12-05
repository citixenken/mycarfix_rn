import { StyleSheet, Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Help = ({ onPress }) => {
  return (
    <View
      style={styles.circleButton}
      // style={styles.circleButtonContainer}
    >
      <Pressable
        // style={styles.circleButton}
        onPress={onPress}
      >
        <MaterialIcons name="help" size={40} color="#25292e" />
      </Pressable>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  //   circleButtonContainer: {
  //     width: 80,
  //     height: 80,
  //     marginHorizontal: 60,
  //     borderWidth: 4,
  //     borderColor: "#ffd33d",
  //     borderRadius: 42,
  //     padding: 3,
  //   },
  circleButton: {
    // flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});
