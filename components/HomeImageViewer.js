import { StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const HomeImageViewer = ({ homeImageSource }) => {
  return <Image source={homeImageSource} style={styles.image} />;
};

export default HomeImageViewer;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: width,
    height: height / 3,
    marginBottom: 100,
  },
});
