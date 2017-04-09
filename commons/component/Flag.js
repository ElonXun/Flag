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
        header:{
        //	visible:false,
          title:'Flagchat',
          style:{
             height:48,
             backgroundColor:'#6495ED',
          },
          tintColor:'white',
        }
	}
	render(){
	  const { navigate } = this.props.navigation;
      return (
        <View style={{flex:1}}>
          <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
           <TabBarNavigator />
           <Button
             onPress={() => navigate('PostPage')}
             title="Post new flag"
            />

        </View>
        );
	}
}

const Flag = StackNavigator({
  FlagPage: { screen: FlagScreen },
  PostPage: { screen: PostScreen },
});


export default Flag;





