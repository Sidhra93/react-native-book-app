import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import BookDetails from '../screens/BookDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BookZone',
            // headerStyle: { backgroundColor: '#eee' }
        }
    },
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            title: 'Book Details',
            // headerStyle: { backgroundColor: '#eee' }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee' }
    }
})

export default createAppContainer(HomeStack)