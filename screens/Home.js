import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Review Details')
        // navigation.push('Review Details')
        // .push adds a screen to the stack

    }

    return(
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText }>Home Screen</Text>
            <Button
                title="Go To Review Details"
                onPress={ pressHandler }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
})