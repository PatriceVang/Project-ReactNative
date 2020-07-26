import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default class DemoStyleSheet extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.fristText}>"Hello StyleSheet"</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create( {
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'blue'
    },
    fristText: {
        margin: 5,
        textAlign: 'center',
        color: 'red'
    }
    
});