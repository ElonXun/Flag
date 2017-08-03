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


class SetScreen extends Component {
	static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'设置',
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
		//   const { navigation } = this.props.navigation;

           <ScrollView style={{flex:1}}>
               <View style={styles.container}>
                   <View style={styles.wapper}>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           title={'账户安全'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{this.props.navigation.navigate('AccountAndSecurityScreen')}} />
                   </View>
                    <View >
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           title={'通用'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('通用')}}  />
                   </View>
                   <View style={styles.wapper}>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           title={'关于flagchat'}
                           hideChevron={true}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={()=>{ Alert.alert('关于flagchat')}}  />
                   </View>
                   <View style={styles.wapper}>
                       <ListItem
                           containerStyle={styles.containerStyle} 
                           key={1}
                           titleContainerStyle={{alignItems:'center'}}
                           title={'退出登录'}
                           hideChevron={true}
                           titleStyle={{color:'#DC143C'}}
                           //leftIcon={{name: 'flag-outline',type: 'material-community'}}
                           onPress={this._signOut}/>
                   </View>

               </View>
           </ScrollView>
		);
	}
  
  _signOut = ()=> {
      AsyncStorage.removeItem('user')
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

export default SetScreen;