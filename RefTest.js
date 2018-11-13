/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class RefTest extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            size: 80,
        }
    }

    /*state={
        size:30,
    }*/

    getSize() {
        return this.state.size;
    }

    render() {

        return (
            <View>
                <Text style={{fontSize: 20,}}>姓名:{this.state.size}</Text>
                <Text style={{fontSize: 20, alignItems: 'flex-start'}}
                      onPress={() => {
                          this.setState({
                              size: this.state.size + 10,
                          })
                      }}>变大</Text>

                <Text style={{fontSize: 20, alignItems: 'flex-end'}}
                      onPress={() => {
                          this.setState({
                              size: this.state.size - 10,
                          })
                      }}>变小</Text>

                <Image style={{width: this.state.size, height: this.state.size}}
                       source={require('./rn_state_test.jpg')}/>
            </View>
        )

    }
}


