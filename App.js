//React
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//StatusBar
import { StatusBar } from "expo-status-bar";

//Component
import CarItem from "./src/components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless Delivery"}
        image={require("./src/assets/images/ModelX.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
