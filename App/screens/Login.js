import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Image,
    TextInput,
    Button,
    View
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/logo_blue_white.png')} />
                </View>
                <TextInput
                    style={styles.textBox}
                    placeholder="User"
                />
                <TextInput
                    style={styles.textBox}
                    placeholder="Password"
                />
                <Button
                    color='#00B77A'
                    onPress={() => {
                        Alert.alert('You tapped this button!')
                    }}
                    title="Login"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 30,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0080EE'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 60,
        width: 250,
        height: 60
    },
    textBox: {
        color: '#fff',
        height: 50
    },
    accept:{
        marginTop: 50,
        backgroundColor: '#00B77A'
    }
});