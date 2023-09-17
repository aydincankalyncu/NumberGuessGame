import { StyleSheet, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons} from '@expo/vector-icons'

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

type GameScreenProps = {
  enteredNumber: number;
  onGameOver: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props: GameScreenProps) => {
  const initialGuess = generateRandomBetween(1, 100, props.enteredNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === props.enteredNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.enteredNumber, props.onGameOver]);

  const nextGuessHandler = (direction: string) => {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < props.enteredNumber) ||
      (direction === "greater" && currentGuess > props.enteredNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guesss</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style= {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style= {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* +
      - */}
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 40,
  },
  buttonsContainer:{
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  }
});
