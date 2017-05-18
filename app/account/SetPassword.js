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
        TextInput,
        } from 'react-native';
import { Button } from 'react-native-elements';

import Header from '../../commons/component/Header';


const {width} = Dimensions.get('window');



class SetPassword extends Component {
  static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'设置密码',
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

	constructor() {
      super()
      this.state = ({ 
         password: '',
         passwordAgain: '',
      })
    }
    
    render(){
      const { navigation } = this.props.navigation;
      const { goBack } = this.props.navigation;
    	return(
        <View style={styles.container}>
          <ScrollView>
             <View style={styles.formWapper}>
                <TextInput 
                     underlineColorAndroid={'#A9A9A9'}
                     placeholder={'请填写您的密码'}
                     placeholderTextColor={'#A9A9A9'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     //highlightColor={'#6495ED'}
                     keyboardType={'default'}
                     //disableFullscreenUI={true}
                     style={{fontSize: 16,}}
                     //height={46}
                     onChangeText={(text)=>{ this.setState({ password: text})}}
                     secureTextEntry={true}
                     />
                  <TextInput 
                     underlineColorAndroid={'#A9A9A9'}
                     placeholder={'请重复您的密码'}
                     placeholderTextColor={'#A9A9A9'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     //highlightColor={'#6495ED'}
                     keyboardType={'default'}
                     //disableFullscreenUI={true}
                     style={{fontSize: 16,}}
                     //height={46}
                     onChangeText={(text)=>{ this.setState({ passwordAgain: text})}}
                     secureTextEntry={true}
                     />
             </View>
             <View style={styles.nextButton}> 
                 <Button title='确定'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={this._toSetPassword}
                     /> 
             </View>
           </ScrollView>
        </View>
    	);
    }
   
   _toSetPassword = () =>{
       var phoneNumber = this.props.navigation.state.params.phoneNumber
       var pattPassword = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$').test(this.state.password)
       var pattPasswordAgain = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$').test(this.state.passwordAgain)
       var data = {
         phoneNumber: phoneNumber,
         password: passwordAgain, 
       }  
       Alert.alert("phoneNumber"+phoneNumber+pattPassword+'第二次'+pattPasswordAgain)
       //验证密码的合法性和两次输入是否相同
       if(!pattPassword || !pattPasswordAgain) {
          Alert.alert('密码长度在6-16之间,必须同时包含数字和英文字母,且不能包含其他符合')
          return 
       }

       if(this.state.password !== this.state.passwordAgain) {
          Alert.alert('两次密码输入不同,请再次输入')
          return
       }
       //异步设置密码
       Alert.alert('确定')
   }


}

const styles= StyleSheet.create({
   container: {
   	  flex: 1,
   	  backgroundColor: 'white',
   	  flexDirection: 'column',
   	     //	 padding: 10,
   },
   
   formWapper: {
      paddingLeft: 15,
      paddingRight: 15,
   },

   nextButton: {
   	  marginTop: 32,
   },

   toLogin: {
      	marginTop: 32,
      	//alignSelf: 'flex-end',
   	  //position:'absolute',
   	  //bottom: 32,
   	    alignItems: 'center',
   	 // justifyContent: 'center',
   },
});

export default SetPassword;