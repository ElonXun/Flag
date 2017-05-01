'use strict';

import React, { Component } from 'react';
import {
	    View,
	    Platform,
        Text, 
        StyleSheet, 
        Dimensions,
        Alert,
        TouchableNativeFeedback,  
        } from 'react-native';

class CommentScreen extends Component {
  
  static navigationOptions = {
   // title: 'Chat with Lucy',
    header:{
      style:{
        height:48,
        backgroundColor:'#6495ED',
      },
      tintColor:'white',
    }
  };

   render(){
   	  return(
          <View style={{flex:1}}>
             <Text>
                  this is CommentScreen 
             </Text>

          </View>
   	  );
   }
}



export default CommentScreen;