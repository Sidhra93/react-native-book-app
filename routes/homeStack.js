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
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333' }
    }
})

export default HomeStack