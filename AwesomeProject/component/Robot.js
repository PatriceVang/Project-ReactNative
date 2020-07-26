import React, { Component } from "react";
import {Image, StyleSheet} from 'react-native'


//source la thuoc tinh public cua componenet

export default class Robot extends Component {
    render() {
        const imgSource = { 
            uri:"https://p0ct8ommu0.vcdn.com.vn/media/catalog/product/cache/a237138a07ed0dd2cc8a6fa440635ea6/magento/VECTO/RC2108/RC2108_1.jpg"
        };
        return(
            <Image
                style={ styles.frameImg }
                source={ {imgSource} }
            ></Image>
        ); 
    }
}

const styles = StyleSheet.create({
    frameImg: {
        width: 200,
        height: 200
    }
})

