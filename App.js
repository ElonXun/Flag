'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';

import { ThemeProvider } from 'react-native-material-ui';
//import TabBarNavigator from './commons/component/TabBarNavigator';
import Flag from './commons/component/Flag';
//import Test from './commons/component/Test';


export default class App extends Component {
  render() {
    return (
     <ThemeProvider>
      <View style={{flex:1}}>
         <Flag />
      </View>
     </ThemeProvider>
    );
  }
}
