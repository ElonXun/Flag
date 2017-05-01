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
        TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance';
import AMapLocation from 'react-native-smart-amap-location';
import AMap from 'react-native-smart-amap';


const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

class PostFlag extends Component{
  
   static navigationOptions = {
   // title: 'Chat with Lucy',
    header:{
      style:{
        height:48,
        backgroundColor:'#6495ED',
      },
      tintColor:'white',
      right:(
           <Text style={{marginRight:16,color:'white',}}>
               发布
           </Text>
      ),
    }
  };

   constructor(props) {  
      super(props)
      this.state = {AMapLoctionAddress: '加载中'}
      this._amap = null 
      this._coordinate = {
         latitude: '30.274089',
         longitude: '120.15506900000003',
      }

   } 

   componentDidMount() {
      this.addAppEventListener(
      //      this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack),
         NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult)
       )
      
      AMapLocation.init(null)//使用默认定位配置
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
        <View style={{flex:1}}>
           <View style={styles.postWapper}>
              <Text style={styles.postContent}>
                 到此一游...
              </Text>
              <View style={styles.location}>
                 <Icon name={'map-marker'} size={20} style={{marginRight:6,}} />
                   <TouchableOpacity onPress={this._showAMap}>
                      <Text >{this.state.AMapLoctionAddress}</Text>
                   </TouchableOpacity>
              </View>
           </View>
                   
        </View>
      );
   }

   _onLocationResult = (result) => {
        if(result.error) {
            Alert.alert(`错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`)
        }

        else {
        	let formattedAddress = `${result.POIName}`
          // Alert.alert(Platform.OS)
            this.setState({
            	AMapLoctionAddress: formattedAddress,
            })
            this._coordinate = {
              latitude: result.coordinate.latitude,
              longitude: result.coordinate.longitude,
            }
            // this._amap.setOptions({
            //     zoomLevel: 18.1,
            // })
            // this._amap.setCenterCoordinate(this._coordinate)
            //Alert.alert(`格式化地址 = ${result.POIName}`)
            //Alert.alert(`格式化地址 = ${result.formattedAddress}`)
            //Alert.alert(`纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`)
        }

    }
    
    _showAMap = () => {
        this.props.navigation.navigate('MapScreen',{coordinate:this._coordinate})
    }
    // _onShowMap=()=>{
    //   Alert.alert('aaa');
    // }
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
