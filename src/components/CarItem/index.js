//React
import React from "react";
import { View, Text, ImageBackground } from "react-native";

//Component
import StyledButton from "../StyledButton";

//Style
import { styles } from "./styles";

export default function CarItem(props) {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
}
