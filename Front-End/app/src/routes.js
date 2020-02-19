import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './pages/Main'
import Profile from './pages/Profie'


const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Git Hub'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#7D40E7'
                
            }
        }
    })
)

export default Routes