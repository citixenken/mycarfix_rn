import { Pressable, StyleSheet, Text, View } from "react-native";

const Title = ({ onPress }) => {
  return (
    <View>
      <Pressable style={styles.title} onPress={onPress}>
        <Text style={{ color: "teal" }}>About SkyTOP Technologies Ltd</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#fbfbfb",
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 225,
    marginLeft: 116,
    marginRight: 30,

    color: "teal",
  },
});
