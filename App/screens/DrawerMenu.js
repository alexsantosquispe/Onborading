import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Router from '../Router';

export default class DrawerMenu extends Component {
    render() {
        return (
            <Router/>
        );
    }
}

AppRegistry.registerComponent('DrawerMenu', () => DrawerMenu);