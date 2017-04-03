'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';

import TabBarNavigator from './commons/component/TabBarNavigator';
import Header from './commons/component/Header';
import Flag from './commons/component/Flag';



export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
         <Flag />
      </View>
    );
  }
}
