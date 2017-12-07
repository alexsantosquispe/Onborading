import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as palette from '../Styles';

export default class Inbox extends Component<{}> {
    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor(palette.colors.darkColor);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Inbox Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
