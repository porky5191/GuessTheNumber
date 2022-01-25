/**
 * Incase we have lots of Platform checks, we can create separate file name using filename.androi|ios.js
   By using this our apps automatically detects the OS and run that file only, we don't have to specify 
   when to load which file. 
 * Just make sure that while importing instead of MainButton.android | MainButton.ios import simple 
   MainButton and our platform will detect and run the patform specific layout only
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native'
import colors from '../res/values/colors';
import fonts from '../res/values/fonts'

const MainButton = props => {
  return(
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback activeOpacity={0.6} onPress={props.onPress}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>{props.children}</Text>
          </View>
      </TouchableNativeFeedback>
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
