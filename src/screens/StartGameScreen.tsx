import { StyleSheet, Alert, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

type StartGameScreenProps = {
  onConfirmNumber: (enteredNumber: number) => void;
};

const StartGameScreen = (props: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    //Validate input number then proceed the actual game screen
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //Show alert
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "cancel", onPress: resetInputHandler }]
      );
      return;
    }
    props.onConfirmNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    //Validate input number then proceed the actual game screen
    setEnteredNumber("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
 
  inputContainer: {
    marginHorizontal: 24, // Sagdan soldan aralık vermek icin.
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4 /**Android spesifik shadow icin kullanılıyor. */,
    justifyContent: "center",
    alignItems: "center",
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accemt500,
    borderBottomWidth: 2,
    color: Colors.accemt500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "none",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
