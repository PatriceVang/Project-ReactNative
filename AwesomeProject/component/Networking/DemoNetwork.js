import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default function DemoNetwork(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState('');


    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movie))
    })
    return (
        <View style = {{flex: 1, padding: 24}}>

        </View>
    );
    
}