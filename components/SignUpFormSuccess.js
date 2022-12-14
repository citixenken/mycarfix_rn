import {
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Overlay } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  indicators: "#4c4c4c",
  secondary: "orange",
  text: "#4f4f4f",
};

const SignUpFormSuccess = ({ hideSuccessOverlay, successMessage }) => {
  // overlay params
  const [visible, setVisible] = useState(false);

  return successMessage ? (
    <Overlay
      isVisible={true}
      onBackdropPress={() => hideSuccessOverlay("")}
      overlayStyle={styles.overlayText}
    >
      <AntDesign name="check" size={48} style={styles.icon} />
      <Text style={styles.textPrimary}>{successMessage}</Text>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: COLORS.primary }]}
        onPress={() => hideSuccessOverlay("")}
      >
        <Text style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}>
          OK
        </Text>
      </TouchableOpacity>
    </Overlay>
  ) : (
    <Overlay isVisible={true} overlayStyle={styles.overlayText}>
      <ActivityIndicator size="large" color="#116c6e" />
      <Text style={styles.textPrimary}>Setting You Up...</Text>
    </Overlay>
  );
};

export default SignUpFormSuccess;

const styles = StyleSheet.create({
  overlayText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 320,
    borderRadius: 8,
  },
  icon: {
    color: "#116c6e",
    paddingVertical: 10,
  },
  textPrimary: {
    paddingVertical: 10,
    textAlign: "center",
  },
  btn: {
    height: 50,
    paddingHorizontal: 60,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    elevation: 10,
  },
  btnLabel: { color: COLORS.white, fontSize: 18 },
});
