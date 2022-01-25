import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, 
    Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'

import colors from '../res/values/colors'
import Card from '../component/Card'
import Input from '../component/Input'
import NumberContainer from '../component/NumberContainer'
import fonts from '../res/values/fonts'
import MainButton from '../component/MainButton'

const HomeScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [setlectedNumber, setSelectedNumber] = useState()
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

    
    
    const numberInputHandler = inputText => {
        //replace all the number that are not integer with an empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4)
        }
    
        //Listen when orientation has changed and do something
        Dimensions.addEventListener('change', updateLayout)
        return (
            //remove the old listener and set new listener
            Dimensions.removeEventListener('change', updateLayout)
        )
    })

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if( isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber>99 ) {
            Alert.alert('Invalid Number', 'Number has to be a number between 1-99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(choosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{setlectedNumber}</NumberContainer>
            <MainButton onPress={() => props.onStartGame(setlectedNumber)}>
                START GAME    
            </MainButton>
        </Card>
    }

    return(
        //behavior: position, padding, height
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
            <ScrollView>
                {/* //Keyboard.dismiss() is to close the keyboard whenever user clicks on other part of the screen */}
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a new game</Text>
                        <Card style={styles.inputContainer}>
                            <Text style={{fontFamily: fonts.Montserrat, color: colors.black}}>Select a number</Text>
                            {/* keyboardType: numeric, number-pad, default, decimal-pad, email-address, phone-pad, default */}
                            <Input style={styles.input} keyboardType='number-pad' maxLength={2} 
                                onChangeText={numberInputHandler} value={enteredValue}/>
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}> 
                                    <Button title='Reset' color={colors.violet} onPress={resetInputHandler}/>
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title='Confirm' color={colors.headerBackground} onPress={confirmInputHandler}/>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>  
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        flex: 1,
        padding: 10,
        alignItems: 'center', 
        marginBottom: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    /*
    Shadow property works only on IOS, so in order to make the effect works on android we need to use 
    'elevation'
     */
    inputContainer: {
        // For responsive screens we are using relative size (%) instead of pixel value
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: fonts.Montserrat,
        color: colors.headerBackground        
    },
    // button: {
    //     // width: 80
    //     /** Dimension
    //      Dimension gets the screen size and then we can allocate size based on the dimension of the screen
    //         1.'screen': calculates the size irrespective of status bar
    //         2. 'window': calculates the size excluding the status bar
    //      Dimensions.get('screen').width / 4 //similar to 40%
    //      */
    //     width: buttonWidth
    // },
    input: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    }, 
    summaryContainer: {
        alignItems: 'center',
        marginTop: 20,
        width: '50%'
    }
})

export default HomeScreen