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
        ScrollView  
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
        <ScrollView style={{flex:1}}>
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
                    onPress={()=>{ Alert.alert('编辑个人信息')}}
                  />
               </View>
               <View style={styles.wapper}>
                  <ListItem
                     containerStyle={styles.containerStyle} 
                     key={1}
                     title={'我的发布'}
                     leftIcon={{name: 'flag-outline',type: 'material-community'}}
                     onPress={()=>{ Alert.alert('我的发布')}}  />
               </View>
               <View>
                  <ListItem
                        containerStyle={styles.containerStyle} 
                        key={1}
                        title={'我的浏览'}
                        leftIcon={{name: 'eye',type: 'material-community'}} 
                        onPress={()=>{ Alert.alert('我的浏览')}} />
               </View>
                <View>
                  <ListItem
                        containerStyle={styles.containerStyle} 
                        key={1}
                        title={'我的足迹'}
                        leftIcon={{name: 'clock',type: 'material-community'}} 
                        onPress={()=>{ Alert.alert('我的足迹')}} />
               </View>
               <View style={styles.wapper}>
                  <ListItem
                     containerStyle={styles.containerStyle} 
                     key={1}
                     title={'设置'}
                     leftIcon={{name: 'settings',type: 'material-community'}} 
                     onPress={()=>{ Alert.alert('我的设置')}} />
               </View>
           </View>
        </ScrollView>
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
    containerStyle: {
       backgroundColor : 'white',
    },
});

export default MyScreen;