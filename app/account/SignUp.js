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
        } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

const {width} = Dimensions.get('window');



class SignUp extends Component {
	constructor() {
      super()
      this.state = { phoneNumber: ''}
    }
    
    render(){
    	return(
           <View style={styles.container}>
             <View style={styles.formWapper}>
                 <FormInput 
                    placeholder='请输入手机号'
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'number-pad'}
                    inputStyle={{width: width - 30 }}
                    //selectionColor={'black'}
                    onChangeText={(text) => {
                    	this.setState({
                    		phoneNumber: text
                    	})
                    }}
                 />
                <Button title='注册' />
             </View>
           </View>
    	);
    }



}

const styles= StyleSheet.create({
   container: {
   	  flex: 1,
   	  backgroundColor: 'white',
   	     //	 padding: 10,

   },
   
   formWapper: {
   },
});

export default SignUp;