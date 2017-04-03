'use strict';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import TabBarNavigator from 'react-native-tab-navigator'; 
//import React from 'react';
import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


import Header from './Header';
//import Flaglist from './commons/component/flaglist';




class FlagScreen extends Component {
   static navigationOptions = {
   	  title : 'Flag',
   }
   render() {
      return (
         <View >
            <Header/>
         </View>
      );
   }
}

class ReplyScreen extends Component {
   static navigationOptions = {
   	  title : 'Reply',
   }
   render() {
      return (
         <View >
             <Icon name="account-circle" size={20} />
             <Text>This is ReplyScreen </Text>
         </View>
      );
   }
}

class MyScreen extends Component {
   static navigationOptions = {
   	  title : 'My',
   }
   render() {
      return (
         <View >
             <Text>This is MyScreen </Text>

         </View>
      );
   }
}

const NewTabNaigator = TabNavigator({
   Flag: { screen: FlagScreen },
   Reply: { screen: ReplyScreen },
   My : { screen: MyScreen },
},{
	tabBarPosition: 'bottom',
	animationEnabled : true,
	swipeEnabled : true,
	tabBarOptions: {
		upperCaseLabel : false,
		//showLabel : false ,
		indicatorStyle : {
		//	display : 'none',
		},
	}
});

export default NewTabNaigator;