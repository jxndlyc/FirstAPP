/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class PropsTest extends Component<Props> {
    static defaultProps={
        name:'小红',
        age:18,
    }

    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string,
    }

    render() {

        return(
            <View>
            <Text style={{fontSize:20, brackgroundColor:'red'}}>姓名.{this.props.name}</Text>
            <Text style={{fontSize:20, brackgroundColor:'red'}}>年龄.{this.props.age}</Text>
            </View>
        )

    }
}


