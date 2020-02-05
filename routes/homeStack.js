import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import BookDetails from '../screens/BookDetails'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BookZone'
        }
    },
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            title: 'Book Details'
        }
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)