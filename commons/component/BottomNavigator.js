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
import Flag from './Flag';
import MyScreen from './MyScreen';

class BottomNavigator extends Component {
  static navigationOptions = {
        header:(navigation, defaultHeader)=>({
          visible:false,
         //  title:'Flagchat',
         //  style:{
         //     height:48,
         //     backgroundColor:'#6495ED',
         //  },
         //  tintColor:'white',
         //  right:(
         //   <TouchableNativeFeedback onPress={() => navigation.navigate('PostScreen')}
         //      background={TouchableNativeFeedback.SelectableBackground()}>
         //    <View style={{marginRight:16,}} >
         //      <Icon size={24} name='telegram' style={{color:'white',}}/>
         //    </View>
         //  </TouchableNativeFeedback>
         // ),
        }),
    }
   constructor() {
     super()
     this.state = {
       selectedTab: 'home',
       tabBarHeight: 52,
       overflow:'hidden'
     }
   }
   
   changeTab (selectedTab) {
    this.setState({selectedTab})
   }
   
   handleTabBar (state) {
     this.setState({
       tabBarHeight: state ? 52 : 0,
       //visible: state ? true: false,
       overflow:state ? null : 'hidden',
     })
   }
 
   render(){
      const { selectedTab } = this.state;
      const { navigation } = this.props;
      return(
         <View style={{flex:1}}>
             <Tabs tabBarStyle={{height: this.state.tabBarHeight , overflow :this.state.overflow}}
                   sceneStyle={{paddingBottom: this.state.tabBarHeight}}>
               <Tab
                 titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6 }}
                 selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                 selected={selectedTab === 'home'}
                 title={selectedTab === 'home' ? 'Home' : 'Home'}
                 renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8 }} color={'#6F6F6F'} name='home' size={24} />}
                 renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={26} />}
                 onPress={() => this.changeTab('home')}>
                 <Flag  navigation={navigation}
                      // screenProps={{tabBar: {
                      //                        hide: () => this.handleTabBar(false),
                      //                        show: () => this.handleTabBar(true),
                      //                      }}}
                                           />
               </Tab>
               <Tab
                 titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6}}
                 selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                 selected={selectedTab === 'reply'}
                 title={selectedTab === 'reply' ? 'Reply' : 'Reply'}
                 renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8}} color={'#6F6F6F'} name='bell' size={24} />}
                 renderSelectedIcon={() => <Icon color={'#6296f9'} name='bell' size={26} />}
                 onPress={() => this.changeTab('reply')}>
                 <ReplyNavigator screenProps={{navigation}}/>
               </Tab>
               <Tab
                  titleStyle={{fontWeight: 'bold', fontSize: 10, marginTop: -1 , marginBottom: 6}}
                  selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                  selected={selectedTab === 'my'}
                  title={selectedTab === 'my' ? 'My' : 'My'}
                  renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 8}} color={'#6F6F6F'} name='account' size={24} />}
                  renderSelectedIcon={() => <Icon color={'#6296f9'} name='account' size={26} />}
                  onPress={() => this.changeTab('my') } >
                  <MyScreen navigation={navigation} />
                </Tab>
             </Tabs>
         </View>
      );
   }
}


export default BottomNavigator;

