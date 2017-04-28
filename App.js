'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import {Theme} from 'teaset';
import { ThemeProvider } from 'react-native-material-ui';
import TabBarNavigator from './commons/component/TabBarNavigator';
import BottomNavigator from './commons/component/BottomNavigator';
import MainNavigator from './commons/component/MainNavigator';

export default class App extends Component {
  render() {
     Theme.set({
       menuColor: 'rgba(245,245,245, 0.9)',
       menuShadowColor: '#333',
       menuItemColor: 'rgba(0,0,0, 0)',
       menuItemTitleColor: 'black',
       menuItemSeparatorColor: '#F5F5F5',
       menuItemIconColor: '#c1c2cc',
     });
    return (
        <ThemeProvider>
           <View style={{flex:1}}>
              <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
              <MainNavigator />
           </View>
        </ThemeProvider>
    );
  }
}


    