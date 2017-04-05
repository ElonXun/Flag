'use strict';

import React, { Component } from 'react';
import {
	    View,
        Text, 
        ListView, 
        Image, 
        StyleSheet,
        Alert,
        Dimensions, 
        Platform,
        StatusBar,
        Button,
        NativeAppEventEmitter,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance';
import AMapLocation from 'react-native-smart-amap-location';

 
class PostFlag extends Component{
   
   constructor(props) {  
      super(props);  
      this.state = {AMapLoctionAddress: '加载中'} 
   } 

   componentDidMount() {
      this.addAppEventListener(
      //      this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack),
         NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult)
       )
      
      AMapLocation.init(null)//使用默认定位配置
      //Alert.alert('--')
      //单次定位并返回逆地理编码信息
      AMapLocation.getReGeocode()
       //单次定位并返回地理编码信息
      //AMapLocation.getLocation()
    }

   componentWillUnmount () {
        //停止并销毁定位服务
        AMapLocation.cleanUp()
   }

   render(){
      return(
         <View style={styles.postWapper}>
            <Text style={styles.postContent}>
               到此一游...
            </Text>
            <View style={styles.location}>
               <Icon name={'map-marker'} size={20} style={{marginRight:6,}} />
               <Text >{this.state.AMapLoctionAddress}</Text>
            </View>
         </View>
      );
   }

   _onLocationResult = (result) => {
        if(result.error) {
            Alert.alert(`错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`)
        }

        else {
        	let formattedAddress = `${result.POIName}...`
            this.setState({
            	AMapLoctionAddress: formattedAddress,
            })
            //Alert.alert(`格式化地址 = ${result.POIName}`)
            //Alert.alert(`格式化地址 = ${result.formattedAddress}`)
            //Alert.alert(`纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`)
        }

    }
}


const styles = StyleSheet.create({
   postWapper: {
      height:260,
      backgroundColor:'white',
   },

   postContent: {
      height:216,
      padding:16,
    //  backgroundColor:'green', 
   },

   location: {
       flexDirection:'row',
       paddingTop:8,
       paddingLeft:16,
       paddingRight:16,
   },
});

export default AppEventListenerEnhance(PostFlag);
