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


import TextField from 'react-native-md-textinput';
import { Button } from 'react-native-elements';

import request from '../../commons/request';
import config from '../../commons/config';

import Header from '../../commons/component/Header';

class VerifyCode extends Component {
   render(){
   	  return(
         <View style={styles.container}>
           <ScrollView>
             <Header hiddenRightIcon={true}/>
             <View style={styles.title}>
                <Text style={{ color: 'black', fontSize: 28 ,fontWeight: '400'}}>17826806030</Text>
             </View>
             <View style={styles.formWapper}>
                 <TextField
                     //label={''}
                     placeholder={'请输入6位验证码'}
                     placeholderTextColor={'#E0E0E0'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     highlightColor={'#6495ED'}
                     keyboardType={'numeric'}
                     height={46}
                    // onChangeText={(text)=>{ Alert.alert(text)}}
                   />
             </View>
             <View style={styles.sendAgain}>
                 <Text>60秒后可以重新获取验证码</Text>
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

   _text(){
      Alert.alert('xs')
      request.get('http://rapapi.org/mockjs/15841/api/flags?accessToken=123')
          .then((response)=>{
            console.log(response)
          })

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

});

export default VerifyCode;
