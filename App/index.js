import React, {Component} from 'react';
import {AppRegistry, StatusBar, StyleSheet, Text} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as palette from './Styles';
import WalkThrough from './screens/WalkThrough';
import Login from './screens/Login';
import Settings from './screens/Settings';
import Inbox from "./screens/options/inbox";
import Draft from "./screens/options/draft";
import Unassigned from "./screens/options/unassigned";

const DrawerStack = DrawerNavigator({
    Inbox: {screen: Inbox},
    Draft: {screen: Draft},
    Unassigned: {screen: Unassigned}
});

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
    DrawerMenu: {
        screen: DrawerStack,
        navigationOptions: ({navigation}) => ({
            title: "Home",
            headerLeft: <Icon name="bars" style={styles.icon} onPress={() => {
                navigation.navigate('DrawerOpen')
            } }/>,
            headerTintColor: palette.colors.white,
            headerStyle: {
                backgroundColor: palette.colors.mainColor
            }
        })
    },
}, {
    initialRouteName: 'Intro'
});
export default class App extends Component<{}> {
    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor(palette.colors.darkColor);
    }

    render() {
        return (
            <SimpleApp/>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        color: '#fff',
        fontSize: 22,
        paddingLeft: 16
    }
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
