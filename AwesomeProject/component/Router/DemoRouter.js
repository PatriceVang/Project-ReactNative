import React, {Component} from 'react'
import { View, Text, Navigator } from 'react-native'




export default class DemoRouter extends Component {

    renderScene(route, navigator) {
        switch (route.name) {
            case 'do': return ( <YellowPage /> );
            case 'xanh': return ( <BluePage />);
        }
    }
    render() {
        return (
            <Navigator
                initialRoute = { {name: 'do'} }
                renderScene = { this.renderScene }
            ></Navigator>
        );
    }
}

class YellowPage extends Component {
    render() {
        return (
            <View style = { {flex: 1, backgroundColor: 'red'} }>
                <Text style = { { fontSize: 50, margin: 100 } }> This is page red</Text>
            </View>
        );
    }
}

class BluePage extends Component {
    render() {
        return (
            <View style = { {flex: 1, backgroundColor: 'cyan'} }>
                <Text style = { { fontSize: 50, margin: 100 } }> This is page xanh</Text>
            </View>
        );
    }
}

