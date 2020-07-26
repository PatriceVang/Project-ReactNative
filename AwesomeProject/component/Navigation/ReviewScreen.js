import React from 'react'
import { View, Text, Button } from 'react-native'



export default function Review({navigation}) {

    const onBackHomePage = () => {
        navigation.goBack()
    }
    return (
        <View style = {{flex: 1, marginTop: 50}}>
            <Text style = {{margin: 10}}> Review Screens</Text>
            <Button
                title = 'ComeBack Home'
                onPress = {onBackHomePage}
            ></Button>
        </View>
    );
}