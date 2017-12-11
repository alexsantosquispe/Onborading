import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends Component {
    render() {
        return (
            <View style={[styles.button, {backgroundColor: this.state.backgroundColor}]}>
                <View style={styles.container}>
                    <Icon name={this.props.icon} style={styles.icon}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </View>
        );
    }
}