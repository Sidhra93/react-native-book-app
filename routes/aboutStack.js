import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About'

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About BookZone',
            // headerStyle: { backgroundColor: '#eee' }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#333' }
    }
})

export default AboutStack