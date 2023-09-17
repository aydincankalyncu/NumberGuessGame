import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
type TitleProps = {
  children: React.ReactNode
}

const Title = (props: TitleProps) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
