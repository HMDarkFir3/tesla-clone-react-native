//Style
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    position: "absolute",
    resizeMode: "cover",

    width: "100%",
    height: "100%",
  },
  titles: {
    alignItems: "center",

    width: "100%",

    marginTop: "30%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,

    width: "100%",
  },
});
