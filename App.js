'use strict';


import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, AsyncStorage, Alert } from 'react-native';
import {Theme} from 'teaset';
import { ThemeProvider } from 'react-native-material-ui';
import TabBarNavigator from './commons/component/TabBarNavigator';
import BottomNavigator from './commons/component/BottomNavigator';
import MainNavigator from './commons/component/MainNavigator';
import AccountNavigator from './app/navigator/AccountNavigator';



export default class App extends Component {

  constructor(props){
      super(props)
      this.state=({
         user: null,
         logined : false,
      })
   }


  componentDidMount () {
    this._asyncAppStorage()
  }

  _asyncAppStorage =()=>{
    var that = this 
     AsyncStorage.getItem('user')
      .then((data) =>{
        var user 
        var newState = {}

        if(data) {
           user =JSON.parse(data)
        }

        if(user && user.accessToken) {
            newState.user = user
            newState.logined= true 
        }else {
           newState.logined= false
        }

        that.setState(newState)
     })
  }
  
  _afterLogin= (user) =>{
     var that = this
     user= JSON.stringify(user)
     AsyncStorage.setItem('user',user)
       .then(()=>{
          that.setState({
             logined: true,
             user: user,
          })
       })

  }

  render() {
     Theme.set({
       menuColor: 'rgba(245,245,245, 0.9)',
       menuShadowColor: '#333',
       menuItemColor: 'rgba(0,0,0, 0)',
       menuItemTitleColor: 'black',
       menuItemSeparatorColor: '#F5F5F5',
       menuItemIconColor: '#c1c2cc',
     });

    return (
        <ThemeProvider>
           <View style={{flex:1}}>
              <StatusBar 
                   backgroundColor = '#4169E1' 
                   opacity = '0.5'/>
              {
                this.state.logined ? 
                 <MainNavigator />
                : <AccountNavigator screenProps={{afterLogin: (user)=> this._afterLogin(user)}}/>              
              }
           </View>
        </ThemeProvider>
    );
  }
}


    