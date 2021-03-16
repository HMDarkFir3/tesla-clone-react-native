//React
import React from "react";
import { StyleSheet, View } from "react-native";

//Component
import Header from "./src/components/Header";
import CarList from "./src/components/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
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
