import React, { Component } from 'react'
import {View, Text, StyleSheet, Slider} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { onChange } from 'react-native-reanimated';






class ColorControl extends Component {
    constructor(props) {
        super(props);
        this.state = props
    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>{this.props.nameColor}</Text>
                <Slider
                    value = {this.props.value}
                        onValueChange = { (newValue) =>{
                            this.props.onValueChanged(newValue)
                        }
                    }
                    minimumValue = {0}
                    maximumValue = {250}
                    step = {1}
                    style = {styles.slider}></Slider>
                <View style = {{width: 100, borderColor: 'red', borderWidth: 1}}>
                <TextInput style = {styles.text}> {this.props.value}</TextInput>
                </View>
            </View>
        );
    }
}

export default class DemoSlider extends Component {


    constructor(props) {
        super(props);
        this.state = {
            redColor: 100,
            greenColor: 100,
            blueColor: 100
        }
        
    }

    onChangevalueColor(color) {
        this.setState(color)
        
    }
   

    render() {
        return (
            <View style = {{flex: 1, flexDirection: 'column'}}>
                <ColorControl
                    
                    onValueChanged = { (val) => {
                        const currentColor = this.state
                        const newColor = { ...currentColor, redColor: val}
                        this.onChangevalueColor(newColor)
                    }}
                    value = {this.state.redColor}
                    nameColor = 'R'></ColorControl>
                <ColorControl
                    
                    onValueChanged = { (val) => { 
                        const currentColor = this.state
                        const newColor = { ...currentColor, greenColor: val}
                        this.onChangevalueColor(newColor)
                    }}
                    value = {this.state.greenColor}
                    nameColor = 'G'></ColorControl>
                <ColorControl   
                    
                    onValueChanged = { (val) => {
                        const currentColor = this.state
                        const newColor = { ...currentColor, blueColor: val}
                        this.onChangevalueColor(newColor)
                    }}
                    value = {this.state.blueColor}
                    nameColor = 'B'></ColorControl>
                <View style = {{ width: 300, height: 200, margin: 50, backgroundColor: `rgb(${this.state.redColor}, ${this.state.greenColor}, ${this.state.blueColor})`, justifyContent: "center"   }}></View>
            </View>
        
        );
    }
}




const styles = StyleSheet.create( {
    header: {

    },
    container: {
        flex: 1,
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center"
    },
    slider: {
        width: 200,
        marginLeft: 20,
        marginRight: 20
    },
    text:  {
        color: 'black',
        fontSize: 30,
        textAlign: "center"
    },

})