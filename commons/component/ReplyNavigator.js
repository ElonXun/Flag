'use strict';

import React, { Component,PropTypes, } from 'react';
import {
	    View,
        Text, 
        Image, 
        StyleSheet, 
        Dimensions,
        Alert,
        TouchableNativeFeedback,  
        } from 'react-native';

import { TabNavigator } from "react-navigation";
import ReplyScreen from './ReplyScreen';
import MessageScreen from './MessageScreen';


const ReplyNavigator = TabNavigator({
  Reply: { screen: ReplyScreen },
  Message: { screen: MessageScreen },
},{
  tabBarOptions: {
    //activeTintColor:'#e91e63',
    indicatorStyle:{
       backgroundColor:'white',
    },
    style: {
      backgroundColor :'#6495ED',
    },
    upperCaseLabel:false,
  },
});

export default  ReplyNavigator;
