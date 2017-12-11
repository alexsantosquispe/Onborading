import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import * as palette from '../Styles';
import {NavigationActions} from 'react-navigation';

export default class SideMenu extends Component {
    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor(palette.colors.darkColor);
    }

    navigateToScreen = (screen) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: screen
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    
                </View>
                <ScrollView>
                    <View style={[styles.itemContainer, {backgroundColor: 'yellow'}]}>
                        <Text style={styles.item} onPress={this.navigateToScreen('Inbox')}>Inbox</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.item} onPress={this.navigateToScreen('Draft')}>Draft</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.item} onPress={this.navigateToScreen('Unassigned')}>Unassigned</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 4,
    },
    header: {
        height: 120,
        backgroundColor: '#eee'
    },
    itemContainer: {
        paddingLeft: 14,
        paddingBottom: 10,
        paddingTop: 10
    },
    item: {
        color: '#000',
        fontWeight: 'bold',
    },
});

SideMenu.propTypes = {
    navigation: PropTypes.object
};

