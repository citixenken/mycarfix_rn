import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "teal", white: "#FFFFFF" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "Why Use mCarFix App...",
    subtitle: "",
  },
  {
    id: "2",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "To Find Genuine Car Parts",
    subtitle:
      "Your vehicle is made up of various parts that make it move you from one place to another. Understanding how these parts work and what you need to do if they fail ensures you are in charge of your vehicle and no the other way round.",
  },
  {
    id: "3",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "To Troubleshoot a Problem/Symptom",
    subtitle:
      "Use mCarFix to diagnose or troubleshoot any problem you experience while using your car thereby ensuring you will never be stranded.",
  },

  {
    id: "4",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "To Record your Car service History",
    subtitle:
      "mCarFix records and tracks your vehicle's service history and ensures it's always up to date. Just key in your current mileage and mCarFix reports what you need to service before you embark on your journey.",
  },
  {
    id: "5",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "Part Dealer, Mechanic or Service Center",
    subtitle:
      "mCarFix links you up with the nearest part dealer, mechanic, or service center knowledgeable with the make and model of your vehicle thus ensuring relevant experts are always available when you need them.",
  },
  {
    id: "6",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "Report Accident or Car Theft",
    subtitle:
      "In case of an accident or car theft, mCarFix captures the details of the accident and shares them with the nearest police station, your innsurance provider as well as your preffered emergency contact. It also links you up with a professional towing company near you.",
  },
  {
    id: "7",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "To Buy or Renew your Vehicle Insurance",
    subtitle:
      "mCarFix tracks your vehicle insurance status and links you up with your insurance provider, thereby ensuring you will never be caught unaware during a trip.",
  },
  {
    id: "8",
    image: require("../assets/images/mcarfix-logo.jpg"),
    title: "Subscribe to mCarFix now and enjoy these and many more benefits.",
    subtitle: "",
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textSubTitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: COLORS.white },
  listContainer: {
    height: height * 0.95,
  },
  image: {
    height: "60%",
    width,
    resizeMode: "contain",
  },
  textTitle: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: width,
    padding: 10,
    textAlign: "center",
  },
  textSubTitle: {
    color: COLORS.primary,
    fontSize: 14,
    maxWidth: width,
    padding: 10,

    textAlign: "center",
  },
});
