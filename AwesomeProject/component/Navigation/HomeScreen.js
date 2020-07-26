import React from 'react'
import { Button, Text, View, StyleSheet} from 'react-native'




export default function Home({navigation}) {

    const onPressHandle = () => {
        // navigation.navigate('ReviewPage')
        navigation.push('ReviewPage')
        
    }

    return (
        <View style = {globalStyle.container}>
            <Text style = {globalStyle.text}> Home Screen</Text>
            <Button
                title = 'Go to review'
                onPress = {onPressHandle}
            > </Button>
        </View>
    );
}

const globalStyle = StyleSheet.create({
    container: {
        marginTop: 50
    },
    text: {
        margin: 5,
        fontSize: 20,
    }
})