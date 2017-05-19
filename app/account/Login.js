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
import request from '../../commons/request';
import config from '../../commons/config';
 
class Login extends Component {
    static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'Flagchat',
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
      this.state={
         phoneNumber: '',
         password: '',

      }
    }
   
   render(){
    const { navigate } = this.props.navigation;
   	  return(
         <View style={styles.container}>
           <ScrollView>
             <View style={styles.formWapper}>
                <TextInput 
                     underlineColorAndroid={'#A9A9A9'}
                     placeholder={'您的手机号码'}
                     placeholderTextColor={'#A9A9A9'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     //highlightColor={'#6495ED'}
                     keyboardType={'numeric'}
                     //disableFullscreenUI={true}
                     style={{fontSize: 16,}}
                     //height={46}
                     onChangeText={(text)=>{ this.setState({ phoneNumber: text})}}
                    // onFocus={}
                     />
                 <TextInput 
                     underlineColorAndroid={'#A9A9A9'}
                     placeholder={'请输入您的密码'}
                     placeholderTextColor={'#A9A9A9'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                    // highlightColor={'#6495ED'}
                     keyboardType={'default'}
                     //disableFullscreenUI={true}
                     style={{fontSize: 16,}}
                     //height={46}
                     onChangeText={(text)=>{ this.setState({ password: text})}}
                     secureTextEntry={true}
                     />
             </View>

          
             <View style={styles.nextButton}> 
                 <Button title='登录'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={this._verifyPhoneAndPassword}
                     /> 
             </View>
             <View style={styles.more}>
                 <View style={styles.resetPassword}>
                   <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={this._toFindMyPassword}>
                      <Text style={{color: '#576B95', textAlign: 'center',}}>忘记密码</Text>
                    </TouchableNativeFeedback>
                 </View>
                 <View style={styles.toSignUp}>
                    <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{ this.props.navigation.navigate('SignUpPage')}}>
                       <Text style={{color: '#576B95', textAlign: 'center',}}>注册新账号</Text>
                    </TouchableNativeFeedback>
                 </View>
             </View>
            </ScrollView>
         </View>
   	  );
   }
   
  
   _verifyPhoneAndPassword =() =>{
       var that = this 
       //验证账号密码
       var body = {
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
       }
       //判断账号密码合法性
       var pattPhoneNumber = new RegExp('^1[3|4|5|7|8][0-9]{9}$').test(this.state.phoneNumber)
       var pattPassword = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$').test(this.state.password)
       var verifyURL = config.api.base + config.api.verifyLogin
      // Alert.alert('账号'+pattPhoneNumber)
      // Alert.alert('密码'+pattPassword)
       if(!pattPhoneNumber){
         Alert.alert('请输入合法的手机号')
         return 
       }

       if(!pattPassword){
         Alert.alert('密码错误')
         return 
       }

       request.post(verifyURL, body)
         .then((data) => {
            if(data && data.success) {
              that.props.screenProps.afterLogin(data.data)
              Alert.alert('登录成功')
            }else{
              Alert.alert('获取验证码失败，请检查手机号是否正确')
            }
         })
         .catch((err) => {
             Alert.alert('获取验证码失败，请检查网络是否良好')
             console.error(err)           
         })
        
       Alert.alert('登录操作'+pattPhoneNumber)
   }

   _toFindMyPassword=()=>{
       // 跳转到找回我的密码页面
        Alert.alert('找回我的密码')
       // Alert.alert('找回我的密码'+this.props.screenProps.afterLogin)
   }
}

const styles = StyleSheet.create({
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

   sendAgain: {
       marginTop: 16,
       alignItems: 'center',
   },

   more: {
      marginTop: 64,
      flexDirection: 'row',
      // position:'absolute',
   	  // bottom: 32,
   },
    
    resetPassword: {
        flex:4,
        //backgroundColor: 'blue',
        alignItems: 'center',
    },

    toSignUp: {
        flex:5,
       // backgroundColor: 'yellow',
        alignItems: 'center',
    },

   textInput: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default Login;

