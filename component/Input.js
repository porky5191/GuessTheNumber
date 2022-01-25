import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import colors from '../res/values/colors'

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default Input
