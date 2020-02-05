import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
    const [ reviews, setReviews ] = useState([
        { title: 'It Ends With Us', rating: 5, body: 'written by Colleen Hoover', key: '1' },
        { title: '180 Seconds', rating: 2, body: 'written by Jessica Park', key: '2' },
        { title: 'Without Merit', rating: 3, body: 'written by Colleen Hoover', key: '3' }
    ])

    return(
        <View style={ globalStyles.container }>
            <FlatList
                data={ reviews }
                renderItem={ ({ item }) => (
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('Review Details', item) }
                    >
                        <Text style={ globalStyles.titleText }>{ item.title }</Text>
                    </TouchableOpacity>
                ) }
            />
        </View>
    )
}