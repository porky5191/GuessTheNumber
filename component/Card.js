import React from 'react'
import {View, StyleSheet} from 'react-native'
import colors from '../res/values/colors'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {/* Here along with style we are also adding some styles from calling function*/}
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // padding: 10,
        shadowColor: colors.lightGrey,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 9,
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10
    }
})

export default Card
