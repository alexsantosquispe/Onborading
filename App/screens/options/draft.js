import React, { Component } from 'react';
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as palette from '../Styles';

export default class Draft extends Component<{}> {
    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor(palette.colors.darkColor);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Draft Screen
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
