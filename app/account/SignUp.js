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
import { Button } from 'react-native-elements';
import TextField from 'react-native-md-textinput';

import Header from '../../commons/component/Header';


const {width} = Dimensions.get('window');



class SignUp extends Component {
	constructor() {
      super()
      this.state = { phoneNumber: ''}
    }
    
    render(){
    	return(
        <View style={styles.container}>
          <ScrollView>
             <Header hiddenRightIcon={true}/>
             <View style={styles.formWapper}>
                 <TextField
                     //label={''}
                     placeholder={'您的手机号码'}
                     placeholderTextColor={'#E0E0E0'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     highlightColor={'#6495ED'}
                     keyboardType={'numeric'}
                     height={46}
                     //onChangeText={(text)=>{ Alert.alert(text)}}
                   />
             </View>
             <View style={styles.nextButton}> 
                 <Button title='下一步'
                     backgroundColor={'#6495ED'} 
                     borderRadius={3}
                     onPress={()=>{Alert.alert('下一步')}}
                     /> 
             </View>
             <View style={styles.toLogin}>
                <TouchableNativeFeedback  
                     background={TouchableNativeFeedback.SelectableBackground()}
                     onPress={()=>{ Alert.alert('登录') }}>
                  <Text style={{color: '#576B95', textAlign: 'center',}}>直接登录</Text>
                 </TouchableNativeFeedback>
             </View>
           </ScrollView>
        </View>
    	);
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