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



class SignUp extends Component {
  static navigationOptions = {
        header:(navigation, defaultHeader)=>({
     //     visible:false,
          title:'填写手机号',
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

	 constructor(props) {
      super(props)
      this.state = { phoneNumber: ''}
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
                     // secureTextEntry={true}
                     />
             </View>
             <View style={styles.nextButton}> 
                 <Button title='下一步'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={this._toVerifyCode}
                     /> 
             </View>
             <View style={styles.toLogin}>
                <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{
                        goBack()
                     }}>
                  <Text style={{color: '#576B95', textAlign: 'center',}}>直接登录</Text>
                 </TouchableNativeFeedback>
             </View>
           </ScrollView>
        </View>
    	);
    }
  
  _toVerifyCode = () =>{
       var that = this 
       //验证账号密码
       var body = {
          phoneNumber: this.state.phoneNumber,
       }
       //验证手机号是否填写以及合法性
       var pattPhoneNumber = new RegExp('^1[3|4|5|7|8][0-9]{9}$').test(this.state.phoneNumber)
       if(!pattPhoneNumber) {
          Alert.alert('请输入合法的手机号')
          return 
       }

       //验证手机号是否已注册，及是否符合注册要求
       this.props.navigation.navigate('VerifyCodePage', { phoneNumber: this.state.phoneNumber});
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

export default SignUp;