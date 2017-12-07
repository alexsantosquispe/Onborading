import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Image,
    TextInput,
    Text,
    Button,
    View
} from 'react-native';
import * as palette from '../Styles';
import SButton from '../components/SocialButton';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={[styles.mainContainer, {backgroundColor: palette.colors.mainColor}]}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/logo_blue_white.png')}/>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.fieldContainer}>
                        <TextInput
                            style={styles.textBox}
                            placeholder="User"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.fieldContainer}>
                        <TextInput
                            style={styles.textBox}
                            placeholder="Password"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <Button
                        color='#00B77A'
                        onPress={() => {
                            Alert.alert('You tapped this button!')
                        }}
                        title="Login"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <SButton
                        text="Sign in with Google"
                        icon="google"
                        color="#d83a31"
                        onPress={() => {
                            Alert.alert('You tapped this button!')
                        }}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.text}>Register</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 60,
        flex: 1,
        justifyContent: 'center',
    },
    subContainer: {
        marginBottom: 6,
        marginTop: 6,
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
    fieldContainer: {
        alignContent: 'center',
        marginBottom: 3,
    },
    textBox: {
        backgroundColor: '#fff',
        height: 40
    },
    text: {
        marginBottom: 1,
        textAlign: 'center',
        fontSize: 14,
        color: '#B9B9B9'
    },
    accept: {
        backgroundColor: '#00B77A'
    }
});