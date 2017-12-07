import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SocialButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: props.color
        };
    };
    render({onPress} = this.props) {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.button, {backgroundColor: this.state.backgroundColor}]}>
                    <View style={styles.container}>
                        <Icon name={this.props.icon} style={styles.icon}/>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 2,
        flexDirection: 'row',
        height:40
    },
    container: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    icon: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 12,
        paddingRight: 12,
    },
    text: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 12,
        paddingRight: 12,
    },
});