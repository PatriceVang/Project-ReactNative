import React, {Component} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'



export default class DemoImgComponent extends Component {

    

    render() {

       
        
        return (
            <View>
                 <Image 
                 source = {this.imgSource}
                 style = { {justifyContent: "center", alignItems: "center", height: 100, width: 100} }></Image>
                 <NewName 
                 name = "This is new IMAGE"
                 style = { {justifyContent: "center", alignItems: "center", margin: 10} }> this is IMg</NewName>
            </View>
        )
    };
};


const Cat = (props) => {
    return(
    <Text> this is {props.tao}</Text>
    );
}

function NewName(props) {
    return(
    <Text> {props.name}</Text>
    );
}



