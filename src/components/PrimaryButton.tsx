import { ReactNode } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

type PrimaryButtonProps = {
  children: ReactNode;
};

const PrimaryButton = (prop: PrimaryButtonProps) => {
  const pressHandler = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable // Pressable içerisinden object destruction ile butona tıklandığını anlayabiliyoruz. IOS için opacity verilebilir. Android için android_ripple prop'u mevcut.
        style={({ pressed }) =>
          pressed ? styles.pressed : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{prop.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
