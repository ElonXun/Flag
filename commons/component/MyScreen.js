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

import Header from './Header'; 
import { List, ListItem } from 'react-native-elements';

class MyScreen extends Component {
   
    constructor(props){
      super(props)
    }

    render(){
    	const { navigation } = this.props;
    	return(
           <View style={styles.container}>
               <Header navigation={navigation}/>
               <View style={styles.wapper}>
                 <ListItem
                    containerStyle={styles.listItemContainerStyle}
                    avatarStyle={styles.listItemAvatarStyle}
                    wrapperStyle={styles.listItemWrapperStyle}
                    //roundAvatar
                    avatar={{uri:'http://flystation.image.alimmdn.com/blog/blogBackground/timg.jpg?t=1484112779149'}}
                    key={1}
                    title={'编辑个人信息'}
                    titleContainerStyle={{marginLeft: 16}}
                    //subtitle={'一个流氓的清教徒'}
                    //subtitleStyle={{fontWeight:'normal'}}
                    //subtitleContainerStyle={{marginLeft: 16}}
                  />
               </View>
           </View>
    	);
    }
}
const styles = StyleSheet.create({
    container: {
       flex:1,
       flexDirection:'column',
    },
    wapper: {
       flexDirection:'column',
       paddingTop: 8,
    },
    listItemContainerStyle: {
    	backgroundColor : 'white',
    	height: 72,
    },
    listItemWrapperStyle: {
    	marginLeft: 16,
    },
    listItemAvatarStyle: {
       height: 52,
       width: 52,
       borderRadius: 26,
    },
});

export default MyScreen;