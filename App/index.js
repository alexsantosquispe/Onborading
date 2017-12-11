import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as palette from './Styles';
import WalkThrough from './screens/WalkThrough';
import Login from './screens/Login';
import Settings from './screens/Settings';
import DrawerMenu from './screens/DrawerMenu';

const SimpleApp = StackNavigator({
    Intro: {
        screen: WalkThrough,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            header: null
        }
    },
    DrawerMenu: {
        screen: DrawerMenu,
        navigationOptions: {
            title: "Home",
            headerTintColor: palette.colors.white,
            headerStyle: {
                backgroundColor: palette.colors.mainColor
            }
        }
    },
});
export default class App extends Component<{}> {
    render() {
        return (
            <SimpleApp/>
        );
    }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
