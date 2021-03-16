//React
import React from "react";
import { View, Text, ImageBackground } from "react-native";

//Component
import StyledButton from "../StyledButton";

//Style
import { styles } from "./styles";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,428</Text>
      </View>

      <StyledButton
        type="primary"
        content={"custom order"}
        onPress={() => console.warn("custom order was pressed")}
      />
      <StyledButton
        type="secondary"
        content={"existing inventory"}
        onPress={() => console.warn("existing inventory was pressed")}
      />
    </View>
  );
}
