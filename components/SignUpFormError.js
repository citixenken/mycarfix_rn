import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Overlay, Button, Icon } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const COLORS = {
  primary: "#116c6e",
  white: "#ffffff",
  secondary: "orange",
  text: "#4f4f4f",
  textInputBg: "#ebebeb",
};

const SignUpFormError = ({ hideErrorOverlay, errorMessage }) => {
  // overlay params
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Overlay
      isVisible={true}
      onBackdropPress={() => hideErrorOverlay(false)}
      overlayStyle={styles.overlayText}
    >
      <AntDesign name="close" size={48} style={styles.icon} />
      <Text style={styles.textPrimary}>{errorMessage}</Text>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: COLORS.secondary }]}
        onPress={() => hideErrorOverlay(false)}
      >
        <Text style={[styles.btnLabel, { fontWeight: "bold", fontSize: 18 }]}>
          OK
        </Text>
      </TouchableOpacity>
      <></>
    </Overlay>
  );
};

export default SignUpFormError;

const styles = StyleSheet.create({
  overlayText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    height: 320,
    borderRadius: 8,
  },
  textPrimary: {
    paddingVertical: 10,
    textAlign: "center",
  },
  icon: {
    color: "#f50057",
    paddingVertical: 10,
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
