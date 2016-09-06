/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import NavigationBar from './NavigationBar/NavigationBar';

class RN_NavigationBar extends Component {

  _leftItemAction() {
    console.log('左侧按钮点击了');
  }

  _rightItemAction() {
    console.log('右侧按钮点击了');
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar 
              title='这个是标题' 
              leftItemTitle="返回"
              rightItemTitle='按钮' 
              rightTextColor='#3393F2' 
              leftItemFunc={this._leftItemAction.bind(this)} 
              leftItemFunc={this._rightItemAction.bind(this)}/>
          <ScrollView style={styles.container}
                      automaticallyAdjustContentInsets={false}
                      keyboardShouldPersistTaps={true}
                      keyboardDismissMode='on-drag'
          >
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('RN_NavigationBar', () => RN_NavigationBar);
