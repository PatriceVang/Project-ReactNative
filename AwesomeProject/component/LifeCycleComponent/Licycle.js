import React, { Component } from 'react'
import { View, Text } from 'react-native'






class LifeCycleComponent extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log('Hello Contructor');
        
    // }

    // componentWillMount() {

    // }

    render() {
        // console.log('Hello Render');
        return (
            <View style = { {margin: 100, backgroundColor: 'yellow'} }>
                <NameActor newHoten = "Sang"></NameActor>
            </View>
        );
    }

    // componentDidMount() {

    // }
}

export default class NameActor extends Component {
    render() {
        return (
        <Text style = { {color: 'black', fontWeight: 'bold', fontSize: 50, margin: 10} }> {this.props.newHoten}</Text>
        );
    }
}