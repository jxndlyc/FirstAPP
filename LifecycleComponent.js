/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class LifecycleComponent extends Component<Props> {

    constructor(props) {
        super(props);
        console.log('-------constructor-------')
        this.state={
            count:0,
        }
    }

    componentWillMount() {
        console.log('-------componentWillMount-------')
    }

    componetDidMount(){
        console.log('-------componetDidMount-------')
    }

    componentWillReceiveProps(nextProps){
        console.log('-------componentWillReceiveProps-------')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('-------shouldComponentUpdate-------')
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('-------componentWillUpdate-------')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('-------componentDidUpdate-------')
    }

    componentWillUnmount(){
        console.log('-------componentWillUnmount-------')
    }

    render() {
        console.log('-------render-------')
        return (
            <View style={styles.container}>
                <Text style={styles.component}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>有本事你来打我啊！</Text>
                <Text style={styles.component2}>被打了{this.state.count}次</Text>

            </View>
        );
    }
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
