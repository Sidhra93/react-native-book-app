import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import BookDetails from '../screens/BookDetails'
import Header from '../shared/Header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title="BookZone" />
            }
        }
    },
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            title: 'Book Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333', height: 80 }
    }
})

export default HomeStack