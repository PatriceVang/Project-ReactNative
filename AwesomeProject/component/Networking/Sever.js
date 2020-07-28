

import React, {Component} from 'react'
import {View} from 'react-native'

const url = 'https://jsonplaceholder.typicode.com/users'


async function getUser() {
    try {
        let response = await fetch(url);
        // doi response tra ve sagn json, object
        let json = await response.json();
        return json
    } catch (error) {
        console.error({error});
    }
}

export {getUser}