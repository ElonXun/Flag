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
        Image,
        TouchableWithoutFeedback,  
        } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 48;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 40;


class ProfileScreen extends Component {
   static navigationOptions = {
        header:(navigation, defaultHeader)=>({
          visible:false,
        }),
    }

	constructor(props){
      super(props)
      this.state = { profileAction: '编辑',user: {avatar: 'http://flystation.image.alimmdn.com/blog/blogBackground/timg.jpg?t=1484112779149'}}
    }

	render(){
    const {goBack} = this.props.navigation;
	   return(
	   	 <View style={styles.container}>
           <View style={styles.headerContainer}>
              <View style={styles.header}>
                  <View style={styles.left}>
                      <TouchableNativeFeedback onPress={this._goback}
                          background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)',true)
                        }>
                          <View style={styles.lefyContainer}>
                             <View style={styles.leftWapper}>
                                <Icon size={24} name='arrow-left' style={{color:'white',}}/>
                              </View>
                          </View>
                      </TouchableNativeFeedback>
                  </View>
                  <View style={styles.item}>
                      <Text style={styles.title}>个人信息</Text>
                  </View>
                   <View style={styles.right}>
                      <TouchableNativeFeedback onPress={()=>{ Alert.alert('更新个人信息')}}
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)',true)
                       }>
                         <View style={styles.rightContainer}>
                             <View style={styles.rightWapper}>
                                <Icon size={24} name='check' style={{color:'white',}}/>
                             </View>
                          </View>
                      </TouchableNativeFeedback>
                  </View>
              </View>
           </View>
           <View style={styles.profileContainer}>
              <ScrollView>
                 <View style={styles.avatarContainer}>
                     <TouchableWithoutFeedback onPress={this._pickerImage}>
                      <View>
                        <View style={styles.avatarWapper}>
                            <Image source={{uri:this.state.user.avatar}}
                                style={styles.avatarImage}/>
                        </View>
                        <View>
                            <Text style={{textAlign:'center',color:'#576B95'}}>更换头像</Text>
                        </View>
                      </View>
                     </TouchableWithoutFeedback>
                 </View>
              </ScrollView>
           </View>
       </View>
	   );
	}

  _goback = ()=>{
    this.props.navigation.goBack()
  }

  _pickerImage = () =>{
     var that = this 
     var user = this.state.user
     ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: true,
        compressImageQuality: 0.75,
       }).then(res => {
            //console.log(res)
           // Alert.alert(image)
           // user.avatar = 'data:image/jpegbase64,'+ res.data
            user.avatar = res.path
            //console.log(user.avatar)
            that.setState({
               user: user,
            })
      });
   }
}

const styles=StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'column',
    },
    headerContainer:{
      //flex:1,
      paddingTop: STATUSBAR_HEIGHT,
        backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#6495ED',
        height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
        },
    header: {
       flex:1,
       flexDirection: 'row',
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        fontWeight: Platform.OS === 'ios' ? '600' : '500',
        color: 'rgba(255,255,255, .9)',
        textAlign: Platform.OS === 'ios' ? 'center' : 'left',
        marginHorizontal: 16,
        //tintColor: 'white',
    },
    left: {
        left: 0,
        bottom: 0,
        //top: 0,
        position: 'absolute',
    },
    leftContainer:{
        width: 56,
        height: 48,
    },
    leftWapper: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
    },
    item:{
      position: 'absolute',
      bottom: 12,
      left: 42,
      //top: 0,
    },
    right: {
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',

    },
    rightContainer: {
        width: 56,
        height: 48,
    },
    rightWapper: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 12,
      paddingBottom: 12,
    }, 
    profileContainer: {
      backgroundColor: 'yellow',
      flexDirection: 'row',
    },
    avatarContainer: {
      height: 130,
      alignItems: 'center',
      paddingTop: 16,
    },
    avatarWapper:{
       marginBottom:8,
    },
    avatarImage: {
      height:78,
      width:78,
      borderRadius: 39,
      resizeMode: 'cover',
    },


});
export default ProfileScreen;

