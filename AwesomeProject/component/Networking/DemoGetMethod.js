import React, { Component } from 'react'
import {View} from 'react-native'
import {getUser} from './Sever'
import { FlatList } from 'react-native-gesture-handler'




export default class ListUser extends Component {
    constructor(props) {
        //tao state ban dau
        super(props);
        this.state = ({
            user: []
        })
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        // this.refreshDateFromSv()
        fetch(url).then((response) => {
            response.json()
        }).then((jsonObject) => {
            this.setState({user: jsonObject})
        })
    }

    // refreshDateFromSv() {
    //     getUser().then( (newUser) => {
    //         //gan state cho du lieu moi
    //         this.setState({user: newUser})
    //         console.log(newUser);
    //     })
    //     .catch((err) => {
    //         this.setState({user: []})
    //     })
    // }


    render() {
        return (
            <View style = {{marginTop: 50}}>
                <FlatList
                    ref = {'flatlist'}
                    data = {this.state.name}
                    renderItem = {(item, index) => {
                        return (
                        <Text>{item}</Text>
                        );
                    }}
                    keyExtractor={(items, index) => items.name}
                ></FlatList> 
            </View>
        );
    }
}