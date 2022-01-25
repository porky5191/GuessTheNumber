import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from 'react-native'

import fonts from '../res/values/fonts'
import colors from '../res/values/colors'
import MainButton from '../component/MainButton'

const GameOver = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.textHeader}>Game Over</Text>
                
                <View style={styles.imageContainer}>
                    {/* Load from Offline */}
                    {/* <Image source={require('../res/drawable/success.png')} style={styles.image} resizeMode='cover'/> */}
                    {/* Load from online */}
                    {/* contain, cover */}
                    <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}} 
                        style={styles.image} resizeMode='cover' fadeDuration={1000}/>
                </View> 

                <Text>
                    Your Phone needed  
                    <Text style={styles.highlight}> {props.roundsNo} </Text>
                    of rounds to guess  
                    <Text style={styles.highlight}> {props.userNumber} </Text>
                </Text>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    textHeader: {
        padding: 10,
        alignSelf: 'center',
        fontSize:20,
        fontFamily: fonts.MontserratBold,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        height: Dimensions.get('window').width * 0.7,
        width: Dimensions.get('window').width * 0.7, //0.7 takes 70% of the width
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: colors.lightGrey,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    // Overflow prevents the childs from going out of the container
    //TO make the container round keep the height, width same and put borderRadius=1/2 of (height | width)
    highlight: {
        color: colors.headerBackground,
        fontFamily: fonts.MontserratBlack
    },
})

export default GameOver
