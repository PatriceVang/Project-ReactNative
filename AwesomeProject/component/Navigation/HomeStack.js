import React from 'react'
import Home from './HomeScreen'
import Review from './ReviewScreen'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import 'react-native-gesture-handler';



const screens = {
    //HomePage is title
    HomePage: {
        screen: Home
    },
    ReviewPage: {
        screen: Review
    }
  
}

const HomeStack = createStackNavigator(screens);    

export default createAppContainer(HomeStack);
