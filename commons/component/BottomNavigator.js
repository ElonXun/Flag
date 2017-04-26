'use strict';

import { Tabs, Tab } from 'react-native-elements';
import React, { Component,PropTypes, } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
       View,
        Text, 
        Image, 
        StyleSheet, 
        Dimensions,
        Alert,
        TouchableNativeFeedback,  
        } from 'react-native';

import ReplyNavigator from './ReplyNavigator'; 
import FlagNavigator from './FlagNavigator'; 

class BottomNavigator extends Component {

   constructor() {
     super()
     this.state = {
       selectedTab: 'home',
     }
   }
   
   changeTab (selectedTab) {
    this.setState({selectedTab})
   }

 
   render(){
      const { selectedTab } = this.state
      return(
         <View style={{flex:1}}>
             <Tabs>
               <Tab
                 titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6 }}
                 selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                 selected={selectedTab === 'home'}
                 title={selectedTab === 'home' ? 'Home' : 'Home'}
                 renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8}} color={'#5e6977'} name='home' size={26} />}
                 renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={26} />}
                 onPress={() => this.changeTab('home')}>
                 <FlagNavigator />
               </Tab>
               <Tab
                 titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6}}
                 selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                 selected={selectedTab === 'reply'}
                 title={selectedTab === 'reply' ? 'Reply' : 'Reply'}
                 renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8}} color={'#5e6977'} name='bell' size={26} />}
                 renderSelectedIcon={() => <Icon color={'#6296f9'} name='bell' size={26} />}
                 onPress={() => this.changeTab('reply')}>
                 <ReplyNavigator />
               </Tab>
               <Tab
                  titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6}}
                  selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                  selected={selectedTab === 'my'}
                  title={selectedTab === 'my' ? 'My' : 'My'}
                  renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8}} color={'#5e6977'} name='account' size={26} />}
                  renderSelectedIcon={() => <Icon color={'#6296f9'} name='account' size={26} />}
                  onPress={() => this.changeTab('my')} 
                  >
                  <Text>
                      none
                  </Text>
                </Tab>
             </Tabs>
         </View>
      );
   }
}


export default BottomNavigator;

