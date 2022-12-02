import { StyleSheet, Image } from "react-native";

const HomeImageViewer = ({ homeImageSource }) => {
  return <Image source={homeImageSource} style={styles.image} />;
};

export default HomeImageViewer;

const styles = StyleSheet.create({
  image: { width: 320, height: 320, borderRadius: 18 },
});
