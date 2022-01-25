/*
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import colors from '../res/values/colors';
import fonts from '../res/values/fonts'

const MainButton = props => {
  /**
   * Defining a custom component based on platform
   */
  let ButtonComponent = TouchableOpacity //Custom cumponent must start with Capital letter
  if(Platform.OS == 'android' && Platform.Version >= 21)
    ButtonComponent = TouchableNativeFeedback

  return(
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>{props.children}</Text>
          </View>
      </ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 25,
      overflow: 'hidden', //hide any part of child that goes out of parent
    },
    button: {
        backgroundColor: colors.headerBackground,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10

    },
    buttonText: {
      color: colors.white,
      fontFamily: fonts.OpenSansRegular,
      fontSize: 14,

    }
})

export default MainButton;
*/
