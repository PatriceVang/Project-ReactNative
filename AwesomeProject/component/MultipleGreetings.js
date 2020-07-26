import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Greeting extends Component {
    render() {

        // let newName = `
        //     Hello ${ this.props.name }, how are you
        // `,
        return (
            <Text>
                Hello {this.props.name}, how are you
            </Text>
        );
    }
}

export default class MultipleGreeting extends Component {
    render() {
        return(
            <View style={ styles.layoutCenter }>
                <Greeting name = "David"></Greeting>
                <Greeting name = "David1"></Greeting>
            </View>
        );
    }
}

const styles = {
    layoutCenter: {
        alimenItems: 'center',
        backgroundColor: 'red'
    }
}
 

