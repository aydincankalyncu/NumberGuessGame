import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

type NumberContainerProps = {
  children: React.ReactNode;
};
const NumberContainer = (props: NumberContainerProps) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accemt500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accemt500,
    fontSize: 36,
    fontWeight: 'bold'
  },
});
