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
        ScrollView,
        AsyncStorage,  
        } from 'react-native';

import { List, ListItem, Button } from 'react-native-elements';


class AccountAndSecurityScreen extends Component {
	static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'账户与安全',
          style:{
             height:48,
             backgroundColor:'#6495ED',
          },
          tintColor:'white',
         //  right:(
         //   <TouchableNativeFeedback onPress={() => navigation.navigate('PostPage')}
         //      background={TouchableNativeFeedback.SelectableBackground()}>
         //    <View style={{marginRight:16,}} >
         //      <Icon size={24} name='telegram' style={{color:'white',}}/>
         //    </View>
         //  </TouchableNativeFeedback>
         // ),
        }),
    }

    constructor(props){
      super(props)
    }

    render(){
		return(
           <ScrollView style={{flex:1}}>
               <View style={styles.container}>
                   <View style={styles.wapper}>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           //leftIcon={{name: 'cellphone-iphone',type: 'material-community'}} 
                           title={'手机'}
                           rightTitle={'178****6030'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('手机')}}  />
                   </View>
                   <View>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           //leftIcon={{name: 'wechat',type: 'material-community',style:{backgroundColor:'green',alignItems:'center',marginRight: 8,width:23,}}}
                           //leftIconContainerStyle={{backgroundColor:'yellow',paddingLeft:9,paddingRight:16}}
                           title={'微信'}
                           rightTitle={'未绑定'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('绑定微信')}}  />
                   </View>
                   <View>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           //leftIcon={{name: 'wechat',type: 'material-community',style:{backgroundColor:'green',alignItems:'center',marginRight: 8,width:23,}}}
                           //leftIconContainerStyle={{backgroundColor:'yellow',paddingLeft:9,paddingRight:16}}
                           title={'微博'}
                           rightTitle={'未绑定'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('微博绑定')}}  />
                   </View>
                   <View>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           //leftIcon={{name: 'wechat',type: 'material-community',style:{backgroundColor:'green',alignItems:'center',marginRight: 8,width:23,}}}
                           //leftIconContainerStyle={{backgroundColor:'yellow',paddingLeft:9,paddingRight:16}}
                           title={'QQ'}
                           rightTitle={'未绑定'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('QQ绑定')}}  />
                   </View>
                   <View>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                          // leftIcon={{name: 'email'}}
                           title={'邮箱'}
                           rightTitle={'未验证'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('绑定邮箱')}}  />
                   </View>
                    <View style={styles.wapper}>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           title={'登录密码'}
                           rightTitle={'修改'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('登录密码')}}/>
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
    containerStyle: {
       backgroundColor : 'white',
       height:48,
       alignItems:'center',
       justifyContent: 'center',
    },
});

export default AccountAndSecurityScreen;