import React, { Component } from 'react';
import {Text, View} from 'react-native';


class Blink extends Component {
    constructor(progs) {
        super(progs);
        // state is private proberty can use in Blink and abibility change value
        this.state = {
            showText: true
        };

        var taskToDo = () => {
            // moi lan setState dc goi thi se thuc hien ham render
            this.setState(preState => {
                return {
                    showText: !preState.showText
                }
            })
        };

        const timeToBlink = 1000 //milisecond
        setInterval(taskToDo, timeToBlink)
    }
    // when state changed render() been updated
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : "Not David"
        return (
            <Text>{ textToDisplay }</Text>            
        );
    }
}

export default class TextBlink extends Component {
    render() {
        return(
            <View>
                <Blink inputText = "David"></Blink>
                {/* <Blink inputText = "David james"></Blink> */}
            </View>
        );
    }
}
