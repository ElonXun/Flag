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
        StatusBar 
        } from 'react-native';


export default class Header extends Component {

	render() {
        return (
           <View style={styles.container}>
              <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
              <Text style={styles.textLogo}>
                  Flagchat
              </Text>
           </View>
        );
   }
}


const styles = StyleSheet.create({
	container: {
	 	flexDirection: 'row',
	 	paddingLeft: 16,
	 	paddingRight: 16,
	 	paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏  
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏  
	 	backgroundColor: '#6495ED',
	 	alignItems: 'center'
	},

    textLogo: {
    	fontSize: 20,
    	color : 'white'
    	//backgroundColor:'black' 	
    }

});