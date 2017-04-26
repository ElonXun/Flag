'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';

import { ThemeProvider } from 'react-native-material-ui';
import TabBarNavigator from './commons/component/TabBarNavigator';
import BottomNavigator from './commons/component/BottomNavigator';


export default class App extends Component {
  render() {
    return (
        <ThemeProvider>
           <View style={{flex:1}}>
              <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
              <BottomNavigator />
           </View>
        </ThemeProvider>
    );
  }
}


    