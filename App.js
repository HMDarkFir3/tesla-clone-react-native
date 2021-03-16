//React
import React from "react";
import { StyleSheet, View } from "react-native";

//Status Bar
import { StatusBar } from "expo-status-bar";

//Component
import Header from "./src/components/Header";
import CarList from "./src/components/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
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
