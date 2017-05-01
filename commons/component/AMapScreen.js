'use strict';

import {
        View,
        Text, 
        Image, 
        StyleSheet, 
        Dimensions,
        Alert,
        TouchableOpacity,
        Platform,  
        } from 'react-native';
import React, { Component,PropTypes, } from 'react';

import AMap from 'react-native-smart-amap';
 
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

class AMapScreen extends Component {
  static navigationOptions = {
   // title: 'Chat with Lucy',
    header:{
      style:{
        height:48,
        backgroundColor:'#6495ED',
      },
      tintColor:'white',
    }
  };
   

  constructor(props) {  
     super(props)
     this._amap = null
     this._coordinate = null
  } 

  render(){
     return(
       <View style={{flex:1}}>
            <AMap
                 ref={ component => this._amap = component }
                 style={{flex: 1, }}
                 options={{
                     frame: {
                         width: deviceWidth,
                        // height: (deviceHeight - 260)
                     },
                     showsUserLocation: true,
                     userTrackingMode: Platform.OS == 'ios' ? AMap.constants.userTrackingMode.none : null,
                      centerCoordinate: {
                          latitude: this.props.navigation.state.params.coordinate.latitude,
                          longitude: this.props.navigation.state.params.coordinate.longitude,
                      },
                     zoomLevel: 18.1,
                     centerMarker: Platform.OS == 'ios' ? 'icon_location' : 'poi_marker',

                 }}
                 onLayout={this._onLayout}
                 //visible={'false'}
                 />       
       </View>
     )
  }
  

}


export default AMapScreen;


