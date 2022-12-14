import { useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "teal", white: "#FBFBFB", secondary: "orange" };

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
    title: "To Record your Car Service History",
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideRef = useRef();

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoLight: require("../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerIndicators}>
          {slides.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.indicator,
                currentSlideIndex === idx && {
                  backgroundColor: "teal",
                  width: 24,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.footerButtonsContainer}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={styles.startButton}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("Home")}
                // onPress={() => navigation.navigate("HomeScreen")}
              >
                <Text
                  style={[
                    styles.btnLabel,
                    { fontWeight: "bold", fontSize: 16 },
                  ]}
                >
                  START
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.footerButtons}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: COLORS.white,
                    borderWidth: 1,
                    borderColor: "teal",
                  },
                ]}
                onPress={skipSlides}
              >
                <Text style={[styles.btnLabel, { color: "#000000" }]}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                <Text
                  style={[
                    styles.btnLabel,
                    { fontWeight: "bold", fontSize: 16 },
                  ]}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (evt) => {
    const contentOffsetX = evt.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      slideRef?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skipSlides = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    slideRef?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <FlatList
        ref={slideRef}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={slides}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: COLORS.white },
  listContainer: {
    height: height * 0.9,
  },
  image: {
    height: "60%",
    width,
    resizeMode: "contain",
  },
  textTitle: {
    color: COLORS.primary,
    fontSize: 18,
    maxWidth: width,
    padding: 10,
    textAlign: "center",
    fontFamily: "RobotoMedium",
  },
  textSubTitle: {
    color: COLORS.primary,
    fontSize: 14,
    maxWidth: width,
    padding: 10,
    textAlign: "center",
    fontFamily: "RobotoLight",
  },
  footer: {
    height: height * 0.2,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  footerIndicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicator: {
    height: 4.5,
    width: 8,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 8,
  },
  footerButtonsContainer: { marginBottom: 20 },
  footerButtons: { flexDirection: "row" },
  startButton: { flexDirection: "row" },
  btn: {
    flex: 1,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLabel: { color: "#ffffff" },
});
