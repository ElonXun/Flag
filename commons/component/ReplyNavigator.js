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


class ReplyScreen extends Component{
    
	  constructor(props){
      super(props)
    }

    render(){
    	return(
            <View style={{flex:1}}>
                 <Text>回复</Text>
            </View>
    	);
    }

}


class MessageScreen extends Component{

	constructor(props){
      super(props)
    }
    
    render(){
    	return(
            <View style={{flex:1}}>
                 <Text>消息</Text>
            </View>
    	);
    }

}


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
