import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font' // TO able to use font
import AppLoading from 'expo-app-loading' //This will hold the app untill some urgent tasks are completed like loading fonts

import Header from './component/Header';
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';


//Loading all the fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./res/font/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./res/font/OpenSans-Bold.ttf'),
    'montserrat-regular': require('./res/font/montserrat-regular.ttf'),
    'montserrat-thin': require('./res/font/montserrat-thin.ttf'),
    'montserrat-bold': require('./res/font/Montserrat-Bold.ttf'),
    'montserrat-black': require('./res/font/montserrat-black.ttf'),
    'montserrat-thin-italic': require('./res/font/montserrat-thin-italic.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  
  if(!dataLoaded){
    //This will allow us to perform loading fonts before the app is launched
    return(
      <AppLoading startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={err => console.log(err)}
      />
    ) 
  }
  

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  //let content = <GameOver roundsNo={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  
  
  let content = <HomeScreen onStartGame={startGameHandler}/>
  if(userNumber && guessRounds ===0) {
    content = <GameScreen userChoice={userNumber} onGameOver = {gameOverHandler}/>
  }else if(guessRounds > 0) 
    content = <GameOver roundsNo={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  
  return (
    <SafeAreaView style={styles.screen}>
      {/* safeAreadView looks at the free spaces (ie aprt from notches, camera hole, home button etc)
        and place our component in free spaces so that our components are not shadowed by system 
        components. Also wrape all contents using safeAreaView */}
      <Header title='Guess a number'/>
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
