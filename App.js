'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native';

import { ThemeProvider } from 'react-native-material-ui';
import { MenuContext } from 'react-native-popup-menu';
//import TabBarNavigator from './commons/component/TabBarNavigator';
import Main from './commons/component/Main';
//import List from './commons/component/list/List';


export default class App extends Component {
  render() {
    return (
        <ThemeProvider>
          <MenuContext>
           <View style={{flex:1}}>
              <Main />
           </View>
          </MenuContext>
        </ThemeProvider>
    );
  }
}


    