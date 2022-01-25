import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import colors from '../res/values/colors'
import fonts from '../res/values/fonts'

const Header = props => {
    return (
        // Platform.Version > 21 -- to check the version
        // Based on platform it will select the styles required
        <View style={{...styles.headerBase, ...Platform.select({
            ios: styles.headerAndroid, 
            android: styles.headerIos
        })}}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    /*
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        //to set colors based on which platform it is running
        backgroundColor: Platform.OS === 'android' ? colors.backgroundColor : colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    */
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        //to set colors based on which platform it is running
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor
    },
    // Instead of writing the Platform condition again and again we can 2header for both IOS and android
    headerIos: {
        backgroundColor: colors.backgroundColor,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: colors.backgroundColor,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    headerTitle: {
        color: colors.black,
        fontSize: 25,
        alignItems: 'center',
        fontFamily: fonts.OpenSansBold
    }
})

export default Header