'use strict';

import TabNavigator from 'react-native-tab-navigator'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

import ReplyNavigator from './ReplyNavigator'; 
import FlagNavigator from './FlagNavigator'; 

const FLAG_NORMAL= 'home';
const REPLY_NORMAL= 'bell';
const MY_NORMAL= 'account';
const FLAG= 'flag';
const REPLY='reply';
const MY='my';




class TabBarNavigator extends Component {
    constructor(props) {  
      super(props);  
      this.state = {selectedTab: FLAG}
   } 

  render() {
    return (
      <View style={{flex:1}}>
          <TabNavigator hidesTabTouch={false} tabBarStyle={styles.tab}>    
             {this._renderTabItem(FLAG_NORMAL, FLAG_NORMAL, FLAG, this._createChildView(FLAG))}  
             {this._renderTabItem(REPLY_NORMAL, REPLY_NORMAL, REPLY, this._createChildView(REPLY))}  
             {this._renderTabItem(MY_NORMAL, MY_NORMAL, MY, this._createChildView(MY))} 
         </TabNavigator>
      </View>
    );
  }
  
   _renderTabItem(img, selectedImg, tag, childView) {  
       return (  
          <TabNavigator.Item  
              selected={this.state.selectedTab === tag}  
              renderIcon={() => <Icon style={styles.tabIcon} size={24} name={img}/>}  
                renderSelectedIcon={() => <Icon style={styles.tabIconFocus} size={24} name={img}/>}
              onPress={() => this.setState({ selectedTab: tag })}>  
            {childView}  
         </TabNavigator.Item>  
      );  
   }

   _createChildView(tag) { 
       if (tag =='flag'){
          return (  
            <FlagNavigator />
          )  
       }else if (tag == 'reply'){
          return(
              <ReplyNavigator />
           )
       }else {
           return(
             <Text style={{fontSize:22}}>{tag}</Text> 
           )
       }  
      
   }  
}

const styles = StyleSheet.create({  
   tab: {  
        height: 56,  
        backgroundColor: 'white',  
        alignItems: 'center',
        paddingTop:8,
        //paddingBottom:16,
   },

   tabIcon: { 
    // backgroundColor:'black',
   },

   tabIconFocus: {
    // size : 20 ,
    //marginTop: 10,
    //backgroundColor:'black',
   // marginTop:2,
    color: '#4169E1',
   },

});  

export default TabBarNavigator;