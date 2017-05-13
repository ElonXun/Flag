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

import request from '../../commons/request';
import config from '../../commons/config';

import Header from '../../commons/component/Header';
var {CountDownText} = require('react-native-sk-countdown');

class VerifyCode extends Component {

  static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'填写验证码',
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
      this.state=({
         toSendCodeAgain: false,
      })
   }
   

   render(){
   	  return(
         <View style={styles.container}>
           <ScrollView>
             <View style={styles.title}>
                <Text style={{ color: 'black', fontSize: 28 ,fontWeight: '400'}}>17826806030</Text>
             </View>
             <View style={styles.formWapper}>
                <TextInput 
                     underlineColorAndroid={'#A9A9A9'}
                     placeholder={'请输入6位验证码'}
                     placeholderTextColor={'#A9A9A9'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     //highlightColor={'#6495ED'}
                     keyboardType={'numeric'}
                     //disableFullscreenUI={true}
                     style={{fontSize: 16,}}
                     //height={46}
                     onChangeText={(text)=>{ this.setState({ phoneNumber: text})}}
                     secureTextEntry={true}
                     />
             </View>
             <View style={styles.sendAgain}>
                {
                  this.state.toSendCodeAgain ?  
                  <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{ Alert.alert('重新发送验证码')}}>
                     <Text  style={styles.countdown} >重新发送验证码</Text>
                  </TouchableNativeFeedback>
                  :
                  <CountDownText
                       style={styles.countdown}
                       countType='seconds' // 计时类型：seconds / date
                       auto={true} // 自动开始
                       afterEnd={()=>{ this.setState({toSendCodeAgain: true ,})}} // 结束回调
                       timeLeft={10} // 正向计时 时间起点为0秒
                       step={-1} // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
                       //startText='获取验证码' // 开始的文本
                       // endText='重新发送验证码' // 结束的文本
                       intervalText={(sec) => sec + '秒后可以重新获取验证码'} // 定时的文本回调
                     />
                }
             </View>
             <View style={styles.nextButton}> 
                 <Button title='确定'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={this._text}
                     /> 
             </View>
           </ScrollView>
         </View>
   	  );
   }

   _text =() =>{
      //到设置密码页面
      this.props.navigation.navigate('SetPasswordPage')
     // Alert.alert('xs')
      request.get('http://rapapi.org/mockjs/15841/api/flags?accessToken=123')
          .then((response)=>{
            console.log(response)
          })
   }
   
   _reSetCode(){
       Alert.alert('发送验证码')
   }
}

const styles = StyleSheet.create({
   container: {
   	  flex: 1,
   	  backgroundColor: 'white',
   	  flexDirection: 'column',
   	     //	 padding: 10,
   },
   
   title: {
      marginTop: 16,
      alignItems: 'center',
   },

   formWapper: {
      paddingLeft: 15,
      paddingRight: 15,
   },

   nextButton: {
   	  marginTop: 32,
   },

   sendAgain: {
       marginTop: 16,
       alignItems: 'center',
   },
  
   countdown: {
       color: '#576B95',
   },
});

export default VerifyCode;
