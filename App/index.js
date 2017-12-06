import React, {Component} from 'react';
import {
    AppRegistry,
    StatusBar
} from 'react-native';
import Screens from './components/Screens';
import Login from './screens/Login';

export default class App extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <Screens/>
        );
    }
}

AppRegistry.registerComponent('App', () => App);
