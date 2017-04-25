'use strict';


import React, { Component,PropTypes, } from 'react';
import {
	    View,
        Text, 
        Image, 
        StyleSheet, 
        Dimensions,
        Alert,
        TouchableNativeFeedback,  
        } from 'react-native';

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  //... // more items
]


class MessageScreen extends Component{

	constructor(props){
      super(props)
    }
    
    render(){
    	return(
            <View style={{flex:1}}>
                    {
                      list.map((l, i) => (
                        <ListItem
                          roundAvatar
                          avatar={{uri:l.avatar_url}}
                          key={i}
                          title={l.name}
                          subtitle={l.subtitle}
                        />
                      ))
                    }
            </View>
    	);
    }

}


export default MessageScreen;