//React
import React from "react";
import { StyleSheet, View } from "react-native";

//StatusBar
import { StatusBar } from "expo-status-bar";

//Component
import CarItem from "./src/components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
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
