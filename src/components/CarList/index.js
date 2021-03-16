//React
import React from "react";
import { View, FlatList, Dimensions } from "react-native";

//Component
import CarItem from "../CarItem";

//Style
import { styles } from "./styles";

//Util
import cars from "../../utils/cars";

export default function CarList() {
  console.log(cars);

  return (
    <View style={styles.carListContainer}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        snapToInterval={Dimensions.get("window").height}
        decelerationRate={"fast"}
      />
    </View>
  );
}
