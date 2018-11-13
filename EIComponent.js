/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
var name = '小明';
var age = '20';

export {name, age};



export default class EIComponent extends Component<Props> {
    render() {
        console.log('-------render-------')
        return (
            <View style={styles.container}>
                <Text style={styles.component}>有本事你来打我啊！</Text>

            </View>
        );
    }
}
export function sum(a, b){
    return a+b;
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    component:{
        fontSize: 20,
        backgroundColor: 'red',
    },

    component2:{
        fontSize: 20,
        backgroundColor: 'blue',
    },
});
