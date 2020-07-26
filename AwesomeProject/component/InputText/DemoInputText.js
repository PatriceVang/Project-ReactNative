import React, { Component, useState } from 'react'
import {View, Text, TextInput} from 'react-native'

export default function Football(props) {
    
    const [text, setText] = useState('')
    return (
        <View style = { {padding: 10, margin: 50, borderColor: 'blue', borderWidth: 1} }>
            <TextInput
                style = { {height: 40} }
                placeholder = "input text in here"
                onChangeText = {text => setText(text)}
                defaultValue = {text}
            ></TextInput>
            <Text style = { {padding: 10, fontSize: 42} }>
                {text.split(" ").map((word) => {
                    word && 'piza'
                }).join(' ')}
            </Text>
            <Text>{text} Hello</Text>
        </View>
    );
}