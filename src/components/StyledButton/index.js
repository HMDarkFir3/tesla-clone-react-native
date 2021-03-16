//React
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Style
import { styles } from "./styles";

export default function StyledButton(props) {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.textButton, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}
