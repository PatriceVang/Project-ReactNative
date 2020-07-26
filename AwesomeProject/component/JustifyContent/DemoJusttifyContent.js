import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";



export default class DemoJutifyContent extends Component {
    render() {
        return (
           
            <View style = { styles.container }>
                <Text style = { {width: 30, height: 50, backgroundColor: 'red'} }> Hello</Text>
                <Text style = { {width: 30, height: 50, backgroundColor: 'blue'} }> My</Text>
                <Text style = { {width: 30, height: 50, backgroundColor: 'cyan'} }> Name</Text>
            </View>
        );
    }
}  

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
         // column: start o tren ben trai, end la o duoi ben trai
         // space-between: 
         // space-arround;
        justifyContent: 'space-between',
        backgroundColor: 'yellow'
    }
})

