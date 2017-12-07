import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as palette from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from '../components/Swiper';

export default class WalkThrough extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Swiper doneEvent={() => navigate('Login')}>
                <View style={[styles.slide, {backgroundColor: palette.colors.mainColor}]}>
                    <Icon name="cubes" style={styles.icon}/>
                    <Text style={styles.header}>Build</Text>
                    <Text style={styles.text}>Business analysts can model workflows utilizing an intuitive drag-and-drop
                        interface.</Text>
                </View>
                <View style={[styles.slide, {backgroundColor: palette.colors.mainColor}]}>
                    <Icon name="clock-o" style={styles.icon}/>
                    <Text style={styles.header}>Run</Text>
                    <Text style={styles.text}>Automated notifications and a web-based interface mean business users can
                        easily interact with your form-driven processes.</Text>
                </View>
                <View style={[styles.slide, {backgroundColor: palette.colors.mainColor}]}>
                    <Icon name="bar-chart" style={styles.icon}/>
                    <Text style={styles.header}>Report</Text>
                    <Text style={styles.text}>Managers receive KPIs and metrics thanks to reports and dashboards through
                        our business intelligence tool.</Text>
                </View>
                <View style={[styles.slide, {backgroundColor: palette.colors.mainColor}]}>
                    <Icon name="line-chart" style={styles.icon}/>
                    <Text style={styles.header}>Optimize</Text>
                    <Text style={styles.text}>Improve workflow performance by discovering and analyzing process
                        inefficiencies and bottlenecks.</Text>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        marginHorizontal: 40,
        textAlign: 'center',
    },
    icon: {
        padding: 10,
        fontSize: 150,
        color: '#FFFFFF'
    }
});