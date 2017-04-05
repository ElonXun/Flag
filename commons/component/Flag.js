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
import Header from './Header';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostFlag from './PostFlag';

//import AMap from 'react-native-smart-amap';
//import AMapLocation from 'react-native-smart-amap-location';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');


class FlagScreen extends Component{
	static navigationOptions = {
        header:{
        	visible:false,
        }
	}
	render(){
	  const { navigate } = this.props.navigation;
      return (
        <View style={{flex:1}}>
           <Header />
           <TabBarNavigator />
           <Button
             onPress={() => navigate('PostPage')}
             title="Post new flag"
            />
        </View>
        );
	}
}

class PostScreen extends Component {
  static navigationOptions = {
   // title: 'Chat with Lucy',
    header:{
    	style:{
    		height:48,
    		backgroundColor:'#6495ED',
    	},
    	tintColor:'white',
    	right:(
           <Text style={{marginRight:16,color:'white',}}>
               发布
           </Text>
    	),
    }
  };
  render() {
    return (
      <View style={{flex:1}}>
          <PostFlag />
      </View>
    );
  }
}

class MapScreen extends Component {
  static navigationOptions = {
        header:{
          visible:false,
        }
  }
   render(){
      return(
          <View style={{flex:1}}>
             <Flaglocation />
          </View> 
      );
   }
}

const Flag = StackNavigator({
  FlagPage: { screen: FlagScreen },
  PostPage: { screen: PostScreen },
  MapPage: { screen: MapScreen },
});


export default Flag;





