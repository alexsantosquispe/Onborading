import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import WalkThrough from './screens/WalkThrough';
import Login from './screens/Login';
import Settings from './screens/Settings';
import SideBar from './screens/DrawerLayout';

const SimpleApp = StackNavigator({
    Intro: {screen: WalkThrough},
    Login: {screen: Login},
    Settings: {screen: Settings},
    SideBar: {screen: SideBar}
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
