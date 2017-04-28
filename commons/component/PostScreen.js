'use strict';

import React, { Component } from 'react';
import {
	      View,
        Text,
        Button,
} from 'react-native';

import PostFlag from './PostFlag';


export default class PostScreen extends Component {
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

  componentWillMount () {
//    this.props.screenProps.tabBar.hide()
  }

  componentWillUnmount () {
   // this.props.screenProps.tabBar.show()
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>
          <PostFlag />
          <Button
             onPress={() => navigate('FlagPage')}
             title="Post new flag"
            />
      </View>
    );
  }
}
