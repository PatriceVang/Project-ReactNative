import React,  {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DemoCounter extends Component {

    constructor(props) {
        super(props);
        // khoi tao state
        this.state = {
            numberInit: 0
        }
    }


    onPressRedView() {
        console.log("state");
        
        this.setState({
            numberInit: this.state.numberInit + 1
        });
    }
    
    render () {
        return (
            <View>
                <Text style = { {alignItems: 'center', margin: 100, fontWeight: 'bold', fontSize: 100} }> {this.state.numberInit}</Text>
                <TouchableOpacity 
                onPress = {() => {
                    this.onPressRedView()
                }}>
                    <View style = { {backgroundColor: 'red', height: 100, width: 100} }></View>
                </TouchableOpacity>
            </View>
        )
    }
}