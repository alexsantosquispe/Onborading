import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as palette from './Styles';
import WalkThrough from './screens/WalkThrough';
import Login from './screens/Login';
import Settings from './screens/Settings';
import Home from './screens/Home';

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
    // DrawerNav: {
    //     screen: DrawerNav,
    //     navigationOptions: {
    //         header: null
    //     }
    // }
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerTintColor: palette.colors.white,
            headerStyle: {
                backgroundColor: palette.colors.mainColor
            }
        }
    }
});
export default class App extends Component<{}> {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <SimpleApp/>
        );
    }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
