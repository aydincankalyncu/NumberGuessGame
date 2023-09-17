import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import Colors from "../../constants/colors";

type PrimaryButtonProps = {
  children: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
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
        onPress={prop.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{prop.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
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
