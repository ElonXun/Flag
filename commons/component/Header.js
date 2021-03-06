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


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 48;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 40;

class Header extends Component {
   constructor(props) {
     super(props)
   }

  render(){
		return(
           <View style={styles.container}>
              <View style={styles.header}>
                  <View style={styles.item}>
                      <Text style={styles.title}>Flagchat</Text>
                  </View>
                  {this._rightIcon()}
              </View>
           </View>
		);
	}

  _rightIcon() {
    if(!this.props.hiddenRightIcon){
       return(
           <View style={styles.right}>
                      <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('PostScreen')}
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)',true)}>
                          <View style={styles.rightContainer}>
                             <View style={styles.rightWapper}>
                                <Icon size={24} name='telegram' style={{color:'white',}}/>
                             </View>
                          </View>
                      </TouchableNativeFeedback>
                  </View>
       );
    }else{
      return null;
    }
  }
}  

const styles=StyleSheet.create({
    container:{
    	//flex:1,
    	paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#6495ED',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
        },
    header: {
       flex:1,
       flexDirection: 'row',
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        fontWeight: Platform.OS === 'ios' ? '600' : '500',
        color: 'rgba(255,255,255, .9)',
        textAlign: Platform.OS === 'ios' ? 'center' : 'left',
        marginHorizontal: 16,
        //tintColor: 'white',
    },
    item:{
    	position: 'absolute',
    	bottom: 12,
    	//top: 0,
    },
    right: {
    	  right: 0,
        bottom: 0,
        //top: 0,
        position: 'absolute',

    },
    rightContainer: {
        width: 56,
        height: 48,
    },
    rightWapper: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12,
    }, 
    

});

export default Header;


