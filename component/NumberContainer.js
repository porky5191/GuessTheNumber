import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import colors from '../res/values/colors'

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.headerBackground,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    number: {
        color: colors.headerBackground,
        fontSize: 22,

    }
})

export default NumberContainer
