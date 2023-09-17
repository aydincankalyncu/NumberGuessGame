import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24, // Sagdan soldan aralık vermek icin.
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4 /**Android spesifik shadow icin kullanılıyor. */,
    justifyContent: "center",
    alignItems: "center",
  },
});
