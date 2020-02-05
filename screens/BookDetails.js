import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

export default function BookDetails({ navigation }) {
    return(
        <View style={ globalStyles.container }>
            <Card>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                <Text>{ navigation.getParam('rating') }</Text>
            </Card>
        </View>
    )
}