import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import Colors from "./src/constants/colors";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<any>();
  const [gameIsOver, setGameIsOver] = useState(true);

  const startGameHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;
  if (userNumber) {
    screen = <GameScreen enteredNumber={parseInt(userNumber)}  onGameOver = {gameOverHandler}/>;
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accemt500]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
        {/* {screen} */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
