import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <View style={ styles.header }>
            <MaterialIcons name='menu' size={ 28 } onPress={ openMenu } color='#fff' style={ styles.icon } />
            <View>
                <Text style={ styles.headerText }>{ title }</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
        paddingLeft: 10
    },
    icon: {
        // position: 'absolute',
        // left: 0,
        // color: '#fff'
    }
})