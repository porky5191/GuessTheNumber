import React, {useState, useRef, useEffect } from 'react'
import {StyleSheet, View, Text, Button, Alert, ScrollView, FlatList, Dimensions } from 'react-native'
//to use icons inside the layout
import { Ionicons } from '@expo/vector-icons'

import MainButton from '../component/MainButton'
import NumberContainer from '../component/NumberContainer'
import Card from '../component/Card'
import icons from '../res/values/icons'
import colors from '../res/values/colors'

//If our function doesn't require on props then we can create functions outside of functional component to 
//save some resources
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else return rndNum
}

//to render the ScrollView list items
const renderListItem = (value, numOfRound) => (
    <View key={value} style={styles.listItem}>
        <Text>#{numOfRound}</Text>
        <Text>{value}</Text>
    </View>
)

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice, onGameOver } = props

    useEffect(() => {
        if(currentGuess===userChoice){
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])

    /**
     * Handle when lower or upper button is pressed
     */
    const nextGuessHandler = direction => {
        if((direction==='lower' && currentGuess<props.userChoice) || 
            (direction==='greater' && currentGuess > props.userChoice)){
                Alert.alert('Don\'t lie!', 'You know that this is wrong', [{text: 'sorry!', style: 'cancel'}])
                return
            }
        if(direction==='lower') {
            currentHigh.current = currentGuess
        }else {
            currentLow.current = currentGuess + 1
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        // setRounds(currentRounds => currentRounds + 1)
        setPastGuesses(curPastGuess => [nextNumber, ...curPastGuess])
    }

    /**
    if(Dimensions.get('window') > 600){
        return (...)
    }else return (...) 
     */

    return (
        <ScrollView>
            <View style={styles.screen}>
                {/* We can give different styles based on different screen size */}
                {/* <View style={Dimensions.get('window').height > 600 ? styles.screen : styles.screenSmall}></View> */}
                <Text>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name={icons.ioniconsMinus} size={24} color={colors.white}/>
                    </MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name={icons.ioniconsPlus} size={24} color={colors.white}/>
                    </MainButton>
                </Card>
                {/* Best way to style a list is enclose it inside a view */}
                <View style={styles.listContainer}>
                    <ScrollView contentContainerStyle={styles.list}>
                        { pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index)) }
                    </ScrollView>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginBottom: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10, //using dimension and checking before applying
        width: 300,
        maxWidth: '80%',

    },
    listContainer: {
        // If a scoll view is enclosed within a view then make sure to add flex:1 property for scroll view
        // to work in android devices
        flex: 1,
        // width: '80%',
        width: Dimensions.get('window').width > 350 ? '60%' : '80%'
    },
    list: {
        flexGrow: 1, //works as flex but also preserve the internal features of the component like scrollable of scrollview
        alignItems: 'center',
        justifyContent: 'flex-end', //align along main axis
    },
    listItem: {
        width: '60%',
        borderWidth: 1,
        borderColor: colors.lightGrey,
        padding: 15,
        marginVertical: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
})

export default GameScreen
