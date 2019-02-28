/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';

import LifecycleComponent from './LifecycleComponent';
import EIComponent, {name, age, sum} from './EIComponent';
import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';
import Student from './Student';
import MingStudent from "./MingStudent";
import IntentMoudle from './IntentMoudle'


type Props = {};
let widthOfMargin = Dimensions.get('window').width * 0.05;
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            remove: false,
            result: '',
            size: 0,
            inputedNum: '',
            inputedPW: ''
        }
        this.stu = new Student('小红', '女', '18');
        this.mingStu = new MingStudent();
        this.updatePW = this.updatePW.bind(this);
    }

    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText,
            }
        });
    }

    updatePW(newText) {
        this.setState(() => {
            return {
                inputedPW: newText,
            }
        });
    }

    _newNativeActivity() {
        IntentMoudle.startActivityFromJS("com.firstapp.MyNativePage", "hello form RN ");
        //IntentMoudle.test("com.firstapp.MyNativePage");
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={{fontSize: 20, backgroundColor: 'red', padding: 10,}}
                >{this.stu.getDescription()}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red', padding: 10,}}
                >{this.mingStu.getDescription()}</Text>

                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>您输入的手机号：{this.state.inputedNum}</Text>
                <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true}
                           onChangeText={this.updatePW}/>
                <Text style={styles.bigTextPrompt}>确 定</Text>

                <TouchableOpacity onPress={this._newNativeActivity}>
                    <Text style={styles.hello}>New Native Activity</Text>
                </TouchableOpacity>

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
    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20,
    },

    textPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20,
    },

    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    },

    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
AppRegistry.registerComponent('FirstApp', () => App);
