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
        } from 'react-native';

var dismissKeyboard = require('dismissKeyboard');

import TextField from 'react-native-md-textinput';
import { Button } from 'react-native-elements';

import Header from '../../commons/component/Header';

class Login extends Component {
   render(){
   	  return(
         <View style={styles.container}>
           <ScrollView>
             <Header hiddenRightIcon={true}/>
             <View style={styles.formWapper}>
                 <TextField
                     //label={''}
                     ref='phoneNumber'
                     placeholder={'请输入手机号'}
                     placeholderTextColor={'#E0E0E0'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     highlightColor={'#6495ED'}
                     keyboardType={'numeric'}
                     height={46}
                    // onblur={ dismissKeyboard() }
                    // onChangeText={(text)=>{ Alert.alert(text)}}
                   />
                   <TextField
                     //label={''}
                     ref='password'
                     placeholder={'请输入密码'}
                     placeholderTextColor={'#E0E0E0'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     highlightColor={'#6495ED'}
                     keyboardType={'default'}
                     secureTextEntry={true}
                     height={46}
                    // onChangeText={(text)=>{ Alert.alert(text)}}
                   />
             </View>
             <View style={styles.nextButton}> 
                 <Button title='登录'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={()=>{Alert.alert('下一步')}}
                     /> 
             </View>
             <View style={styles.more}>
                 <View style={styles.resetPassword}>
                   <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{ Alert.alert('忘记密码') }}>
                      <Text style={{color: '#576B95', textAlign: 'center',}}>忘记密码</Text>
                    </TouchableNativeFeedback>
                 </View>
                 <View style={styles.toSignUp}>
                    <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{ Alert.alert('注册新账号') }}>
                       <Text style={{color: '#576B95', textAlign: 'center',}}>注册新账号</Text>
                    </TouchableNativeFeedback>
                 </View>
             </View>
            </ScrollView>
         </View>
   	  );
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
});

export default Login;

