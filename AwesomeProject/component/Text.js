
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWord extends Component {
    render(){
        let textName = "Myname is david";
        return (
            <Text>
                {textName}
            </Text>
        )

    }
}