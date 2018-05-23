import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = new createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null
            }
        },
        Options: {
            screen: Options,
            navigationOptions: {
                headerTitle: 'Options'
            }
        },
        Themes: {
            screen: Themes,
            navigationOptions: {
                headerTitle: 'Themes'
            }
        }
    },
    {
        headerMode: 'screen'
    }
);

export default createStackNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                header: () => null
            }
        },
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions: ({ navigation }) => {
                return { headerTitle: navigation.state.params.title };
            }
        }
    },
    {
        mode: 'modal'
    }
);
