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
        TextInput,
        AsyncStorage,  
        } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {  Toast } from 'teaset';
import * as Progress from 'react-native-progress';

import aliWantu from '../../commons/aliWantu';

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
      this.state = {
          updateColor: '#AFEEEE',
          isProfileUpdate: false, 
          profileAction: '编辑',
          user: {avatar: 'http://flystation.image.alimmdn.com/blog/blogBackground/timg.jpg?t=1484112779149'},
          avatarProgress: 0,
          isAvatarUploading: false,
        }
    }
  
  componentDidMount(){
     // var that = this
     // var user
     // AsyncStorage.getItem('user').then((data)=>{
     //    if(data){
     //      user = JSON.parse(data)
     //    }

     //    if(user && user.accessToken){
     //      that.setState({
     //         user: user,
     //      })
     //    }
     // })
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
                      <TouchableNativeFeedback onPress={ this.state.isProfileUpdate ? this._uploadProfile : null }
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)',true)
                       }>
                         <View style={styles.rightContainer}>
                             <View style={styles.rightWapper}>
                                <Icon size={24} name='check' style={{color:this.state.updateColor,}}/>
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
                        {this.state.isAvatarUploading? 
                          <View style={styles.avatarProgress}>
                             <Progress.Circle size={78} color={'#6495ED'} borderWidth={0} thickness={3} progress={this.state.avatarProgress}/>
                          </View>
                          : null
                        }
                        <View>
                            <Text style={{textAlign:'center',color:'#576B95'}}>更换头像</Text>
                        </View>
                      </View>
                     </TouchableWithoutFeedback>
                 </View>
                 <View style={styles.inputProfile}>
                      <TextInput 
                         underlineColorAndroid={'#A9A9A9'}
                         placeholder={'昵称'}
                         placeholderTextColor={'#A9A9A9'}
                         autoCapitalize={'none'}
                         autoCorrect={false}
                         defaultValue={'风马牛'}
                         //highlightColor={'#6495ED'}
                         keyboardType={'default'}
                         //disableFullscreenUI={true}
                         style={{fontSize: 16,}}
                         inlineImagePadding={30}
                         onChange={this._setIsUpdateTrue}
                         //height={46}
                         onChangeText={(text)=>{ this.setState({ nickname: text})}}
                         // secureTextEntry={true}
                       />
                 </View>
                  <View style={styles.inputProfile}>
                      <TextInput 
                         underlineColorAndroid={'#A9A9A9'}
                         placeholder={'个性签名'}
                         placeholderTextColor={'#A9A9A9'}
                         autoCapitalize={'none'}
                         autoCorrect={false}
                         //defaultValue={'Less callback,more girls'}
                         //highlightColor={'#6495ED'}
                         keyboardType={'default'}
                         //disableFullscreenUI={true}
                         style={{fontSize: 16,}}
                         inlineImagePadding={30}
                         onChange={this._setIsUpdateTrue}
                         //height={46}
                         onChangeText={(text)=>{ this.setState({ motto: text})}}
                         // secureTextEntry={true}
                       />
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
        width: 250,
        height: 250,
        cropping: true,
        includeBase64: true,
        compressImageQuality: 0.75,
        cropperCircleOverlay:true,
        showCropGuidelines:false,
        hideBottomControls:false,
       }).then(res => {
           // user.avatar = res.path
            that.setState({
              // user: user,
               newAvatarSize: res.size,
               newAvatarPath: res.path,
            })
           // that._uploadAvatar(res.path,res.size)
            var token = 'UPLOAD_AK_TOP MjM4MjAyNjk6ZXlKdVlXMWxjM0JoWTJVaU9pSm1iR0ZuWTJoaGRDSXNJbVY0Y0dseVlYUnBiMjRpT2pFME9UWXhNVEkwTWpNeE5qa3NJbWx1YzJWeWRFOXViSGtpT2pCOToyZWIxZGFhNTdkMjdmODcyOWI2MGU3YzZlNWQ3NGQzZjg5ZmI5NTEx' 
            var dir = '/profile/avatar/' + 'id'
            var fileName =  'id'+'-'+ Date.now() + '.' + res.path.split('.').pop()
            // aliWantu.singleUpload(token,res.path,res.size,dir,fileName).then((res)=>{
            //    console.log(res)
            // })
            var body = aliWantu.getBody(res.path,res.size,dir,fileName)
            that._test(body,token)

      }).catch(e => alert(e))
   }

   _test = (body,token) =>{
      var xhr = new XMLHttpRequest()
      var url = 'http://upload.media.aliyun.com/api/proxy/upload'
      var user = this.state.user
      var that = this 

      this.setState({
        isAvatarUploading: true,
        avatarProgress: 0,
      })

      xhr.open('POST',url)
      xhr.onload = () => {
         if(xhr.status !== 200){
            Alert.alert('请求失败')
            console.log(xhr.responseText)
            return
         }

         if(!xhr.responseText){
            Alert.alert('请求失败')
            return
         }

         var response

         try {
            response = JSON.parse(xhr.response)
         } catch(e) {
           // statements
           console.log(e);
         }

         if(response && response.url){
            user.avatar = response.url
            that.setState({
              isAvatarUploading: false,
              avatarProgress: 0,
              user:user,
            })
            Toast.success('头像更新成功')
            console.log(response)
            console.log(response.url)
         }
      }
      xhr.setRequestHeader('Content-Type','multipart/form-data; boundary=zcV4qZ1R8f7jaG7hzVlZ_RL9oOdIZWv9tUCoKq')
      xhr.setRequestHeader('User-Agent','ALIMEDIASDK_NODEJS_CLOUD')
      xhr.setRequestHeader('Authorization',token)
      


      if(xhr.upload){
        xhr.upload.onprogress = (event)=> {
          if(event.lengthComputable){
             var percent = Number((event.loaded/event.total).toFixed(2))
            // console.log(typeof(percent))
             that.setState({
                avatarProgress: percent,
             })
          }
        }
      }

      xhr.send(body)


   }

   _uploadProfile = ()=>{
      
      var body = {
         motto: this.state.motto,
         nickname: this.state.nickname,
      }

      var pattNickname = new RegExp('^[\u4E00-\u9FA5A-Za-z0-9]+$').test(this.state.nickname)
      //var pattMotto = new RegExp('').test(this.state.motto)

      if(!pattNickname){
        Alert.alert('昵称不能包含空格或其他特殊符号,请重新输入 ')
      }


      //判断是否为空
      // if(!this.state.motto && (this.state.motto.length > 0)){

      // }
     
      //Alert.alert('开始上传')
      
   }

   _setIsUpdateTrue = ()=>{
      this.setState ({
          isProfileUpdate: true,
          updateColor: 'white',
      })
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
      backgroundColor: 'white',
      flexDirection: 'row',
      flex:1,
    },
    avatarContainer: {
      height: 130,
      alignItems: 'center',
      paddingTop: 16,
     // backgroundColor: 'yellow',
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
    avatarProgress:{
     position: 'absolute',
     top:0,
    },
    inputProfile: {
       //backgroundColor: 'pink',
       paddingLeft: 16,
       paddingRight: 16,
    },

});
export default ProfileScreen;

