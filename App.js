/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LifecycleComponent from './LifecycleComponent';
import EIComponent, {name, age, sum} from './EIComponent';
import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';
import Student from './Student';
import MingStudent from "./MingStudent";


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            remove: false,
            result: '',
            size: 0
        }
        this.stu = new Student('小红', '女', '18');
        this.mingStu = new MingStudent();

    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={{fontSize: 20, backgroundColor: 'red', padding: 10,}}
                >{this.stu.getDescription()}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red', padding: 10,}}
                >{this.mingStu.getDescription()}</Text>

                {/*<RefTest
                    ref="reftest"
                    //ref={reftest=>this.reftest=reftest}
                />

                <Text   style={{fontSize: 20}}
                        onPress={()=>{
                            //var size=this.refs.reftest.getSize();
                            //var size=this.reftest.getSize();
                            var size=this.refs['reftest'].getSize();
                            //this.refs[reftest]
                            this.setState({
                                size:size,
                            })
                        }}
                >获取图片大小:{this.state.size}</Text>

                <StateTest/>

                <LifecycleComponent/>

                <PropsTest
                    name="小明"
                    age={20}
                />
                <Text style={{fontSize: 20}}>名字：{name}</Text>
                <Text style={{fontSize: 20}}>年龄：{age}</Text>
                <Text style={{fontSize: 20, marginBottom: 100, backgroundColor: 'red'}}
                      onPress={() => {
                          var result = sum(2, 3);
                          this.setState({
                              result: result,
                          })
                      }}>2+3={this.state.result}</Text>*/}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'flex-end',
        //backgroundColor: '#F5FCFF',
        marginTop: 50,
        padding: 10,
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
});
