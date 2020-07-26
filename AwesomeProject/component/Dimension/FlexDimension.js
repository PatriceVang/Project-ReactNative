import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class DemoFLexDimension extends Component {
    render() {
        return(
            // 1: tinh theo phan tram
            <View style = { {flex: 1, backgroundColor: 'cycan'} }>
                <View style = { {flex: 50, backgroundColor: 'red'} }></View>
                <View style = { {flex: 50, backgroundColor: 'blue'} }></View>
            </View>
        );
    }
}