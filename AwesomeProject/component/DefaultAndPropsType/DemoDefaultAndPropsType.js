import React, { Component } from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'

class Person extends Component {
    render() {
        return(
        <Text>{this.props.name}</Text>
        );
    }
}

Person.defaultProps = {
    name: "David"
}

Person.propTypes = {
    name: PropTypes.string
}




export default class DemoDefaultAndPropType extends Component {
    render() {
        return(
            <View style = {{justifyContent: "center", alignItems: "center", flex: 1}}>
                <Person name = {2}></Person>
            </View>
        );
    }
}