'use strict';

import React, { Component } from 'react';
import {
	      View,
        Text, 
        ListView, 
        Image, 
        StyleSheet, 
        Dimensions, 
        Platform,
        StatusBar,
        Button,
        Alert,
        TouchableNativeFeedback,
} from 'react-native';

import TabBarNavigator from './TabBarNavigator';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostScreen from './PostScreen';

//import AMap from 'react-native-smart-amap';
//import AMapLocation from 'react-native-smart-amap-location';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');


class FlagScreen extends Component{
	static navigationOptions = {
        header:(navigation, defaultHeader)=>({
        //  visible:false,
          title:'Flagchat',
          style:{
             height:48,
             backgroundColor:'#6495ED',
          },
          tintColor:'white',
          right:(
           <TouchableNativeFeedback onPress={() => navigation.navigate('PostPage')}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{marginRight:16,}} >
              <Icon size={24} name='bell' style={{color:'white',}}/>
            </View>
          </TouchableNativeFeedback>
         ),
        }),
	}
	render(){
	  const { navigate } = this.props.navigation;
      return (
        <View style={{flex:1}}>
          <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
           <TabBarNavigator />
        </View>
        );
	}
}

const Main = StackNavigator({
  FlagPage: { screen: FlagScreen },
  PostPage: { screen: PostScreen },
});


export default Main;





