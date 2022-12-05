import { StyleSheet, Image, Dimensions } from "react-native";

const HomeImageViewer = ({ homeImageSource }) => {
  return <Image source={homeImageSource} style={styles.image} />;
};

export default HomeImageViewer;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 388,
    height: 440,
  },
});
